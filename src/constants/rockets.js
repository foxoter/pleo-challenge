export const SORT_BY_KEYS = {
  date: "date",
  cost: "cost",
  height: "height",
  mass: "mass",
};

export const ROCKET_DATA_PATHS = {
  [SORT_BY_KEYS.cost]: "cost_per_launch",
  [SORT_BY_KEYS.height]: "height.meters",
  [SORT_BY_KEYS.mass]: "mass.kg",
  [SORT_BY_KEYS.date]: "first_flight",
};
