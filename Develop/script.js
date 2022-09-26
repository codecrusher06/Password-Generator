// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //this opens a prompt box requesting password length AFTER the generate password button is clicked the first time
  var userInput = window.prompt(
    "please enter password length between 8 and 128"
  );
  //if it is a number that is entered this will change the returned value from a string to a number
  var passwordLength = parseInt(userInput);
  //qualifier to announce if userinput is NOT a number, then return to original function and re-enter
  if (isNAN(passwordLength)) {
    window.alert("Please enter a natural number between 8 and 128");
    return;
  }
  //if qualifier to define password length requirement and to announce if userinput is too short or too long, if so return to original function and re-enter
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters");
    return;
  }
  //this opens the query window for the boolean answers of the password requirements
  var userWantsUcase = window.confirm("Do you want to use upper case letters?");
  var userWantsLcase = window.confirm("Do you want to use lower case letters?");
  var userWantsNumbers = window.confirm("Do you want to use numbers?");
  var userWantsSpecChar = window.confirm(
    "Do you want to use Special Characters?"
  );

  var UcaseList = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var LcaseList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var NumbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var SpecCharList = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "+",
    "<",
    ">",
    "?",
  ];

  var passwordContent = [];

  if (userWantsUcase === true) {
    passwordContent.push(UcaseList);
  }

  if (userWantsLcase === true) {
    passwordContent.push(LcaseList);
  }

  if (userWantsNumbers === true) {
    passwordContent.push(NumbersList);
  }

  if (userWantsSpecChar === true) {
    passwordContent.push(SpecCharList);
  }
}

//Define answers to pw requirements
//var ucaseAnswer = ["yes", "no"];
//var lcaseAnswer = ["yes", "no"];
//var numberAnswer = ["yes", "no"];
//var speccharAnswer = ["yes", "no"];
//var passwordLength = []; //Need a way to define password length from 8-128

//Log answers to requirements
//function tellmeHow() {
//console.log("Do you want to use uppercase letters?" + ucaseAnswer);
//console.log("Do you want to use lowercase letters?" + lcaseAnswer);
//console.log("Do you want to use numbers?" + numberAnswer);
//console.log("Do you want to use special characters?" + speccharAnswer);
//console.log(
//  "How many characters do you want your password to be?" + passwordLength);
//}
//function getLower() {}

//console.log(string.fromcharcode(97));

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
