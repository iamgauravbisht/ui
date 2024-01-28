import { atom } from "recoil";

type SidebarOpenType = boolean;

export const sidebarOpen = atom<SidebarOpenType>({
  key: "sidebarOpen",
  default: false,
});
