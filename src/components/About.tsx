import Gabriel2 from "../img/bodyPhoto.png";
import Fire from "../img/image.png";

export default function About() {
    return(
        <div className="flex min-h-screen flex-col items-center justify-between gap-10 bg-[#F1E194] px-6 pt-12 md:flex-row md:gap-16 md:px-16 lg:px-24">
            <div className="flex max-w-2xl flex-col justify-center text-[#5B0E14] md:w-1/2">
                <h1 className="pb-8 text-center text-4xl sm:text-6xl md:text-left md:text-[80px]">About me</h1>
                <p className="text-center text-base leading-relaxed sm:text-lg md:w-[90%] md:text-left md:text-[20px]">
                    I'm a technology enthusiast, my passion emerged when I was a just a little boy, always playing games and discovering about the new technologies that were emerging. Approximately 2 years ago, I joined this vast ocean that is IT, this “short” period awakened a thirst to learn more each day. My life inspiration is Jesus, for Him I spend my life every day, He is my best friend. So I hope you found it interesting it would be gratifying to meet you.
                </p>
            </div>
            <div className="relative flex w-full items-end justify-center self-end md:w-1/2 md:items-end md:justify-center md:self-end">
                <img className="w-[320px] sm:w-[420px] md:w-[580px] lg:w-[680px]" src={Fire} alt="Fire background" />
                <img className="absolute bottom-0 w-[180px] sm:w-[240px] md:w-[340px] lg:w-[390px]" src={Gabriel2} alt="Gabriel photo" />
            </div>
        </div>
    )
}