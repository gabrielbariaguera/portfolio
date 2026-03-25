import Gabriel2 from "../img/bodyPhoto.png";
import Fire from "../img/image.png";

export default function About() {
    return(
            <div className="flex min-h-screen flex-col gap-8 bg-[#F1E194] p-6 md:flex-row md:gap-0 md:p-0">
                <div className="flex-col text-[#5B0E14] md:w-[45vw] md:pl-25 md:pt-20">
                    <h1 className="text-4xl sm:text-6xl md:text-[80px] pb-10">About me</h1>
                    <p className="text-base leading-relaxed sm:text-lg md:text-[20px] md:w-[35vw]">I'm a technology enthusiast, my passion emerged when I was a just a little boy, always playing games and discovering about the new technologies that were emerging. Approximately 2 years ago, I joined this vast ocean that is IT, this “short” period awakened a thirst to learn more each day. My life inspiration is Jesus, for Him I spend my life every day, He is my best friend. So I hope you found it interesting it would be gratifying to meet you.</p>
                </div>
                <div className="relative flex w-full items-end justify-center md:w-[45vw] md:pl-20">
                    <img className="w-75 sm:w-105 md:w-155" src={Fire} alt="Fire background" />
                    <img className="absolute bottom-0 w-45 sm:w-60 md:w-95 md:pl-4.5" src={Gabriel2} alt="Gabriel photo" />
                </div>
            </div>
    )
}