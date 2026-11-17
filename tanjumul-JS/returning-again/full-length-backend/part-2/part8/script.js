// #1 solution : 

let isChanged = false; 

let clickedd = document.getElementById('changeTextButton').addEventListener("click", function(){
    let paraGraph = document.getElementById('myParagraph'); 
   

    if(!isChanged){ 
        paraGraph.textContent = "Tanjumul is a Hacker !";
        isChanged = true; 
    } else { 
        paraGraph.textContent = "This is a paragraph. Click the button to change me"; 
        isChanged = false; 
    }

})

// #2 solution : 

document.getElementById('highlightFirstCity').addEventListener("click",function(){ 
   let citiesList = document.getElementById('citiesList');
   //citiesList.firstElementChild.style.backgroundColor = "green"; 

  citiesList.firstElementChild.classList.add("highlight"); 
   
}); 

//#3 solution : 

document.getElementById('changeOrder').addEventListener("click", function(){

    let coffeeType = document.getElementById('coffeeType');

    coffeeType.textContent = "Espresso"; 
    coffeeType.style.background = "brown"; 
    coffeeType.style.padding = "5px";
    coffeeType.style.display = "inline-block"
    coffeeType.style.margin = "10px";

})