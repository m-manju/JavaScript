/* eslint-disable no-console */
// Question 1
var userName = "Manju";
var age = 22;
var hasJob = true;
var a;
var b = null;
var numbers = [1,2,3,4,5];
var person = { firstName:"manju", lastNmae: " m"};
var sym= Symbol("ThisIsASymbol");
var bigNumber = BigInt("1234567891011121314151617181920");
var DOB = new Date("12-10-2000");

console.log("variable: userName, type:", typeof userName);
console.log("variable: age, type:", typeof age);
console.log("variable: hasJob, type:", typeof hasJob);
console.log("variable: a, type:", typeof a);
console.log("variable: b, type:", typeof b);
console.log("Variable: numbers, Is Array:", Array.isArray(numbers));
console.log("variable: person, type:", typeof person);
console.log("Variable: sym, Type:", typeof sym);
console.log("Variable: bigNumber, Type:", typeof bigNumber);
console.log("Variable: DOB, Is Date:", DOB instanceof Date);

// Question 2
var WithTemplate = `${userName} ${age} ${hasJob}`;
var WithoutTemplate = userName + " " + age + " " + person.firstName ;
console.log("Concatenated String with Template Literals:", WithTemplate);
console.log("Concatenated String without Template Literals:", WithoutTemplate);

// Question 3
alert("Website has finished loading!");


