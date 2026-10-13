const myObject = { 
  'JS' : 'JavaScript', 
  'cpp' : 'C++', 
  'rb' : 'ruby', 
  swift : 'swift by apple'

}

// for itarating here in object we can use the for in loop , coz with the for of loop it dosen't work 

for(const key in myObject){ 
  console.log(`${key} shortcut is for ${myObject[key]}`); 
} 

const programming = [ "js" , "cpp", "py" ]

for(const key in programming){ 
  console.log(programming[key]); 
}