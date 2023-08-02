interface IButtonProps {
  name: string
  color: 'blue' | 'gray' | 'orange'
  icon: any
}
export default function ButtonCircle(props: IButtonProps) {
  // Botão com animação para os links do Github ou Linkedin
  return (
    <div className={`flex justify-end items-center w-10 h-10 bg-${props.color}-700 rounded-full hover:bg-${props.color}-600 hover:w-32 transtion duration-500 ease-in-out overflow-hidden relative`}>
        <h2 className="absolute flex items-center justify-center text-lg text-white mr-12 h-full leading-none">{props.name}</h2>
        <i className="absolute w-8 h-8 p-1 mr-1 fill-white text-white">{props.icon}</i>
    </div>
  )
}