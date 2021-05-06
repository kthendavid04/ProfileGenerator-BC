const Employee = require('/Users/fishsandwich/Desktop/teamProfGenHW/lib/employee.js');

test('check that an employee is created',() => {

    let employee = new Employee("name", "id", "name@email");

    expect(employee.getName()).toMatch("name");
    expect(employee.getId()).toMatch("id");
    expect(employee.getEmail()).toMatch("name@email");
});