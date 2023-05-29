import { IconDown } from "../../../public/icons";

export default function PageDown() {
    return (
        <div className='flex grow items-center justify-self-end'>
            <i className='w-16 h-16 text-black dark:text-white animate-bounce'>{IconDown}</i>
        </div>
    )
}