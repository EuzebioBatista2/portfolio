import { IconDown } from "../../../public/icons";

interface IPageDownProps {
    className?: string
    link: string
}

export default function ButtonDown(props: IPageDownProps) {
    // Link que leva para próxima página
    return (
        <div className={`flex absolute bottom-0 py-4 h-auto w-full items-center justify-center ${props.className}`}>
            <a href={`#${props.link}`} className="flex justify-center items-center">
                <i className='w-16 h-16 text-black dark:text-white animate-bounce'>{IconDown}</i>
            </a>
        </div>
    )
}