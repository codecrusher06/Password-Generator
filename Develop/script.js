// Assignment Code
var generateBtn = document.querySelector("#generate");

//Define answers to pw requirements
var ucaseAnswer = ["yes", "no"];
var lcaseAnswer = ["yes", "no"];
var numberAnswer = ["yes", "no"];
var speccharAnswer = ["yes", "no"];
var passwordLength = [];

//Log answers to requirements
function tellmeHow() {
  console.log("Do you want to use uppercase letters?" + ucaseAnswer);
  console.log("Do you want to use lowercase letters?" + lcaseAnswer);
  console.log("Do you want to use numbers?" + numberAnswer);
  console.log("Do you want to use special characters?" + speccharAnswer);
  console.log(
    "How many characters do you want your password to be?" + passwordLength
  );
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
