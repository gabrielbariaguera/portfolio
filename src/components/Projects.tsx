import docsemefImg from "../img/Plataforma-de-gestion-documental.jpg";
import granjaImg from "../img/pngtree-farm-in-the-countryside-in-the-fall-picture-image_2774641.jpg";
import disneyImg from "../img/Walt_Disney_Logo_Design_History_Evolution_0_1024x1024.webp";
import jogoImg from "../img/br-11134207-7qukw-lk1mf2cuhnyi10.jfif";
import ScrollReveal from "./ScrollReveal";

const projects = [
    {
        href: "https://docsemef.vercel.app/",
        title: "DocsEMEF",
        image: docsemefImg,
        alt: "DocsEMEF",
    },
    {
        href: "https://granjacema.vercel.app/",
        title: "Granjacema",
        image: granjaImg,
        alt: "Granjacema",
    },
    {
        href: "https://projeto-disney-api.vercel.app/",
        title: "Disney API",
        image: disneyImg,
        alt: "Disney API",
    },
    {
        href: "https://jogo-da-velha-nine-delta.vercel.app/bot.html",
        title: "Tic-tac-toe",
        image: jogoImg,
        alt: "Jogo da velha",
    },
];

export default function Projects() {
    return(
        <div className="min-h-screen bg-[#5B0E14] px-6 py-10 sm:px-10 md:px-16 lg:px-20">
            <ScrollReveal className="pb-10 text-center text-[#F1E194]" direction="up">
                <h1 className="text-[60px] leading-none sm:text-[72px] md:text-[84px]">Projects</h1>

            </ScrollReveal>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                {projects.map((project, index) => (
                    <ScrollReveal key={project.title} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.08} amount={0.2}>
                        <a
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative block h-[28vh] min-h-72 overflow-hidden rounded-2xl border border-[#F1E194]/70 shadow-[0_24px_60px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:-translate-y-2 md:h-[35vh]"
                        >
                            <img
                                src={project.image}
                                alt={project.alt}
                                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:blur-[1px]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#5B0E14]/90 via-[#5B0E14]/30 to-transparent opacity-85 transition duration-500 group-hover:opacity-100" />
                            <h2
                                className="absolute inset-0 flex items-center justify-center text-center text-3xl font-bold tracking-wide text-[#F1E194] transition-transform duration-500 group-hover:-translate-y-2 sm:text-4xl"
                                style={{ WebkitTextStroke: "1px #F1E194" }}
                            >
                                {project.title}
                            </h2>
                        </a>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    )
}