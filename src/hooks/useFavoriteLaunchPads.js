import { useRecoilState } from "recoil";
import { favLaunchPadsState } from "../atoms";
import { pushOrDeleteItem, removeItem } from "../utils/general";

export function useFavoriteLaunchPads(launchId = '') {
  const [favLaunchPads, setFavLaunchPads] = useRecoilState(favLaunchPadsState);
  const isItemInFavorites = favLaunchPads.includes(launchId);

  const addOrRemoveLaunchPad = () => {
    const launchesNew = pushOrDeleteItem([...favLaunchPads], launchId);
    setFavLaunchPads(launchesNew);
  };

  const removeLaunchPad = (id) => {
    const launchesNew = removeItem([...favLaunchPads], id);
    setFavLaunchPads(launchesNew);
  };

  return {
    favLaunchPads,
    isItemInFavorites,
    addOrRemoveLaunchPad,
    removeLaunchPad,
  };
}
