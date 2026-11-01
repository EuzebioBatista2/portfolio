import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import ActionIcon from "./components/ActionIcon";
import RegisterComments from "./components/RegisterComments";

type Comment = {
  id: string;
  name: string;
  comment: string;
  avatar?: string;
  createdAt?: string;
};

const projects = [
  {
    number: "01",
    type: "Aplicação web",
    title: "Car Control",
    color: "sage",
    description:
      "Gestão de clientes, veículos e revisões com painel para acompanhar os dados.",
    stack: "Laravel · Vue.js · PostgreSQL",
    href: "https://carcontrol.great-site.net",
  },
  {
    number: "02",
    type: "Produtividade",
    title: "DevNotes",
    color: "blue",
    description:
      "Aplicação de anotações acessível em diferentes dispositivos, criada para organizar ideias e referências.",
    stack: "React · Styled Components · Node.js",
    href: "https://my-dev-notes.vercel.app",
  },
  {
    number: "03",
    type: "Gestão comercial",
    title: "My Commerce",
    color: "sand",
    description:
      "Ferramenta para apoiar pequenos comerciantes no controle de vendas.",
    stack: "React · TypeScript",
    href: "https://my-commerce-euzebiobatista2.vercel.app",
  },
  {
    number: "04",
    type: "Produtividade",
    title: "Crono Todo List",
    color: "lavender",
    description:
      "Lista de tarefas responsiva com cartões, histórico, recorrência e prazos para organizar projetos e atividades.",
    stack: "JavaScript · CSS",
    href: "https://crono-todo-list.vercel.app",
  },
  {
    number: "05",
    type: "Jogo web",
    title: "Vue FlappyBird",
    color: "peach",
    description:
      "Jogo inspirado em Flappy Bird com login, cadastro e ranking global de pontuações.",
    stack: "PHP · Laravel · Vue.js",
    href: "https://vueflappybird.great-site.net",
  },
  {
    number: "06",
    type: "Jogo web",
    title: "Azura Tactics",
    color: "mint",
    description:
      "RPG tático web em estilo 8-bit com batalhas por turnos, classes de personagens e partidas online.",
    stack: "JavaScript · CSS · Multiplayer",
    href: "https://azura-tactics.vercel.app",
  },
];

const experiences = [
  {
    date: "09/2024 — atual",
    title: "Desenvolvedor WordPress",
    company: "LINKNACIONAL",
    detail:
      "Manutenção e evolução de plugins WooCommerce, integrações de pagamento e segurança, APIs em Laravel e otimização de performance.",
  },
  {
    date: "01/2018 — 03/2022",
    title: "Técnico de Informática",
    company: "UNESC",
    detail:
      "Suporte a professores e alunos, manutenção preventiva e corretiva de computadores e notebooks.",
  },
];

const courses = [
  { date: "01/2025", title: "CS50 — Ciência da Computação", provider: "Harvard" },
  { date: "01/2024", title: "Figma: Design de Interfaces do Zero ao Profissional", provider: "Udemy" },
  { date: "08/2023", title: "Desenvolvimento Web Avançado com PHP, Laravel e Vue.js", provider: "Udemy" },
  { date: "06/2023", title: "Curso Completo do Desenvolvedor Node.js e MongoDB", provider: "Udemy" },
  { date: "05/2023", title: "Next.js e React — Curso Completo", provider: "Udemy" },
  { date: "05/2023", title: "Entendendo TypeScript", provider: "Udemy" },
  { date: "04/2023", title: "Git e GitHub Essencial para o Desenvolvedor", provider: "Udemy" },
];

