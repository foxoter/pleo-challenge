import { useRecoilState } from "recoil";
import { favLaunchesState } from "../atoms";
import { pushOrDeleteItem } from "../utils/general";

export function useFavoriteLaunches(launchId) {
  const [favLaunches, setFavLaunches] = useRecoilState(favLaunchesState);
  const isItemInFavorites = favLaunches.includes(launchId);

  const addOrRemoveLaunch = () => {
    const launchesNew = pushOrDeleteItem([...favLaunches], launchId);
    setFavLaunches(launchesNew);
  };

  return [isItemInFavorites, addOrRemoveLaunch];
}
