import { useState } from "react"

interface INavDesktopProps {
    href: string
    name: string
}

export default function NavDesktop(props: INavDesktopProps) {
    const [active, setActive] = useState(false)

    const enter = () => {
        setActive(true)
    }

    const leave = () => {
        setActive(false)
    }

    return(
        <a href={`#${props.href}`} className="my-3" onMouseEnter={enter} onMouseLeave={leave}>
            <span className={`
                ${active ? 'text-black dark:text-white ' : 'text-gray-600 dark:text-gray-300'}
                transition duration-300 ease-in-out
            `}>{props.name}</span>
            <hr className={`
                flex border ${active ? 'w-full border-black dark:border-white' 
                : 'w-0 border-transparent'} 
                transition-all duration-500 ease-in-out
            `}/>
        </a>   
    
    )
}