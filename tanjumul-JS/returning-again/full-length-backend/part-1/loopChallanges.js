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

let city_population = { 
    London : "1284783", 
    NewYork : "233322", 
    Berlin : "233321124", 
    Paris : "8363020",
}; 

let NewCity = {}; 

for(city in city_population ){

    if(city === "Berlin"){ 
        continue; 
    }
        NewCity[city] = city_population[city]; 
}
console.log(NewCity.Paris); 


let block_tea = ["cha", "green tea","harbaltee","black tee"]; 

let available_tea = []; 

block_tea.forEach((e)=>{ 
    if(e === "harbaltee"){ 
        return;
    }
    available_tea.push(e);
})

console.log(available_tea);