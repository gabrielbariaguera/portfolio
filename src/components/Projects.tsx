import docsemefImg from "../img/Plataforma-de-gestion-documental.jpg";
import granjaImg from "../img/pngtree-farm-in-the-countryside-in-the-fall-picture-image_2774641.jpg";
import disneyImg from "../img/Walt_Disney_Logo_Design_History_Evolution_0_1024x1024.webp";
import jogoImg from "../img/br-11134207-7qukw-lk1mf2cuhnyi10.jfif";

export default function Projects() {
    return(
        <>
            <div className="h-screen bg-[#5B0E14]">
                <h1 className="text-[#F1E194] text-[60px] text-center pt-[25px] pb-[25px]">Projects</h1>
                <div className="grid grid-cols-[40vw_40vw] gap-x-10 gap-y-10 justify-center">
                    <a href="https://docsemef.vercel.app/" className="relative block border border-[#F1E194] rounded-[10px] h-[35vh] w-[40vw] overflow-hidden group cursor-pointer">
                        <img src={docsemefImg} alt="DocsEMEF" className="absolute inset-0 w-full h-full object-cover blur-[3px]" />
                        <h2 className="absolute inset-0 flex items-center justify-center text-[#F1E194] text-2xl font-bold z-10 transition-transform duration-300 group-hover:-translate-y-2" style={{WebkitTextStroke: "1px #F1E194"}}>DocsEMEF</h2>
                    </a>
                    <a href="https://granjacema.vercel.app/" className="relative block border border-[#F1E194] rounded-[10px] h-[35vh] w-[40vw] overflow-hidden group cursor-pointer">
                        <img src={granjaImg} alt="Granjacema" className="absolute inset-0 w-full h-full object-cover blur-[3px]" />
                        <h2 className="absolute inset-0 flex items-center justify-center text-[#F1E194] text-2xl font-bold z-10 transition-transform duration-300 group-hover:-translate-y-2" style={{WebkitTextStroke: "1px #F1E194"}}>Granjacema</h2>
                    </a>
                    <a href="https://disney-api-projeto.vercel.app/" className="relative block border border-[#F1E194] rounded-[10px] h-[35vh] w-[40vw] overflow-hidden group cursor-pointer">
                        <img src={disneyImg} alt="Disney API" className="absolute inset-0 w-full h-full object-cover blur-[3px]" />
                        <h2 className="absolute inset-0 flex items-center justify-center text-[#F1E194] text-2xl font-bold z-10 transition-transform duration-300 group-hover:-translate-y-2" style={{WebkitTextStroke: "1px #F1E194"}}>Disney API</h2>
                    </a>
                    <a href="" className="relative block border border-[#F1E194] rounded-[10px] h-[35vh] w-[40vw] overflow-hidden group cursor-pointer">
                        <img src={jogoImg} alt="Jogo da velha" className="absolute inset-0 w-full h-full object-cover blur-[3px]" />
                        <h2 className="absolute inset-0 flex items-center justify-center text-[#F1E194] text-2xl font-bold z-10 transition-transform duration-300 group-hover:-translate-y-2" style={{WebkitTextStroke: "1px #F1E194"}}>Jogo da velha</h2>
                    </a>
                </div>
            </div>
        </>
    )
}