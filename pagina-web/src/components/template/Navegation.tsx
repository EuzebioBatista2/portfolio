import ToggleTheme from "./ToggleTheme";
import ToggleButton from "./ToggleButton";
import ToggleMenu from "./ToggleMenu";
import { useEffect, useState } from "react";

export default function Navegation() {
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
            <div className="flex justify-start items-center w-1/2 h-full px-4">
                <ToggleButton />
            </div>
            <div className="flex justify-end items-center w-1/2 h-full px-4">
                <ToggleTheme />
            </div>
            <ToggleMenu />
        </nav>
    )
}