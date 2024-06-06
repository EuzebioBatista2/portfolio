import Link from "next/link"
import { IconGitHubNeutrall, IconWeb, IconYoutube } from "../../../public/icons"

interface IOthersProjects {
  title: string
  icons: any[]
  description: string
  youtube?: string
  github?: string
  site?: string
}
export default function OthersProjects(props: IOthersProjects) {
  // Componente que serve de container para gerar um link contendo as informações dos projetos
  return (
    <div className="h-full w-full px-1 bg-gray-300 dark:bg-gray-700 border border-gray-700 dark:border-gray-300 rounded-md z-10 transition duration-500 ease-in-out" style={{ boxShadow: '-1px 0px 6px 0px rgba(0,0,0,0.75)' }}>
      <div className="flex w-full justify-between items-center py-1 px-1">
        <h3 className="text-lg text-black dark:text-white font-semibold">{props.title}</h3>
        <div className="flex gap-0.5">
          {/* Ocorre uma listagem em cima dos icones que represetam as linguagens nas quais foram utilizadas no projeto */}
          {Array.isArray(props.icons) && props.icons.map((icon, index) => (
            <i key={index} className="flex h-6 w-6">{icon}</i>
          ))}
        </div>
      </div>
      <hr className="border-none h-0.5 bg-black dark:bg-white" />
      <div className="py-2">
        <h2 className="text-gray-600 dark:text-gray-200 px-2">
          {props.description}
        </h2>
      </div>
      <hr className="border-none h-[0.3px] bg-gray-600 dark:bg-gray-400" />
      <div className="flex flex-row items-center justify-center py-2 gap-2 md:gap-4">
        {props.github && (
          <Link
            className="flex flex-row gap-2 px-4 md:px-6 items-center justify-center py-1 bg-orange-400 text-white rounded-md border border-white hover:bg-orange-500 transition duration-500 ease-in-out"
            href={props.github}
            target="_blank"
          >
            <p>GitHub</p>
            <i className="h=6 w-6 fill-white">{IconGitHubNeutrall}</i>
          </Link>
        )}
        {props.youtube && (
          <Link
            className="flex flex-row gap-2 items-center justify-center px-4 md:px-6  py-1 bg-red-400 text-white rounded-md border border-white hover:bg-red-500 transition duration-500 ease-in-out"
            href={props.youtube}
            target="_blank"
          >
            <p>Youtube</p>
            <i className="h=6 w-6">{IconYoutube}</i>
          </Link>
        )}
        {props.site && (
          <Link
            className="flex flex-row items-center justify-center gap-2 px-4 md:px-6 py-1 bg-blue-400 text-white rounded-md border border-white hover:bg-blue-500 transition duration-500 ease-in-out"
            href={props.site}
            target="_blank"
          >
            <p>Site</p>
            <i className="h=6 w-6">{IconWeb}</i>
          </Link>
        )}
      </div>
    </div>
  )
}