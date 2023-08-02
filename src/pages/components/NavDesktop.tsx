import { useButtonToggleReducer } from "@/store/reducers/activateButtonToggleReducers/useButtonToggleReducer"
import { useState } from "react"

interface INavDesktopProps {
    href: string
    name: string
}

export default function NavDesktop(props: INavDesktopProps) {
    const [active, setActive] = useState(false)
    const { setToggleButton } = useButtonToggleReducer()

    // Componente que lida com o link das página
    return(
        <a href={`#${props.href}`} className="flex flex-col justify-center z-10" onMouseEnter={() => setActive(true)} onMouseLeave={() =>setActive(false)} onClick={() => setToggleButton(false)}>
            <span className={`${active ? 'text-blue-400 dark:text-blue-400 ' : 'text-black dark:text-gray-300'} transition duration-300 ease-in-out`}>
                {props.name}
            </span>
            <hr className={`flex border ${active ? 'w-full border-blue-400 dark:text-blue-400' : 'w-0 border-transparent'} transition-all duration-500 ease-in-out`}/>
        </a>   
    
    )
}