// Assignment code here
//js

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  const smallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 // const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var myPassword = "";
  var counter = 0;
  var pwLength = window.prompt("Please enter the length of your password. (8-124 characters)");
  var lowerCase = window.prompt("Do you need lowercase letters? (Enter yes or no) ");
  var upperCase = window.prompt("Do you need uppercase letters? (Enter yes or no) ");
  var numValues = window.prompt("Do you need numeric values? (Enter yes or no) ");
  var specialChar = window.prompt("Do you need special characters? (Enter yes or no) ");
  window.alert("Thank you, your password will be generated.");
  while (pwLength != counter) {
    if (lowerCase === "yes") {

      myPassword += smallLetters[randomNumber(0, 25)];
      counter++;
    }
    if (upperCase === "yes") {
      myPassword += bigLetters[randomNumber(0, 25)];
      counter++;
    }
    // if (numValues === "yes") {
    //   var temp = numbers[randomNumber(0, 9)];
    //   myPassword += temp;
    //   counter++;
    // }
  }
  return myPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
