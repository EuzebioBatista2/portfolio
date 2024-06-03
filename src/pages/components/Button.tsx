interface IButtonProps {
    name:  string
    color: 'blue' | 'gray'
    icon?: any
    link?: string
    type?: 'submit' | 'button'
    onClick?: () => void
}
export default function Button(props: IButtonProps) {
    // Componente responsável por gerar o botão do tipo submit ou do tipo botão
    return (
        <button type={props.type === 'submit' ? 'submit' : 'button'} className={`w-full flex justify-center items-center bg-${props.color}-400 hover:bg-${props.color}-600 p-2 rounded-md transition duration-500 ease-in-out max-w-[600px]`} onClick={props.onClick}>
            <i className={`${props.icon ? 'w-6 mr-1' : 'w-0' } fill-white text-white dark:fill-white dark:text-white transition duration-500 ease-in-out `}>{props.icon}</i>
            <h2 className="text-lg text-white dark:text-white font-semibold transition duration-500 ease-in-out ">{props.name}</h2>
        </button>
    )
}