import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const favLaunchesState = atom({
  key: "favLaunchesState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const favLaunchPadsState = atom({
  key: "favLaunchPadsState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
