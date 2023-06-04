import useAppData from "@/data/hooks/useAppData"
import { IconeMoon, IconSun } from "../../../public/icons"

export default function ToggleTheme() {
    const { theme, switchTheme } = useAppData()
    return theme === 'dark' ? (
        <div onClick={switchTheme} className={`
            flex items-center h-7 w-12 bg-slate-500 rounded-full px-0.5 cursor-pointer
        `}>
            <div className={`
                 h-6 w-6 bg-gray-700 rounded-full text-white p-0.5
                 transition-transform duration-500 transform -translate-x-0
            `}>
                {IconeMoon}
            </div>
            
        </div>
    ) : (
        <div onClick={switchTheme} className={`
            flex items-center h-7 w-12 bg-yellow-600 rounded-full px-0.5 cursor-pointer
        `}>
            <div className={`
                h-6 w-6 bg-white rounded-full text-yellow-700 p-0.5
                transition-transform duration-500 transform translate-x-5
            `}>
                {IconSun}
            </div>

        </div>
    )
}