/* *************************
? ELSE IF CONDITIONAL
************************* */

/* 
? Challenge:
? Look up the format for an Else If statement

? Set a variable age and give it an age of your choice
? Set an else if statement that convey the following:
? If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
? If the age is at least 18, console.log 'Yay! You can vote!'
? If the age is at least 21, console.log 'Yay! You can drink!'
? If the age is at least 25, console.log 'Yay! You can rent a car!'
*/
let age = 26;

if(age >= 25) {
  console.log('Yay! You can rent a car!');
} else if (age >= 21) {
  console.log('Yay! You can drink!');
} else if (age >= 18) {
  console.log('Yay! You can vote!')
} else if (age <= 17) {
  console.log('Sorry, you\'re too young to do anything.');
} else {
  console.log('Error dude, that\'s not a number');
}