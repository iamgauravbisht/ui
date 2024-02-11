"use client";
import Image from "next/image";
import { isLogedIn } from "@/store/banking/atoms";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";

export default function Header() {
  const [loggedIn, setLoggedIn] = useRecoilState(isLogedIn);
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    console.log("hadleLogout");
    setLoggedIn(false);
  };

  return (
    <header>
      <div className="flex flex-row justify-between items-center p-4 bg-black text-white relative">
        <div className="flex flex-row gap-2 items-center">
          <div className="text-2xl font-bold">100xDevs Bank</div>
        </div>

        <div className="absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 hidden sm:block">
          <Image
            src="/assets/banking/logo.svg"
            alt="bankLogo"
            width={30}
            height={30}
            className=" fill-white"
          />
        </div>

        <div className="flex flex-row gap-4 items-center">
          {loggedIn && (
            <div className="flex flex-row gap-2 items-center">
              <div className="text-sm">Welcome back, Gaurav </div>
              <div
                className="flex items-center justify-center w-8 h-8 bg-black rounded-full text-white border-2 border-white  relative cursor-pointer logout"
                onClick={() => setShowLogout((p) => !p)}
              >
                <div className="text-sm">GB</div>
                <div
                  className={`absolute -bottom-[150%] right-0 bg-gray-500 hover:bg-gray-900 py-2 px-3 rounded-md border border-white ${
                    showLogout ? "flex" : "hidden"
                  }`}
                >
                  <button className="text-sm text-bold " onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}

          {!loggedIn && (
            <button
              className="bg-gray-500 hover:bg-gray-900 py-1 px-4 rounded-md border border-white text-bold text-sm"
              onClick={() => {
                setLoggedIn(true);
              }}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
