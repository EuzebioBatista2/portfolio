import { useButtonToggleReducer } from "@/store/reducers/activateButtonToggleReducers/useButtonToggleReducer"
import Image from "next/image"
import NavDesktop from "./NavDesktop"

export default function ButtonToggle() {
  const { activateToggleButton, setToggleButton } = useButtonToggleReducer()
  return (
    // Botão do menu celular, onde exibe as opções que leva para os links das páginas
    <button className={`flex flex-col justify-center space-y-0.5 h-6 w-8 p-1 cursor-pointer bg-gray-200 rounded-sm dark:bg-gray-500 z-30`} onClick={() => setToggleButton(!activateToggleButton)} onFocus={() => setToggleButton(false)} onBlur={() => setToggleButton(false)}>
      <span className={`w-full border-2 z-20 ${activateToggleButton ? 'rotate-45 translate-y-1.5 border-red-600 bg-red-600 dark:border-red-400 dark:bg-red-400' : 'border-yellow-600 dark:border-gray-700 '} transtion duration-500 ease-in-out `}></span>
      <span className={`w-full border-2 z-20 border-yellow-600 dark:border-gray-700 ${activateToggleButton ? 'scale-0' : ''} transtion duration-500 ease-in-out`}></span>
      <span className={`w-full border-2 z-20 ${activateToggleButton ? '-rotate-45 -translate-y-1.5 border-red-600 bg-red-600 dark:border-red-400 dark:bg-red-400' : 'border-yellow-600 dark:border-gray-700 '} transtion duration-500 ease-in-out`}></span>
      <div
        className={`flex items-center flex-col gap-4 h-screen min-h-[550px] absolute text-lg text-black dark:text-white font-semibold pt-12 bg-gray-200 dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-80 top-12 overflow-hidden left-0 z-10 ${activateToggleButton ? 'w-4/5' : 'w-0'} transtion duration-500 ease-in-out`}
      >
        <NavDesktop href="home" name="Página Inicial" />
        <NavDesktop href="aboutMe" name="Sobre mim" />
        <NavDesktop href="curriculo" name="Curriculo" />
        <NavDesktop href="skills" name="Habilidades" />
        <NavDesktop href="projects" name="Projetos" />
        <NavDesktop href="comments" name="Comentários" />
        <Image
          src={'/favicon.png'}
          height={50}
          width={50}
          alt="Logo com um desenho de um notebook no centro"
          priority={true}
          className="absolute w-[70%] h-auto top-1/4 p-1 z-0 opacity-10"
        />
      </div>
    </button>
  )
}