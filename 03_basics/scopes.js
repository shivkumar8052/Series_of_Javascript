//{ is shows scopes curly braces}


function one (){
    const myName = "shiv";
    function two(){
        console.log(myName);
        const myAge = 43;
    }
    two();
    // console.log(myAge);
    
}
one();