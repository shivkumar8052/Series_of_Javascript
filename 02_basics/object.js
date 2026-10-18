// Singleton 

//objects literals......
const mySym = Symbol("key1");

const myDetails = {
    name: "shiv",
   [mySym] :"Mykey1",
    age : 21,
    email: "shiv@google.com",
    mobile_NO:794393890,
    location: "Deoria"
}
// console.log(myDetails["mySym"])
// console.log(myDetails["age"])
// console.log(myDetails["location"])
// console.log(typeof myDetails[mySym]);


 myDetails.greeting = function(){
    console.log("Hello JS USER !!");
 }

 myDetails.greeting2 = function(){
    console.log(`Hello JS USER, ${this.name}`)
 }

 console.log(myDetails.greeting())
 console.log(myDetails.greeting2())
