import { IconUserB } from "../../../public/icons"

interface ICardCommentProps {
    name: string
    comment: string
    side: string
}

export default function CardComment(props: ICardCommentProps) {
    return (
        <div className={`
        flex flex-col w-3/4 p-2 border border-gray-800 dark:border-black rounded-md my-4
        bg-gray-100 dark:bg-gray-700
        ${props.side === 'start' ? 'self-start animate-bounce-slow' : 'self-end animate-bounce-verySlow' }
        `}>
            <div className="flex items-center justify-center mb-2">
                <div className={`
                    flex justify-center border h-7 w-7 rounded-full overflow-hidden mr-1
                    ${props.side === 'start' ? 'border-blue-600' : 'border-orange-400' }
                `}>
                    <i className={`
                        flex h-8 w-8  
                        ${props.side === 'start' ? 'fill-blue-500' : 'fill-orange-400' }
                    `}>{IconUserB}</i>
                </div>
                <h1 className="text-xl font-bold text-black dark:text-white">{props.name}</h1>
            </div>
            <hr className="border-gray-800 dark:border-black" />
            <h2 className="flex items-center mt-2 text-gray-800 dark:text-gray-300">
                <strong className="text-xs mr-1">Comentario:&nbsp;</strong>
                <span className="border-l border-gray-800 dark:border-black pl-1">{props.comment}</span>
            </h2>
        </div>
    )
}