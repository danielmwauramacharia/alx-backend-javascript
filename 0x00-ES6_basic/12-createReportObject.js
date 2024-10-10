// import createEmployeesObject from './11-createEmployeesObject';

export default function createReportObject(employeesList) {
  const reports = {
    allEmployees: employeesList,
    getNumberOfDepartments: (allEmployees) => {
      let count = 0;
      for (const key in allEmployees) {
        count += 1;
      }
      return count;
    },
  };
  return reports;
}
