export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const idx = array.indexOf(value);
    const newValue = appendString + value;
    array[idx] = newValue;
  }
  return array;
}
