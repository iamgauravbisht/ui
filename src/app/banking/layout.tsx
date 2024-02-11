"use client";
import Header from "@/components/banking/header";
import { RecoilRoot } from "recoil";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-white flex flex-col h-screen w-screen ">
      <RecoilRoot>
        <Header />
        <div className="flex-1 p-5 flex justify-center overflow-y-scroll ">
          {children}
        </div>
      </RecoilRoot>
    </div>
  );
}
