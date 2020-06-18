const fs = require('fs');

const buffer = fs.readFileSync('emp.json');
const emp = JSON.parse(buffer.toString());

emp.salary = 2800;
emp.name = "MrMoon";

fs.writeFileSync('emp.json' , JSON.stringify(emp));
