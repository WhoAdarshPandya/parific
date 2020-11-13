import { atom } from "recoil";
import { v4 } from "uuid";

export const userAtom = atom({
  key: v4(),
  default: null,
  dangerouslyAllowMutability: true,
});
