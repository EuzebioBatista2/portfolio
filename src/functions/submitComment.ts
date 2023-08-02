import { dbFirebase, storageFirebase } from "../../backend/config"

// Função responsavél pelo registro de e-mail padrão do firebase
export function submitComment(event: React.FormEvent<HTMLFormElement>, name: string, text: string, image: any): Promise<void> {
  return new Promise(async (resolve, reject) => {
    event.preventDefault()

    //  Dados vindo do formulário
    const inputName = name
    const inputText = text
    const inputImage = image

    dbFirebase.add(
      {
        name: inputName,
        comment: inputText,
        file: ''
      })
      .then((user) => {
        // Caso haja uma imagem setada
        if (inputImage != undefined) {
          let imageUrl: any
          const urlImage = storageFirebase.ref(`myPortfolioFiles/${user.id}/${inputName}`);
          // Verificação do upload quando concluída
          const upload = urlImage.put(inputImage);
          upload.on('state_changed', () => { }, () => { }, () => {
            urlImage.getDownloadURL().then((downloadURL) => {
              imageUrl = downloadURL
              dbFirebase.doc(user.id).update({
                name: inputName,
                comment: inputText,
                file: imageUrl
              }).then(() => {
                resolve()
              })
            })
          })
        }
        // Caso não haja nenhuma imagem, o cadastro será feito sem ela.
        else {
          resolve ()
        }
      })
      .catch(() => {
        reject()
      });
  }
  )
}