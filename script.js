//Global Variables
var specialCharacters = "!@#$%^&*()_+~`|}{[]/:;?><,./-=";
var numCharacters = "0123456789";
var lowCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var result = "";
var availChars = [];
var passLength;
var correctData = false;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  selectLength();
  if (correctData === true) {
    if (getUserSelections() === false) {
      return;
    }
    passRandomizer();
    return;
  } else {
    console.log(correctData)
    return;
  }
}

//own function?

function selectLength() {
  var userLength = prompt("Input how long you would like your password (Mininum 8 characters and maximum 128 characters):", "Input your number here.")
  if (userLength < 8 || userLength > 128) {
    alert("Please select a valid length.");
    return;
  } else if (userLength >= 8 || userLength <= 128) {
    passLength = userLength;
    correctData = true;
  } else {
    alert("Please input a valid value.");
    return;
  }
}

//ask for different types of characters
//4 confirms for each type
//add to availChars
//availChars = availChars.concat(numCharacters)
//validate user selected atleast one
function getUserSelections() {

  var userSpecialCond = confirm("Would you like to have special characters? (ex: !, $, #, etc.):")
  if (userSpecialCond === true) {
    availChars = availChars + specialCharacters;
    console.log(availChars);
  }


  var userLowCase = confirm("Would you like to have lowercase characters?");
  if (userLowCase === true) {
    availChars = availChars + lowCaseCharacters;
    console.log(availChars);
  }

  var userUpCase = confirm("Would you like to have uppercase characters?");
  if (userUpCase === true) {
    availChars = availChars + upCaseCharacters;
    console.log(availChars);
  }

  var userNumbers = confirm("Would you like to have numbers?");
  if (userNumbers === true) {
    availChars = availChars + numCharacters;
    console.log(availChars);
  }

  if (userSpecialCond === false && userNumbers === false && userUpCase === false && userLowCase === false) {
    alert("Must make one valid selection.");
    return false;
  }

}
//separate function
//iterate length number of times
//select random char from available char
//add to result

//length
//lower true
//uppercase true
//numbers no

function passRandomizer() {
  for (i = 0; i < passLength; i++) {
    result = result + availChars.charAt(Math.floor(Math.random() * availChars.length))

  }
  console.log(result)
}
