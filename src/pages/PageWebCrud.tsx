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

export default function PageWebCrud() {
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
                    <h1 className="text-2xl text-black dark:text-gray-200 small:text-base tall:text-lg">Pagina CRUD</h1>
                </div>
                <div className="flex w-1/5 items-center justify-end pr-4">
                    <ToggleTheme />
                </div>
            </Navegation>
            <Layout theme="dark" hOption={displayH}>
                <section className={`flex flex-col lg:flex-row w-full h-[768px] items-center justify-center gap-3 pt-14 px-4 small:px-1 md:px-8 extraBig:px-8`}>
                    <div className={`flex items-center justify-center lg:h-3/5 h-1/2 lg:w-3/5 w-full lg:border-black lg:border-r-2`}>
                        <VideoPlay className={`flex justify-center items-center h-full w-11/12 p-2 small:w-full small:h-5/6 tall:w-full tall:h-5/6 big:w-full big:h-5/6 extraBig:h-11/12 md:w-9/12 md:h-full lg:w-11/12`} link="CwI7wXdqGRw"/>
                    </div>
                    <div className="flex flex-col items-center justify-center small:justify-start px-2 h-1/2 lg:w-2/5 w-full gap-8">
                        <h2 className={`text-black dark:text-gray-200 small:text-xs tall:text-sm lg:text-lg`}>
                            Olá, me chamo <strong>Euzebio</strong>, estudo ADS(Analise e desenvolvimento de sistema), esse projeto consiste em representar uma página <strong>CRUD</strong>. Onde realiza as 4 requisições principais: <strong>GET</strong>, <strong>POST</strong>, <strong>PUT</strong> e <strong>DELETE</strong>. Nesse projeto foi utilizado: <strong>HTML</strong>, <strong>CSS</strong>, <strong>JS</strong>, <strong>BOOTSTRAP</strong> e <strong>JQUERY</strong>. Para mais informações, acesse meu <strong>GitHub</strong>.
                        </h2>
                        <a href='https://github.com/EuzebioBatista2/ProjetoPaginaWeb' className="flex w-full justify-center items-center">
                            <Button name='GitHub' color='gray' icon={IconGitHub} />
                        </a>
                    </div>
                </section>
            </Layout>
        </div>
    )
}