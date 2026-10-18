// const name = "shiv"
// const age = 18;
// console.log(name+age);
//modern way connecting variables values to your string ...........

// console.log(`My name is ${name} and My current age is ${age}.`);

//Another way of initialising string ..........
// const MyName = new String('SHIV');
// console.log(MyName);

// console.log(MyName.length)
// console.log(MyName.toLowerCase())
// console.log(MyName.toUpperCase())
// console.log(MyName.charAt(0))
// console.log(MyName.indexOf('S'))

let MyIntro = "My name is SHIV.";
console.log(MyIntro.length);
console.log(MyIntro[0]);
console.log(MyIntro.charAt(0));
console.log(MyIntro.indexOf('n'));
console.log(MyIntro.lastIndexOf('v'));
console.log(MyIntro.includes('raj'));
console.log(MyIntro.includes('SHIV'));
console.log(MyIntro.split());
console.log(MyIntro.replace('SHIV','DANISH'));
console.log(MyIntro.startsWith("MyName"));
console.log(MyIntro.startsWith("My"));
console.log(MyIntro.slice(0,10));
//substring is similar like slice the only difference is in substring not valid for negative values.
console.log(MyIntro.substring(-6,10));
console.log(MyIntro.toUpperCase());
console.log(MyIntro.toLowerCase());
//trim starting and ending ka whitespace remove karta hai 
console.log("  hello  ".trim())// return "hello"

















