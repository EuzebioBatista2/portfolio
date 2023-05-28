import useAppData from '../data/hooks/useAppData'
import Button from '@/components/template/Button'
import Navegation from '@/components/template/Navegation'
import Profile from '@/components/template/Profile'
import { Poppins } from 'next/font/google'

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
            <header className={`
                flex flex-col items-center bg-white dark:bg-gray-800
                transtion duration-500 ease-in-out
            `}>
                <Navegation />
                <div>
                    <Profile title='Euzebio Batista' subtitle='Web Developer' />
                    <Button name='Linkedin' color='blue' icon='IconeLinkedin' />
                    <Button name='GitHub' color='gray' icon='IconeGitHub' />
                </div>
            </header>
        </div>
    )
}
