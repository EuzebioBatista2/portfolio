import {IconBorder, IconLinkedin, IconGitHub, IconReact, IconCss, IconHtml, IconTS} from '../../../public/icons/index'
export default function AboutMe() {
    return (
        <section id='AboutMe' className='flex flex-col h-5/6'>
            <h1 className={`
                flex items-center justify-center pt-16 text-3xl font-bold text-gray-200 dark:text-black
                h-1/6
            `}>
                <i>{IconBorder}</i>&nbsp;Sobre mim&nbsp;<i>{IconBorder}</i>
            </h1>
            <div className='flex flex-col md:flex-row items-center justify-center h-5/6 w-full'>
                <div className='flex h-3/5 md:w-1/2 items-center justify-center p-4 '>
                    <h2 className={` 
                        text-gray-200 dark:text-black border-white dark:border-black
                        p-2 border-dashed border-2 rounded-md text-sm shadow-xl tall:text-base big:text-md
                    `}>
                        “ Meu nome é <strong>Euzebio Batista</strong>, estudo ADS 
                        (Análise e Desenvolvimento de Sistemas). 
                        Pretendo ingressar no mercado de trabalho como desenvolvedor Front-end. 
                        Me considero uma pessoa curiosa e proativa, gosto de adquirir novos conhecimentos para que eu 
                        sempre esteja antenado ao mercado de trabalho. ”
                    </h2>
                </div>
                <div className='flex h-2/5 md:h-full w-1/2 items-center justify-center relative p-1'>
                    <i className={`
                        flex h-8 w-8 md:h-16 md:w-16 absolute top-1/4 left-0 p-1 md:p-3 border rounded-full
                        bg-white fill-blue-400 animate-bounce
                    `}>{IconLinkedin}</i>
                    <i className={`
                        flex h-8 w-8 md:h-16 md:w-16 absolute left-3/4 p-1 border rounded-full
                        bg-white fill-orange-500 animate-bounce-slow
                    `}>{IconGitHub}</i>
                    <i className={`
                        flex h-8 w-8 md:h-16 md:w-16 absolute left-4 top-3/4 p-1 border rounded-full
                        bg-white fill-blue-400 animate-bounce-verySlow
                    `}>{IconReact}</i>
                    <i className={`
                        flex h-8 w-8 md:h-16 md:w-16 absolute left-6 md:left-8 top-0 md:top-4 p-1 border rounded-full
                        bg-white fill-blue-600 animate-bounce-slow
                    `}>{IconCss}</i>
                    <i className={`
                        flex h-8 w-8 md:h-16 md:w-16 absolute left-2/4 top-3/4 p-1 border rounded-full
                        bg-white fill-orange-600 animate-bounce
                    `}>{IconHtml}</i>
                    <i className={`
                        flex h-8 w-8 md:h-16 md:w-16 absolute left-3/4 top-2 p-1 border rounded-full
                        bg-white fill-blue-500 animate-bounce-verySlow
                    `}>{IconTS}</i>
                    <img src="/images/about.png" alt="about" className='w-full md:h-full'></img>
                </div>
            </div>
        </section>
    )
}