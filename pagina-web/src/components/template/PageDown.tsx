import { IconDown } from "../../../public/icons";

interface IPageDownProps {
    className?: string
}

export default function PageDown(props: IPageDownProps) {
    return (
        <div className={`flex grow items-center justify-center w-screen ${props.className}`}>
            <i className='w-16 h-16 text-black dark:text-white animate-bounce'>{IconDown}</i>
        </div>
    )
}