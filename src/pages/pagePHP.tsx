import { useDarkThemeReducer } from "@/store/reducers/darkThemeReducers/useDarkThemeReducer"
import Head from "next/head"
import LayoutNavigation from "./components/LayoutNavigation"
import Link from "next/link"
import { IconBack, IconGitHub } from "../../public/icons"
import ButtonTheme from "./components/ButtonTheme"
import Button from "./components/Button"
import Image from "next/image"
import { useEffect } from "react"
import VideoPlay from "./components/youtube"

export default function PagePHP() {
  const { darkTheme, setTheme } = useDarkThemeReducer()

  useEffect(() => {
    // Função que verifica se o cookie é dark ou não
    const theme = localStorage.getItem('themeMyPortfolio')
    if (theme === 'dark') {
      setTheme(true)
    } else {
      setTheme(false)
    }
  }, [])

  // Página que contém as informações sobre o projeto CRUD
  return (
    <main className={`${darkTheme ? 'dark' : ''} flex flex-col overflow-hidden h-screen min-h-[650px] w-full`}>
      <Head>
        <title>Portfolio EuzebioDev</title>
        <link rel="icon" href="/favicon.webp" />
      </Head>
      {/* Conteúdo da página de navegação */}
      <LayoutNavigation>
        <div className="flex w-1/5 items-center justify-start pl-4">
          <Link href='/'><i className="flex h-8 w-8 text-black dark:text-gray-200">{IconBack}</i></Link>
        </div>
        <div className="flex w-3/5 items-center justify-center">
          <h1 className="text-1xl font-semibold text-black dark:text-gray-200">Pagina Web PHP</h1>
        </div>
        <div className="flex w-1/5 items-center justify-end pr-4">
          <ButtonTheme />
        </div>
      </LayoutNavigation>
      <div className="flex flex-col items-center justify-center  md:flex-row gap-2 bg-gray-200 dark:bg-gray-800 transition duration-500 ease-in-out w-full h-full px-2 relative">
        <Image
          src={'/points.webp'}
          height={130}
          width={130}
          alt="Vários pontinhos formando um circulo"
          priority={true}
          className={`absolute z-0 w-2/3 md:w-1/2 h-auto p-2 -top-[20%] md:-top-1/4 -left-1/4 opacity-20`}
        />
        <Image
          src={'/points.webp'}
          height={130}
          width={130}
          alt="Vários pontinhos formando um circulo"
          priority={true}
          className={`absolute z-0 w-2/3 md:w-1/2 h-auto p-2 -bottom-[20%] md:-bottom-1/4 -right-1/4 opacity-20`}
        />
        <Image
          src={'/favicon.webp'}
          height={130}
          width={130}
          alt="Logo com um desenho de um notebook no centro"
          priority={true}
          className={`absolute z-0 md:w-1/2 h-auto p-2 opacity-20`}
        />
        {/* Vídeo responsável por apresentar o projeto */}
        <VideoPlay className="h-full md:h-3/4 md:w-1/2 w-full mt-14 z-10" link="Cj0no1s2538" />
        <hr className="border-none h-0.5 w-full md:h-1/2 md:w-0.5 bg-gradient-to-r md:bg-gradient-to-t from-transparent via-black dark:via-white to-transparent my-6 md:my-0 md:mx-6 z-10" />
        {/* Informações sobre o projeto */}
        <div className="flex flex-col items-center justify-start md:justify-center w-full h-1/2 md:h-full md:w-1/2 gap-4 pb-2 z-10">
          <p className="text-black dark:text-white">
            Projeto criado para representar uma página de login, com suas funções: esqueci senha, criar conta e página inicial. Utilizei
            o <strong>PHP</strong> e o <strong>MySQL</strong> como ferramentas principais para criar uma página com acesso ao banco de dados e
            armazenas as informações de acesso. Para mais informações, acesse meu GitHub
          </p>
          <Button name="GitHub" color="gray" icon={IconGitHub(false)} link="https://github.com/EuzebioBatista2/PaginaPHP" />
        </div>
      </div>
    </main>
  )
}