const skills = [
  "WordPress",
  "WooCommerce",
  "PHP",
  "Laravel",
  "React",
  "TypeScript",
  "Node.js",
  "JavaScript",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "AWS",
  "OpenClaw",
  "Hermes Agent",
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentsError, setCommentsError] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    setDark(window.localStorage.getItem("themeMyPortfolio") === "dark");
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    document.documentElement.classList.add("motion-ready");

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/comments", { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error("Não foi possível carregar os comentários.");
        return (await response.json()) as Comment[];
      })
      .then((items) => {
        setCommentsError("");
        setComments(items);
      })
      .catch((error: Error) => {
        if (error.name !== "AbortError") setCommentsError(error.message);
      });

    return () => controller.abort();
  }, [refreshKey]);

  function toggleTheme() {
    setDark((current) => {
      const next = !current;
      window.localStorage.setItem("themeMyPortfolio", next ? "dark" : "light");
      return next;
    });
  }

  return (
    <div className={`site${dark ? " site-dark" : ""}`} id="inicio">
      <Head>
        <title>Euzebio Batista · Desenvolvedor Full-Stack</title>
        <meta
          name="description"
          content="Portfólio de Euzebio Batista, desenvolvedor full-stack com experiência em WordPress, PHP, Laravel e React."
        />
        <meta name="theme-color" content={dark ? "#152323" : "#f5f5ef"} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <header className="site-header">
        <div className="container nav-bar">
          <a className="brand" href="#inicio" aria-label="Euzebio Batista, início">
            euzebio<span>.</span>dev
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#trajetoria">Trajetória</a>
            <a href="#comentarios">Comentários</a>
          </nav>
          <div className="nav-actions">
            <button
              className="theme-toggle"
              type="button"
              aria-label={dark ? "Ativar tema claro" : "Ativar tema escuro"}
              aria-pressed={dark}
              onClick={toggleTheme}
            >
              {dark ? (
                <svg className="theme-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" /></svg>
              ) : (
                <svg className="theme-icon" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
              )}
            </button>
            <a className="button button-outline nav-contact" href="#contato">
              <span className="button-label">Vamos conversar</span><ActionIcon name="contact" />
            </a>
            <details className="mobile-nav">
              <summary aria-label="Abrir navegação">Menu</summary>
              <div className="mobile-nav-links">
                <a href="#sobre">Sobre</a>
                <a href="#projetos">Projetos</a>
                <a href="#trajetoria">Trajetória</a>
                <a href="#comentarios">Comentários</a>
                <a href="#contato">Contato</a>
              </div>
            </details>
          </div>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow"><span className="availability-dot" /> Desenvolvedor Full-Stack</p>
            <h1>Olá, sou<br /><em>Euzebio Batista.</em></h1>
            <p className="hero-intro">
              Transformo necessidades reais em experiências digitais. Trabalho com
              WordPress, PHP, Laravel e aplicações web modernas — do back-end à interface.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos"><span className="button-label">Conheça meu trabalho</span><ActionIcon name="projects" /></a>
              <a className="button button-outline" href="#contato"><span className="button-label">Entre em contato</span></a>
            </div>
            <div className="social-links" aria-label="Perfis profissionais">
              <a href="https://www.linkedin.com/in/euzebio-batista/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://github.com/EuzebioBatista2" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="/curriculo.pdf" target="_blank" rel="noreferrer">Currículo PDF ↗</a>
            </div>
          </div>
          <div className="portrait-wrap" data-reveal>
            <div className="portrait-frame" />
            <Image
              className="portrait"
              src="/profile.jpeg"
              width={400}
              height={400}
              alt="Retrato de Euzebio Batista"
              priority
              sizes="(max-width: 680px) 380px, (max-width: 900px) 40vw, 430px"
            />
            <span className="photo-caption">DESENVOLVIMENTO COM PROPÓSITO</span>
          </div>
        </section>

        <div className="tech-strip" aria-label="Tecnologias principais" data-reveal>
          <div className="container tech-strip-inner">
            <strong>WordPress &amp; WooCommerce</strong><span>PHP · Laravel</span>
            <span>React · TypeScript</span><span>APIs · Integrações</span>
            <span>Aprendizado contínuo</span>
          </div>
        </div>

        <section className="section container about-section" id="sobre" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">01 / Sobre mim</p>
            <h2>Tecnologia que<br />resolve problemas.</h2>
          </div>
          <div className="about-copy">
            <p>
              Sou desenvolvedor full-stack com experiência em <strong>WordPress e WooCommerce</strong>,
              criação e manutenção de plugins, integrações e APIs. Também desenvolvo aplicações
              com Laravel, React e Node.js.
            </p>
            <p>
              Gosto de entender o problema antes de escolher a ferramenta. No dia a dia,
              colaboro com equipes, reviso código e busco entregar soluções claras, seguras
              e fáceis de manter.
            </p>
            <p>
              Também estudo serviços da <strong>AWS</strong> e exploro automação com agentes de IA,
              incluindo <strong>OpenClaw</strong> e <strong>Hermes Agent</strong>.
            </p>
            <div className="skill-list" aria-label="Tecnologias e competências">
              {skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section className="projects-section" id="projetos">
          <div className="container section projects-inner">
            <div className="section-title-row">
              <div><p className="eyebrow">02 / Projetos selecionados</p><h2>Feito na prática.</h2></div>
              <a className="button button-outline" href="https://github.com/EuzebioBatista2" target="_blank" rel="noreferrer"><span className="button-label">Ver GitHub</span><ActionIcon name="code" /></a>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <a
                  className={`project-card project-card-${project.color}`}
                  key={project.number}
                  data-reveal
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir ${project.title} em nova aba`}
                >
                  <div>
                    <div className="project-meta"><span>{project.number} / {project.type}</span></div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-footer"><span>{project.stack}</span></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section container career-section" id="trajetoria" data-reveal>
          <div className="career-intro">
            <p className="eyebrow">03 / Trajetória</p>
            <h2>Experiência<br />profissional.</h2>
            <p>Minha atuação profissional em suporte técnico e desenvolvimento web.</p>
            <a className="button button-outline" href="/curriculo.pdf" target="_blank" rel="noreferrer"><span className="button-label">Abrir currículo</span><ActionIcon name="resume" /></a>
          </div>
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-entry" key={experience.title}>
                <time>{experience.date}</time>
                <div><h3>{experience.title} <span>· {experience.company}</span></h3><p>{experience.detail}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="education-section" id="formacao">
          <div className="container section" data-reveal>
            <div className="section-title-row">
              <div><p className="eyebrow">04 / Formação e cursos</p><h2>Estudos em tecnologia.</h2></div>
            </div>
            <div className="education-grid">
              <article className="education-card">
                <p className="eyebrow">Formação superior</p>
                <h3>Análise e Desenvolvimento de Sistemas</h3>
                <p>Estácio</p>
                <time>01/2023 — 06/2025</time>
              </article>
              <div className="course-list" aria-label="Cursos complementares">
                {courses.map((course) => (
                  <article className="course-entry" key={course.title}>
                    <time>{course.date}</time>
                    <div><h3>{course.title}</h3><p>{course.provider}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="comments-section" id="comentarios">
          <div className="container section" data-reveal>
            <div className="section-title-row comments-title">
              <div><p className="eyebrow">05 / Comentários</p><h2>Vamos trocar uma ideia.</h2></div>
              <p>Seu feedback ajuda a melhorar este portfólio. Deixe uma mensagem sobre os projetos ou compartilhe uma sugestão.</p>
            </div>
            <div className="comments-layout">
              <RegisterComments onSubmitted={() => setRefreshKey((key) => key + 1)} />
              <div className="comment-feed" aria-live="polite">
                {commentsError && <p className="form-error" role="alert">{commentsError}</p>}
                {!commentsError && comments.length === 0 && <p className="comment-empty">Ainda não há comentários. Seja o primeiro a deixar um feedback.</p>}
                {comments.map((comment) => (
                  <article className="comment-card" key={comment.id}>
                    <Image src={comment.avatar || "/userUnknown.webp"} width={48} height={48} alt="" className="comment-avatar" unoptimized={Boolean(comment.avatar?.startsWith("data:"))} />
                    <div><h3>{comment.name}</h3><p>{comment.comment}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="container contact-inner" data-reveal>
            <div><p className="eyebrow">06 / Contato</p><h2>Tem um projeto em mente?</h2><p>Estou aberto a conversar sobre desafios e oportunidades.</p></div>
            <a className="button button-primary" href="mailto:euzebio.batista2@gmail.com"><span className="button-label">Fale comigo</span><ActionIcon name="contact" /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Euzebio Batista</span>
          <div><a href="https://www.linkedin.com/in/euzebio-batista/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/EuzebioBatista2" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:euzebio.batista2@gmail.com">Email</a></div>
        </div>
      </footer>
    </div>
  );
}
