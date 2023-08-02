interface IOthersProjects {
  title: string
  icons: any[]
  description: string
}
export default function OthersProjects(props: IOthersProjects) {
  // Componente que serve de container para gerar um link contendo as informações dos projetos
  return (
    <div className="h-full w-full px-1 bg-gray-300 dark:bg-gray-700 border border-gray-700 dark:border-gray-300 hover:bg-white hover:dark:bg-gray-800 rounded-md overflow-hidden z-10 transition duration-500 ease-in-out">
      <div className="flex w-full h-full justify-between items-center py-1 px-1">
        <h1 className="text-lg text-black dark:text-white font-semibold">{props.title}</h1>
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
    </div>
  )
}