const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    releaseDate: "1937-09-21",
    pages: 310,
    rating: 4.8,
    inStock: true
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    releaseDate: "1997-06-26",
    pages: 309,
    rating: 4.9,
    inStock: true
  },
  {
    title: "The Eye of the World",
    author: "Robert Jordan",
    genre: "High Fantasy",
    releaseDate: "1990-01-15",
    pages: 814,
    rating: 4.7,
    inStock: false
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    releaseDate: "1965-08-01",
    pages: 896,
    rating: 4.8,
    inStock: true
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    releaseDate: "1949-06-08",
    pages: 328,
    rating: 4.7,
    inStock: true
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    genre: "Fantasy",
    releaseDate: "2007-03-27",
    pages: 662,
    rating: 4.8,
    inStock: false
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    releaseDate: "1925-04-10",
    pages: 180,
    rating: 4.3,
    inStock: true
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    genre: "Science Fiction",
    releaseDate: "2011-09-27",
    pages: 369,
    rating: 4.7,
    inStock: true
  },
  {
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    releaseDate: "1954-07-29",
    pages: 423,
    rating: 4.9,
    inStock: true
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    releaseDate: "1932-08-30",
    pages: 268,
    rating: 4.6,
    inStock: true
  }
];
let nvewBooks = books.filter((book)=> {
  return book.pages >= 700; 
 } 
 ); 

 console.log(nvewBooks); 

 //if i want to see only pages then i will use map (): 

 let seePages = books.map((book)=>{ 
  return book.pages; 
 })
 console.log(seePages); 

// let newBooks = books.filter((book)=> {
//   if(book.rating >= 4.5){ 
//     return book; 
//   }
//  } 
//  ); 

//  console.log( newBooks); 


 
 let newBooks = books.filter((book)=>{
  if(book.genre === 'Fantasy' && book.inStock === true){ 
    return book; 
  }
 }); 
//  console.log(newBooks); 


 const myNumbers = [1,3,4,3,2,5,6,4,8,9,5,3]; 

 myNumbers.map((value , index )=>{
  myNumbers[index]+=10;  
 })
//  console.log(myNumbers); 

let myNewNums = [1,3,54,3,2,1,75,4]
const noNewNums = myNewNums.map((e)=> {
  return e*10
}).map((e)=>e+1).filter((e)=> e>=35);



/**  map returns automatically but here i used scope that's why it's not returning automatically , i have to put return externally. */ 

/* with the use of first .map : [
  10, 30, 540, 30,
  20, 10, 750, 40
]
with the use of second .map : 
[
  11, 31, 541, 31,
  21, 11, 751, 41
]

with the use of .filter : 
[ 541, 751, 41 ]
N.B: so the first e is passing to the next .map() okey , keep it mine if the main array[1] = 1 , then if i do the 
multiplication with 10 then it becomes 10 , then if i again use a nee .map(e)=> e+1 it will now add to the previous 
element like 10+1 = 11
next i use the filter to use it's true of false thing , and got these values : 
[ 541, 751, 41 ] 
*/
console.log(noNewNums);

console.log('\n'); 
const mynums = [1,2,3]; 

// const myTotal = mynums.reduce(function (acc, currval){
//   console.log(`acc : ${acc} , current value : ${currval}`); 
//   return acc + currval; 
// },0)

const myTotal = mynums.reduce((acc,curr)=>acc+curr,0); 
console.log(myTotal); 


const shoppingCart = [ 
  {
    itemName : 'JavaScript Course', 
    price : 5999
  },
  {
    itemName : 'Python Course', 
    price : 2999
  },
  {
    itemName : 'Machine Learning Course', 
    price : 6999
  },
]
const CartPrice = shoppingCart.reduce((acc , val)=>{
  return acc + val.price;
 },0)

 console.log(CartPrice); 