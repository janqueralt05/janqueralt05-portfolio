import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import memojiImage from "@/assets/images/memoji-computer.png";
import grainImage from "@/assets/images/grain.jpg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0">
      <div className="absolute inset-0 -z-30 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`,
      }}></div>
      <div className="absolute inset-0 size-[700px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
      <Analytics />
      <SpeedInsights />
      <div className="container">
        <div className="flex flex-col items-center justify-center">
        <Image src={memojiImage} className="size-[100px]" alt="person" />
      <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 rounded-full size-2.5"></div>
          <div className="text-sm font-medium">Abierto a tus ideas ✨</div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-3xl text-5xl text-center mt-8 tracking-wide">Construyendo el futuro día tras día...</h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">Soy desarrollador web full stack, me gusta crear aplicaciones web que sean intuitivas y funcionales, me gusta aprender cosas nuevas y trabajar en equipo.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold">Explora mi trabajo</span>
          <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Contactame</span>
          </button>
        </div>
      </div>
    </div>
  );
};
