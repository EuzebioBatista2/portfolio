import { IconBootStrap, IconCss, IconHtml, IconJquery, IconJs, IconMySql, IconPhp, IconProjects, IconReactM } from "../../../public/icons";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const projects = [
        {
            title: 'Calculadora React',
            link: 'https://calculadora-react-ar8q.vercel.app/',
            icons: [IconHtml, IconCss, IconReactM, IconJs],
            description: 'Calculadora desenvolvida com a funcionalidade de auxiliar e permitir apenas equações validas.'
        },
        {
            title: 'Pagina Web PHP',
            link: 'pageWebPHP',
            icons: [IconHtml, IconCss, IconPhp, IconMySql, IconJs],
            description: 'Projeto para representar uma página de login e sessão de login, com cadastro e esqueci minha senha.'
        },
        {
            title: 'Pagina CRUD',
            link: '#Projects',
            icons: [IconHtml, IconCss, IconBootStrap, IconJquery, IconJs],
            description: 'Pagina CRUD usando os métodos GET, POST, PUT e DELETE usando o XMLHttprequest.'
        },
    ]
    return (
        <section id="Projects" className="flex flex-col h-5/6 px-4">
            <h1 className={`
                flex items-center justify-center text-3xl font-bold
                text-gray-200 dark:text-black h-1/5 pt-16
            `}>
                <i>{IconProjects}</i>&nbsp;Projetos
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center h-4/5">
                <img src="./images/projects.png" alt="imagem" className="hidden extraBig:hidden extraBig:h-full md:flex md:w-1/3 md:h-full"/>
                <div className="flex flex-col items-center justify-center w-full md:w-2/3">
                    {projects.map((project, index) => 
                        <ProjectCard key={index} title={project.title} link={project.link} icons={project.icons} 
                        description={project.description} />)
                    }  
                </div>
            </div>
        </section>
    )
}