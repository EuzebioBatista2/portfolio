interface IButtonProps {
    name:  string
    color: 'blue' | 'gray'
    icon?: any
    link?: string
}
export default function Button(props: IButtonProps) {
    return (
        <button className={`w-full flex justify-center items-center bg-${props.color}-700 hover:bg-${props.color}-900 p-2 rounded-md transition duration-500 ease-in-out`}>
            <i className="w-6 mr-1 fill-white text-white">{props.icon}</i>
            <h2 className="text-lg text-white">{props.name}</h2>
        </button>
    )
}