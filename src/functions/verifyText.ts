import { toastComponent } from "./toastReact"

// Função responsável por verificar se o nome inserido é valido
export const verifyText = (nameInput: string ): boolean => {
  // Verifica o tamanho minimo para o texto ou comentário
  if ( (nameInput.length >= 3 && nameInput.length <= 200 )) {
    return true
  } else {
    toastComponent({type: 'error'}, 'Erro no campo Texto. Limite permitido - Min 3, Max 200 Caract!')
  }
  return false
}