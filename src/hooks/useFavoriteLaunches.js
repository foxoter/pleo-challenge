import { useRecoilState } from "recoil";
import { favLaunchIdsState } from "../atoms";
import { pushOrDeleteItem, removeItem } from "../utils/general";

export function useFavoriteLaunches(launchId = 0) {
  const [favLaunchIds, setFavLaunchIds] = useRecoilState(favLaunchIdsState);
  const isItemInFavorites = favLaunchIds.includes(launchId);

  const addOrRemoveLaunch = () => {
    const launchesNew = pushOrDeleteItem([...favLaunchIds], launchId);
    setFavLaunchIds(launchesNew);
  };

  const removeLaunch = (id) => {
    const launchesNew = removeItem([...favLaunchIds], id);
    setFavLaunchIds(launchesNew);
  };

  return {
    favLaunchIds,
    isItemInFavorites,
    addOrRemoveLaunch,
    removeLaunch,
  };
}
