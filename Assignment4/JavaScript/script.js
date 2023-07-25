// 1. Write a function to 
// a. Calculate the height of the end user's browser screen
console.log("\nanswer 1a");
function calculateHeight() {
    const screenHeight = window.innerHeight;
    console.log("Height of the user's browser screen:", screenHeight);
}
calculateHeight() ;

// b. To console the name of the web host
console.log("\nanswer 1b");  
const hostName = window.location.hostname;
console.log("Web host:", hostName);
 
// c. To show a warning message if there is no https protocol used in the visited website.
console.log("\nanswer 1c"); 
if (window.location.protocol !== "https:") {
    console.warn("Warning: The website is not using HTTPS protocol.");
}

// d. To show an alert message after 10sec while the page is refreshed.
console.log("\nanswer 1d"); 
setTimeout(() => {
    alert("Page is refreshed!");
}, 10000);

// 2. Store your basic details in local storage of the browser every time the page loads, 
// then console them and finally delete them after 1 minute of the page load. 
console.log("\nanswere 2");


// 3. Create a form and submit button, on click of the button 
// store your basic details from the form in the cookies. 
console.log("\nanswere 3");


// 4. Redirect to the homepage of google from the console.
console.log("\nanswere 4");


// 5. Create a div with background color red, create buttons
// a. to hide the div
console.log("\nanswere 5 a");

// b. to change the background color of the div
console.log("\nanswere 5 b");

// c. to show your basic details on the div, the details should hide/show, 
// on the click.
console.log("\nanswere 5 c");


// 6. Create a select box with numbers 1 to 10,  when selected 9, you should  change the selection to 10 and 
// show a message that "9 is fully occupied please select another number", when selected any number other than 
// 9 it should show a message as "you selected 'particular number' " in a div, on hovering the div it should 
// change the background color of the div into a highlighting shade, while the mouse pointer leaves the message 
// area the background color should go back to as before (don't use CSS to attain the hovering functionality)
console.log("\nanswere 6");

// 7. Consider an array with names of 10 programming languages, make 10 buttons by iterating this array, when 
// clicked on each button the name of the programming language should be shown in a corresponding div. 
console.log("\nanswer 7");

// 8. Create a form with a text field which when submitted, will change the tab title to whatever is entered, 
// limit the field to 50 characters, otherwise show an error message, and stay on the same page when submitted
// (it shouldn't refresh).
console.log("\nanswer 8");

// 9. When the control+enter key is pressed show an alert messag
console.log("\nanswer 9");

