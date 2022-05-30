import { useRecoilState } from "recoil";
import { favLaunchPadIdsState } from "../atoms";
import { pushOrDeleteItem, removeItem } from "../utils/general";

export function useFavoriteLaunchPads(launchId = '') {
  const [favLaunchPadIds, setFavLaunchPadIds] = useRecoilState(favLaunchPadIdsState);
  const isItemInFavorites = favLaunchPadIds.includes(launchId);

  const addOrRemoveLaunchPad = () => {
    const launchesNew = pushOrDeleteItem([...favLaunchPadIds], launchId);
    setFavLaunchPadIds(launchesNew);
  };

  const removeLaunchPad = (id) => {
    const launchesNew = removeItem([...favLaunchPadIds], id);
    setFavLaunchPadIds(launchesNew);
  };

  return {
    favLaunchPadIds,
    isItemInFavorites,
    addOrRemoveLaunchPad,
    removeLaunchPad,
  };
}
