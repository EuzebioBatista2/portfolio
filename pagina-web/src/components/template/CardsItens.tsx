interface ICardsItensProps {
    description: string
    icon: any
}
export default function carsItens(props: ICardsItensProps) {
    return (
        <div className="flex flex-col flex-shrink-0 items-center justify-center w-screen h-full px-8">
            <i className="flex items-center justify-center w-36 h-36 opacity-50 fill-black dark:fill-white">
                {props.icon}
            </i>
            <p className="mt-6 text-black dark:text-gray-200">{props.description}</p>
        </div>
    )
}