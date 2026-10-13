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