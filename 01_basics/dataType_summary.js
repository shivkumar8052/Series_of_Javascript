//Primitive data type.....
//7
/*string, Number, bigInt,undefinded,boolean,null,symbol */

//Reference (Non primitive)
// Array, objects, functions

// const score = 453;
// const scoreValue = 54534.343;
// console.log(typeof(scoreValue));
//Array declaration...........
// let heros = ["shakatiman", "Pawan Singh", "khesari lal Yadav"]
//Object declartion.............
// let MyObject = {
//     Name: "shiv",
//     age: 18,
//     Roll_No: 60
// }
//Function declaration..............
// const myFunction = function(){
//     console.log("Hello, EveryOne!!");
    
// }
// myFunction();


//Stack(Primitive), Heap(Non-Primitive)
//Example for stack memory.....

// let myName = "shiv";
// let anotherName = myName;

// anotherName = "Raj"
// console.log(myName);
// console.log((anotherName));


//Example of heap memory..............

let user = {
    email: "shiv$agijin",
    upi: "shiv895093"
}

let user2 = user;
user2.email = "Rajkumar@gmail.com";

console.log(user.email);
console.log(user2.email);



