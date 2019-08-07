let student = {name: "Peter", awesome: true, degree: "JavaScript", week: 1};

for (let item in student){
    //console.log(item)
    console.log(student.[item])
}
// the above code will throw an error because objects properties are not iterable.

let dogArray = ['husky','shepherd''corgi', 'poodle', 'pit bull','border collie'];

for(let dog of dogArray){
    console.log(dog,'goes bark');
}

