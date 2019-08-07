// let weather = 75;

// if ( weather < 70 ) {
//   console.log('Wear a jacket!');
// } else {
//   console.log('No jacket needed!');
// }


let weather = 50;
if (weather < 75 && weather > 55 ) {
  console.log('wear a light jacket')
} else {
  console.log('Number is not in range.')
}

/*
? Challenge: 
**********

? Bronze: 
Write an if else statement that checks your name; 
If it is your name, console log '<name>'
If the name does not match, console.log 'Hello, what is your name?'

? Silver:
If It is your name, console log 'Hello, my name is <name>'

? Gold:
If it is not your name, console log 'Hello, is your name <name here> ?'

*/


let name = 'SaM';

if(name == 'Sam') {
  console.log('Hello, my name is Sam');
} else {
  console.log('Hello, is your name,', name, '?');
}


/*
? Challenge: 
**********
? Use this string - let name = 'aUTuMN';

? Bronze: 
Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string; 
If it is not console.log 'hey its not written correctly' 

? Silver:
If the first letter of a string is uppercase, only console.log that letter
if it is not, console.log the rest of the string Without the first letter, and change them to lowercase 

? Gold: 
If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase

*/

let name = 'aUTuMN';

//charAt(0) -- method
//[0] -- squarebracket notation

if(name.charAt(0) === name.charAt(0).toUpperCase()) {
  firstLetter = name.charAt(0) + name.slice(1).toLowerCase();
  console.log(firstLetter);
} else {
  otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  console.log(otherLetters);
}