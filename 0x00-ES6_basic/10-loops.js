export default function appendToEachArrayValue(array, appendString) {
  const newCopy = [...array];
  let idx = 0;
  for (const value of array) {
    newCopy[idx] = appendString + value;
    idx++;
  }
  return newCopy;
}
