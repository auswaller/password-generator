const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function writePassword () {
  let pwdLength = askLength();
  console.log("Password length is: " + pwdLength);

  let pwdCharTypes = askCharType();
  console.log("Password character types are: " + pwdCharTypes);

  let password = generatePassword(pwdLength, pwdCharTypes);
  
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword (length, types) {
  let newCharacter = "";
  let genPassword = firstRandomCharacter(types);

  for (let i = genPassword.length; i < length; i++) {
    newCharacter = randomCharacter(types);
    genPassword += newCharacter;
    console.log("New character: " + newCharacter + "\nPassword in progress: " + genPassword + "\nIteration: " + (i + 1));
  }

  return randomizeString(genPassword);
}


function askLength () {
  let length = parseInt(prompt("Enter the length of the desired password (8-128 characters): ", "8"));

  //verifies that the entered number is in fact a number and that it meets the length limitations
  if (Number.isNaN(length)) {
    alert("You did not enter a number! Please enter a number between 8 - 128");
    askLength();
  }
  else if ((length > 128) || (length < 8)) {
    alert(length + " is not between 8 - 128! Please enter a number between 8 - 128");
    askLength();
  }
  else {
    alert("You entered: " + length + ". This meets the criteria, thank you.");
    return length;
  }
}

function askCharType () {
  let charPrompt = prompt("Please enter the character types with commas in between: \n1 = lowercase \n2 = uppercase \n3 = numeric \n4 = special characters", "1, 2, 3, 4");
  
  //removes whitespace and verifies that there are no duplicate values by converting into a Set and back into an array
  let charTypes = charPrompt.replaceAll(" ", "").split(",");
  let charTypesSet = new Set(charTypes);
  charTypes = Array.from(charTypesSet);

  //makes sure the entered numbers meet the choice criteria
  for (let i = 0; i < charTypes.length; i++) {
    if ((charTypes[i] == "1") || (charTypes[i] == "2") || (charTypes[i] == "3") || (charTypes[i] == "4")) {
      return charTypes;
    }
    else {
      alert(charPrompt + " does not meet the formatting. Please choose at least one option and only enter the numbers corresponding to your selection with ',' between your selections.");
      askCharType();
    }
  }
}

function firstRandomCharacter (options) {
  let curCharacter = "";
  let curString = "";

  //generates the initial password to make sure it meets the minimum character choice criteria
  for (let i = 0; i < options.length; i++) {
    curCharacter = randomCharacter(options[i]);
    curString += curCharacter;
    console.log("New character: " + curCharacter + "\nPassword in progress: " + curString + "\nIteration: " + (i + 1));
  }

  return curString;
}

function randomCharacter (charTypes){
  let type = "";

  //creates a string consisting of chosen character types to choose next character from
  if(charTypes.indexOf("1") > -1){
    type += letters[Math.floor(Math.random() * letters.length)].toLowerCase();
  }
  if(charTypes.indexOf("2") > -1){
    type += letters[Math.floor(Math.random() * letters.length)];
  }
  if(charTypes.indexOf("3") > -1){
    type += numbers[Math.floor(Math.random() * numbers.length)];
  }
  if(charTypes.indexOf("4") > -1){
    type += symbols[Math.floor(Math.random() * symbols.length)];
  }

  console.log("Pool to choose from: " + type);
  return type[Math.floor(Math.random() * type.length)];
}

function randomizeString (curString){
  //breaks apart the string and randomizes each individual letter and rejoins it all back together
  return curString.split("").sort(function (){ return .5 - Math.random()}).join("");
}