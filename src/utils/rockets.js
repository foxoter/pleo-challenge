import { SORT_BY_KEYS } from "../constants/rockets";

export function sortRocketsData(array, sortBy) {
  switch (sortBy) {
    case SORT_BY_KEYS.cost:
      array.sort((a,b) => a.cost_per_launch - b.cost_per_launch);
      return array;
    case SORT_BY_KEYS.height:
      array.sort((a,b) => a.height.meters - b.height.meters);
      return array;
    case SORT_BY_KEYS.mass:
      array.sort((a,b) => a.mass.kg - b.mass.kg);
      return array;
    default:
      return array;
  }
}

export function toggleSortOrder(array) {
  return array.reverse();
}