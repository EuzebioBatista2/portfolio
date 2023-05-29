import useAppData from '../data/hooks/useAppData'
import Button from '@/components/template/Button'
import Navegation from '@/components/template/Navegation'
import Profile from '@/components/template/Profile'
import ToggleMenu from '@/components/template/ToggleMenu'
import { Poppins } from 'next/font/google'
import { IconGitHub, IconLinkedin } from '../../public/icons'
import Head from 'next/head'
import AboutMe from '../components/template/AboutMe'
import PageDown from '@/components/template/PageDown'

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
            <header className={`
                flex flex-col items-center bg-gray-200 dark:bg-gray-800
                transtion duration-500 ease-in-out h-screen w-screen
            `}>
                <Navegation />
                <div className='w-full flex flex-col items-center relative'>
                    <ToggleMenu />
                    <Profile title='Euzebio Batista' subtitle='Web Developer.' />
                    <div className='mt-8'>
                        <Button name='Linkedin' color='blue' icon={IconLinkedin} />
                        <Button name='GitHub' color='gray' icon={IconGitHub} />
                    </div>
                </div>
                <PageDown />
            </header>
            <main className={`
                flex flex-col items-center p-4 h-screen
                bg-gray-800 dark:bg-gray-300 relative overflow-hidden
            `}>
                <AboutMe />
                <PageDown />
            </main>
        </div>
    )
}
