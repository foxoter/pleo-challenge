import { useRecoilState } from "recoil";
import { favLaunchesState } from "../atoms";
import { pushOrDeleteItem, removeItem } from "../utils/general";

export function useFavoriteLaunches(launchId = 0) {
  const [favLaunches, setFavLaunches] = useRecoilState(favLaunchesState);
  const isItemInFavorites = favLaunches.includes(launchId);

  const addOrRemoveLaunch = () => {
    const launchesNew = pushOrDeleteItem([...favLaunches], launchId);
    setFavLaunches(launchesNew);
  };

  const removeLaunch = (id) => {
    const launchesNew = removeItem([...favLaunches], id);
    setFavLaunches(launchesNew);
  }

  return { favLaunches, isItemInFavorites, addOrRemoveLaunch, removeLaunch };
}
