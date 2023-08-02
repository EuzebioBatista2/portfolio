import Image from "next/image";

interface ICardComment {
  name: string
  comment: string
  file: any
  side: 'left' | 'right'
  commentKey: number
}

export default function CardComment(props: ICardComment) {
  // Componente que gera o card ou o container que vai receber os dados dos comentários vindo das pessoas
  return (
    <div
      key={props.commentKey} 
      className={`flex flex-col w-4/5 ${props.side === 'left' ? 'float-left animate-bounce-verySlow' : 'float-right animate-bounce-slow'} px-2 my-4 border border-black rounded-md overflow-hidden bg-white dark:bg-gray-600 flex-shrink-0`} 
      style={{ boxShadow: '-5px 7px 5px 0px rgba(0,0,0,0.75)' }}
    >
      <div className="flex w-full items-center justify-center py-2 relative">
        <Image
          src={'/balão.png'}
          alt="Balão de fala"
          width={130}
          height={130}
          priority={true}
          className="h-auto w-auto absolute justify-self-center opacity-30"
        />
        <div className="flex absolute left-0 items-center justify-center h-10 w-10 overflow-hidden border border-gray-600 rounded-full">
          <Image
            src={`${props.file}`}
            alt="FotoDePerfil"
            width={30}
            height={30}
            priority={true}
            className="w-auto h-10 "
          />
        </div>
        <h1 className="flex w-full items-start justify-start text-lg text-black dark:text-white font-semibold pl-12 leading-tight py-2">{props.name}</h1>
      </div>
      <hr className="border-none h-0.5 bg-black" />
      <div className="p-2">
        <h2 className="text-blue-400">{props.comment}</h2>
      </div>
    </div>
  )
}