const characters = [
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
  'Z',
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
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

//set initial value for password length input field
document.getElementById('pass-number').defaultValue = '8';

//Get elements from dom and store in variables
let passOne = document.getElementById('passwordOne');
let passTwo = document.getElementById('passwordTwo');

//create function to generate passwords
function generatePasswords() {
  //pick up input from user to determine pw length
  let pwLength = Number(document.getElementById('pass-number').value);

  //what type of array are we searching? Find out and pass in array
  //to getRandomNumber
  let typeOfArray = getArray();

  //clear out password after each click to start fresh
  passOne.textContent = ' ';
  passTwo.textContent = ' ';

  //loop through the length of pw requested to get x amount of random numbers to plug into array to create PW
  for (let i = 0; i < pwLength; i++) {
    let num = getRandomNumber(typeOfArray); //pass in array type here
    let num2 = getRandomNumber(typeOfArray); //pass in array type here
    passOne.textContent += typeOfArray[num];
    passTwo.textContent += typeOfArray[num2];
  }
}

//attempt at keeping code more DRY
function getRandomNumber(typeOfArray) {
  //pass in array type here
  return Math.floor(Math.random() * typeOfArray.length); //change out characters
}

function getArray() {
  let symbols = document.getElementById('symbols');
  let numbers = document.getElementById('numbers');

  //if numbers and symbols box unchecked, I don't want both numbers or symbols in my PW
  if (symbols.checked === false && numbers.checked === false) {
    //give me an array with  no symbols or numbers (only letters)
    return noSymNumArray();
  } else if (symbols.checked === true && numbers.checked === false) {
    // alert('numbers box unchecked, I dont want numbers in my PW');
    return noNumArray();
  } else if (symbols.checked === false && numbers.checked === true) {
    return noSymArray();
  } else {
    // alert('getting a regular array that is characters');
    return characters;
  }
}

function noSymNumArray() {
  //take characters array and strip out all Symbols and Numbers
  return characters.filter((char) => isLetter(char));
}
function isLetter(char) {
  return /[a-zA-Z]/.test(char);
}

function noSymArray() {
  //take characters array and strip out all Symbols
  return characters.filter((char) => isAlphanumeric(char));
}

function isAlphanumeric(char) {
  return /^[a-zA-Z0-9]$/.test(char);
}

function noNumArray() {
  //take characters array and strip out all Numbers
  return characters.filter((x) => isNaN(x));
}

//Copy on click passwords
function copyPasswordOne() {
  let storedPWOne = passOne.textContent;
  passOne.textContent = 'Copied!';
}

function copyPasswordTwo() {
  let storedPWTwo = passTwo.textContent;
  passTwo.textContent = 'Copied!';
}

//toggle button
let toggleBtn = document.querySelector('.toggle-btn');
let toggleLabel = document.querySelector('.toggle-label');

//toggle theme
let toggleBody = document.querySelector('.main-body');
let toggleContainer = document.querySelector('.container');
let heading = document.querySelector('.heading');
let h1span = document.querySelector('.h1-span');
let subheading = document.querySelector('.subheading');
let line = document.querySelector('.line');
let passSymbNum = document.querySelector('.pass-symb-num');

function toggle() {
  //button toggles
  toggleBtn.classList.toggle('active');
  toggleLabel.classList.toggle('active');

  //label toggles
  if (toggleLabel.textContent === 'dark') {
    toggleLabel.textContent = 'light';
  } else {
    toggleLabel.textContent = 'dark';
  }

  //theme toggles
  toggleBody.classList.toggle('active');
  toggleContainer.classList.toggle('active');
  heading.classList.toggle('active');
  h1span.classList.toggle('active');
  subheading.classList.toggle('active');
  line.classList.toggle('active');
  passSymbNum.classList.toggle('active');
}
