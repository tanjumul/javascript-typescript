function One(){
    console.log('Weak Up at 1'); 

    three();
}

function two() {
    console.log('Brush my teeth');
    One(); 
}

function three (){ 

    console.log('Eat something now !');
    
}


One(); 
two(); 
three(); 



/** FYI , here the three is called 3 time one in the One(), second it was by calling the One() in the two() , then the 3rd time the function it self was called three()   */