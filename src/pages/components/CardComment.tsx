import Image from "next/image";

interface ICardComment {
  name: string
  comment: string
  file: any
}



export default function CardComment(props: ICardComment) {

  // Componente que gera o card ou o container que vai receber os dados dos comentários vindo das pessoas
  return (
    <div className="flex w-full h-full items-center justify-center py-20">
      <div className="w-[260px]">
        <Image
          src={`${props.file}`}
          alt="profile photo"
          width={250}
          height={250}
          priority={true}
          className="h-160 w-full object-cover"
        />
        <div className="px-2 bg-white">
          <h3 className="text-xl text-black py-2">{props.name}</h3>
          <p className="text-gray-400 text-sm">Comentário:</p>
          <p className="text-gray-500 italic pb-2">"{props.comment}"</p>
        </div>
      </div>
    </div>
  );
}