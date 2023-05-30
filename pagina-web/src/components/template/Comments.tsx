import { IconComments, IconPost } from "../../../public/icons";

export default function Comments() {
    return (
        <section id="comments" className="flex flex-col h-[560px] items-center justify-center w-full px-4">
            <h1 className={`
                flex items-center justify-center h-[60px] text-3xl font-bold mt-2 
                text-black dark:text-gray-200
            `}>
                <i>{IconComments}</i> &nbsp; Comentários
            </h1>
            <div className="flex flex-col h-[440px]">
                <h1>Aqui fica as mensagens</h1>
            </div>
            <div className="flex items-center justify-center h-[60px] bg-gray-800 w-screen">
                <form action="#comments" method="post" className="w-full">
                    <label htmlFor="message">Mensagem</label>
                    <input type="text" name="" id="message" className={`
                       flex bg-gray-600 rounded-sm px-2 py-1 border border-black
                    `}/>
                    <button type="submit">
                        <i className="flex h-8 w-8">{IconPost}</i>
                    </button>
                </form>
            </div>
        </section>
    )
}