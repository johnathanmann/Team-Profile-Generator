// Allows access to the Employee.js file
const Employee = require("../lib/Employee");

// Tests different functions and abilities of the employee class
test("Can set name by a constructor arguments", () => {
  const name = "Johnny";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

test("Can set id by a  constructor argument", () => {
  const testValue = 100;
  const emp = new Employee("Johnny", testValue);
  expect(emp.id).toBe(testValue);
});

test("Can set email by a constructor argument", () => {
  const testValue= "email@gmail.com";
  const emp= new Employee("Johnny", 1, testValue);
  expect(emp.email).toBe(testValue);
});

test("Can get name by getName() function", () => {
  const testValue= "Johnny";
  const emp= new Employee(testValue);
  expect(emp.getName()).toBe(testValue);
});

test("Can get id via getId() function", () => {
  const testValue= 100;
  const emp= new Employee("Johnny", testValue);
  expect(emp.getId()).toBe(testValue);
});

test("Can get email via getEmail() function", () => {
  const testValue= "email@gmail.com";
  const emp= new Employee("Johnny", 1, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

test("getRole() should return 'Employee'", () => {
  const testValue= "Employee";
  const emp= new Employee("Johnny", 1, "email@gmail.com");
  expect(emp.getRole()).toBe(testValue);
});