interface ICardsItensProps {
    description: string
    icon: any
    firstWord: string
}
export default function carsItens(props: ICardsItensProps) {
    return (
        <div className={`
            flex flex-col flex-shrink-0 items-center justify-center w-full h-full px-14 text-xs
            sm:px-32 tall:text-base md:px-64 md:text-lg lg:px-96
        `}>
            <i className={`
                flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 opacity-50 fill-black dark:fill-white

            `}>
                {props.icon}
            </i>
            <p className="mt-6 text-black dark:text-gray-200">
                <strong>{props.firstWord}</strong>{props.description}
            </p>
        </div>
    )
}