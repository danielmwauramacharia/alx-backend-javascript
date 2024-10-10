export default function createEmployeesObject(departmentName, employees) {
    const details = {
        [`${departmentName}`]: [...employees],
    };
    return details;
}
