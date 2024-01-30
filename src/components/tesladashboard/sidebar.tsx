import Link from "next/link";
import Image from "next/image";
// import Tesla from "@/assets/tesladashboard/TESLA.png";
// import Bulb from "@/assets/tesladashboard/Bulb.png";
// import Library from "@/assets/tesladashboard/library.png";
// import People from "@/assets/tesladashboard/People.png";
// import Activities from "@/assets/tesladashboard/Activities.png";
// import Setting from "@/assets/tesladashboard/Settings.png";
// import Sam from "@/assets/tesladashboard/sam.png";
// import close from "@/assets/tesladashboard/close.svg";
import { sidebarOpen } from "@/store/teslaatoms/sidebarAtom";
import { useRecoilState } from "recoil";
import { useRef, useEffect } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useRecoilState(sidebarOpen);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleToggleModal = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <aside
      className={`fixed md:sticky top-0 left-0 z-40 w-full  h-[100dvh] min-w-56 md:w-64 flex flex-col transition-transform -translate-x-full md:translate-x-0 bg-transparent/50 md:bg-gray-50 overflow-hidden 
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `}
      aria-label="Sidebar"
    >
      <button
        className={`${isOpen ? "fixed" : "hidden"} top-5 right-4 lg:hidden`}
        onClick={handleToggleModal}
      >
        <Image
          src="/assets/tesladashboard/close.svg"
          alt="close"
          width={30}
          height={30}
        />
      </button>

      <div
        className="flex-1 px-3 py-4 w-56 flex flex-col justify-between overflow-y-auto bg-gray-50 dark:bg-gray-800 "
        ref={modalRef}
      >
        <Link
          href="/tesladashboard"
          className="flex items-center p-2 mx-4 mb-6 mt-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <Image
            src="/assets/tesladashboard/TESLA.png"
            alt="Tesla logo"
            width={150}
            height={50}
            priority={true}
          />
        </Link>
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <Image
                src="/assets/tesladashboard/Bulb.png"
                alt="bulb"
                width={20}
                height={20}
              />
              <span className="inline-flex items-center justify-center px-2 ms-2 text-md font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Report
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <Image
                src="/assets/tesladashboard/library.png"
                alt="Library logo"
                width={20}
                height={20}
              />
              <span className="flex-1 ms-3 whitespace-nowrap">Library</span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                3
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <Image
                src="/assets/tesladashboard/People.png"
                alt="people"
                width={20}
                height={20}
              />
              <span className="flex-1 ms-3 whitespace-nowrap">People</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <Image
                src="/assets/tesladashboard/Activities.png"
                alt="activities"
                width={20}
                height={20}
              />
              <span className="flex-1 ms-3 whitespace-nowrap">Activities</span>
            </Link>
          </li>
          <br />
          <li className="ms-3 text-md ">Support</li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <Image
                src="/assets/tesladashboard/Bulb.png"
                alt="bulb"
                width={20}
                height={20}
              />
              <span className="flex-1 ms-3 whitespace-nowrap">Get Started</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <Image
                src="/assets/tesladashboard/Settings.png"
                alt="Setting"
                width={20}
                height={20}
              />
              <span className="flex-1 ms-3 whitespace-nowrap">Setting</span>
            </Link>
          </li>
        </ul>
        <div className="ml-4 mb-2 mt-10">
          <Image
            src="/assets/tesladashboard/sam.png"
            alt="pic"
            width={30}
            height={30}
          />
          <p className="font-bold ">Sam Wheeler</p>
          <p className="text-sm">samwheeler@example.com</p>
        </div>
      </div>
    </aside>
  );
}
