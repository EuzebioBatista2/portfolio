import Link from "next/link";
import { IconGitHub, IconHeart, IconLinkedin } from "../../../public/icons";

export default function Footer() {
    return (
        <div className={`
            flex w-full items-center h-14 bg-gray-800 dark:bg-gray-300 text-sm px-2
            transition duration-500 ease-in-out
        `}>
            <div className="flex small:hidden px-1">
                <Link href={''}>
                    <i className="flex h-5 w-5 mr-1 fill-gray-200 dark:fill-black">{IconLinkedin}</i>
                </Link>
                <Link href={''}>
                    <i className="flex h-5 w-5 fill-gray-200 dark:fill-black">{IconGitHub}</i>
                </Link>
            </div>
            <p className={`
                flex items-center justify-end w-full mr-2 lg:mr-4 small:text-xs
                text-gray-200 dark:text-black
            `}>
                Desenvolvido com&nbsp;<i className="flex h-5 w-5 fill-red-500">
                    {IconHeart}</i>&nbsp;por&nbsp;<strong>Euzebio Batista</strong>
            </p>
        </div>
    )
}