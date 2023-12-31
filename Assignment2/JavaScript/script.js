/* eslint-disable no-console */
// a. ["1", "2", "3", "4", "5", "6", "7"]
// nRemove number "6" from the array and console the length of the array.
const myArray = ["1", "2", "3", "4", "5", "6", "7"];
myArray.splice(-2, 1);
console.log("\nAnswer 1 a", myArray);
const x = myArray.length;
console.log("Length after removing '6': ", x);

// b. Convert all the items of the array to data type number and console each items data type,
// use any of the array iteration methods provided by JS for iteration."
let array = ["1", "2", "3", "4", "5", "6", "7"];
array = array.map((item) => Number(item));
console.log("\nAnswer b", array);
array.forEach((item) => console.log(typeof item));

// c. Remove last three items of the array, use JS provided array method, then console the array and
// then add "one" and "two" (strings) to the beginning of the array and console the array.
const Arr1 = ["1", "2", "3", "4", "5", "6", "7"];
Arr1.splice(-3, 3);
console.log("\nAnswer c", Arr1);
Arr1.unshift("one", "two");
console.log(Arr1);

// d. Using any one of the array iteration methods console the string concatenation of all items of
// the array and also console the sum of all the items ( convert to integer before calculating).
const Arr2 = ["1", "2", "3", "4", "5", "6", "7"];
let concatString = "";
let sum = 0;
Arr2.forEach((item) => {
  concatString += item;
  sum += parseInt(item, 10);
});
console.log("\nAnswer d- concatenated String:", concatString);
console.log("sum:", sum);

// e. Filter out item "3" from the array and console the array 
// (use any array method).
const Arr3 = ["1", "2", "3", "4", "5", "6", "7"];
const filteredArray = Arr3.filter((item) => item !== "3");
console.log("\nAnswer e", filteredArray);

// f. Iterate the array and console the item, when item is either "3", "6" or "7"
const Arr4 = ["1", "2", "3", "4", "5", "6", "7"];
Arr4.forEach((item) => {
  if (item === "3" || item === "6" || item === "7") {
    console.log("\nAnswer f- found item:", item);
  }
});

// g. [1, 2, "3", 4, 5, 6, "7"]
// Compare this array with the above given array and console only if both items of the array have same data type.
// (Compare each item of this array with each item of the other array.
const Array1 = [1, 2, "3", 4, 5, 6, "7"];
const Array2 = ["1", "2", "3", "4", "5", "6", "7"];
for (let i = 0; i < Array1.length; i += 1) {
  for (let j = 0; j < Array2.length; j += 1) {
    if (typeof Array1[i] === typeof Array2[j]) {
      console.log("\nAnswer g-", Array1[i]);
      break;
    }
  }
}

// h. [0,2,3,7,5,6,8]
// iterate the array and multiply each item by its index value and console the result only
// if result is greater than 40.
const Arr6 = [0, 2, 3, 7, 5, 6, 8];
Arr6.forEach((item, index) => {
  const result = item * index;
  if (result > 40) {
    console.log("\nAnswer h-", result);
  }
});

// i. Create two arrays with five items each and merge the array into a single array and then console it.
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c", "d", "e"];
const mergedArray = arr1.concat(arr2);
console.log("\nAnswer i", mergedArray);

// 2.
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
// console this(pyramid) star pattern
console.log("\nAnswer 2");
const n = 5;
for (let i = 1; i <= n; i += 1) {
  const space = " ".repeat(n - i);
  const stars = "* ".repeat(i);
  console.log(space + stars);
}
