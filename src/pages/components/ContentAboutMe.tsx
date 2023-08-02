
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
          <h1 className="text-4xl font-semibold">Sobre&nbsp;</h1>
          <h1 className="text-4xl font-semibold text-blue-400">min</h1>
        </div>
        <div className="p-2">
          <p>
            Sou um <strong>desenvolvedor Web</strong>, em busca da minha primeira oportunidade.<br />
            curso ADS(Analise e desenvolvimento de sistemas),<br />
            me considero uma pessoa responsável, esforçada e resiliente.<br />
            <br />
            Possuo conhecimento sobre algumas linguagens e frameworks, além de ferramentas de auxilio.<br />
            <br />
            Linguagens:<br />
            <strong className="text-gray-700">#JavaScript</strong>, <strong className="text-gray-700">#HTML</strong>, <strong className="text-gray-700">#CSS</strong>, <strong className="text-gray-700">#PHP</strong> e <strong className="text-gray-700">#Python</strong>.<br />
            <br />
            Ferramentas de desenvolvimento:<br />
            <strong className="text-gray-700">#ReactJs</strong>, <strong className="text-gray-700">#NextJs</strong>, <strong className="text-gray-700">#Tailwind</strong>, <strong className="text-gray-700">#TypeScript</strong>, <strong className="text-gray-700">#VueJs</strong>, <strong className="text-gray-700">#Bootstrap</strong>, <strong className="text-gray-700">#Git/GitHub</strong>, <strong className="text-gray-700">#Jquery</strong> e <strong className="text-gray-700">#NodeJs</strong>.<br />
            <br />
            Banco de dados / container:<br />
            <strong className="text-gray-700">#MySQL</strong>,  <strong className="text-gray-700">#MongoDB</strong>, <strong className="text-gray-700">#PosgresSQL</strong>, <strong className="text-gray-700">#Firebase</strong> e <strong className="text-gray-700">#Docker</strong>.<br />
            <br />
            Ferramentas adicionais:<br />
            <strong className="text-gray-700">Inglês(nível técnico)</strong> - Venho estudando e adquirindo conhecimento para alcançar a fluência na lingua.<br />
            <strong className="text-gray-700">Photoshop(nível técnico)</strong> - Capaz de criar marcas e logos simples, além de edição e criação de imagens.<br />
          </p>
        </div>
      </motion.div>
    </div>
  )
}