import { atom } from "recoil";

export const isLogedIn = atom<boolean>({
  key: "login",
  default: false,
});
