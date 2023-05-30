import {IconBorder, IconBook} from '../../../public/icons/index'
export default function AboutMe() {
    return (
        <section id='AboutMe' className={`relative overflow-hidden h-[560px] w-full`}>
            <h1 className="flex items-center justify-center text-3xl font-bold mt-2 text-gray-200 dark:text-black">
                    <i>{IconBook}</i> &nbsp; Sobre mim
            </h1>
            <div className="w-4/5 absolute top-20 left-14 self-end z-10">
                <img src="./images/me.png" 
                    className={`
                        bg-gray-500 dark:bg-gray-200
                        border-2 border-gray-200 dark:border-gray-700 border-dashed rounded-md`}/>
            </div>
            <img src="./images/react.png" className="flex absolute top-44 left-44 h-64 z-0" />
            <div className="flex w-4/5 absolute left-4 top-64 z-20 mb-2">
                <p className={`
                     text-white dark:text-black 
                     border-gray-200 dark:border-gray-700 border-2 border-dashed p-2 rounded-md
                     bg-gray-600 dark:bg-gray-200 text-center
                `}>
                    “ Meu nome é <strong>Euzebio Batista</strong>, estudo ADS (Análise e Desenvolvimento de Sistemas). 
                    Pretendo ingressar no mercado de trabalho como desenvolvedor Front-end. 
                    Me considero uma pessoa curiosa e proativa, gosto de adquirir novos conhecimentos para que eu 
                    sempre esteja antenado ao mercado de trabalho. ”
                </p>
            </div>
            
        </section>
    )
}