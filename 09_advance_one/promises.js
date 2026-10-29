
// //creation of promises.............
// const promiseOne = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         console.log("Async task is completed");
//     },1000)
//     resolve();
// })



// //consuming of promises...........
// promiseOne.then(function(){
//     console.log("promise consumed !!");
// })

// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Async task 2");
//     }, 1000);
//     resolve();
// }).then(()=>{
//     console.log("Promise2 resolved")
// })

// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve({username: "shivkumar", email:"shivkumaryadav3298@gmail.com"})
//     }, 1000);
// })
// promiseThree.then((user)=>{
//     console.log(user);
// })

// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({username: "shivkumar", email:"shivkumaryadav3298@gmail.com"})
//         }
//         else{
//             reject('ERROR: Something went wrong !!');
//         }
        
//     }, 1000);
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((userName)=>{
//     console.log(userName);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("Promise Execution completed !!")
// })


//creation of promises ..............


// const promiseFive = new Promise((resolve ,reject) =>{
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//            resolve({username: "shivkumar", email:"shivkumaryadav3298@gmail.com", password: "12132424"}) 
//         }
//         else{
//             reject("Error: Js error Got!!")
//         }
//     }, 5000);
// } )


// //consuming promises..............
// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
//function calling ...........
// consumePromiseFive();



async function getAllusers() {
    try {
        const response = await fetch('https://api.github.com/users/shivkumar8052')
        if(!response.ok){
            throw new Error(`HTTP Error: ${response.status}`);
            
        }
        const data =  await response.json();
        console.log(data.id);
        
    } catch (error) {
        console.log(error.message);
        
    }
    
}

getAllusers();
