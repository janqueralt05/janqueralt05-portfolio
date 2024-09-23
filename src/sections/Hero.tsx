import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import memojiImage from "@/assets/images/memoji-computer.png";

export const HeroSection = () => {
  return (
    <div className="py-32">
      <Analytics />
      <SpeedInsights />
      <div className="container">
        <div className="flex flex-col items-center justify-center">
        <Image src={memojiImage} className="size-[100px]" alt="person" />
      <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 rounded-full size-2.5"></div>
          <div className="text-sm font-medium">Disponible</div>
        </div>
      </div>
      <h1 className="font-serif text-3xl text-center mt-8 tracking-wide">Mejorando dia a dia</h1>
      <p className="mt-4 text-center text-white/60">Soy desarrollador web full stack, me gusta crear aplicaciones web que sean intuitivas y funcionales, me gusta aprender cosas nuevas y trabajar en equipo.</p>
      <div className="flex flex-col items-center mt-8 gap-4">
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
