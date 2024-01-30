// import person from "@/assets/home/person.png";
import Image from "next/image";
import Link from "next/link";
import Ui from "@/components/home/uibox";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen bg-home bg-cover bg-left bg-no-repeat relative flex flex-col items-center">
      <div className="flex flex-col justify-center w-full items-center bg-planet bg-no-repeat py-7">
        <h1 className="text-5xl font-bold mr-7 ml-2  sm:text-center bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent inline-block drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Welcome to my UI project website
        </h1>
        <h2 className="text-3xl font-semibold text-white text-center hover:underline hover:decoration-sky-500 hover:decoration-wavy hover:underline-offset-4 ease-out duration-300 ">
          I am a full-stack web developer
        </h2>
        <Link href="/hireme">
          <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold shadow-md shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/50 px-4 py-2 rounded-lg mt-4">
            Hire Me
          </button>
        </Link>
      </div>
      <div className="w-4/5 h-[500px] flex flex-row flex-wrap justify-center cursor-pointer">
        <Ui />
      </div>
      <Image
        src="/assets/home/person.png"
        alt="bg"
        priority={true}
        className="absolute bottom-0 right-0 w-[25%] md:w-[15%] "
        width="0"
        height="0"
        sizes="100vw"
      />
    </main>
  );
}
