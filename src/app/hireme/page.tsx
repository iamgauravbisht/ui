import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hire Me",
  description: "Hire Me for projects, jobs :-  @iamgauravbisht ❤  ",
};

export default function page() {
  return (
    <main className="w-full h-full flex flex-row gap-2 rounded-xl border border-black shadow-2xl bg-[#FC6736] ">
      <div className="rounded-2xl h-full bg-gray-50">
        <Image
          src={"/assets/hireme/one.png"}
          alt="img"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-10 p-4 w-full h-full flex-1">
        <div>
          <h1 className="text-4xl font-bold text-blue-500">Get in Touch</h1>
          <h3 className="text-lg">Any question or remarks? Let us know!</h3>
        </div>
        <form action="" className="flex flex-1 flex-col gap-5 justify-between ">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter Your Name"
            className="py-2 px-2 rounded-lg max-w-[300px] shadow-md focus:outline-blue-500"
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter Your Email"
            className="py-2 px-2 rounded-lg max-w-[300px] shadow-md focus:outline-blue-500"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Type your message here."
            className="py-2 px-2 rounded-lg w-full h-40 shadow-md focus:outline-blue-500"
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none  w-fit self-center shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
