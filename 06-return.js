/******
 * return***/
 
let hi = () => {
    return 'hi';
    //(1)
};

let newName = hi();
//(2)   (3)

console.log(newName);

//1-the keyword that brings our data out of our function
//2-we need a new variable to hold the value of the return
//3-when called, the function becomes the value of the return

let capitalizedName = (name) => {
    let capName = '';
    for (let letter in name) {
        if(letter == 0){
            capName += name[letter].toUpperCase(); //undefined + firstLetter
        } else {
            capName += name[letter].toLowerCase(); //undefined + firstLetter + lowerLetters
        }
}
return capName;
}
console.log(capName)
//console.log(capName); error, not defined

const myName = capitalizedName('ingEboRg');
console.log(myName + 'how are you doing?');

let tipcalculator =(bill) => {
    tip = .2;
    tiptotal = bill*tip 
    grandtotal = bill + tiptotal

    console.log(grandtotal)
    return grandtotal;
}
 tipcalculator(10)
