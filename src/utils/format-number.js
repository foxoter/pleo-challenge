export function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function formatWeight(weight) {
  return new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: "kilogram"
  }).format(weight);
}

export function formatLength(length) {
  return new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: "meter"
  }).format(length);
}