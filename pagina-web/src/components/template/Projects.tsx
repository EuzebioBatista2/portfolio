import { IconBootStrap, IconCss, IconHtml, IconJquery, IconMySql, IconPhp, IconProjects, IconReactM } from "../../../public/icons";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const projects = [
        {
            title: 'Calculadora React',
            link: 'https://calculadora-react-ar8q.vercel.app/',
            icons: [IconReactM],
            description: 'Calculadora desenvolvida com a funcionalidade de auxiliar e permitir apenas equações validas.'
        },
        {
            title: 'Pagina Web PHP',
            link: '#',
            icons: [IconHtml, IconCss, IconPhp, IconMySql],
            description: 'Projeto para representar uma página de login e sessão de login, com cadastro e esqueci minha senha.'
        },
        {
            title: 'Pagina CRUD',
            link: '#',
            icons: [IconHtml, IconCss, IconBootStrap, IconJquery],
            description: 'Pagina CRUD usando os métodos GET, POST, PUT e DELETE usando o XMLHttprequest.'
        },
    ]
    return (
        <section id="Projects" className="h-[560px] px-4 pt-16">
            <h1 className={`
                flex items-center justify-center text-3xl font-bold
                text-gray-200 dark:text-black
            `}>
                <i>{IconProjects}</i> &nbsp; Projetos
            </h1>
            <div className="flex flex-col items-center justify-center h-[500px]">
                {projects.map((project, index) => 
                    <ProjectCard key={index} title={project.title} link={project.link} icons={project.icons} 
                    description={project.description} />)
                }  
            </div>
        </section>
    )
}