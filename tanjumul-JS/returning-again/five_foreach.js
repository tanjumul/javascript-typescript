const coding = ["js", "cpp", "c", "python"]

printMe = ["tanjumul","SUST","Coding","Pointing"]

coding.forEach(function(val){
  console.log(val);
}); 


coding.forEach((variable)=>{
    console.log(variable); 
})

function justPrint(print){ 
  console.log(print);
}

printMe.forEach(justPrint); 

user_base = ['torrent','brave','spotify']; 

//this is a comment

coding.forEach((item , index , arr)=>{ 
console.log(item , index , arr); 
})


const myCoding = [ 
  { 
    languageName  : 'JavaScript', 
    languageFileName : 'js'
  } ,
  { 
    languageName : 'Python', 
    languageFileName : 'py'
  }, 

  {
    languageName : 'C++', 
    languageFileName : 'cpp'
  },
]

myCoding.forEach((item)=>{ 
  console.log(item.languageFileName); 
  console.log('AND');
  console.log(item.languageName); 
})