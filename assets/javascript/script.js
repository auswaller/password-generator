// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  console.log("Generate button clicked");

  var pwdLength = askLength();
  console.log("Password length is: " + pwdLength);
  
  var password = generatePassword(pwdLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(length){
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