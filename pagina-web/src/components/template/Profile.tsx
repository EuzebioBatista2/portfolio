interface IProfileProps {
    title: string,
    subtitle: string
}
export default function Profile(props: IProfileProps) {
    return (
        <div className={`
            flex flex-col justify-center items-center mt-4 px-7
        `}>
            <img src="./images/profile.jpg" alt="MeuPerfil" className={`
                w-56 rounded-full border-2 border-black
            `} />
            <h1 className="text-5xl font-bold text-black dark:text-gray-100 mt-1">{props.title}</h1>
            <h2 className="self-end text-2xl font-semibold my-1
             text-gray-800 dark:text-gray-400">
                {props.subtitle} <span className="animate-ping-fast">|</span>
            </h2>
        </div>
    )
}