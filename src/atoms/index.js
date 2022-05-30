import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const favLaunchIdsState = atom({
  key: "favLaunchIdsState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const favLaunchPadIdsState = atom({
  key: "favLaunchPadIdsState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
