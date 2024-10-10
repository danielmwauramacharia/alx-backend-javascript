export default function createIteratorObject(report) {
  const allEmployeesObj = report.allEmployees;
  const array = [];
  for (const value of Object.values(allEmployeesObj)) {
      array.push(value);
  };
  arrayFinal = [];
  for (const item of array) {
    for (const items of item) {
      arrayFinal.push(items);
    };
  };
  return arrayFinal;
}
