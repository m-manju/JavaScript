// 1. ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and 
// console each item by using switch statement.
console.log("\nanswer 1");
const arr = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql'];
arr.map((item) => {
    switch (typeof item){
        case 'string':
            console.log(`String: ${item}`);
            break;
        case 'number':
            console.log(`Number: ${item}`);
            break;
        default:
            console.log(`other: ${item}`);    
    }
    return item;
});


// 2.[1, 2, 3, 4. 5, 6] : Write a closure function to delete indexes 5 and 2 of this array.
console.log("\nanswer 2");
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


// 3. Use constructor method to console all elements of the passed array. (the array will be passed to the
// constructor method)
console.log("\nanswer 3");
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
console.log(logger);


// 4.Create a function that takes 2 arguments, 1st argument being any array of items, 2nd being any one
// of the item name either in the passed array or not in the passed array, the function should delete the 
// passed item if it exists in the array, if it doesn't exist then the item should be inserted into the array, 
// finnally console the output.
console.log("\nanswer 4");
const modifyArray = (arr, item) => {
    const index = arr.indexOf(item);
  
    if (index !== -1) {
      // Item exists in the array, so delete it
      arr.splice(index, 1);
      console.log(`Item "${item}" deleted from the array.`);
    } else {
      // Item does not exist in the array, so insert it
      arr.push(item);
      console.log(`Item "${item}" inserted into the array.`);
    }
  
    // Console.log the updated array
    console.log('Updated Array:', arr);
  };
  
  // Example usage:
  const myArray = ['apple', 'banana', 'orange'];
  
  modifyArray(myArray, 'banana');
  modifyArray(myArray, 'grapes');
  

// 5. Create a self-invoking function to console you name.
console.log("\nanswer 5");
(function() {
    const name = "manju m";
    console.log(name);
})();


// 6. {a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }:
//  Using this object make an array consisting of all the keys of the given object in 
//  reverse order. (output should be ['q', 'p', 'c', 'f', 'b', 'a'])
console.log("\nanswer 6");
const obj = { a: 'one', b: '2', f: '5', c: '33', p: 'do', q: 'one' };
const keysArray = Object.keys(obj).reverse();
console.log(keysArray); 


// 7. { data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  
// {a:'five', id:'212'}] }
// From the given object remove the data array item with id as '24'. 
// (consider that the data arrays order will be different every time you get, so write code in such 
// a way that given any object it will remove the item with id as 24 if it exists )
console.log("\nanswer 7");
const myObj = {
    data: [
      { a: 'one', id: '22' },
      { a: 'four', id: '7' },
      { a: 'six', b: '2' },
      { a: 'sixty', id: '24' },
      { a: 'five', id: '212' }
    ]
};
  
const idToRemove = '24';
const newData = myObj.data.filter(item => item.id !== idToRemove);
  
const updatedObject = { data: newData };
console.log(updatedObject);


//8. Given var string = "Javascript is the King of the web."

// a) Get the length of the string.
console.log("\nanswer 8 a"); 
var string = "Javascript is the King of the web.";
var lengthOfString = string.length;
console.log(lengthOfString);

// b) Print the 8th character of the string without using any function. 
console.log("\nanswer 8 b"); 
var myString = "Javascript is the King of the web.";
var eighthCharacter = myString[7];
console.log(eighthCharacter);

// c) Execute the above code from browser console.
console.log("\nanswer 8 c");  

// d) Get the position of the word "King" in string. 
console.log("\nanswer 8 d"); 
var theString = "Javascript is the King of the web.";
var positionOfKing = theString.indexOf("King");
console.log(positionOfKing);

// e) Replace "King" with "Emperor". 
console.log("\nanswer 8 e"); 
var aString = "Javascript is the King of the web.";
var updatedString = aString.replace("King", "Emperor");
console.log(updatedString);

// f) Insert the string "new” before the word "King". 
console.log("\nanswer 8 f"); 
var stringA = "Javascript is the King of the web.";
var updatedString1 = stringA.replace("King", "new King");
console.log(updatedString1); 

// g) Get the words in string as an array. 
console.log("\nanswer 8 g"); 
var string2 = "Javascript is the King of the web.";
var wordsArray = string2.split(" ");
console.log(wordsArray);

// h) Extract and print the words "is the King" from string. 
console.log("\nanswer 8 h"); 
var string3 = "Javascript is the King of the web.";
var extractedWords = string3.slice(11, 22);
console.log(extractedWords); 

// i) Get the count of occurrences of the strings "the" and "of" in string. 
console.log("\nanswer 8 i"); 
var string4 = "Javascript is the King of the web.";
var countOfThe = (string4.match(/the/g) || []).length;
var countOfOf = (string4.match(/of/g) || []).length;
console.log(countOfThe); 
console.log(countOfOf); 

// j) pad string with "*" and set the total length of the string as 30, displayed
console.log("\nanswer 8 j"); 
// at right side.
var string5 = "Javascript is the King of the web.";
var paddedString = string5.padEnd(30, "*");
console.log(paddedString); 