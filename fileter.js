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
    inStock: false
  }
];

const newBooks = books.filter((book)=> {
  if(book.rating >= 4.5){ 
    return book; 
  }
 } 
 ); 

 console.log( newBooks); 