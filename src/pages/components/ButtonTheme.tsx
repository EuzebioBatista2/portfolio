import { IconeMoon, IconSun } from "../../../public/icons"
import { useDarkThemeReducer } from "@/store/reducers/darkThemeReducers/useDarkThemeReducer"


export default function ButtonTheme() {
  const { darkTheme, setTheme } = useDarkThemeReducer()

  return darkTheme ? (
    // Quando o modo estiver no dark, será gerado esse componente
    <div onClick={() => setTheme(false)} className={`flex items-center h-6 w-10 bg-slate-500 rounded-full px-0.5 cursor-pointer`}>
      <div className={`h-5 w-5 bg-gray-700 rounded-full text-white p-0.5 transition-transform duration-500 transform -translate-x-0`}>
        {IconeMoon}
      </div>

    </div>
  ) : (
    // Quando o modo estiver no white, será gerado esse componente
    <div onClick={() => setTheme(true)} className={`flex items-center h-6 w-10 bg-yellow-600 rounded-full px-0.5 cursor-pointer`}>
      <div className={`h-5 w-5 bg-white rounded-full text-yellow-700 p-0.5 transition-transform duration-500 transform translate-x-4`}>
        {IconSun}
      </div>
    </div>
  )
}