// const user = {
//     userName:"shiv",
//     price:888,

//     welcomeMessage: function(){
//         console.log(`${this.userName}, Welcome To MyWebsite!!`)
//         // console.log(this);
        
//     }
// }
// user.welcomeMessage();
// user.userName = "Rajkumar"
// user.welcomeMessage()
// console.log(this);
//Below first method of declaring function 
// function chai(){
//     let userName = "shiv";
//     console.log(this);
    
//     // console.log(this.userName)
// }

//second method of declaring funciton in js
// const chai = function(){
//     let userName = "shiv";
//     // console.log(this);
    
//     console.log(this.userName)
// }

//this is our third method of declaring function in JS
// const chai = () => {
//     let userName = "shiv";
//     console.log(this);
    
//     // console.log(this.userName);
// }

// chai();


/***********************ARROW FUNCTION*************************/
//explicit return jab hame return keyword use karana pade ...........
// const addTwo = (num1, num2) =>{
//     return num1+num2;
// }

//implicit return ......just opposite of above definition....

// const addTwo = (num1, num2) => num1+num2;

// const addTwo = (num1, num2) => (num1+num2)


// console.log(addTwo(4,6));

/// IIFE-> Immediately Invoked Function Expression//////////

// (function shiv(name){
//     console.log(`Hello, EveryOne My Name is ${name} !!`);
    
// })("shivkumar yadav");

// ((a,b)=>{
//     console.log(a+b);
// })(6,7);// Yaha semicolon lagana must hai jab ak se adhik IIFE bana rahe ho 

// ((a,b)=>{
//     console.log(a-b);
// })(6,7);