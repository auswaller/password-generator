const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function writePassword () {
  var pwdLength = askLength();
  console.log("Password length is: " + pwdLength);

  var pwdCharTypes = askCharType();
  console.log("Password character types are: " + pwdCharTypes);

  var password = generatePassword(pwdLength, pwdCharTypes);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword (length, types) {
  let newCharacter = "";
  let genPassword = firstRandomCharacter(types);

  for (let i = genPassword.length; i < length; i++) {
    newCharacter = randomCharacter(types, false);
    genPassword = genPassword.concat(newCharacter);
    console.log("New character: " + newCharacter + "\nPassword in progress: " + genPassword + "\nIteration: " + i);
  }

  return randomizeString(genPassword);
}

function askLength () {
  let length = parseInt(prompt("Enter the length of the desired password (8-128 characters): ", "8"));
  console.log("Length entered: " + length + " " + typeof (length))

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
  let charTypes = charPrompt.replaceAll(" ", "").split(",");
  let charTypesSet = new Set(charTypes);
  charTypes = Array.from(charTypesSet);

  console.log("Character types entered: " + charPrompt + ". Parsed into array with duplicates removed: " + charTypes + " " + typeof (charTypes));

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
  let curOptions = options.slice(0);
  let curCharacter = "";

  for (let i = 0; i < options.length; i++) {
    console.log("Amount of options: " + options.length + " iteration: " + i);
    if (curOptions.indexOf("1") > -1) {
      curCharacter += letters[Math.floor(Math.random() * letters.length)].toLowerCase();
      curOptions.splice(curOptions.indexOf("1"), 1);
    }
    else if (curOptions.indexOf("2") > -1) {
      curCharacter += letters[Math.floor(Math.random() * letters.length)];
      curOptions.splice(curOptions.indexOf("2"), 1);
    }
    else if (curOptions.indexOf("3") > -1) {
      curCharacter += numbers[Math.floor(Math.random() * numbers.length)];
      curOptions.splice(curOptions.indexOf("3"), 1);
    }
    else if (curOptions.indexOf("4") > -1) {
      curCharacter += symbols[Math.floor(Math.random() * symbols.length)];
      curOptions.splice(curOptions.indexOf("4"), 1);
    }
    console.log("Current password: " + curCharacter);
  }

  return curCharacter;
}

function randomCharacter (charTypes){
  let type = "";
  let character = "";

  if(charTypes.indexOf("1") > -1){
    type += letters.join("").toLowerCase();
  }
  if(charTypes.indexOf("2") > -1){
    type += letters.join("");
  }
  if(charTypes.indexOf("3") > -1){
    type += numbers.join("");
  }
  if(charTypes.indexOf("4") > -1){
    type += symbols.join("");
    type += ",";
  }
  console.log("Current pool of characters to choose from: " + type);
  return character = type[Math.floor(Math.random() * type.length)];
}

function randomizeString (curString){
  return curString.split("").sort(function (){ return .5 - Math.random()}).join("");
}