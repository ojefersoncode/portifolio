"use client"
import { useEffect } from "react";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Plataforma de templates e assets",
    description: "Em produçao",
    tech: ["Next.js", "Typescript", "Supabase", "Tailwind css"],
    link: "https://cooderfy.com",
    imagem: "/cooderfy.png",
    repo: "https://github.com/ojefersoncode/Percentual-app",
  },
  {
    title: "E-commerce",
    description: "Em desenvolvimento...",
    tech: ["Next js", "TypeScript", "supabase", "Tailwind css"],
    link: "https://leptrumapp.vercel.app/",
    imagem: "/leptrum.png",
    repo: "https://github.com/ojefersoncode/Leptrumapp"
  },
  {
    title: "Dashboard",
    description: "Em desenvolvimento...",
    tech: ["Nextjs", "Supabase", "Shadcn ui", "Chart.js"],
    link: "https://ojefersoncode-dashboard-4icbudluh-devindependentes-projects.vercel.app/",
    imagem: "/dashboard.png",
    repo: "https://github.com/ojefersoncode/dashboard"
  },
];

const techStack = [
  {
    name: "React",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    image: "https://img.icons8.com/color/96/nextjs.png",
  },
  {
    name: "TypeScript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind CSS",
    image: "https://img.icons8.com/color/96/tailwind_css.png",
  },
  {
    name: "Supabase",
    image: "https://img.icons8.com/color/48/supabase.png",
  },
  {
    name: "GitHub",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  },
  {
    name: "Node.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Git",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
  },
];

function App() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
        <div className=" mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
           <img src="/logo.png" alt="" className="size-7" />
            <span className="font-bold text-lg">Ojefersoncode</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Section */}
        <section className="flex max-md:flex-wrap max-w-full items-center gap-7 pt-32 pb-16 mx-auto px-4">
          <div className="flex-col w-full justify-center items-center px-4 mx-auto " data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Desenvolvedor Front-end
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Compromisso sério para entregar a melhor qualidade em sua
              aplicação.
            </p>
            <div className="flex gap-4 mt-8">
              <Button
                variant="default"
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Mail className="mr-2 h-4 w-4" /> Baixar cv
              </Button>
              <Button variant="outline">
                <a href="https://github.com/ojefersoncode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center">
                  <Github className="mr-2 h-4 w-4" />GitHub
                </a>
              </Button>
              <Button variant="outline" >
                <a href="https://br.linkedin.com/in/jeferson-vidal-440a40280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center">
                  <Linkedin className="mr-2 h-4 w-4" />LinkedIn
                </a>
                
              </Button>
            </div>
          </div>
          <div className="flex w-full justify-center items-center ">
            <img src="/jeferson.jpg" alt="jeferson" className="w-[450px] rounded-xl" />
          </div>
        </section>

        <Separator className="bg-purple-200 dark:bg-purple-800/30" />

        {/* About Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center mb-8">Sobre</h2>
            <Card className="p-6 space-y-4">
              <p className="text-lg leading-relaxed">
                Olá, meu nome é Jeferson, sou programador front-end, já estou a
                mais de 2 anos estudando e trabalhando com tecnologias para
                desenvolvimento web.
              </p>
              <p className="text-lg leading-relaxed">
                Meu objetivo é sempre somar e alinhar as melhores tecnologias
                com ideias inovadoras, entregarando aplicações de alto qualidade
                e segurança, estamos em uma era onde o design e a qualidade é a
                velocidade, são os aspectos mais importantes para gerar impacto
                para os usuarios e gerar leads para empreas, conte comigo para
                desenvolver, discutir e colaborar para ter o melhor para sua
                empresa ou startup!
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                  Inovação e tecnologia
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                  Engenheiro de produto
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                  Designing responsivo
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                  Performance e otimização
                </span>
              </div>
            </Card>
          </div>
        </section>

        <Separator className="bg-purple-200 dark:bg-purple-800/30" />

        {/* Tech Stack Section */}
        <section className="py-16 overflow-hidden">
          <h2
            className="text-3xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Minha Stack
          </h2>
          <div className="relative">
            <div className="flex space-x-12 animate-infinite-scroll">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 min-w-[100px]"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-slate-300 rounded-xl p-2 shadow-md">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="bg-purple-200 dark:bg-purple-800/30" />

        {/* Projects Section */}
        <section className="py-16 container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Aqui estão alguns de meus projetos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {project.description}
                </p>
                <img
                  src={project.imagem}
                  alt="Imagem do projeto"
                  className="py-2 rounded-lg mt-3"
                />
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between w-full items-center py-4 mt-3">
                  {" "}
                  <Button
                    variant="ghost"
                    className=" text-purple-600 hover:text-purple-700 hover:bg-purple-100 dark:hover:bg-purple-900/30"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver projeto <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant={"outline"} className="border-purple-700">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Github
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
            <img src="/logo.png" alt="" className="size-7" />
              <span className="font-medium">Ojefersoncode</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/ojefersoncode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-600 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jeferson-vidal-440a40280"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="ojefersoncode@gmail.com"
                className="text-muted-foreground hover:text-purple-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ojefersoncode. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
