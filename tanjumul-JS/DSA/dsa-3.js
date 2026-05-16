


// function printStars(input){ 

// for(let i = 0 ; i<=input; i++ ){ 
//   for(let j = 0; j<=input; j++){ 
//     console.log('*')
//   }
//   console.log('\n'); 
// }



// }


// console.log(printStars(5));

/*

function blueface(input){ 

  for(let i = 0; i<=input; i++){ 

    let lines = '';
    for(let j =0; j<=i; j++){ 
      lines += '*'; 
    }
    console.log(lines); 
  }

}

blueface(6);
*/ 

/*
function printStars(input) {
  for (let i = 0; i < input; i++) {  
    let row = '';
    for (let j = 0; j <= i; j++) {  
      row += '*';
    }
    console.log(row);
  }
}

printStars(5);

*/ 

/*
function namStar(row){

for (let i =0; i<row ; i++){ 
  let line = '';
  for(let j = 0 ; j <= i; j++){
    line += '*'; 
  }
  console.log(line);
}

} 

namStar(4); 
*/ 


/*
function namStar(row){

for (let i =0; i<row ; i++){ 
  let line = '';
  for(let j = 0 ; j <= i; j++){
    line += '*'; 
  }
  console.log(line);
}

} 

namStar(4); 
*/ 

/*
function backStar(str){ 

  for(let i =str; i>=1; i-- ){ 
   let lines = ''; 
    for(let j = i; j>=1; j--){ 
      lines += '*';  
    }
console.log(lines); 
  }


}
backStar(5); 

*/ 


// function strBrow(row){ 

// for(let i =1; i<=row; i++){ 
//  let str = ''; 
//  for(let j =1; j<=i; j++){ 
//   str+='*'; 
//  }
//  console.log(str); 
// }

// }
// strBrow(5);



// function strBrow(row) { 

//   for(let i=1; i<=row; i++){ 
//     let str = ''; 
//     for(let s =1; s<=row-i; s++){ 
//       str+= ' '; 
//     }
//     for(let j = 1; j<=(2*i)-1; j++){ 
//       str+='*'; 
//     }
//     console.log(str); 
//   } 
//   }
// strBrow(5);

/*
function torBrow(row){ 

  for(let i =0; i<=row; i++){ 
    let lines = ''; 
    for(let j = 0; j<=row-i; j++){
      lines += ' ';
    }
    for(s=1; s<=(2*i)-1; s++){ 
      lines+='*'; 
    }
    console.log(lines); 
  }

}

torBrow(5);


*/

/*
function torBrow(row){ 

  for(let i =0; i<=row; i++){ 
    let lines = ''; 
    for(let j = 0; j<=row-i; j++){
      lines += ' ';
    }
    for(s=1; s<=(2*i)-1; s++){ 
      lines+='*'; 
    }
    console.log(lines); 
    
  }

}

torBrow(15);

*/ 



// function torrent(row){ 

//   for(let i = row; i>0; i--){ 
//     let lines = ''; 
//       for(let j=0; j<=row-i; j++){ 
//         lines +=' '; 
//       }
//         for(let k =1; k<=(2*i)-1; k++){ 
//           lines +='*'; 
//         }
//         console.log(lines);
//   }


// }
// torrent(10)