interface IButtonMini {
  onClick: () => void
  icon: any
  color: 'blue' | 'yellow' | 'red'
  text: string
}

export default function ButtonMini(props: IButtonMini) {
  // Botão que serve de categoria para a lista de skills
  return (
    <button onClick={props.onClick} onFocus={props.onClick} className={`flex flex-col items-center justify-center h-14 w-20 md:w-24 p-1 bg-${props.color}-400 border border-${props.color}-700 hover:bg-${props.color}-600 transition duration-300 ease-in-out z-10`}>
      <i className="flex items-center justify-center h-full w-full">{props.icon}</i>
      <span className="text-xs md:text-base">{props.text}</span>
    </button>
  )
}