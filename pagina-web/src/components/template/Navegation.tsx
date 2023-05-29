import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import ToggleButton from "./ToggleButton";

export default function Navegation() {
    return (
        <nav className={` 
            flex items-center h-14 w-screen bg-gray-300 dark:bg-gray-700
        `}>
            <div className="flex justify-start items-center w-1/2 h-full px-4">
                <ToggleButton />
            </div>
            <div className="flex justify-end items-center w-1/2 h-full px-4">
                <ToggleTheme />
            </div>
        </nav>
    )
}