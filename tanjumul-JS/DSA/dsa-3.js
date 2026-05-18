


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




// function rowCollaps(row){ 

//   for(let i =0; i<row; i++){ 
//     let str = ''; 

//     for(let j=0; j<row; j++){
//      (i === 0 || i === row-1 || j === 0 || j === row-1) ? str+='*' : str+=' ';

//     }
//       console.log(str); 
//   }

// }

// rowCollaps(5);


/*
function pyramid(row){ 

for(let i =0; i<=row; i++){ 
let lines = ''; 
  for(let j=0;j<row-i; j++){ 
    lines += ' '; 
  }
  for(let s=1; s<=(2*i)-1; s++ ){ 
    (s === 1 ||  s === (2*i)-1  || i === row ) ? lines+= '*' : lines+=' ';  
  }
  console.log(lines); 
}

}

pyramid(5);


*/ 

/*
function binaryPrint(row){ 

  for(let i =1; i<=row; i++){ 
    let str = ''; 
      for(let j=0; j<i; j++){ 
       if((i + j) % 2 !== 0){ 
        str+='1';
        } else 
        { 
          str+= '0'; 
        }
        if (j<i-1) { 
          str+= ' '; 
        }
      } 
      console.log(str); 
  }

}

binaryPrint(5);

*/ 

/*
function hollow(row){ 
  for(let i =row; i>=0; i--){ 
    let str = ''; 
    for(let s =1; s<=row-i; s++){ 
      str +=' ';
    }
      for(let j =1; j<=(2*i)-1; j++){ 
       
        if(j == 1 || j == (2*i)-1 || i == row){ 
           str += '*';
        }else { 
          str+=' '; 
        }
       
  
      }  
      console.log(str); 
  }
}

hollow(5);
*/ 

// function butterFly(row){ 

// for(let i = row; i>=1; i--){ 
//   let str = ''; 
//     for(let j =0; j<=row-i; j++){ 
//         str += '*'
//     }
//     for(let k=0; k<(2*i)-1; k++){ 
//       str+= ' ';
//     }
//     console.log(str); 
// }


// }

// butterFly(5); 


// function printNum (num){ 

//   for(let i =1; i<=10; i++){ 

//     let str = 1; 
//     console.log(`${num} X ${i} = ${num*i}`);
//     str+=str; 
//   }

// }

// printNum(9);

  // function tableTo(num){ 
  
  //   for (let i=1; i<=num;i++){
      
  //       console.log(`${i} X ${num} == ${i*num}`);
       
  //   }
  //   console.log('\n'); 
  //     for(let tak=1; tak<=num; tak++){ 
  //       for( let j =1 ; j<=num; j++){ 
  //         console.log(`Table of ${tak} is ${tak} X ${j} = ${tak * j}`); 
  //       }
  //           console.log('\n'); 
  //     }
  // }

  // tableTo(5);

/*
  function upsideDown(num){ 
    let str =''; 
    let ttr = ''; 
    for(let i =1; i<=num; i++){ 
        str+='*'; 
      console.log(str); 

      }
        for(let i =num -1; i>=1; i--){ 
       let ttr =''; 
          for(let k =1; k<=i; k++){ 
            ttr+='*'; 
          }
            console.log(ttr); 

      

      }

  }

  upsideDown(5);
  */ 



//   function sandTime(num){ 

// let sstr =''; 
//     let ttr = ''; 
//     for(let i =1; i<=num; i++){ 
//         sstr+='*'; 
//       console.log(sstr); 
//       }
//         for(let i =num -1; i>=1; i--){ 
//        let ttr =''; 
//           for(let k =1; k<=i; k++){ 
//             ttr+='*'; 
//           }
//             console.log(ttr); 
//       }
//   for(let i = 0; i<=num; i++){ 
//     let str=''; 
//     for(let j=0; j<=num-i; j++){ 
//       str+=' '; 
//     } 
//     for(let k =0; k<=i; k++){ 
//       str+='*'
//     }
//     console.log(str);
//   }

//   for(let i = num-1; i>=0; i--){ 
//     let str=''; 
//     for(let j=0; j<=num-i; j++){ 
//       str+=' '; 
//     } 
//     for(let k =0; k<=i; k++){ 
//       str+='*'
//     }
//     console.log(str);
//   }

//   }

//   sandTime(5); 


function pyraMix(num){ 


    for(let i =num; i>=1; i--){ 
      let str = ''; 
        for(let j=0; j<=num-i; j++){ 
            str+=' '; 
        }
          for(let s =1; s<= (2*i)-1; s++){ 
            str+='*'; 
          }
          console.log(str); 
    }
    for(let i =0; i<=num; i++){ 
      let str = ''; 
        for(let j=0; j<=num-i; j++){ 
            str+=' '; 
        }
          for(let s =1; s<= (2*i)-1; s++){ 
            str+='*'; 
          }
          console.log(str); 
    }

}
pyraMix(5); 