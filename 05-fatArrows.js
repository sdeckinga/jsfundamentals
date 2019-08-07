let hi = ()=> {
//  (1)    (2)
    console.log('hello!')
}

hi();
//-> Not the Same as =>
//1-we need to set the fat arrow function to a variable
//2-We use the 'fat arrow' to signify its a function

//Block Body
//******* */

let hi = () => {
    console.log('hi')
}

//consice body
//****** */

let hi = () => console.log('hi');
let apples = x => console.log('There are ${x} apples in the basket.');
apples(10);
//more than one parameter will require parenthesis
//return (if one-line fat arrow function) is implied

let apples = (x) =>{
    console.log('there are (10) apples in the basket');
}
//line breaks are bad
let func = ()=> console.log('hi'); //thisworks

let func = ()
    => console.log ('hi'); //not work