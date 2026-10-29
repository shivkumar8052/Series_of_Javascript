// generate random colors.........

const random_color = function(){
    const hex_value = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex_value[Math.floor(Math.random()*16)]
        
    }
    return color;
    
}
// function for color changing ...............
let intervalID;

const change_color = function(){
   
    const color_change = function(){
         document.querySelector('body').style.backgroundColor = random_color();

    }
     if (!intervalID) {
        intervalID = setInterval(color_change,1000)
     }
}

// function for stoping color changing ...............


const stop_changing_color = function(){
    clearInterval(intervalID);
    intervalID = null;
}
   

document.querySelector('#start').addEventListener('click',change_color)
document.querySelector('#stop').addEventListener('click',stop_changing_color)


// console.log(Math.floor(Math.random()*16))