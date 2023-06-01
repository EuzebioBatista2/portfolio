interface IProfileProps {
    title: string,
    subtitle: string
}
export default function Profile(props: IProfileProps) {
    return (
        <div className={`
            flex flex-col md:flex-row justify-center items-center px-7 w-2/3 h-full
        `}>
            <img src="./images/profile.jpg" alt="MeuPerfil" className={`
                w-56 md:w-72 rounded-full border-2 border-black
            `} />
            <div className='md:ml-2'>
                <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-gray-100 mt-1">{props.title}</h1>
                <h2 className="self-end text-2xl md:text-3xl font-semibold my-1
                text-gray-800 dark:text-gray-400">
                    {props.subtitle} <span className="animate-ping-fast">|</span>
                </h2> 
            </div>
        </div>
    )
}