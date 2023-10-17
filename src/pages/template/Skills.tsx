import Image from "next/image";
import { IconBook, IconDatabase, IconEletro, IconTools } from "../../../public/icons";
import ButtonMini from "../components/ButtonMini";
import { useEffect, useState } from "react";
import { itemsDb, itemsLanguages, itemsTools } from "@/content/skillsObject";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";



export default function Skills() {
  let [items, setItems] = useState<any[]>(itemsLanguages)
  let [carrocelMainIcons, setCarrocelMainIcons] = useState<number>(0)
  let [leftListMain, setLeftListMain] = useState<any[]>([])
  let [rightListMain, setRightListMain] = useState<any[]>([])

  const [ref14, inView14] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [ref15, inView15] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    // Verifica a página sempre quando ocorrer uma mudança no movimentos icones, configurando e atualizando seu valor
    if (items) {
      const limit = items.length
      const time = setTimeout(() => {
        if (carrocelMainIcons >= limit - 1) {
          setCarrocelMainIcons(0)
        } else {
          setCarrocelMainIcons(carrocelMainIcons + 1)
        }
      }, 10000);

      return () => {
        clearTimeout(time);
      };
    }
  }, [carrocelMainIcons]);

  useEffect(() => {
    // Recebe os dados da lista de componentes dos icones e realiza uma tratativa
    let listLeft: any[] = []
    let listRight: any[] = []
    let leftValid = false
    let rightValid = false
    // Inverte a lista, começando pelo ultimo valor
    for (let index = items.length - 1; index <= items.length; index++) {
      if (index === items.length && leftValid === false) {
        index = 0
        leftValid = true
      }
      if (listLeft.length <= items.length - 1) {
        listLeft.push(items[index])
      }
    }
    // Altera a lista para começar a partir do valor 1
    for (let index = 1; index <= items.length; index++) {
      if (index === items.length && rightValid === false) {
        index = 0
        rightValid = true
      }
      if (listRight.length <= items.length - 1) {
        listRight.push(items[index])
      }
    }
    setLeftListMain(listLeft)
    setRightListMain(listRight)
  }, [items])

  // Template que servirá de layout para exibir as habilidades adquiridas
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col items-center relative w-full h-full min-h-[540px]">
        <div className="flex items-center justify-center mt-12 relative w-full">
          <Image
            src={'/htmlTag.png'}
            height={150}
            width={150}
            alt="Imagem de um tag html cortado ao meio"
            priority={true}
            className={`w-auto h-auto absolute -left-2 z-0 opacity-30`}
          />
          <h1 className="flex items-center justify-center text-black dark:text-white text-2xl text-center font-semibold z-10">
            <i>{IconEletro}</i>&nbsp;Habilidades
          </h1>
        </div>
        <div className="flex gap-4 py-4">
          {/* Botões responsáveis por alterar a lista de ícones */}
          <ButtonMini icon={IconBook} color="red" onClick={() => { setItems(itemsLanguages), setCarrocelMainIcons(0) }} />
          <ButtonMini icon={IconDatabase} color="yellow" onClick={() => { setItems(itemsDb), setCarrocelMainIcons(0) }} />
          <ButtonMini icon={IconTools} color="blue" onClick={() => { setItems(itemsTools), setCarrocelMainIcons(0) }} />
        </div>
        <div className="flex flex-col md:flex-row h-full w-full">
          <div className="flex flex-col items-center justify-center h-full w-full md:w-1/2 relative md:px-4">
            <div className="flex flex-col w-full items-center justify-center overflow-hidden">
              <motion.div ref={ref14} initial={{ opacity: 0, x: -50 }} animate={{ opacity: inView14 ? 1 : 0, x: inView14 ? 0 : -50 }} transition={{ duration: 0.5 }}>
                <div className={`flex items-center justify-end h-full w-full py-10 transition-transform duration-500 transform translate-x-${carrocelMainIcons * 100}`}>
                  {/* Lista de icones principal */}
                  {items.map((item, index) => {
                    return (
                      <div key={index} className="flex self-center justify-center w-full flex-shrink-0">
                        <i className={`flex p-8 mt-2 h-40 w-40 md:h-60 md:w-60 rounded-full bg-white dark:bg-gray-900 animate-bounce-verySlow`}>{item.icon(true)}</i>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
            <Image
              src={'/handTec.png'}
              height={130}
              width={130}
              alt="Uma mão robotica branca"
              priority={true}
              className="flex w-full h-auto relative -left-2 md:-left-6 bg-transparent"
            />
          </div>
          <div className="flex flex-col h-[40vh] min-h-[240px] w-full md:mx-2 rounded-md bg-gray-300 dark:bg-gray-700 overflow-hidden z-10" style={{ boxShadow: '-5px 7px 5px 0px rgba(0,0,0,0.75)' }}>
            <motion.div ref={ref15} initial={{ opacity: 0, x: -50 }} animate={{ opacity: inView15 ? 1 : 0, x: inView15 ? 0 : 50 }} transition={{ duration: 0.5 }} className="h-full w-full">
              <div className={`flex w-full h-full items-center justify-end text-center transition-transform duration-500 transform translate-x-${carrocelMainIcons * 100}`}>
                {/* Lista a descrição de cada ícone */}
                {items.map((item, index) => {
                  const words = item.description.split(' ')
                  const firstWord = words[0] + ' '
                  const restOfDescription = words.slice(1).join(' ')
                  return (
                    <div key={index} className="flex justify-center items-center p-2 flex-shrink-0 h-full w-full">
                      <h1 className="text-black dark:text-white"><strong className="text-blue-400">{firstWord} </strong>{restOfDescription}</h1>
                    </div>
                  )
                })}
              </div>
            </motion.div>
            <div className="flex h-24 w-full bg-gray-400 dark:bg-gray-900 z-10">
              <div className={`flex items-center justify-center h-full w-full`}>
                <div className={`flex w-1/3 overflow-hidden`}>
                  <div className={`flex justify-end items-center w-full h-full transition-transform duration-500 transform translate-x-${carrocelMainIcons * 100}`}>
                    {/* Lista os valores no quais foram modificados para começar pelo ultimo valor */}
                    {leftListMain.map((item, index) => {
                      return (
                        <div key={index} className="flex w-full h-full items-center justify-center flex-shrink-0 p-4">
                          <button className="flex w-8 h-8" onClick={() => setCarrocelMainIcons(item.position)}>
                            <i className={`flex h-full w-full`}>{item.icon(false)}</i>
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className={`flex w-1/3 overflow-hidden`}>
                  <div className={`flex justify-end items-center w-full h-full transition-transform duration-500 transform translate-x-${carrocelMainIcons * 100}`}>
                    {/* Lista os ícones principais */}
                    {items.map((item, index) => {
                      return (
                        <div key={index} className="flex w-full h-full items-center justify-center flex-shrink-0 p-4">
                          <button className="flex w-12 h-12 animate-bounce" onClick={() => setCarrocelMainIcons(item.position)}>
                            <i className={`flex h-full w-full`}>{item.icon(true)}</i>
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className={`flex w-1/3 overflow-hidden`}>
                  <div className={`flex justify-end items-center w-full h-full transition-transform duration-500 transform translate-x-${carrocelMainIcons * 100}`}>
                    {/* Lista os ícones que começaram a partir da posição 1 */}
                    {rightListMain.map((item, index) => {
                      return (
                        <div key={index} className="flex w-full h-full items-center justify-center flex-shrink-0 p-4">
                          <button className="flex w-8 h-8" onClick={() => setCarrocelMainIcons(item.position)}>
                            <i className={`flex h-full w-full`}>{item.icon(false)}</i>
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

