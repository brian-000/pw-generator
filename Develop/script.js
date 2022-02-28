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
  const bigLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const charNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const specialArray = ["\!", "\@", "\#", "\$", "\%", "\^", "\&", "\*", "\(", "\)"];
  var myPassword = "";
  var counter = 0;
  var pwLength = window.prompt("Please enter the length of your password. (8-124 characters)");
  while (pwLength < 8 || pwLength > 128){
    window.alert("enter a valid response.");
    pwLength = window.prompt("Please enter the length of your password. (8-124 characters)");
  }
  var lowerCase = window.prompt("Do you need lowercase letters? (Enter yes or no) ");
  lowerCase = lowerCase.toLowerCase();
  while (lowerCase != "yes" && lowerCase != "no") {
    window.alert("enter a valid response.");
    lowerCase = window.prompt("Do you need lowercase letters? (Enter yes or no) ");
    lowerCase = lowerCase.toLowerCase();
  };

  var upperCase = window.prompt("Do you need uppercase letters? (Enter yes or no) ");
  upperCase = upperCase.toLowerCase();
  while (upperCase != "yes" && upperCase != "no") {
    window.alert("enter a valid response.");
    upperCase = window.prompt("Do you need uppercase letters? (Enter yes or no) ");
    upperCase = upperCase.toLowerCase();
  };
  var numValues = window.prompt("Do you need numeric values? (Enter yes or no) ");
  numValues = numValues.toLowerCase();
  while (numValues != "yes" && numValues != "no") {
    window.alert("enter a valid response.");
    numValues = window.prompt("Do you need numeric values? (Enter yes or no) ");
    numValues = numValues.toLowerCase();
  };
  var specialChar = window.prompt("Do you need special characters? (Enter yes or no) ");
  specialChar = specialChar.toLowerCase();
  while (specialChar != "yes" && specialChar != "no") {
    window.alert("enter a valid response.");
    specialChar = window.prompt("Do you need special characters? (Enter yes or no) ");
    specialChar = specialChar.toLowerCase();
  };
  window.alert("Thank you, your password will be generated.");
  while (pwLength != counter) {
    if (lowerCase === "yes" && pwLength != counter) {

      myPassword += smallLetters[randomNumber(0, 25)];
      counter++;

    }
    if (upperCase === "yes" && pwLength != counter) {
      myPassword += bigLetters[randomNumber(0, 25)];
      counter++;
    }
    if (numValues === "yes" && pwLength != counter) {
      myPassword += charNumbers[randomNumber(0, 9)];
      counter++;
    }


    if (specialChar === "yes" && pwLength != counter) {
      myPassword += specialArray[randomNumber(0, 3)];
      counter++;
    }
    // window.alert(myPassword);
  }
  //window.alert(myPassword);
  return myPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
