import { SORT_BY_KEYS } from "../constants/rockets";

export function sortRocketsData(array, sortBy, sortOrder) {
  switch (sortBy) {
    case SORT_BY_KEYS.cost:
      sortOrder === "asc"
        ? array.sort((a, b) => a.cost_per_launch - b.cost_per_launch)
        : array.sort((a, b) => b.cost_per_launch - a.cost_per_launch);
      return array;
    case SORT_BY_KEYS.height:
      sortOrder === "asc"
        ? array.sort((a, b) => a.height.meters - b.height.meters)
        : array.sort((a, b) => b.height.meters - a.height.meters);
      return array;
    case SORT_BY_KEYS.mass:
      sortOrder === "asc"
        ? array.sort((a, b) => a.mass.kg - b.mass.kg)
        : array.sort((a, b) => b.mass.kg - a.mass.kg);
      return array;
    case SORT_BY_KEYS.date:
      return sortOrder === "asc" ? array : array.reverse();;
    default:
      return array;
  }
}
