interface IButtonProps {
    name:  string
    color: 'blue' | 'gray'
    icon?: any
}
export default function Button(props: IButtonProps) {
    return (
        <button className={`w-80 flex justify-center items-center bg-${props.color}-700 p-2 rounded-md mt-2`}>
            <i className="w-6 mr-1 fill-white text-white">{props.icon}</i>
            <h2 className="text-lg text-white">{props.name}</h2>
        </button>
    )
}