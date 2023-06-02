interface ICardsItensProps {
    description: string
    icon: any
    firstWord: string
}
export default function carsItens(props: ICardsItensProps) {
    return (
        <div className={`
            flex flex-col flex-shrink-0 items-center justify-center w-full h-full px-14 text-xs
            sm:px-32 tall:text-base md:px-64 md:text-lg lg:px-80
        `}>
            <i className={`
                flex items-center justify-center w-24 h-24 sm:w-36 sm:h-36 opacity-50 fill-black dark:fill-white
                small:w-20 small:h-20 tall:w-28 tall:h-28 md:h-24 md:w-24
            `}>
                {props.icon}
            </i>
            <p className={`
                mt-6 text-black dark:text-gray-200 small:text-xs tall:text-sm big:text-base md:text-base
                sm:text-base text-sm
            `}>
                <strong>{props.firstWord}</strong>{props.description}
            </p>
        </div>
    )
}