const clock = document.getElementById('clock')

//method in js to set function in given time intervel.which take callback and time duration

setInterval(function(){
let date = new Date();
clock.innerHTML = date.toLocaleTimeString();
},1000)