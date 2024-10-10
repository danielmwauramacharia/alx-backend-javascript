export default function appendToEachArrayValue(array, appendString) {
  const newCopy = array;
  for (const value of array) {
    const idx = array.indexOf(value);
    newCopy[idx] = appendString + array[idx];
  }
  return array;
}
