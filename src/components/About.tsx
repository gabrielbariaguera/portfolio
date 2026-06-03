import { motion } from "framer-motion";
import Gabriel2 from "../img/bodyPhoto.png";
import Fire from "../img/image.png";
import ScrollReveal from "./ScrollReveal";

export default function About() {
    return(
        <div className="relative flex min-h-screen flex-col items-center justify-between gap-10 overflow-hidden bg-[#F1E194] px-6 pt-12 md:flex-row md:gap-16 md:px-16 lg:px-24">
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-[#5B0E14]/10 blur-3xl"
                animate={{ y: [0, 18, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <ScrollReveal className="flex max-w-2xl flex-col justify-center text-[#5B0E14] md:w-1/2" direction="left" delay={0.1}>
                <h1 className="pb-8 text-center text-4xl sm:text-6xl md:text-left md:text-[80px]">About me</h1>
                <p className="text-center text-base leading-relaxed sm:text-lg md:w-[90%] md:text-left md:text-[20px]">
                    I'm a technology enthusiast, my passion emerged when I was a just a little boy, always playing games and discovering about the new technologies that were emerging. Approximately 2 years ago, I joined this vast ocean that is IT, this “short” period awakened a thirst to learn more each day. My life inspiration is Jesus, for Him I spend my life every day, He is my best friend. So I hope you found it interesting it would be gratifying to meet you.
                </p>
            </ScrollReveal>
            <ScrollReveal className="relative flex w-full items-end justify-center self-end md:w-1/2 md:items-end md:justify-center md:self-end" direction="right" delay={0.2}>
                <img className="w-[320px] sm:w-105 md:w-145 lg:w-170" src={Fire} alt="Fire background" />
                <motion.img
                    className="absolute bottom-0 w-45 sm:w-60 md:w-85 lg:w-97.5"
                    src={Gabriel2}
                    alt="Gabriel photo"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
            </ScrollReveal>
        </div>
    )
}