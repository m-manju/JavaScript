// 1.['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and 
// console each item by using switch statement.
const abc = ['car',1,5,'js','node js','mysql','sql'];
abc.map((item) => {
    switch(item.length){
        case 2 : console.log(`${item}`+" "+"length-2");
        break;
        case 3 : console.log(`${item}`+" "+"length-3");
        break;
        case 4 : console.log(`${item}`+" "+"length-4");
        break;
        case 5 : console.log(`${item}`+" "+"length-5");
        break;
        case 7 : console.log(`${item}`+" "+"length-7");
        break;
        default : console.log(`${item}`+" "+"legth-1")
    }
    return item;
});


//2. [1, 2, 3, 4. 5, 6] : Write a closure function to delete indexes 5 and 2 of this array.

let anArray = [1, 2, 3, 4, 5, 6];
function cmpltArray() {
    return function dltIndex(item, value) {
        return anArray.splice(item, value);
    }
};
let closure = cmpltArray();
let result1 = closure(2, 1);
let result2 = closure(4, 1);
console.log("\n",anArray);


// 3.Use constructor method to console all elements of the passed array. (the array will be passed to the
// constructor method)
class books{
    constructor(page){
        this.page = page;
        this.read()
    }
    read(){
        this.page.forEach((element) => {
            console.log(element);
        });
    }
}
const books1 = new books(["aaa","bbb","ccc","ddd"]);



// 4.Create a function that takes 2 arguments, 1st argument being any array of items, 2nd being any one
// of the item name either in the passed array or not in the passed array, the function should delete the 
// passed item if it exists in the array, if it doesn't exist then the item should be inserted into the array, 
// finnally console the output.
function passCheck(value,item){
    let pass1 =value.indexOf(item);
    if (pass1 === -1){
        value.push(item);
    }
    else{
        value.splice(pass1,1);
    }
    console.log("\n",value);
};
const arrayOne = [1,2,3,4,5];
passCheck(arrayOne,2);
passCheck(arrayOne,6);


// 5.Create a self-invoking function to console you name.
(function(){
    const name="manju";
    console.log(name);
})();


// 6.{a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }: 
// Using this object make an array consisting of all the keys of the given object in reverse order.
//(output should be ['q', 'p', 'c', 'f', 'b', 'a'])
let keyValue ={a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' };
let values =Object.keys(keyValue);
let revValues = values.reverse();
console.log(revValues);


// 7.{ data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] }
// From the given object remove the data array item with id as '24'. (consider that the data arrays order will 
// be different every time you get, so write code in such a way that given any object it will remove the item 
// with id as 24 if it exists )

const arrayObj = { data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', id:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] };
var m =arrayObj.data;
console.log(m);
let TheObject = m.findIndex((object) =>{
    return object.id == 24;
});
m.splice(TheObject,1);
console.log(arrayObj);


// 8. Given 
let newString = "Javascript is the King of the web."
// a) Get the length of the string. 
console.log(newString.length);

// b) Print the 8th character of the string without using any function. 
console.log(newString[9]);

// c) Execute the above code from browser console. 
document.write(newString);

// d) Get the position of the word "King" in string. 
console.log(newString.indexOf("King"));

// e) Replace "King" with "Emperor".
console.log(newString.replace("King","Emperor"));

// f) Insert the string "new” before the word "King". 
let string1="Javascript is the";
let string2="King of the web.";
console.log(string1+ " new "+string2);

// g) Get the words in string as an array. 
console.log(newString.split(" "));

// h) Extract and print the words "is the King" from string. 
console.log(newString.slice(10,22));

// i) Get the count of occurrences of the strings "the" and "of" in string. 
let wordThe ="the";
let wordOf ="of";
let result = newString.split(wordThe).length - 1;
console.log("The-",result);
let result5 = newString.split(wordOf).length - 1;
console.log("Of-",result5);

// j) pad string with "*" and set the total length of the string as 30, displayed at right side.
let lastString = newString.substring(0,29);
console.log(lastString.padEnd(30,'*'));
let newestString = lastString.padEnd(30,'*');
console.log("total length:",newestString.length);