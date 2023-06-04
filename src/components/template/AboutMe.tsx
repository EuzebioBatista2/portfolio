import Image from 'next/image'
import {IconBorder, IconLinkedin, IconGitHub, IconReact, IconCss, IconHtml, IconTS} from '../../../public/icons/index'
export default function AboutMe() {
    return (
        <section id='AboutMe' className='flex flex-col h-5/6'>
            <h1 className={`
                flex items-center justify-center pt-16 text-3xl font-bold text-gray-200 dark:text-black
                h-1/5
            `}>
                <i>{IconBorder}</i>&nbsp;Sobre mim&nbsp;<i>{IconBorder}</i>
            </h1>
            <div className='flex flex-col lg:flex-row items-center justify-center h-4/5 w-full'>
                <div className={`
                    flex h-1/2 md:h-2/5 mini:h-2/5 items-center justify-center p-4 md:px-8
                    small:h-1/2 lg:h-full lg:w-2/3
                `}>
                    <h2 className={` 
                        text-gray-200 dark:text-black border-white dark:border-black
                        p-2 border-dashed border-2 rounded-md text-sm shadow-xl small:text-xs tall:text-sm 
                        big:text-base extraBig:text-xl lg:text-2xl md:text-1xl dark:shadow-xl
                    `}>
                        “ Meu nome é <strong>Euzebio Batista</strong>, estudo ADS 
                        (Análise e Desenvolvimento de Sistemas). 
                        Pretendo ingressar no mercado de trabalho como desenvolvedor Front-end. 
                        Me considero uma pessoa curiosa e proativa, gosto de adquirir novos conhecimentos para que eu 
                        sempre esteja antenado ao mercado de trabalho. ”
                    </h2>
                </div>
                <div className={`
                    flex h-1/2 w-2/3 small:h-1/2 md:h-3/5 mini:h-3/5 mini:w-1/3 items-center justify-center
                    lg:h-full lg:w-1/3 md:w-1/3 sm:w-1/4 tall:w-1/2 small:w-1/2 extraBig:w-1/3
                `}>
                    <div className='flex relative'>
                        <i className={`
                            flex h-8 w-8 small:h-6 small:w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-14 lg:w-14 absolute top-1/4 left-0 p-1 md:p-2 lg:p-3 border rounded-full
                            bg-white fill-blue-400 animate-bounce
                        `}>{IconLinkedin}</i>
                        <i className={`
                            flex h-8 w-8 small:h-6 small:w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-14 lg:w-14 absolute left-3/4 p-1 border rounded-full
                            top-2/4
                            bg-white fill-orange-500 animate-bounce-slow
                        `}>{IconGitHub}</i>
                        <i className={`
                            flex h-8 w-8  small:h-6 small:w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-14 lg:w-14 absolute left-4 top-3/4 p-1 border rounded-full
                            bg-white fill-blue-400 animate-bounce-verySlow
                        `}>{IconReact}</i>
                        <i className={`
                            flex h-8 w-8  small:h-6 small:w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-14 lg:w-14 absolute left-6 lg:left-8 top-2 lg:top-4 p-1 border rounded-full
                            bg-white fill-blue-600 animate-bounce-slow
                        `}>{IconCss}</i>
                        <i className={`
                            flex h-8 w-8  small:h-6 small:w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-14 lg:w-14 absolute left-2/4 top-3/4 p-1 border rounded-full
                            bg-white fill-orange-600 animate-bounce
                        `}>{IconHtml}</i>
                        <i className={`
                            flex h-8 w-8  small:h-6 small:w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-14 lg:w-14 absolute left-3/4 top-2 p-1 md:p-2 border rounded-full
                            bg-white fill-blue-500 animate-bounce-verySlow
                        `}>{IconTS}</i>
                        <Image width={400} height={200} src="/images/about.png" alt="about" priority={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}