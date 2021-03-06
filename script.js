// Assignment Code
var generateBtn = document.querySelector("#generate");

var passUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var passLowerCase = "abcdefghijklmnopqrstuvwxyz"
var passNum = "0123456789"
var specChar = "!@#$%^&*()"
var finalPassword = ''
//var password = prompt("Please enter your password");


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var finalPassword="";
  var allowedChars="";

  var passLength = prompt("Choose between 8 - 128 Characters");
  console.log(passLength);
  //make sure passlength is valid 
  //if passLength < 8 {
      //return alert ("Characters need to be between 8 - 128"); 
    //return "";
  

  var wantsUpperCase = confirm("Do you want uppercase letters");
  console.log(wantsUpperCase);
  if(wantsUpperCase){
    allowedChars += passUpperCase;
  }

  var wantsLowerCase = confirm("Do you want lowercase letter");
  console.log(wantsLowerCase);
  if(wantsLowerCase){
  allowedChars += passLowerCase;
  }

  var wantsNum = confirm("Do you want numbers");
  console.log(wantsNum);
  if(wantsNum){
    allowedChars += passNum;
  }

  var wantsSpecChar = confirm("Do you want special characters");
  console.log(wantsSpecChar);
  if(wantsSpecChar){
    allowedChars += specChar;
  }

  //validation
//if (passLength > 128) {
    //return alert ("Characters need to be between 8 - 128")
  //return "";



  for (let i = 0; i < passLength; i++) {
    //pick a random charaacter from the allowedChars string 
    //var res = str.charAt(passLength);
   //put each character into finalPassword
    finalPassword += allowedChars[(Math.floor(Math.random() * allowedChars.length))];
  }

  return finalPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var i;
var passLength;
for (i = 0; i < passLength; i++) {
  console.log(Math.floor(Math.random() * passLength));
}
if (wantsUpperCase === true) {
  finalPassword += passUpperCase(Math.floor(Math.random() * passLength));
}

if (wantsLowerCase === true) {
  finalPassword += passLowerCase(Math.floor(Math.random() * passLength));
}

if (wantsNum === true) {
  finalPassword += passNum(Math.floor(Math.random() * passLength));
}

if (wantsSpecChar === true) {
  finalPassword += specChar(Math.floor(Math.random() * passLength));
}


