import { useEffect, useState } from "react";
interface INavegationProps {
    children: any
}

export default function Navegation(props: INavegationProps) {
    const [opacity, setOpacity] = useState(100)
    const [menuActive, setMenuActive] = useState(true)

    const eventScroll = () => {
        if(window.scrollY > 0) {
            setOpacity(50)
            setMenuActive(false)
        } else {
            setOpacity(100)
            setMenuActive(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', eventScroll)
    }, [menuActive])
        
    return (
        <nav className={` 
            flex items-center h-14 w-full bg-gray-300 dark:bg-gray-700 fixed z-50 
            bg-opacity-${opacity} dark:bg-opacity-${opacity}
            transition duration-500 ease-in-out
        `}>
            {props.children}
        </nav>
    )
}