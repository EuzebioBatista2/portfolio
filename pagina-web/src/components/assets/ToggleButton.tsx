import useToggleData from "@/data/hooks/UseToggleData"

export default function ToggleButton() {
    const {isActivate, isRotate} = useToggleData()

    return (
        <div className={`
            flex flex-col space-y-0.5 h-6 w-8 p-1 cursor-pointer bg-gray-200 rounded-sm dark:bg-gray-500
        `} onClick={isRotate}>
            <span className={`
                border-2 
                ${isActivate ? 
                    'rotate-45 translate-y-1.5 border-red-600 bg-red-600 dark:border-red-400 dark:bg-red-400' : 
                    'border-yellow-600 dark:border-gray-700 '}
                transtion duration-500 ease-in-out 
            `}></span>
            <span className={`
                border-2 border-yellow-600 dark:border-gray-700
                ${isActivate ? 'scale-0' : ''}
                transtion duration-500 ease-in-out
            `}></span>
            <span className={`
                border-2
                ${isActivate ? 
                    '-rotate-45 -translate-y-1.5 border-red-600 bg-red-600 dark:border-red-400 dark:bg-red-400' : 
                    'border-yellow-600 dark:border-gray-700 '}
                transtion duration-500 ease-in-out
            `}></span>
        </div>
    )
}