import Link from "next/link"

interface IProjectCardProps {
    title: string
    link: string
    icons: any[]
    description: string
}

export default function ProjectCard(props: IProjectCardProps) {
    return (
        <div className={`
            w-full p-4 border border-gray-600 rounded-md mb-2 transtion duration-500 ease-in-out 
            cursor-pointer bg-gray-700 dark:bg-gray-200 hover:bg-gray-800 dark:hover:bg-gray-300
        `}>
            <Link href={props.link}>
                <div className="flex mb-1 w-full">
                    <h2 className=" text-gray-200 dark:text-black"><strong>{props.title}</strong></h2>
                    <span className="flex grow items-end justify-end">
                        {props.icons.map((icon, index) => 
                            <i key={index} className="flex h-6 w-6 fill-gray-200 dark:fill-black">{icon}</i>)}
                        </span>
                </div>
                <hr className="border-gray-200 dark:border-black"/>
                <div className="mt-1">
                    <p className="text-gray-400 dark:text-gray-700 font-medium text-sm">{props.description}</p>
                </div>
            </Link>  
        </div>
    )
}