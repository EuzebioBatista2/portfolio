import { useState } from "react"

export default function ToggleButton() {
    const [isActive, setIsActive] = useState(false)

    const IsRotate = () => {
        setIsActive(!isActive)
    }
    return (
        <div className={`
            flex flex-col space-y-0.5 h-6 w-8 p-1 cursor-pointer bg-gray-100 rounded-sm dark:bg-gray-500
        `} onClick={IsRotate}>
            <span className={`
                border-2 border-yellow-600 dark:border-gray-700 
                ${isActive ? 'rotate-45 translate-y-1.5 border-red-600 dark:border-red-400' : ''}
                transtion duration-500 ease-in-out
            `}></span>
            <span className={`
                border-2 border-yellow-600 dark:border-gray-700
                ${isActive ? 'scale-0' : ''}
                transtion duration-500 ease-in-out
            `}></span>
            <span className={`
                border-2 border-yellow-600 dark:border-gray-700 
                ${isActive ? '-rotate-45 -translate-y-1.5 border-red-600 dark:border-red-400' : ''}
                transtion duration-500 ease-in-out
            `}></span>
        </div>
    )
}