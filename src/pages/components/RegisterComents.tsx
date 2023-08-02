import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";
import { verifyImage } from "@/functions/verifyImage";
import { verifyName } from "@/functions/verifyName";
import { verifyText } from "@/functions/verifyText";
import { submitComment } from "@/functions/submitComment";
import { toastComponent } from "@/functions/toastReact";

export default function RegisterComents() {
  const [name, setName] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [image, setImage] = useState<any>('')
  const [previewImage, setPreviewImage] = useState<any>('');

  useEffect(() => {
    // Função responsável por carregar a imagem durante o comentário
    if (image && image[0]) {
      const reader = new FileReader();
      let IsValid: boolean = image[0] ? true : false
      if (IsValid) {
        reader.readAsDataURL(image[0])
        reader.onload = () => {
          setPreviewImage(reader.result)
        };
      } else {
        setPreviewImage('/userUnknown.jpg')
        setImage('')
      }
    }
  }, [image])

  // Componente responsável por gerar o formulário onde envia os dados para o firebase
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4">
      <div className="flex items-center justify-center h-32 w-32 rounded-full overflow-hidden border border-gray-300 bg-white">
        <Image
          src={previewImage ? previewImage : '/userUnknown.jpg'}
          alt="FotoDePerfil"
          width={160}
          height={140}
          priority={true}
          className="h-auto w-auto z-10"
        />
      </div>
      <form 
        action="" 
        method="post" 
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault()
          // Verifica se os dados são validos
          const validImage = verifyImage(image[0])
          const validName = verifyName(name)
          const valieText = verifyText(text)
          if(validImage && validName && valieText) {
            // Função que vai realizar o envio
            submitComment(event, name, text, image[0]).then(() => {
              toastComponent({type: 'success'}, 'Obrigado por deixar sua opinão!')
              setName('')
              setText('')
              setImage('')
            })
          }
        }}
        >
        <label htmlFor="name" className="w-full text-left text-lg text-black dark:text-white z-10 relative">Nome</label>
        <input type="text" id="name" className="w-full border border-gray-400 rounded-md py-2 px-1 text-black dark:text-white bg-white dark:bg-gray-700 relative z-10 mb-2" onChange={(event) => setName(event.target.value)} value={name} placeholder="Insira seu nome" />
        <label htmlFor="text" className="w-full text-left text-lg text-black dark:text-white relative">Comentário</label>
        <textarea rows={4} color="50" id="text" className="w-full border border-gray-400 rounded-md py-2 px-1 text-black dark:text-white bg-white dark:bg-gray-700 relative z-10" placeholder="Insira seu comentário" onChange={(event) => setText(event.target.value)} value={text} />
        <div className="flex items-center h-14 relative mb-2">
          <label htmlFor="image" className="flex items-center justify-center w-full mt-4 p-2 bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold text-black dark:text-white rounded-md transition duration-500 ease-in-out z-10 cursor-pointer relative">
            Selecione uma imagem
          </label>
          <input
            type="file"
            name="image" id="image"
            accept="image/*"
            onChange={(event) => {
              const image = event.target.files ? event.target.files[0] : ''
              const isValid = verifyImage(image)
              if (isValid) {
                setImage(event.target.files)
              }
            }}
            className={`hidden`}
          />
        </div>
        <Button color="blue" name="Enviar" type="submit" />
      </form>
      <p className="py-2 text-black dark:text-white">Deixe um comentário sobre o que achou do meu projeto ou até mesmo um feedback sobre uma possível melhoria, ficarei grato!</p>
      <p className="text-black dark:text-white"><strong>OBS</strong>: não é nécessario inserir uma imagem para enviar um comentário.</p>
    </div>
  )
}