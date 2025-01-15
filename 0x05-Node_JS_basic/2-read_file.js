const { readFileSync } = require('fs');

function countStudents(fileName) {
  try {
    const data = readFileSync(fileName, 'utf-8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const header = lines[0];
    const studentData = lines.slice(1);
    const students = {};
    const fields = {};

    for (const line of studentData) {
      const [firstname, lastname, age, field] = line.split(',');

      if (!field) continue;

      const trimmedField = field.trim();
      if (!students[trimmedField]) {
        students[trimmedField] = [];
        fields[trimmedField] = 0;
      }
      students[trimmedField].push(firstname.trim());
      fields[trimmedField] += 1;
    }

    const totalStudents = Object.values(fields).reduce((a, b) => a + b, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, count] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${count}. List: ${students[field].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
