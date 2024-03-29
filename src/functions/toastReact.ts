import { toast } from "react-toastify"

interface IToastProps {
  type: 'error' | 'success' | 'warning';
}
export const toastComponent = (type: IToastProps, message: string) => {
  // Componente responsável por gerar os avisos da página
  return (
    toast[type.type](message, {
      position: toast.POSITION.TOP_CENTER,
      className: 'w-4/5',
      pauseOnFocusLoss: false,
    })
  )
}



  