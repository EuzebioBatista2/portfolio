import Image from "next/image";
import ReactTypingEffect from "react-typing-effect";
import Navigation from "./template/Navigation";
import { useDarkThemeReducer } from "@/store/reducers/darkThemeReducers/useDarkThemeReducer";
import Head from "next/head";
import ButtonDown from "./components/ButtonDown";
import ContentAboutMe from "./components/ContentAboutMe";
import CardExperience from "./components/CardExperience";
import Button from "./components/Button";
import { IconBook, IconBootStrap, IconComments, IconCss, IconFireBase, IconGitHubNeutrall, IconHeart, IconHtml, IconJquery, IconJs, IconLaravel, IconLinkedin, IconMySql, IconNextJs, IconPhp, IconPost, IconPostgres, IconProjects, IconReact, IconTS, IconTail, IconVueJs } from "../../public/icons";
import Skills from "./template/Skills";
import Link from "next/link";
import { useEffect, useState } from "react";
import OthersProjects from "./components/OthersProjects";
import RegisterComents from "./components/RegisterComents";
import { dbFirebase } from "../../backend/config";
import CardComment from "./components/CardComment";
import { downloadCurriculo } from "@/content/downloadCurriculo";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const [hover, setHover] = useState(false)
  const [comments, setComments] = useState<any[]>([])
  const { darkTheme, setTheme } = useDarkThemeReducer()

  useEffect(() => {
    // Verifica se houve alteração no banco de dados e atualiza em tempo real
    dbFirebase.onSnapshot((comments: any) => {
      setComments(comments.docs)
    })

    // Verifica se o tema setado no cookie é dark ou não
    const theme = localStorage.getItem('themeMyPortfolio')
    if (theme === 'dark') {
      setTheme(true)
    } else {
      setTheme(false)
    }
  }, [])

  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [ref5, inView5] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [ref6, inView6] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [ref7, inView7] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [ref16, inView16] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });


  // Página principal
  return (
    <main className={`${darkTheme ? 'dark' : ''} overflow-hidden`}>
      <Head>
        <title>Portfolio EuzebioDev</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className="h-screen min-h-[550px] bg-[url('/backgroundHeader.png')] bg-no-repeat bg-center bg-cover bg-fixed bg-gray-200 dark:bg-gray-800 transition duration-500 ease-in-out" id="home">
        {/* Conteúdo da página inicial */}
        <Navigation />
        <div className="flex flex-col h-full w-full items-center justify-center relative">
          <Image
            src={'/Profile.png'}
            height={130}
            width={130}
            alt="Foto de perfil com filtro de desenho"
            priority={true}
            className="w-auto h-[40%] p-1"
          />
          <div className="flex items-center justify-center h-1/4 p-4">
            <ReactTypingEffect
              text={["Hi!", "My name is Euzebio.", "I'm web developer."]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={3000}
              className="text-3xl text-blue-400 text-center font-medium"
            />
          </div>
          <ButtonDown link='aboutMe' />
        </div>
        {/* Fim conteúdo da página inicial */}
      </header>
      <section className="flex flex-col md:flex-row items-center justify-center py-12 h-full bg-[url('/backgroundAboutMe.jpg')] bg-no-repeat bg-center bg-cover bg-fixed" id="aboutMe">
        {/* Conteúdo sobre min */}
        <div className="h-full w-full">
          <motion.div ref={ref1} initial={{ opacity: 0, x: -50 }} animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : -50 }} transition={{ duration: 0.5 }}>
            <Image
              src={'/aboutme.png'}
              height={1000}
              width={1000}
              alt="Desenho com um rapaz e vários objetos em sua volta"
              priority={true}
              className="w-full h-auto p-1"
            />
          </motion.div>
        </div>
        <ContentAboutMe />
        {/* Fim do conteúdo sobre min */}
      </section>
      <section className="flex p-2 bg-gray-200 dark:bg-gray-800 transition duration-500 ease-in-out" id="curriculo">
        {/* Conteúdo do cirrículo */}
        <div className="flex flex-col h-full items-center justify-center w-full my-4 z-10" style={{ boxShadow: '-5px 7px 5px 0px rgba(0,0,0,0.75)' }}>
          <div className="w-full py-4 bg-blue-400 rounded-t-lg">
            <h2 className="text-white text-2xl text-center font-semibold">Currículo</h2>
          </div>
          <div className="flex flex-col md:flex-row w-full h-full">
            {/* Experiência academica */}
            <div className="px-1 py-2 bg-gray-300 dark:bg-gray-700 z-10">
              <div className="px-2 py-2 bg-gray-400 rounded-md">
                <h2 className="text-lg font-semibold">Educação</h2>
              </div>
              <motion.div ref={ref2} initial={{ opacity: 0, x: -50 }} animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : -50 }} transition={{ duration: 0.5 }}>
                <CardExperience title="Análise e Desenvolvimento de sistemas(ADS)" date="Jan 2023 - Atual" business="Estacio" >
                  Curso de nível superior voltado para área de desenvolvimento de aplicativos e sistemas de computadores ou aparelhos mobile,
                  com o intuito de criar soluções para os mais diversos setores através da tecnologia.
                </CardExperience>
              </motion.div>
              <motion.div ref={ref3} initial={{ opacity: 0, x: -50 }} animate={{ opacity: inView3 ? 1 : 0, x: inView3 ? 0 : -50 }} transition={{ duration: 0.5 }}>
                <CardExperience title="Telemática" date="Abr 2022 - Dez 2022" business="IFPB" >
                  Curso de nível superior tecnologo voltado para área de comunicações usando tecnologia e afins.
                </CardExperience>
              </motion.div>
              <motion.div ref={ref4} initial={{ opacity: 0, x: -50 }} animate={{ opacity: inView4 ? 1 : 0, x: inView4 ? 0 : -50 }} transition={{ duration: 0.5 }}>
                <CardExperience title="Curso técnico - Tecinfo" date="Jan 2015 - Dez 2017" business="Lourdinas" >
                  Curso criado com especialização para criar profissionais nas diversas áreas da tecnologia, seja: Manutenção de computadores,
                  redes, design, HTML e desenvolvimento.
                </CardExperience>
              </motion.div>
            </div>
            {/* Experiência profissional */}
            <div className="px-1 py-2 bg-gray-300 dark:bg-gray-700 z-10">
              <div className="px-2 py-2 bg-gray-400 rounded-md z-10">
                <h2 className="text-lg font-semibold">Experiência Profissional</h2>
              </div>
              <motion.div ref={ref5} initial={{ opacity: 0, x: -50 }} animate={{ opacity: inView5 ? 1 : 0, x: inView5 ? 0 : -50 }} transition={{ duration: 0.5 }}>
                <CardExperience title="Técnico de TI" date="Set 2023 - Nov 2023" business="CITYMIX HOTEL" >
                  Suporte técnico na realização de atividades de manutenção em computadores e notebooks, além de auxiliar no sistema acadêmico.
                </CardExperience>
              </motion.div>
              <motion.div ref={ref6} initial={{ opacity: 0, x: -50 }} animate={{ opacity: inView6 ? 1 : 0, x: inView6 ? 0 : -50 }} transition={{ duration: 0.5 }}>
                <CardExperience title="Analista de Redes(Estágio)" date="Jan 2013 - Mai 2023" business="Itline" >
                  Estágio com o intuito de auxiliar e monitorar o sistema de redes do clientes, além de prestar suporte.
                </CardExperience>
              </motion.div>
              <motion.div ref={ref7} initial={{ opacity: 0, x: -50 }} animate={{ opacity: inView7 ? 1 : 0, x: inView7 ? 0 : -50 }} transition={{ duration: 0.5 }}>
                <CardExperience title="Técnico de TI(Fixo)" date="Jul 2018 - Mar 2022" business="UNESC" >
                  Suporte e manutenção de computadores e notebooks, realizando manutenções preventivas, e prestando suporte a professores e
                  alunos no auxilio as aulas e atividades.
                </CardExperience>
              </motion.div>
              <motion.div ref={ref16} initial={{ opacity: 0, x: -50 }} animate={{ opacity: inView16 ? 1 : 0, x: inView16 ? 0 : -50 }} transition={{ duration: 0.5 }}>
                <CardExperience title="Técnico de TI(Estágio)" date="Jan 2018 - Jul 2018" business="UNESC" >
                  Suporte técnico na realização de atividades de manutenção em computadores e notebooks, além de auxiliar no sistema acadêmico.
                </CardExperience>
              </motion.div>
            </div>
          </div>
          <div className="flex items-center justify-center px-2 py-8 w-full bg-gray-300 dark:bg-gray-700 z-10">
            <Button color="blue" name="DONWLOAD CURRÍCULO" icon={IconBook} onClick={() => downloadCurriculo()} />
          </div>
        </div>

        {/* Fim conteúdo do currículo */}
      </section>
      <section className="flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800 transition duration-500 ease-in-out" id="skills">
        {/* Conteúdo das habilidades */}
        <Skills />
        {/* Fim conteúdo das habilidades */}
      </section>
      <section className="flex flex-col min-h-[550px] bg-gray-200 dark:bg-gray-800 transition duration-500 ease-in-out" id="projects">
        {/* Conteúdo dos projetos */}
        <div className="flex items-center justify-center mt-12 mb-4 relative">
          <Image
            src={'/reactBackground.png'}
            height={150}
            width={150}
            alt="Icone do react cortado ao meio"
            priority={true}
            className={`w-auto h-auto absolute -right-2 z-0 opacity-30`}
          />
          <div className="flex items-center justify-center w-full py-4 relative text-black dark:text-white gap-2">
            <i>{IconProjects}</i>
            <h2 className="flex items-center justify-center text-4xl text-center font-semibold z-10 p-0 m-0">
              Projetos
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-start md:flex-row md:gap-6 h-full w-full z-10 md:px-8">
          <div className="h-full w-full mb-2 px-1">
            <h2 className="text-2xl font-bold h-12 text-black dark:text-white">Destaque:</h2>
            <Link href={'https://carcontrol-production.up.railway.app'} className="flex flex-col w-full h-full border border-gray-700 dark:border-gray-300 rounded-md overflow-hidden z-10" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
              <div className="flex items-center justify-center py-10 h-[300px] w-full bg-[url('/BackgroundProject.png')] bg-no-repeat bg-center bg-cover">
                <Image
                  src={'/LogoProject.png'}
                  height={130}
                  width={130}
                  alt="Logo contendo o nome MyCommerce com um carrinho de compras"
                  priority={true}
                  className={`w-2/4 h-auto ${hover ? 'scale-110 -rotate-12' : ''} transform duration-300 ease-in-out`}
                />
              </div>
              <div className={`h-full w-full px-1 bg-gray-300 dark:bg-gray-700 ${hover ? 'bg-white dark:bg-gray-800' : ''} transform duration-300 ease-in-out`}>
                <div className="flex w-full h-full justify-between items-center py-1">
                  <h2 className="text-lg font-semibold text-black dark:text-white pl-1">Car control</h2>
                  <div className="flex gap-1">
                    <i className="flex h-6 w-6">{IconLaravel(true)}</i>
                    <i className="flex h-6 w-6">{IconVueJs(true)}</i>
                    <i className="flex h-6 w-6">{IconBootStrap(true)}</i>
                    <i className="flex h-6 w-6">{IconPostgres(true)}</i>
                    <i className="flex h-6 w-6">{IconJquery(true)}</i>
                  </div>
                </div>
                <div>
                </div>
                <hr className="border-none h-0.5 bg-black dark:bg-white" />
                <div className="py-2">
                  <h2 className="text-gray-600 dark:text-gray-200 px-2">
                    Projeto realizado com o intuito de auxiliar pequenos donos de comercio com o gerenciamento de suas vendas.
                  </h2>
                </div>
              </div>
            </Link>
          </div>
          <div className="h-full w-full mb-2">
            <h2 className="text-lg font-semibold pt-2 h-12 text-black dark:text-white">Outros projetos:</h2>
            <div className="flex flex-col w-full gap-2 overflow-y-auto overflow-x-hidden h-[400px] pl-1 pr-2">
              <Link href={'https://flappybird-program-languages-production.up.railway.app'}>
                <OthersProjects
                  title="FlappyBird"
                  description="Projeto criado para representar um flappybird, usando as linguagens de programação como representantes do game."
                  icons={[IconPhp(true), IconLaravel(true), IconVueJs(true), IconBootStrap(true), IconMySql(true)]}
                />
              </Link>
              <Link href={'https://my-commerce-euzebiobatista2.vercel.app'}>
                <OthersProjects
                  title="My Commerce"
                  description="Projeto realizado com o intuito de auxiliar pequenos donos de comercio com o gerenciamento de suas vendas."
                  icons={[IconReact(true), IconTS(true), IconTail(true), IconFireBase(true)]}
                />
              </Link>
              <Link href={'/pagePHP'}>
                <OthersProjects
                  title="Pagina Web PHP"
                  description="Projeto para representar uma página de login e sessão de login, com cadastro e esqueci minha senha."
                  icons={[IconHtml(true), IconCss(true), IconPhp(true), IconMySql(true), IconJs(true)]}
                />
              </Link>
              <Link href={'https://calculadora-react-ar8q.vercel.app/'}>
                <OthersProjects
                  title="Calculadora React"
                  description="Calculadora desenvolvida com a funcionalidade de auxiliar e permitir apenas equações validas."
                  icons={[IconReact(true), IconJs(true), IconHtml(true), IconCss(true)]}
                />
              </Link>
              <Link href={'/pageCrud'}>
                <OthersProjects
                  title="Página CRUD"
                  description="Pagina CRUD usando os métodos GET, POST, PUT e DELETE usando o XMLHttprequest."
                  icons={[IconHtml(true), IconCss(true), IconBootStrap(true), IconJquery(true), IconJs(true)]}
                />
              </Link>
              {/* <div className="flex items-center justify-center w-full">
                <Button name="Mais projetos" color="blue" link="https://github.com/EuzebioBatista2" />
              </div> */}
            </div>
          </div>
        </div>
        {/* Fim conteúdo dos projetos */}
      </section>
      <section className="flex flex-col justify-center items-center h-full bg-[url('/backgroundHeader.png')] bg-no-repeat bg-center bg-cover bg-fixed bg-gray-300 dark:bg-gray-900 transition duration-500 ease-in-out" id="comments">
        {/* Conteúdo dos comentários */}
        <div className="flex items-center justify-center w-full py-4 relative bg-gray-300 dark:bg-gray-900 text-black dark:text-white gap-2">
          <i>{IconComments}</i>
          <h2 className="flex items-center justify-center text-4xl text-center font-semibold z-20 p-0 m-0">
            Comentários
          </h2>
        </div>
        {/* Fim conteúdo dos comentários */}
        <div className="flex flex-col w-full h-full items-start justify-center">
          <div className="flex flex-col w-full h-full bg-gray-300 dark:bg-gray-900 transform duration-500 ease-in-out overflow-hidden relative">
            <Image
              src={'/db.png'}
              height={1000}
              width={1000}
              alt="Icone de um banco de dados cortado ao meio"
              priority={true}
              className={`w-auto h-auto absolute -left-2 top-0 opacity-30`}
            />
            <div className="w-full h-full py-10">
              <RegisterComents />
            </div>
          </div>
        </div>
        <section className="h-screen min-h-[550px] bg-[url('/backgroundHeader.png')] bg-no-repeat bg-center bg-cover bg-fixed bg-gray-200 dark:bg-gray-800 transition duration-500 ease-in-out" id="home">
          <div className="flex items-start justify-center w-[98%] overflow-y-scroll h-[650px] md:h-full z-20">
            <div className="w-full md:w-3/4 pl-2">
              {comments.map((comment, index) => (
                <CardComment
                  key={index}
                  commentKey={index}
                  name={comment.data().name}
                  comment={comment.data().comment}
                  file={comment.data().file ? comment.data().file : '/userUnknown.jpg'}
                  side={index % 2 === 0 ? 'left' : 'right'}
                />
              ))}
            </div>
          </div>
        </section>
      </section>
      <footer className="h-full w-full">
        {/* Conteúdo do rodapé */}
        <div className={`flex w-full items-center h-full py-4 bg-gray-300 dark:bg-gray-900 text-sm px-2 transition duration-500 ease-in-out`}>
          <div className="flex w-1/6">
            <a href='https://www.linkedin.com/in/euzebio-batista/'>
              <i className="flex h-5 w-5 mr-1 fill-black dark:fill-gray-200">{IconLinkedin}</i>
            </a>
            <a href='https://github.com/EuzebioBatista2'>
              <i className="flex h-5 w-5 fill-black dark:fill-gray-200">{IconGitHubNeutrall}</i>
            </a>
          </div>
          <div className="flex w-5/6">
            <p className={`flex flex-col md:flex-row items-center justify-end w-full mr-2 lg:mr-4 small:text-xs text-black dark:text-gray-200`}>
              <span>Desenvolvido com&nbsp;</span>
              <span className="flex"><i className="flex h-5 w-5 fill-red-500">{IconHeart}</i>&nbsp;por&nbsp;</span>
              <span><strong>Euzebio Batista</strong></span>
            </p>
          </div>
        </div>
        {/* Fim conteúdo do rodapé */}
      </footer>
    </main>
  )
}
