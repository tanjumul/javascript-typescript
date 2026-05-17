 function tableTo(num){ 
  
    for (let i=1; i<=num;i++){
      
        console.log(`${i} X ${num} == ${i*num}`);
       
    }
    console.log('\n'); 
      for(let tak=1; tak<=num; tak++){ 
        for( let j =1 ; j<=num; j++){ 
          console.log(`Table of ${tak} is ${tak} X ${j} = ${tak * j}`); 
        }
            console.log('\n'); 
      }
  }

  tableTo(5);
