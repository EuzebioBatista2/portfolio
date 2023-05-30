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
import Cards from '@/components/template/Cards'
import Layout from '@/components/template/Loyout'

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
                <Layout theme='dark'>
                    <Navegation />
                    <div className='w-full flex flex-col items-center relative'>
                        <ToggleMenu />
                        <Profile title='Euzebio Batista' subtitle='Web Developer.' />
                        <div className='mt-8'>
                            <Button name='Linkedin' color='blue' icon={IconLinkedin} />
                            <Button name='GitHub' color='gray' icon={IconGitHub} />
                        </div>
                        <PageDown />
                    </div>
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
            </main>
        </div>
    )
}
