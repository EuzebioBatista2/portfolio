import { IconCicle, Iconjob } from "../../../public/icons";

interface ICard {
  title: string
  children: any
  date: string
  business: string
}

export default function CardExperience(props: ICard) {
  // Componente que gera um bloco da estrutura para exibir as experiências de trabalho
  return (
    <div className="flex w-full px-2 z-10">
      <span className="w-2/12 relative">
        <hr className="w-0.5 h-full absolute left-0 border-none bg-gray-400" />
        <div className="flex items-center justify-center w-4 h-full">
          <i className="flex h-4 w-4 stroke-blue-400 absolute fill-white -left-1.5 z-10">{IconCicle}</i>
        </div>
        <hr className="w-full h-0.5 absolute top-1/2 border-none bg-blue-400" />
      </span>
      <span className="w-full h-full py-2">
        <div className="flex w-full h-full bg-white dark:bg-gray-800 rounded-r-md border border-gray-400 border-l-4 border-l-blue-400 transition duration-300 ease-in-out">
          <div className="flex flex-col w-full h-1/5 items-center p-2 relative">
            <i className="right-2 absolute dark:text-white">{Iconjob}</i>
            <h2 className="w-full text-center font-semibold text-lg px-8 dark:text-white">{props.title}</h2>
            <h3 className="w-full text-center"><span className="text-blue-400">{props.date}</span> | <span className="text-gray-600 z-20">{props.business}</span></h3>
            <p className="w-full h-full p-2 dark:text-white">{props.children}</p>
          </div>
        </div>
      </span>
    </div>
  )
}