import useToggleData from "@/data/hooks/useToggleData";
import Button from "./Button";
import { IconUser, IconProjects, IconEletro, IconComments } from "../../../public/icons";
import { useEffect } from "react";

export default function ToggleMenu() {
    const { isActivate } = useToggleData()

    return (
        <div className={`
            flex flex-col items-center justify-start absolute overflow-hidden ${isActivate ? 'h-56 py-1' : 'h-0'} 
            w-full bg-gray-300 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 top-14
            transtion duration-500 ease-in-out 
        `}>
            <a href='#AboutMe' className="transition duration-500 ease-in-out">
                <Button name="Sobre mim" color="blue" icon={IconUser} />
            </a>
            <a href='#Skills'>
                <Button name="Habilidades" color="blue" icon={IconEletro} />
            </a>
            <a href='#Projects'>
                <Button name="Projetos" color="blue" icon={IconProjects} />
            </a>
            <a href='#Comments'>
                <Button name="Comentários" color="blue" icon={IconComments} />
            </a>
        </div>
    )
}