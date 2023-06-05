import Button from "./Button";
import { IconUser, IconProjects, IconEletro, IconComments, IconHome } from "../../../public/icons";
import UseToggleData from "../../data/hooks/UseToggleData"


export default function ToggleMenu() {
    const { isActivate, isRotate } = UseToggleData()

    return (
        <div className={`flex flex-col items-center justify-start absolute overflow-hidden ${isActivate ? 'h-72 py-1' : 'h-0'} w-full bg-gray-300 dark:bg-gray-700 bg-opacity-50 dark:bg-opacity-50 top-14 transtion duration-500 ease-in-out `}>
            <a href='#Home' onClick={isRotate} className="flex w-2/3 mt-2 mb-1 items-center justify-center">
                <Button name="Home" color="blue" icon={IconHome} />
            </a>
            <a href='#AboutMe' onClick={isRotate} className="flex w-2/3 my-1 items-center justify-center">
                <Button name="Sobre mim" color="blue" icon={IconUser} />
            </a>
            <a href='#Skills' onClick={isRotate} className="flex w-2/3 my-1 items-center justify-center">
                <Button name="Habilidades" color="blue" icon={IconEletro} />
            </a>
            <a href='#Projects' onClick={isRotate} className="flex w-2/3 my-1 items-center justify-center">
                <Button name="Projetos" color="blue" icon={IconProjects} />
            </a>
            <a href='#Comments' onClick={isRotate} className="flex w-2/3 my-1 items-center justify-center">
                <Button name="Comentários" color="blue" icon={IconComments} />
            </a>
        </div>
    )
}