const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button')
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
    //    body.style.backgroundColor = e.target.id

    if(e.target.id == 1){
        body.style.backgroundColor = 'green'
    }
    if(e.target.id == 4){
        body.style.backgroundColor = 'red'
    }
    if(e.target.id == 3){
        body.style.backgroundColor = 'black'
    }
    if(e.target.id == 2){
        body.style.backgroundColor = 'yellow'
    }
    })
})