"use client";
import Sidebar from "@/components/tesladashboard/sidebar";
import Header from "@/components/tesladashboard/header";
import { RecoilRoot } from "recoil";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row gap-2 w-screen h-screen bg-gray-50">
      <RecoilRoot>
        <Sidebar />
        <div className="flex-grow p-1 sm:p-2 md:p-3 lg:p-4 pb-10 overflow-y-scroll">
          <Header />
          {children}
        </div>
      </RecoilRoot>
    </div>
  );
}
