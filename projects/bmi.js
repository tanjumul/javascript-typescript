const form = document.querySelector('form'); 

form.addEventListener('submit',function(e){
e.preventDefault(); 

const height = parseInt(document.querySelector('#height').value); 
const weight = parseInt(document.querySelector('#weight').value); 

const result = document.querySelector('#results'); 
const under_weight = 18.6; 
const normal_range = 24.9; 
const overweigth = 24.9; 

if(height === '' || height<= 0 || isNaN(height)){ 

  results.innerHTML = `please give a valid height ${height}`; 
}

 else if(weight === '' || weight<= 0 || isNaN(weight)){ 

  results.innerHTML = `please give a valid height ${weight}`; 
}

else { 
  const bmi = (weight/((height*height)/10000)).toFixed(2)
 results.innerHTML = `<span>${bmi}</span>`; 



if(bmi <= under_weight){ 
  results.innerHTML = `<span>Your bmi ${bmi} is Under Weight</span>`;

} else if (bmi >= under_weight && bmi<= normal_range){ 
    results.innerHTML = `<span>Your bmi ${bmi} is  Normal </span>`;
} else { 
    results.innerHTML = `<span>Your bmi ${bmi} is overweight</span>`;
}
}
})

