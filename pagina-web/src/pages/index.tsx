import useAppData from '../data/hooks/useAppData'
import Button from '@/components/template/Button'
import Navegation from '@/components/template/Navegation'
import Profile from '@/components/template/Profile'
import { Poppins } from 'next/font/google'
import { IconGitHub, IconLinkedin } from '../../public/icons'
import Head from 'next/head'
import AboutMe from '../components/template/AboutMe'
import PageDown from '@/components/template/PageDown'
import Cards from '@/components/template/Cards'
import Layout from '@/components/template/Loyout'
import Projects from '@/components/template/Projects'
import Comments from '@/components/template/Comments'
import Footer from '@/components/template/Footer'
import ToggleButton from '@/components/template/ToggleButton'
import NavDesktop from '@/components/template/NavDesktop'
import ToggleTheme from '@/components/template/ToggleTheme'
import ToggleMenu from '@/components/template/ToggleMenu'

const poppins = Poppins({ 
    weight: ['100', '200', '300', '600', '700', '800'],
    subsets: ['latin'] 
})

export const metadata = {
    title: 'Portfolio Euzebio Batista',
    description: 'Pagina web criada para compartilhar meus projetos e criações.'
}

export default function Home() {
    const { theme } = useAppData()
    return (
        <div className={`${theme} ${poppins.className}`}>
            <Head>
                <title>Portfolio Euzebio</title>
            </Head>
            <header>
                <Navegation>
                    <div className="flex justify-start items-center md:w-1/5 h-full px-4 w-1/2">
                        <div className="md:hidden">
                            <ToggleButton />
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-3/5">
                        <div className="hidden md:flex w-full items-center justify-center md:gap-3 lg:gap-6">
                            <NavDesktop href="Home" name="Home" />
                            <NavDesktop href="AboutMe" name="Sobre mim" />
                            <NavDesktop href="Skills" name="Habilidades" />
                            <NavDesktop href="Projects" name="Projetos" />
                            <NavDesktop href="Comments" name="Comentários" />
                        </div>
                    </div>
                    <div className="flex justify-end items-center md:w-1/5 w-1/2 h-full px-4">
                        <ToggleTheme />
                    </div>
                    <ToggleMenu />
                </Navegation>
                <Layout theme='dark'>
                    <div id='Home' className='w-full flex flex-col md:flex-row h-5/6 md:px-8 items-center pt-14'>
                        <Profile title='Euzebio Batista' subtitle='Web Developer.' />
                        <div className='flex flex-col justify-center items-center h-full w-5/6 sm:w-2/3 md:w-1/3 sm:px-8 gap-1'>
                            <Button name='Linkedin' color='blue' icon={IconLinkedin} />
                            <Button name='GitHub' color='gray' icon={IconGitHub} />
                        </div>
                    </div>
                    <PageDown />
                </Layout>
            </header>
            <main>
                <Layout theme='white'>
                    <AboutMe />
                    <PageDown />
                </Layout>
                <Layout theme='dark' >
                    <Cards />
                    <PageDown />
                </Layout>
                <Layout theme='white'>
                    <Projects />
                    <PageDown />
                </Layout>
                <Layout theme='dark'>
                    <Comments />
                </Layout>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
