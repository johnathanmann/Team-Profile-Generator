// Allows access to the Intern.js file
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

// Tests different functions and abilities of the Intern class
test("Can set name by a constructor arguments", () => {
  const name = "Johnny";
  const emp = new Intern(name);
  expect(emp.name).toBe(name);
});

test("Can set id by a  constructor argument", () => {
  const testValue = 100;
  const emp = new Intern("Johnny", testValue);
  expect(emp.id).toBe(testValue);
});

test("Can set email by a constructor argument", () => {
  const testValue= "email@gmail.com";
  const emp= new Intern("Johnny", 1, testValue);
  expect(emp.email).toBe(testValue);
});

test("Can set school by a  constructor argument", () => {
    const testValue = "school";
    const emp = new Intern("Johnny",  testValue);
    expect(emp.id).toBe(testValue);
  });

test("Can get name by getName() function", () => {
  const testValue= "Johnny";
  const emp= new Intern(testValue);
  expect(emp.getName()).toBe(testValue);
});

test("Can get id via getId() function", () => {
  const testValue= 100;
  const emp= new Intern("Johnny", testValue);
  expect(emp.getId()).toBe(testValue);
});

test("Can get email via getEmail() function", () => {
  const testValue= "email@gmail.com";
  const emp= new Intern("Johnny", 1, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

test("getRole() should return 'Intern'", () => {
  const testValue= "Intern";
  const emp= new Intern("Johnny", 1, "email@gmail.com");
  expect(emp.getRole()).toBe(testValue);
});

test("getGithub() should return 'github'", () => {
    const testValue= "school";
    const emp= new Intern("Johnny", 1,"email@gmail.com" , testValue);
    expect(emp.getSchool()).toBe(testValue);
  });