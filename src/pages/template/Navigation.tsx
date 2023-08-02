import Link from "next/link";
import { IconGitHubNeutrall, IconLinkedin } from "../../../public/icons";
import ButtonCircle from "../components/ButtonCircle";
import ButtonTheme from "../components/ButtonTheme";
import ButtonToggle from "../components/ButtonToggle";
import LayoutNavigation from "../components/LayoutNavigation";
import NavDesktop from "../components/NavDesktop";

export default function Navigation() {
  // Template que serve de layout para inserir todos os componentes do menu de navegador
  return (
    <LayoutNavigation>
      <div className="flex flex-col absolute items-end h-32 w-1/5 right-0 top-0 mt-12 gap-1 pt-2 pr-4 z-10">
        <Link href={'https://www.linkedin.com/in/euzebio-batista/'}>
          <ButtonCircle name='Linkedin' color='blue' icon={IconLinkedin} />
        </Link>
        <Link href={'https://github.com/EuzebioBatista2'}>
          <ButtonCircle name='GitHub' color='orange' icon={IconGitHubNeutrall} />
        </Link>
      </div>
      <div className="flex justify-start items-center md:w-1/5 h-full px-4 w-1/2">
        <div className="md:hidden">
          <ButtonToggle />
        </div>
      </div>
      <div className="hidden md:flex w-full items-center justify-center md:gap-3 lg:gap-6 z-10">
        <NavDesktop href="home" name="Página Inicial" />
        <NavDesktop href="aboutMe" name="Sobre mim" />
        <NavDesktop href="curriculo" name="Curriculo" />
        <NavDesktop href="skills" name="Habilidades" />
        <NavDesktop href="projects" name="Projetos" />
        <NavDesktop href="comments" name="Comentários" />
      </div>
      <div className="flex justify-end items-center md:w-1/5 w-1/2 h-full px-4 z-10">
        <ButtonTheme />
      </div>
    </LayoutNavigation>
  )
}