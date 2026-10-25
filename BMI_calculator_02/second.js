const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#Height').value)
    const Weight = parseInt(document.querySelector('#Weight').value)
    const result = document.querySelector('#result')
    if(height === '' || isNaN(height) || height<0){
        result.innerHTML = `Please Enter valid height value,${height}`
    }
    else if(Weight === '' || isNaN(Weight) || Weight<0){
        result.innerHTML = `Please Enter valid weight value , ${Weight}`
    }
    else{
        const bmi = (Weight / ((height*height)/10000) ).toFixed(2)
        if(bmi<18.6){
            result.innerHTML = `<span>${bmi} :- Under Weight !! </span>`
         
        }
        else if (bmi>=18.6 && bmi<=24.9){
            result.innerHTML = `<span>${bmi} :- Normal Range !!</span>`
         
        }
        else{
            result.innerHTML = `<span>${bmi} :- Overweight !!</span>`
     
        }
       


    }

})