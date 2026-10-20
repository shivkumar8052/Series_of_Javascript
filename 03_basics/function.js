//Creating a function..............

// function addTwoNo(a,b){
//     console.log(a+b);
// }
// function addTwoNo(a,b){
//     // const result = a+b;
//     return (a+b);
// }
// const result = addTwoNo(6,4);
// console.log("result:",result);

//  function loggedInMessage (username){
//     if(!username){
//         console.log("Please Enter the username first!!")
//     }
//     return `${username} Just logged In`;

//  }
//  console.log(loggedInMessage("shiv"))

//object in function.......



function handleObject(AnyObject){
    console.log(`Hello my name is ${AnyObject.name} and My current age is ${AnyObject.age}`)
    
}
handleObject( {
    name: "shiv",
    age:43,
    location:"Deoria"
})