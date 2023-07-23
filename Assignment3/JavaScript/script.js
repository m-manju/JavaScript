// 1. ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and 
// console each item by using switch statement.
const arr = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql'];
const result = arr.map((item) => {
    switch (typeof item) {
      case 'string':
        console.log(`String: ${item}`);
        break;
      case 'number':
        console.log(`Number: ${item}`);
        break;
      default:
        console.log(`Other: ${item}`);
    }
    return item; // Return the original item to maintain the array structure
  });
console.log(result); // The result array will be the same as the original array


// 2.[1, 2, 3, 4. 5, 6] : Write a closure function to delete indexes 5 and 2 of this array.
const array = [1, 2, 3, 4, 5, 6];
const deleteIndexes = (indexesToDelete) => {
  return function (arr) {
    return arr.filter((_, index) => !indexesToDelete.includes(index));
  };
};
// Create the closure function to delete indexes 5 and 2
const deleteIndexesFunction = deleteIndexes([5, 2]);
// Call the closure function to delete indexes
const newArray = deleteIndexesFunction(array);
console.log(newArray); // Output: [1, 3, 4, 6]


// Use constructor method to console all elements of the passed array. (the array will be passed to the
// constructor method)
class ArrayConsoleLogger {
    constructor(array) {
      // Check if the input is an array
      if (!Array.isArray(array)) {
        console.error("Invalid input: Please provide an array.");
        return;
      }
  
      // Loop through the array and console.log each element
      array.forEach((element) => {
        console.log(element);
      });
    }
}
// Create an instance of the class and pass an array to it
const exampleArray = [1, 2, 3, "hello", "world"];
const logger = new ArrayConsoleLogger(exampleArray);
