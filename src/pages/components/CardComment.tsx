import Image from "next/image";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

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
    props.side === 'left' ? (
      <div
        key={props.commentKey}
        className={`flex flex-col w-4/5 float-left animate-bounce-verySlow px-2 my-4 border border-black rounded-3xl overflow-hidden bg-white dark:bg-gray-800 hover:animate-none flex-shrink-0 transition duration-300 ease-in-out`}
        style={{ boxShadow: '-5px 6px 18px 0px rgba(0,0,0,0.75)' }}
      >
          <div className="flex w-full items-center justify-center py-2 relative">
            <Image
              src={'/balão.png'}
              alt="Balão de fala"
              width={130}
              height={130}
              priority={true}
              className="h-auto w-auto absolute justify-self-center opacity-10 pointer-events-none"
            />
            <div className="flex absolute left-0 items-center justify-center h-10 w-10 overflow-hidden border border-gray-600 rounded-full">
              <Image
                src={`${props.file}`}
                alt="FotoDePerfil"
                width={30}
                height={30}
                priority={true}
                className="w-auto h-10 pointer-events-none"
              />
            </div>
            <h3 className="flex w-full items-start justify-start text-lg text-black dark:text-white font-semibold pl-12 leading-tight py-2 transition duration-300 ease-in-out">{props.name}</h3>
          </div>
          <hr className="border-none h-0.5 bg-black" />
          <div className="p-2">
            <h2 className="text-blue-500">{props.comment}</h2>
          </div>
      </div>
    ) : (
      <div
        key={props.commentKey}
        className={`flex flex-col w-4/5 float-right animate-bounce-slow px-2 my-8 border border-black rounded-3xl overflow-hidden bg-white dark:bg-gray-800 flex-shrink-0 hover:animate-none transition duration-300 ease-in-out`}
        style={{ boxShadow: '-5px 6px 18px 0px rgba(0,0,0,0.75)' }}
      >

        <div className="flex w-full items-center justify-center py-2 relative">
          <Image
            src={'/balão.png'}
            alt="Balão de fala"
            width={130}
            height={130}
            priority={true}
            className="h-auto w-auto absolute justify-self-center opacity-10 pointer-events-none"
          />
          <div className="flex absolute left-0 items-center justify-center h-10 w-10 overflow-hidden border border-gray-600 rounded-full">
            <Image
              src={`${props.file}`}
              alt="FotoDePerfil"
              width={30}
              height={30}
              priority={true}
              className="w-auto h-10 pointer-events-none"
            />
          </div>
          <h2 className="flex w-full items-start justify-start text-lg text-black dark:text-white font-semibold pl-12 leading-tight py-2 transition duration-300 ease-in-out">{props.name}</h2>
        </div>
        <hr className="border-none h-0.5 bg-black" />
        <div className="p-2">
          <h2 className="text-blue-500">{props.comment}</h2>
        </div>
      </div >
    )
  )
}