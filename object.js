// All about JavaScript Objects

let user = new Object(); // Object constructor syntax in Object oriented JS
let adam = {} // Object Literal :: A common syntax in ES6

let test =
{
    name: "Somto",
    age: 20,
    "Likes birds": "Yes!"
};
for(prop in test){
    // console.log(prop);
    console.log( test[prop]);
}
// console.log("name" in test);
// console.log("test" in test);
// console.log(test);
// console.log(test["Likes birds"]);
// delete test.age;
// console.log(test);



// The code below works in a DOM environmental. I'm using a node environment currently
/*
let profile = {
    name: "john",
    age: 23,
    location: "Lagos",
};

let key = prompt("User detail: ", "name");
alert(user[key]);
*/