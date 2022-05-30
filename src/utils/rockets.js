import { SORT_BY_KEYS, ROCKET_DATA_PATHS } from "../constants/rockets";
import { getMiliseconds } from "./format-date";
import { get } from "lodash";

export function sortRocketsData(array, sortBy, sortOrder) {
  sortOrder === "asc"
    ? array.sort((a, b) => getRocketData(a, sortBy) - getRocketData(b, sortBy))
    : array.sort((a, b) => getRocketData(b, sortBy) - getRocketData(a, sortBy));

  return array;
}

export function getRocketData(obj, key) {
  if (key === SORT_BY_KEYS.date) {
    return getMiliseconds(get(obj, ROCKET_DATA_PATHS[key]));
  }
  return get(obj, ROCKET_DATA_PATHS[key]);
}
