import Layout from "@/components/assets/Loyout";
import Navegation from "@/components/template/Navegation";
import ToggleTheme from "@/components/assets/ToggleTheme";
import { IconBack, IconGitHub } from "../../public/icons";
import VideoPlay from "./api/youtube";
import Head from "next/head";
import Button from "@/components/assets/Button";
import { useEffect, useState } from "react";
import UseAppData from "../data/hooks/UseAppData";
import Link from "next/link";

export default function PageWebPHP() {
    const { theme } = UseAppData()
    const [displayH, setDisplayH] = useState<number>();

    useEffect(() => {
        function handleResize() {
            setDisplayH(document.documentElement.clientHeight)
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`${theme}`}>
            <Head>
                <title>Portfolio Euzebio</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navegation>
                <div className="flex w-1/5 items-center justify-start pl-4">
                    <Link href='/'><i className="flex h-8 w-8 text-black dark:text-gray-200">{IconBack}</i></Link>
                </div>
                <div className="flex w-3/5 items-center justify-center">
                    <h1 className="text-2xl text-black dark:text-gray-200 small:text-base tall:text-lg">Pagina Web PHP</h1>
                </div>
                <div className="flex w-1/5 items-center justify-end pr-4">
                    <ToggleTheme />
                </div>
            </Navegation>
            <Layout theme="dark" hOption={displayH}>
                <section className={`flex flex-col lg:flex-row w-full h-[768px] items-center justify-center gap-3 pt-14 px-4 small:px-1 md:px-8 extraBig:px-8`}>
                    <div className={`flex items-center justify-center lg:h-3/5 h-1/2 lg:w-3/5 w-full lg:border-black lg:border-r-2`}>
                        <VideoPlay className={`flex justify-center items-center h-full w-11/12 p-2 small:w-full small:h-5/6 tall:w-full tall:h-5/6 big:w-full big:h-5/6 extraBig:h-11/12 md:w-9/12 md:h-full lg:w-11/12`} link="Cj0no1s2538"/>
                    </div>
                    <div className="flex flex-col items-center justify-center small:justify-start px-2 h-1/2 lg:w-2/5 w-full gap-8">
                        <h2 className={`text-black dark:text-gray-200 small:text-xs tall:text-sm lg:text-lg`}>
                            Olá, me chamo <strong>Euzebio</strong>, estudo ADS(Analise e desenvolvimento de sistema), aqui tá um projeto no qual eu fiz usando as linguagens: <strong>HTML</strong>, <strong>CSS</strong>, <strong>JS</strong>, <strong>PHP</strong> e <strong>MYSQL(WAMP)</strong>. O projeto tem como intuito de representar uma página de login completa. Desde do próprio login, como suas funções de cadastro e esqueci senha. OBS: Para realizar a página de esqueci minha senha,  utilizei uma ferramenta chamada: <strong>Composer</strong>. Que tem com a função de utilizar um e-mail configurado para enviar um conteúdo para outros e-mails. Para mais informações, acesse meu <strong>GitHub</strong>.
                        </h2>
                        <a href='https://github.com/EuzebioBatista2/PaginaPHP' className="flex w-full justify-center items-center">
                            <Button name='GitHub' color='gray' icon={IconGitHub} />
                        </a>
                    </div>
                </section>
            </Layout>
        </div>
    )
}