// Allows access to the Manager.js file
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

// Tests different functions and abilities of the Manager class
test("Can set name by a constructor arguments", () => {
  const name = "Johnny";
  const emp = new Manager(name);
  expect(emp.name).toBe(name);
});

test("Can set id by a  constructor argument", () => {
  const testValue = 100;
  const emp = new Manager("Johnny", testValue);
  expect(emp.id).toBe(testValue);
});

test("Can set email by a constructor argument", () => {
  const testValue= "email@gmail.com";
  const emp= new Manager("Johnny", 1, testValue);
  expect(emp.email).toBe(testValue);
});

test("Can set office number by a  constructor argument", () => {
    const testValue = 100;
    const emp = new Manager("Johnny",  testValue);
    expect(emp.id).toBe(testValue);
  });

test("Can get name by getName() function", () => {
  const testValue= "Johnny";
  const emp= new Manager(testValue);
  expect(emp.getName()).toBe(testValue);
});

test("Can get id via getId() function", () => {
  const testValue= 100;
  const emp= new Manager("Johnny", testValue);
  expect(emp.getId()).toBe(testValue);
});

test("Can get email via getEmail() function", () => {
  const testValue= "email@gmail.com";
  const emp= new Manager("Johnny", 1, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

test("getRole() should return 'Manager'", () => {
  const testValue= "Manager";
  const emp= new Manager("Johnny", 1, "email@gmail.com");
  expect(emp.getRole()).toBe(testValue);
});

test("getGithub() should return 'github'", () => {
    const testValue= 100;
    const emp= new Manager("Johnny", 1,"email@gmail.com" , testValue);
    expect(emp.getOfficeNumber()).toBe(testValue);
  });