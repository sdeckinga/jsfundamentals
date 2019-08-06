/* Ternary */

let number = 6;

if (number > 0) {
    console.log(true);
} else {
    console.log(false);
}

(number > 0) ? console.log(true) : console.log(false); 

if (number == 0) {
    console.log ('number is 0');
} else if(number >= 5) {
    console.log('number is bigger than 5');
} else if (number <=0) {
    console.log('number is smaller than 0');
} else {
    console.log('nope');
}

(number ==0) ? console.log ('number is 0') : (number >= 5) ? console.log
('Number is bigger than 5') : (number < 0) ? console.log ('number is smaller than 0') : console.log ('nope');

*////

let age = 16;
if  (age >=0)
console.log (true);
else (false);

(age > 0) ? console.log(true) : console.log(false);
if (age >=25){
    console.log ('yay you can rent a car!');
}else if (age >=21) {
    console.log ('yay! you can drink');
}else if (age >=18) {
    console.log ('Yay! you can vote');
} else {
    console.log('sorry, your to young to do anything fun.');
}

