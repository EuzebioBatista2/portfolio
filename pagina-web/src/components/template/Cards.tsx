import CardsItens from "./CardsItens"
import { IconReact, IconTS, IconTail, IconFireBase, IconEletro } from "../../../public/icons"
import ButtonSkills from "./ButtonSkills"
import { useState } from "react"

export default function Cards() {
    const [ item, setItem ] = useState(0)
    const items = [
        {
            description:
                "React é uma biblioteca JavaScript de código aberto para a construção de interfaces de usuário interativas em aplicações web.",
            icon: IconReact
        },
        {
            description:
                "TypeScript é uma linguagem de programação que adiciona recursos de tipagem estática opcional ao JavaScript, tornando o desenvolvimento de aplicações mais estruturado e escalável.",
            icon: IconTS
        },
        {
            description:
                "O Tailwind CSS é uma ferramenta que ajuda os desenvolvedores de sites a criar visualmente suas páginas da web. Ele oferece uma maneira fácil de adicionar estilos e formatos aos elementos da página, como botões, textos e caixas.",
            icon: IconTail
        },
        {
            description:
                "Firebase é uma plataforma de desenvolvimento de aplicativos da Google que fornece serviços e ferramentas prontas para uso, facilitando a construção e o gerenciamento de aplicativos web e móveis.",
            icon: IconFireBase
        },
    ]
    let timeItem = item
    function itemActive(value: number) {
        setItem(value)
        clearTimeout(time)
        timeItem = value
    }
    const time = setTimeout(() => {
        
        if(timeItem >= 300) setItem(0)
        else setItem(timeItem + 100)
    }, 3000)
    
    return (
        <section className={`h-[560px] w-full overflow-hidden`}>
            <h1 className="flex items-center justify-center h-[60px] text-3xl font-bold mt-2 text-black dark:text-gray-200">
                    <i>{IconEletro}</i> &nbsp; Habilidades
            </h1>
            <div className={`flex h-[420px] transition-transform duration-500 transform -translate-x-${item}`}>
                {items.map((item, index) => <CardsItens key={index} description={item.description} icon={item.icon}/>)}
            </div>
            <div className="flex items-center justify-center h-[80px]">
                <ButtonSkills value={0} isActive={itemActive} icon={IconReact}  
                className={item === 0 ? 'animate-bounce fill-blue-400' : ''} />
                <ButtonSkills value={100} isActive={itemActive} icon={IconTS}
                className={item === 100 ? 'animate-bounce fill-blue-600' : ''} />
                <ButtonSkills value={200} isActive={itemActive} icon={IconTail}
                className={item === 200 ? 'animate-bounce fill-green-400' : ''} />
                <ButtonSkills value={300} isActive={itemActive} icon={IconFireBase}
                className={item === 300 ? 'animate-bounce fill-orange-600' : ''} />
            </div>
            
        </section>
    )
}