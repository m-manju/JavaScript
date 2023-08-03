// 1. Write a function to 
// a. Calculate the height of the end user's browser screen
function calculateHeight() {
    const screenHeight = window.innerHeight;
    console.log("Height:", screenHeight);
}
calculateHeight() ;

// b. To console the name of the web host  
function webHostName(){
    const nameHost = window.location.hostname;
    console.log("web host:", nameHost);
}
webHostName();
 
// c. To show a warning message if there is no https protocol used in the visited website. 
function checkProtocol(){
    const protocol = window.location.protocol;
    if (protocol !== "https:"){
        alert("not using https.")
    }
}
checkProtocol();

// d. To show an alert message after 10sec while the page is refreshed.
function refreshMessage(){
    setTimeout(function(){
        alert("page refreshed.");
    }, 10000);
}
refreshMessage();

// 2. Store your basic details in local storage of the browser every time the page loads, 
// then console them and finally delete them after 1 minute of the page load. 
document.addEventListener("DOMContentLoaded", function() {
    const yourBasicDetails = {
      name: "Manju M",
      age: 22,
    };
    localStorage.setItem("basicDetails", JSON.stringify(yourBasicDetails));
    const storedDetails = JSON.parse(localStorage.getItem("basicDetails"));
    console.log("Stored Basic Details:", storedDetails);
    setTimeout(function() {
      localStorage.removeItem("basicDetails");
      console.log("Details deleted after 1m.");
    }, 60000);
});

// 3. Create a form and submit button, on click of the button 
// store your basic details from the form in the cookies. 
// document.getElementById("basicDetailsForm").addEventListener("submit", function(event) {
//     event.preventDefault(); 
//     const name = document.getElementById("name").value;
//     const age = document.getElementById("age").value;
//     const email = document.getElementById("email").value;
//     const yourBasicDetails = {
//       name: name,
//       age: age,
//       email: email,
//     };
//     const basicDetailsJSON = JSON.stringify(yourBasicDetails);
//     document.cookie = `basicDetails=${encodeURIComponent(basicDetailsJSON)}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
//     alert("Stored in cookies.");
// });
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  for (item of formData) {
    console.log(item[0], item[1]);
  }
  const detailsForm = JSON.stringify(formData);
  document.cookie =`basicDetails=${encodeURIComponent(detailsForm)}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
  // what is the use of expires and encodeURIComponent.
  // Expires is a attribute, this is using for setting expiry date and time. When it reaches the time it will 
  // automaticaly remove the datas in the cookie.here I set long time period as the expiry date.
  // encodeURIComponent is used ecode the URI components.It is a function in javascript. by using this it 
  // prevents issues like breaking the URL structure.
  alert("Stored in cookies.");
});



// 4. Redirect to the homepage of google from the console.
// window.location.href = "https://www.google.com";

// 5. Create a div with background color red, create buttons
// a. to hide the div
function hideDiv() {
    const div = document.getElementById("idDiv");
    div.style.display = "none";
}

// b. to change the background color of the div
function changeBg() {
    const div = document.getElementById("idDiv");
    div.style.backgroundColor = "green";
}

// c. to show your basic details on the div, the details should hide/show, 
// on the click.
function divDetails() {
    const detailsContainer = document.getElementById("subDiv");
      if (detailsContainer.style.display === "none") {
        detailsContainer.style.display = "block";
      } else {
        detailsContainer.style.display = "none";
      }
} 

// 6. Create a select box with numbers 1 to 10,  when selected 9, you should  change the selection to 10 and 
// show a message that "9 is fully occupied please select another number", when selected any number other than 
// 9 it should show a message as "you selected 'particular number' " in a div, on hovering the div it should 
// change the background color of the div into a highlighting shade, while the mouse pointer leaves the message 
// area the background color should go back to as before (don't use CSS to attain the hovering functionality)
const numberSelect = document.getElementById("numberSelect");
    const messageDiv = document.getElementById("messageDiv");
    numberSelect.addEventListener("change", function() {
      const selectedValue = parseInt(numberSelect.value, 10);
      if (selectedValue === 9) {
        numberSelect.value = 10;
        messageDiv.textContent = "9 is fully occupied, please select another number.";
      } else {
        messageDiv.textContent = `You selected ${selectedValue}.`;
      }
    });
    messageDiv.addEventListener("mouseover", function() {
      messageDiv.style.backgroundColor = "lightblue";
    });
    messageDiv.addEventListener("mouseout", function() {
      messageDiv.style.backgroundColor = "";
    });

// 7. Consider an array with names of 10 programming languages, make 10 buttons by iterating this array, when 
// clicked on each button the name of the programming language should be shown in a corresponding div. 
const programmingLanguages = [
    "JavaScript",
    "Python",
    "C",
    "C++",
    "Angular",
    "Java",
    "html",
    "Css",
    "React",
    "Node",
];
function showLanguageName(language) {
    const displayDiv = document.getElementById("languageDisplay");
    displayDiv.textContent = language;
}
const buttonContainer = document.getElementById("buttonContainer");
  programmingLanguages.forEach((language) => {
    const button = document.createElement("button");
    button.textContent = language;
    button.addEventListener("click", () => showLanguageName(language));
    buttonContainer.appendChild(button);
});

// 8. Create a form with a text field which when submitted, will change the tab title to whatever is entered, 
// limit the field to 50 characters, otherwise show an error message, and stay on the same page when submitted
// (it shouldn't refresh).
document.getElementById("titleChangeForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const newTitle = document.getElementById("newTitle").value.trim();
    if (newTitle.length === 0) {
      alert("Enter a title.");
    } else if (newTitle.length > 50) {
      alert("Maximum 50 characters.");
    } else {
      document.title = newTitle;
    }
});

// 9. When the control+enter key is pressed show an alert message.
document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "Enter") {
      alert("Hi, Good morning!");
    }
});
