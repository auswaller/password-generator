// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  console.log("Generate button clicked");

  var pwdLength = askLength();
  console.log("Password length is: " + pwdLength);

  var pwdCharTypes = askCharType();
  console.log("Password character types are: " + pwdCharTypes);

  var password = generatePassword(pwdLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(length){
  for(let i = 0; i < length; i++){
    
  }
  return "Test Return";
}

function askLength(){
  let length = parseInt(prompt("Enter the length of the desired password (8-128 characters): "));
  console.log("Length entered: " + length + " " + typeof(length))

  if(Number.isNaN(length)){
    alert("You did not enter a number! Please enter a number between 8 - 128");
    askLength();
  }
  else if((length > 128) || (length < 8)){
    alert(length + " is not between 8 - 128! Please enter a number between 8 - 128");
    askLength();
  }
  else{
    alert("You entered " + length + ". This meets the criteria, thank you.");
    return length;
  }
}

function askCharType(){
  let charPrompt = prompt("Please enter the character types with commas in between: \n1 = lowercase \n2 = uppercase \n3 = numeric \n4 = special characters", "1, 2, 3, 4");
  let charTypes = charPrompt.split(",");
  console.log("Character types entered: " + charPrompt + ". Parsed into array: " + charTypes + " " + typeof(charTypes));

  for(let i = 0; i < charTypes.length; i++){
    if((charTypes[i] == "1") || (charTypes[i] == "2") || (charTypes[i] == "3") || (charTypes[i] == "4")){
    return charTypes;
    }
    else{
      alert(charPrompt + " does not meet the formatting. Please only enter the numbers corresponding to your selection with ',' between your selections.");
      askCharType();
    }
  }
}