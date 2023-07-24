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
const numberArray = [1, 2, 3, 4, 5, 6];
const deleteIndexes = (indexesToDelete) => {
  return function (arr) {
    return arr.filter((Item, index) => !indexesToDelete.includes(index));
  };
};
const deleteIndexesFunction = deleteIndexes([5, 2]);
const newArray = deleteIndexesFunction(numberArray);
console.log(newArray);


// 3. Use constructor method to console all elements of the passed array. (the array will be passed to the
// constructor method)
console.log("\nanswer 3");
class ClassNameOfArray {
    constructor(array) {
      if (!Array.isArray(array)) {
        console.error("Not an array.");
        return;
      }
      array.forEach((element) => {
        console.log(element);
      });
    }
}
const greetArray = [9, 3, 0, "Good", "Morning"];
// eslint-disable-next-line no-unused-vars
const passedArray = new ClassNameOfArray(greetArray);


// 4.Create a function that takes 2 arguments, 1st argument being any array of items, 2nd being any one
// of the item name either in the passed array or not in the passed array, the function should delete the 
// passed item if it exists in the array, if it doesn't exist then the item should be inserted into the array, 
// finnally console the output.
console.log("\nanswer 4");
const modifyArray = (arr, item) => {
    const index = arr.indexOf(item);
    if (index !== -1) {
      arr.splice(index, 1);
      console.log(`Item "${item}" deleted`);
    } else {
      arr.push(item);
      console.log(`Item "${item}" inserted`);
    }
    console.log('Updated Array:', arr);
};
const myArray = ['one', 'two', 'three'];
modifyArray(myArray, 'two');
modifyArray(myArray, 'four');
  

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
const newObj = { a: 'one', b: '2', f: '5', c: '33', p: 'do', q: 'one' };
const keysArray = Object.keys(newObj).reverse();
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
let newString = "Javascript is the King of the web.";
let lengthOfString = newString.length;
console.log(lengthOfString);

// b) Print the 8th character of the string without using any function. 
console.log("\nanswer 8 b"); 
let myString = "Javascript is the King of the web.";
let eighthCharacter = myString[7];
console.log(eighthCharacter);

// c) Execute the above code from browser console.
console.log("\nanswer 8 c"); 
console.log(" ")

// d) Get the position of the word "King" in string. 
console.log("\nanswer 8 d"); 
let theString = "Javascript is the King of the web.";
let positionOfKing = theString.indexOf("King");
console.log(positionOfKing);

// e) Replace "King" with "Emperor". 
console.log("\nanswer 8 e"); 
let aString = "Javascript is the King of the web.";
let updatedString = aString.replace("King", "Emperor");
console.log(updatedString);

// f) Insert the string "new” before the word "King". 
console.log("\nanswer 8 f"); 
let stringA = "Javascript is the King of the web.";
let updatedString1 = stringA.replace("King", "new King");
console.log(updatedString1); 

// g) Get the words in string as an array. 
console.log("\nanswer 8 g"); 
let string2 = "Javascript is the King of the web.";
let wordsArray = string2.split(" ");
console.log(wordsArray);

// h) Extract and print the words "is the King" from string. 
console.log("\nanswer 8 h"); 
let string3 = "Javascript is the King of the web.";
let extractedWords = string3.slice(11, 22);
console.log(extractedWords); 

// i) Get the count of occurrences of the strings "the" and "of" in string. 
console.log("\nanswer 8 i"); 
let string4 = "Javascript is the King of the web.";
let countOfThe = (string4.match(/the/g) || []).length;
let countOfOf = (string4.match(/of/g) || []).length;
console.log("The-", countOfThe); 
console.log("Of-", countOfOf); 

// j) pad string with "*" and set the total length of the string as 30, displayed
console.log("\nanswer 8 j"); 
let string5 = "Javascript is the King of the web.";
if (string5.length > 30) {
    string5 = string5.substring(0, 29);
}
const paddedString = string5.padEnd(30, "*");
console.log(paddedString); 
