"use client";
import Link from "next/link";
import Image from "next/image";
// import main from "../../assets/tesladashboard/main.png";
// import close from "../../assets/home/close.svg";
// import openLink from "../../assets/home/link.svg";
import { useRef } from "react";

export default function Uibox() {
  const link = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);

  const showModal = () => {
    card.current?.classList.add(
      "block",
      "z-10",
      "flex",
      "flex-col",
      "justify-center",
      "items-center"
    );
    card.current?.classList.remove("hidden");
    link.current?.classList.add("hidden");
  };

  const closeModal = () => {
    card.current?.classList.remove(
      "block",
      "z-10",
      "flex",
      "flex-col",
      "justify-center",
      "items-center"
    );
    card.current?.classList.add("hidden");
    link.current?.classList.remove("hidden");
  };

  return (
    <div className="w-48 h-fit m-2 border rounded-lg  hover:shadow-xl hover:shadow-cyan-500/50 ease-out duration-300 hover:border-none flex flex-col items-center">
      <Link href="/tesladashboard">
        <Image src="/assets/tesladashboard/main.png" alt="tesla" />
      </Link>
      <div className="flex flex-row gap-2 justify-center items-center w-full">
        <p className="text-white text-sm font-bold ">Tesla Dashboard</p>
        <Link href={"/tesladashboard"}>
          <Image
            src="/assets/home/link.svg"
            alt="link"
            width={20}
            height={20}
          />
        </Link>
      </div>
      <button
        type="button"
        className="w-4/5 text-center text-nowrap text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 my-3 hover:border-white hover:border-2"
        onClick={showModal}
      >
        See UI
      </button>

      <div
        className="w-3/6 min-w-72 h-fit p-3 bg-black bg-opacity-50 rounded-lg hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ease-out duration-300 "
        ref={card}
      >
        <div className="flex flex-row gap-2 justify-center items-center relative w-full">
          <p className="text-white text-lg font-bold ">Tesla Dashboard</p>
          <Link href={"/tesladashboard"}>
            <Image
              src="/assets/home/link.svg"
              alt="link"
              width={25}
              height={25}
            />
          </Link>
          <button onClick={closeModal}>
            <Image
              src="/assets/home/close.svg"
              alt="close"
              className="absolute right-2 top-0 cursor-pointer"
              width={25}
              height={25}
            />
          </button>
        </div>
        <Image src="/assets/tesladashboard/main.png" alt="tesla" />
      </div>
    </div>
  );
}
