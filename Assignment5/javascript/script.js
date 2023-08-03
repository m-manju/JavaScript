// 1.Make a form with fields name, phone number, place, company name, pin code
// a.if any of the fields are empty on submitting it should show corresponding error messages below
// all the required fields.
// b.pin code and mobile number fields should not be submitted with non-integer values, if so, then show an
// error msg stating only numbers are allowed.
// c.The minimum length of the phone number should be 10, otherwise, show the corresponding error msg
// below the mobile no. field.
// d.On submission of the form, store the details in the local storage and clear the form. (it should stay
// on the same page don't refresh the page).
// e.Make a prepopulate button, which when clicked will populate the form with values in the local storage
// if it exists, otherwise, the button will be disabled.
// Note: The page shouldn't refresh on submitting the form in any of the questions and show error messages
// below the appropriate fields only.

//The form should not be submitted if any error occurred.
//Error message should show below the input field
// add validation for space as well

function showError(inputElement, message) {
  const errorSpan = inputElement.nextElementSibling;
  errorSpan.textContent = message;
}
function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((message) => (message.textContent = ""));
}
function isInteger(value) {
  return /^\d+$/.test(value);
}
function submitForm() {
  clearErrors();
  const nameField = document.getElementById("name");
  const phoneNumberField = document.getElementById("phoneNumber");
  const placeField = document.getElementById("place");
  const companyNameField = document.getElementById("companyName");
  const pinCodeField = document.getElementById("pinCode");
  const name = nameField.value;
  const phoneNumber = phoneNumberField.value;
  const place = placeField.value;
  const companyName = companyNameField.value;
  const pinCode = pinCodeField.value;
  if (!name) {
    showError(nameField, "Name is required.");
  }
  if (!phoneNumber) {
    showError(phoneNumberField, "Phone Number is required.");
  } else if (!isInteger(phoneNumber)) {
    showError(phoneNumberField, "Only numbers are allowed for Phone Number.");
  } else if (phoneNumber.length !== 10) {
    showError(phoneNumberField, "Phone Number should be 10 digits long.");
  }
  if (!place) {
    showError(placeField, "Place is required.");
  }
  if (!companyName) {
    showError(companyNameField, "Company Name is required.");
  }
  if (!pinCode) {
    showError(pinCodeField, "Pin Code is required.");
  } else if (!isInteger(pinCode)) {
    showError(pinCodeField, "Only numbers are allowed for Pin Code.");
  }
  if (name && phoneNumber && place && companyName && pinCode) {
    const details = {
      name: name,
      phoneNumber: phoneNumber,
      place: place,
      companyName: companyName,
      pinCode: pinCode,
    };
    localStorage.setItem("formData", JSON.stringify(details));
    document.getElementById("myForm").reset();
    alert("Form submitted successfully!");
  }
}
function prepopulateForm() {
  const formData = localStorage.getItem("formData");
  if (formData) {
    const details = JSON.parse(formData);
    document.getElementById("name").value = details.name;
    document.getElementById("phoneNumber").value = details.phoneNumber;
    document.getElementById("place").value = details.place;
    document.getElementById("companyName").value = details.companyName;
    document.getElementById("pinCode").value = details.pinCode;
  }
}
document.getElementById("prepopulateButton").disabled =
  localStorage.getItem("formData") === null;

// 2. Create a button and div using JS, when clicked on the button your basic details should be shown in the div.
// The static HTML file should only contain the basic HTML structure, no div/buttons.
// Function to display basic details
function displayBasicDetails() {
  var detailsDiv = document.getElementById("content");
  var name = "Manju M";
  var age = 22;
  var occupation = "Software Engineer Trainee";
  var detailsText = "Name: " + name;
  "Age: " + age;
  "Occupation: " + occupation;
  detailsDiv.innerHTML = detailsText;
}
var button = document.createElement("button");
button.innerText = "Show Basic Details";
button.addEventListener("click", displayBasicDetails);
document.body.appendChild(button);

// 3.Create a private variable and console it by accessing it.
// Function to create a closure and define private variable
function createCounter() {
  let count = 0;
  function increment() {
    count++;
  }
  function getCount() {
    return count;
  }
  return {
    getCount: getCount,
    increment: increment,
  };
}
const counter = createCounter();
console.log("Initial count:", counter.getCount());
counter.increment();
console.log("Updated count:", counter.getCount());

// 4.Create a static variable and console it by accessing it.
// Define the class with a static variable
class TheClass {
  static staticVariable = "This is a static variable.";
  static getStaticVariable() {
    return TheClass.staticVariable;
  }
}
console.log("Static Variable:", TheClass.staticVariable);
console.log("Static Variable via method:", TheClass.getStaticVariable());
