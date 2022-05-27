export function pushOrDeleteItem(array, item) {
  if (!array.includes(item)) {
    array.push(item);
    return array;
  }
  const itemIndex = array.indexOf(item);
  array.splice(itemIndex, 1);
  return array;
}

export function removeItem(array, item) {
  const itemIndex = array.indexOf(item);
  array.splice(itemIndex, 1);
  return array;
}
