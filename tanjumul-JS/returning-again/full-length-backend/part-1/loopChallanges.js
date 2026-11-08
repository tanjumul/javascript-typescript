let teaCollection = ["Black Tea", "Green Tea", "Woolong Tea" , "dudhCha" , "lal Cha"];
let selectedTea = []; 

for (let i = 0; i < teaCollection.length; i++) {
    const element = teaCollection[i];
    if(element == "dudhCha"){
        break;
    }
        selectedTea.push(element);
    
//      else {
//     console.log("Found dudhCha. Stopping!");
//     break;
// }
}
console.log(selectedTea); 

let more_tea = ["cha", "green tea","harbaltee","black tee"]; 
let teas = [];
for(let num of more_tea){ 
if(num === "harbaltee"){
    continue;
}
teas.push(num)
}
console.log(teas);