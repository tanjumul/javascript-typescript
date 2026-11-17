
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

