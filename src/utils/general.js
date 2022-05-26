export function pushOrDeleteItem(array, item) {
  if (!array.includes(item)) {
    array.push(item);
    return array;
  }
  const itemIndex = array.indexOf(item);
  array.splice(itemIndex, 1);
  return array;
}
