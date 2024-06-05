interface IButtonMini {
  onClick: () => void
  icon: any
  text: string
  active: string
}

export default function ButtonMini(props: IButtonMini) {

  // Botão que serve de categoria para a lista de skills
  return (
    <button onClick={() => {props.onClick}} onFocus={props.onClick} className={`flex flex-col items-center justify-center h-14 w-20 md:w-24 p-1 ${props.active === props.text ? 'bg-blue-400' : 'bg-gray-400 dark:bg-gray-900'} hover:bg-blue-500 dark:hover:bg-blue-500 transition duration-300 ease-in-out z-10 border border-gray-500 dark:border-black rounded-md`}>
      <i className="flex items-center justify-center h-full w-full text-black dark:text-white">{props.icon}</i>
      <span className="text-xs md:text-base text-black dark:text-white">{props.text}</span>
    </button>
  )
}