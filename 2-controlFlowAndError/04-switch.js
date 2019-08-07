/* *********************
 ? SWITCH
********************* */

let friend = 'Bob';

switch (friend) {
  case 'Autumn':
    console.log("Hey Autumn, when are we going rock wall climbing?");
    break;
  case 'Dave':
    console.log("Hey Dave, how is Cooper?");
    break;
  case 'Alecx':
    console.log("Hey Alecx, when are we playing DnD?");
    break;
  default:
    console.log(`I'm sorry, ${friend}, but do I know you?`);
    console.log('I\'m sorry,', friend, ', but do I know you?');
}

/*
? Challenge:
? Write a dessert menu;
? If the dessert is pie, console.log 'Pie, pie, me oh my!'
? If the dessert if cake, console.log 'Cake is great!'
? If the dessert is ice cream, console.log 'I scream for ice cream!'
? Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let dessert = 'pie';

switch (dessert) {
  case 'pie':
    console.log('Pie, pie, me oh my!');
    break;
  case 'cake':
    console.log('Cake is great!');
    break;
  case 'ice cream':
    console.log('I scream for ice cream!');
    break;
  default:
    console.log('Not on the menu.');
}


let yep = -8;

switch (true) {
  case (yep < 0 && yep > -10): 
    console.log('worked');
    break;
  case (yep > 0): 
    console.log('worked!');
    break;
  default: 
    console.log('didn\'t work');
}

let age = 26;

switch(true){
  case (age >= 25):
    console.log('Yay! You can rent a car!')
    break;
  case (age >=21):
    console.log('Yay! You can drink!')
    break;
  case (age >= 18):
    console.log('Yay! You can vote!')
    break;
  case (age <= 17):
    console.log('Boring')
    break;
  default:
    console.log('Not a number bro')
}