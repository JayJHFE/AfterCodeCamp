import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
export const isEditState = atom({
  key: "isEditState",
  default: false,
});
