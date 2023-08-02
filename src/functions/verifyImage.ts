import {toastComponent} from './toastReact'

// Função responsável por verificar se a iamgem inserida é valida
export const verifyImage = (inputImage: any): boolean => {
  // Caso a imagem esteja setada
  if(inputImage && inputImage.name !== '') {
    // Verifica se o tipo dela é imagem
    if(inputImage.type.includes('image')) {
      // Verifica o tamanho permitido
      if(inputImage.size < (1024 * 1024 * 2)) {
        return true
      // Verifica se o tamanho passou do permitido
      } else {
        toastComponent({type: 'error'}, 'Limite de imagem permitida até 2MB!')
        return false
      }
    }
    // Caso não seja do tipo imagem
    else {
      toastComponent({type: 'error'}, 'Arquivo não é do tipo imagem!')
      return false
    }
    // Caso a imagem não esteja setada
  } else {
    return true
  }
}