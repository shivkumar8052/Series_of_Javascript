//singleton object

const Myuser = new Object();// declaration for singleton object 
const Myuser1 = {} // declaration for objects litrales
// console.log(Myuser);
// console.log(Myuser1);
Myuser1.name = "shiv"
Myuser1.age = 18
Myuser1.location = "Deoria"


// console.log(Myuser1);

//Destructuring of object 

const course = {
    courseName : "B.Tech",
    price: 99725,
    courseInstructor : "shiv"
}

// console.log(course.courseInstructor);

const{courseInstructor:Instructor} = course;
const{price:College_fees} = course;
console.log(Instructor);
// console.log(College_fees);




