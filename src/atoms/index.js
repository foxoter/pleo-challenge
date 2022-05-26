import { atom } from "recoil";

export const favLaunchesState = atom({
  key: 'favLaunchesState',
  default: []
});

export const favLaunchPadsState = atom({
  key: 'favLaunchPadsState',
  default: []
});