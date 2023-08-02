import { toastComponent } from "./toastReact"

// Função responsável por verificar se o nome inserido é valido
export const verifyName = (nameInput: string ): boolean => {
  // Verifica o tamanho minimo para um nome
  if ( (nameInput.length >= 3 && nameInput.length <= 25 )) {
    return true
  } else {
    toastComponent({type: 'error'}, 'Erro no campo Name. Limite permitido - Min 3, Max 25 Caract!')
  }
  return false
}