/* eslint-disable no-console */
// Question1
// a
const Array = ["1", "2", "3", "4", "5", "6", "7"];
console.log(Array);
Array.splice(-2, 1);
console.log("Answer a", Array);
const x = Array.length;
console.log("Length: ", x);

// b
let array = ["1", "2", "3", "4", "5", "6", "7"];
array = array.map((item) => Number(item));
console.log("Answer b", array);
array.forEach((item) => console.log(typeof item));

// c
const Arr1 = ["1", "2", "3", "4", "5", "6", "7"];
Arr1.splice(-3, 3);
console.log("Answer c", Arr1);
Arr1.unshift("one", "two");
console.log(Arr1);

// d
const Arr2 = ["1", "2", "3", "4", "5", "6", "7"];
let concatString = "";
Arr2.forEach((item) => {
  concatString += item;
});
console.log("Answer d- concatenated String ", concatString);
const Sum = Arr2.reduce((result, item) => result + +item, 0);
console.log("Sum of all items:", Sum);

// e
const Arr3 = ["1", "2", "3", "4", "5", "6", "7"];
const filteredArray = Arr3.filter((item) => item !== "3");
console.log("Answer e", filteredArray);

// f
const Arr4 = ["1", "2", "3", "4", "5", "6", "7"];
Arr4.forEach((item) => {
  if (item === "3" || item === "6" || item === "7") {
    console.log("Answer f- found item:", item);
  }
});

// g
const Array1 = [1, 2, "3", 4, 5, 6, "7"];
const Array2 = ["1", "2", "3", "4", "5", "6", "7"];
for (let i = 0; i < Array1.length; i += 1) {
  for (let j = 0; j < Array2.length; j += 1) {
    if (typeof Array1[i] === typeof Array2[j]) {
      console.log("Answer g-", Array1[i]);
      break;
    }
  }
}

// h
const Arr6 = [0, 2, 3, 7, 5, 6, 8];
Arr6.forEach((item, index) => {
  const result = item * index;
  if (result > 40) {
    console.log("Answer h-", result);
  }
});

// i
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c", "d", "e"];
const mergedArray = arr1.concat(arr2);
console.log("Answer i", mergedArray);

// Answer 2
const n = 5;
for (let i = 1; i <= n; i += 1) {
  const space = " ".repeat(n - i);
  const stars = "* ".repeat(i);
  console.log(space + stars);
}
