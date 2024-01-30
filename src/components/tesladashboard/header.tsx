// import Download from "/assets/tesladashboard/Download.png";
// import menu from "/assets/tesladashboard/menu.svg";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import { sidebarOpen } from "@/store/teslaatoms/sidebarAtom";

function Header() {
  const setIsOpen = useSetRecoilState(sidebarOpen);

  return (
    <header className="flex justify-between items-center">
      <div className="flex flex-row justify-center items-center gap-2">
        <button className={`md:hidden`} onClick={() => setIsOpen(true)}>
          <Image
            src="/assets/tesladashboard/menu.svg"
            alt="sidebar"
            width={30}
            height={30}
          />
        </button>
        <h3 className="text-xl font-semibold">Reports</h3>
      </div>
      <button className="flex flex-row justify-center items-center gap-1">
        <Image
          src="/assets/tesladashboard/Download.png"
          alt="download"
          width={20}
          height={20}
        />
        <h5>Download</h5>
      </button>
    </header>
  );
}

export default Header;
