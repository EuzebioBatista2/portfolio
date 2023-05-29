import useToggleData from "@/data/hooks/useToggleData";
import Link from "next/link";
import Button from "./Button";
import { IconUser, IconProjects, IconComments } from "../../../public/icons";

export default function ToggleMenu() {
    const { isActivate } = useToggleData()
    return (
        <div className={`
            flex flex-col items-center justify-start absolute overflow-hidden ${isActivate ? 'h-44 py-1' : 'h-0'} 
            w-full backdrop-blur-md bg-gray-100 dark:bg-gray-900 opacity-95 
            transtion duration-500 ease-in-out 
        `}>
            <Link href={'#AboutMe'}>
                <Button name="Sobre mim" color="blue" icon={IconUser} />
                
            </Link>
            <Link href={'#'}>
                <Button name="Projetos" color="blue" icon={IconProjects} />
            </Link>
            <Link href={'#'}>
                <Button name="Projetos" color="blue" icon={IconProjects} />
            </Link>
        </div>
    )
}