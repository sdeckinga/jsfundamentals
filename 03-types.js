// * Types
//* Booleans

//Boolean can represent: true/false, yes/no, on/off

let i = true;

let j = false;

let on =true;
let off = false;

console.log(on, off);

// * Null
// * Null= empty value; --not 0, not undefined

let empty = null;
console.log(empty);

// * Undefined
// Undefined = no value assigned (not even an empty container)

let undef = undefined;
console.log(undef);

let x;
console.log(x)

// * numbers

let degrees = 90;
console.log(degrees);

let precise = 9999999999;
console.log(precise);

let rounded=99999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard=(0.2*10+0.1*10)/10;
console.log(numbersAreHard);

let a=Number('123');

//*Strings
let stringOne="double quotes";
let stringTwo='single quotes';
console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = '1050' +'100';

console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

// * objects

let car={
    color: 'red',
    tires: 4,
    extras: 'A/C and Radio',
    cool: true
};
console.log(car);
console.log(typeof car)

//* Array

let list = ['item1','item2', 'item3'];
    (1) (2) (3)
//1-name of the array;
//2-Array is inside these square brackets
//3-each item, regardless of datatype, is separated by commas

let burritos = ['large', 4, true];
console.log(burritos);

console.log(typeof burritos);

//addition vs. concatenation

let third = 1050 + '100';
console.log(third);
console.log(typeof third);

let firstName= 'Shabana';
let lastName = 'Deckinga';
let houseNumber = '9428';
let street = 'Charter Dr';
let city= 'Indianapolis';
let state = 'IN';
let zipcode = '46250';

console.log('firstName'+lastName, + '' + houseNumber, street + ','+ city + ',');

let myName = "Shabana";
console.log(myName.length);

let myNameIs = 'Shabana';
console.log(myNameIs.toUpperCase());

let home = 'My home is in Indianapolis'
console.log(home.includes('indianapolis'));

let sent = 'this sentence will be split into individual parts';

console.log(sent.split(''));
