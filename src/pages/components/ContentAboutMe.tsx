
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ContentAboutMe() {

  const [ref13, inView13] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Conteúdo que leva as informações sobre min
  return (
    <div className="w-full h-full px-2">
      <motion.div ref={ref13} initial={{ opacity: 0, x: -50 }} animate={{ opacity: inView13 ? 1 : 0, x: inView13 ? 0 : 50 }} transition={{ duration: 0.5 }}>
        <div className="flex py-4 px-2">
          <h2 className="text-4xl font-semibold">Sobre&nbsp;</h2>
          <h2 className="text-4xl font-semibold text-blue-400">mim</h2>
        </div>
        <div className="p-2">
          <p>
            Olá! Meu nome é <strong>Euzebio</strong>, sou um entusiasta da tecnologia e <strong>DESENVOLVEDOR FULL-STACK</strong> apaixonado por transformar ideias em realidade digital. Com uma sólida formação e uma sede insaciável de aprendizado, estou sempre em busca de novas oportunidades.<br />
            <br />
            Atualmente, curso <strong>Análise e Desenvolvimento de Sistemas</strong> com previsão de conclusão em julho de 2025. Sou uma pessoa esforçada e focada, sempre buscando adquirir novos conhecimentos além da faculdade, realizando cursos na plataforma Udemy e melhorando meus conhecimentos sobre <strong>React</strong>, <strong>React Native</strong>, <strong>Laravel</strong>, <strong>Node.js</strong>, <strong>PHP</strong> e outras tecnologias. Sou adaptável, comunicativo e tenho uma forte capacidade de resolução de problemas.<br /> 
            <br />
            Além do conhecimento em desenvolvimento, possuo uma base sólida em edição de imagens e prototipação, utilizando ferramentas como <strong>Photoshop</strong>, <strong>Figma</strong> e <strong>Canva</strong>. Gosto de trabalhar em equipe e sou criativo, sempre contribuindo com novas ideias e soluções para os projetos.
          </p>
        </div>
      </motion.div>
    </div>
  )
}