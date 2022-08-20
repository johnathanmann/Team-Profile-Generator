// Allows access to the Engineer.js file
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

// Tests different functions and abilities of the Engineer class
test("Can set name by a constructor arguments", () => {
  const name = "Johnny";
  const emp = new Engineer(name);
  expect(emp.name).toBe(name);
});

test("Can set id by a  constructor argument", () => {
  const testValue = 100;
  const emp = new Engineer("Johnny", testValue);
  expect(emp.id).toBe(testValue);
});

test("Can set email by a constructor argument", () => {
  const testValue= "email@gmail.com";
  const emp= new Engineer("Johnny", 1, testValue);
  expect(emp.email).toBe(testValue);
});

test("Can set github by a  constructor argument", () => {
    const testValue = "github";
    const emp = new Engineer("Johnny",  testValue);
    expect(emp.id).toBe(testValue);
  });

test("Can get name by getName() function", () => {
  const testValue= "Johnny";
  const emp= new Engineer(testValue);
  expect(emp.getName()).toBe(testValue);
});

test("Can get id via getId() function", () => {
  const testValue= 100;
  const emp= new Engineer("Johnny", testValue);
  expect(emp.getId()).toBe(testValue);
});

test("Can get email via getEmail() function", () => {
  const testValue= "email@gmail.com";
  const emp= new Engineer("Johnny", 1, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

test("getRole() should return 'Engineer'", () => {
  const testValue= "Engineer";
  const emp= new Engineer("Johnny", 1, "email@gmail.com");
  expect(emp.getRole()).toBe(testValue);
});

test("getGithub() should return 'github'", () => {
    const testValue= "github";
    const emp= new Engineer("Johnny", 1,"email@gmail.com" , testValue);
    expect(emp.getGithub()).toBe(testValue);
  });