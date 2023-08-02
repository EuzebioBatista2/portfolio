import { useEffect, useState } from "react"
import { IconUp } from "../../../public/icons"
import Link from "next/link"

interface INavegationProps {
  children: any
}

export default function LayoutNavigation(props: INavegationProps) {
  const [opacity, setOpacity] = useState(100)
  const [menuActive, setMenuActive] = useState(true)
  const [upButton, setUpButton] = useState<boolean>(false)

  // Verifica onde a página se encontra no momento, através do eixo Y
  const eventScroll = () => {
    // Desativa um efeito de opacidade quando a página estiver no top
    if (window.scrollY === 0) {
      setOpacity(100)
      setMenuActive(true)
    }
    // Ativa um efeito de opacidade quando a página sair do top
    else if (window.scrollY > 0) {
      setOpacity(50)
      setMenuActive(false)
    } 
    // Ativa o botão para retornar ao inicio da página após atravessar o valor 800 no eixo Y
    if (window.scrollY >= 800) {
      setUpButton(true)
    }
    // Desativa o botão para retornar ao inicio da página quando a página estiver abaixo do valor 800 no eixo Y
    else if (window.scrollY < 800) {
      setUpButton(false)
    }
  }

  useEffect(() => {
    // Evento que lida com o scroll da página
    window.addEventListener('scroll', eventScroll)
  }, [menuActive])

  return (
    // Componente com o botão que leva para o topo da página, além de servir de container para a barra de navegação da página
    <nav className={`flex items-center h-12 w-full bg-gray-300 dark:bg-gray-700 fixed z-50 bg-opacity-${opacity} dark:bg-opacity-${opacity} transition duration-500 ease-in-out`}>
      {props.children}
      <div className={`flex items-end justify-center h-screen min-h-[550px] absolute right-0 top-0 py-20 w-0 z-0`}>
        <Link href={'#home'} className={`${upButton ? 'flex w-10 h-10 border border-white' : 'hideen w-0 h-0'} items-center justify-center absolute bg-blue-400 rounded-md transition-all duration-500 ease-in-out -left-16 z-20`}>
          <i className="flex h-full w-full text-white">{IconUp}</i>
        </Link>
      </div>
    </nav>
  )
}