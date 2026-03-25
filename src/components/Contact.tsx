import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function Contact() {
    return(
        <div className="relative flex min-h-screen flex-col bg-[#F1E194] md:flex-row">
            <div className="w-full p-6 sm:p-10 md:w-[75vw] md:p-15">
                <h1 className="text-4xl text-[#5B0E14] sm:text-5xl md:text-[60px]">Contact me</h1>
                <form className="flex max-w-2xl flex-col gap-5 pt-6 sm:gap-6 md:pl-20 md:pt-10" action="/">
                    <input className="h-13 w-full rounded-[10px] border bg-white px-4 md:h-[6vh] md:w-[30vw]" type="text" name="name" id="name" placeholder="Name" />
                    <input className="h-13 w-full rounded-[10px] border bg-white px-4 md:h-[6vh] md:w-[30vw]" type="text" name="email" id="email" placeholder="Email" />
                    <input className="h-40 w-full rounded-[10px] border bg-white px-4 md:h-[20vh] md:w-[30vw]" type="text" name="msg" id="msg" placeholder="Type your text here..." />
                    <input className="h-13 rounded-[10px] bg-[#5B0E14] text-[#F1E194] md:h-[6vh] md:w-[30vw]" type="submit" value="Submit" />
                </form>
            </div>
            <div className='flex w-full flex-row items-center justify-center gap-8 bg-[#5B0E14] py-8 text-[#F1E194] sm:gap-10 md:absolute md:right-0 md:top-0 md:h-screen md:w-[25vw] md:flex-col md:gap-15 md:py-0'>
                    <a target="blank" href="https://www.instagram.com/gabriel_aguera_/">
                        <FaInstagram className="size-10 sm:size-12 md:size-20 lg:size-25 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"/>
                    </a>
                    <a target="blank" href="https://www.linkedin.com/in/gabriel-aguera-baria-435058295/">
                        <FaLinkedin className="size-10 sm:size-12 md:size-20 lg:size-25 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"/>
                    </a>
                    <a target="blank" href="https://github.com/gabrielbariaguera">
                        <IoLogoGithub className="size-10 sm:size-12 md:size-20 lg:size-25 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"/>
                    </a>
                    <a target="blank" href="">
                        <FaWhatsapp className="size-10 sm:size-12 md:size-20 lg:size-25 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"/>
                    </a>
            </div>
        </div>
    );
}