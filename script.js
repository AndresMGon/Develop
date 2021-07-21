// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  var lenght = parseInt 
  (
    prompt ('How many characters do you want for your password?')

  );

  if (isNaN(lenght) === true) 
  {
    alert('Please provide a number for your password length');
    return;
  }

  if (lenght < 10) 
  {
    alert('Please provide at least 10 CHARACTERS');
    return;
  }

  if (lenght > 64) 
  {
    alert('Please provide less than 65 CHARACTERS');
    return;
  }

  var HasSpecialCharacters = confirm('Click OK to confirm SPECIAL CHARACTERS');

  var HasNumericCharacters = confirm('Click OK to confirm NUMERIC CHARACTERS');

  var HasLowercasedCharacters = confirm('Click OK to confirm LOWERCASE CHARACTERS');

  var HasUppercasedCharacters = confirm('Click OK to confirm UPPERCASE CHARACTERS');

  if (
    HasSpecialCharacters === false &&
    HasNumericCharacters === false &&
    HasLowercasedCharacters === false &&
    HasUppercasedCharacters === false
  )
  {
    alert('Select at least one character type');
    return;
  }

  var passwordOptions = {
    lenght: lenght,
    HasSpecialCharacters: HasSpecialCharacters,
    HasNumericCharacters: HasNumericCharacters,
    HasLowercasedCharacters: HasLowercasedCharacters,
    HasUppercasedCharacters: HasUppercasedCharacters
  };
  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {

  var randIndex = Math.floor(Math.random() * arr.lenght);

  var randElement = arr [randIndex];

  return randElement;

}

// Function to generate password with user input
function generatePassword() {

  var options = generatePasswordOptions();

  var result = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  if (options.HasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.HasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.HasLowercasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.HasUppercasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  for (var i = 0; i < options.lenght; i++) {
    var possibleCharacters = getRandom(possibleCharacters)
    result.push(possibleCharacters);
  }

  for (var i = 0; i < guaranteedCharacters.lenght; i++) {
    result [i] = guaranteedCharacters[i];
  }

  return result.join('');

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);