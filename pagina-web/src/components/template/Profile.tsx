interface IProfileProps {
    title: string,
    subtitle: string
}
export default function Profile(props: IProfileProps) {
    return (
        <div className={`
            flex flex-col justify-center items-center w-56 mt-4
        `}>
            <img src="./images/profile.jpg" alt="MeuPerfil" className={`
                w-56 rounded-full border-2 border-black
            `} />
            <h1 className="text-4xl font-bold text-black dark:text-gray-100">{props.title}</h1>
            <h2 className="self-end text-2xl font-semibold text-gray-800 dark:text-gray-400">{props.subtitle}</h2>
        </div>
    )
}