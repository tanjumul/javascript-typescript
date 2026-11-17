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