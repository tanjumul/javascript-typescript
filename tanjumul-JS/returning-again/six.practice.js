const books = [
    { title: "The Alchemist", genre: "Fiction", publishingYear: 1988 },
    { title: "Atomic Habits", genre: "Self-Help", publishingYear: 2018 },
    { title: "Clean Code", genre: "Programming", publishingYear: 2008 },
    { title: "The Hobbit", genre: "Fantasy", publishingYear: 1937 },
    { title: "Sapiens", genre: "History", publishingYear: 2011 },
    { title: "Deep Work", genre: "Self-Help", publishingYear: 2016 },
    { title: "1984", genre: "Dystopian", publishingYear: 1949 },
    { title: "The Pragmatic Programmer", genre: "Programming", publishingYear: 1999 },
    { title: "Dune", genre: "Science Fiction", publishingYear: 1965 },
    { title: "Pride and Prejudice", genre: "Romance", publishingYear: 1813 },

    { title: "The Great Gatsby", genre: "Fiction", publishingYear: 1925 },
    { title: "The Psychology of Money", genre: "Finance", publishingYear: 2020 },
    { title: "Introduction to Algorithms", genre: "Programming", publishingYear: 1989 },
    { title: "Harry Potter and the Philosopher's Stone", genre: "Fantasy", publishingYear: 1997 },
    { title: "Educated", genre: "Memoir", publishingYear: 2018 },
    { title: "Think and Grow Rich", genre: "Self-Help", publishingYear: 1937 },
    { title: "Brave New World", genre: "Dystopian", publishingYear: 1932 },
    { title: "The Lean Startup", genre: "Business", publishingYear: 2011 },
    { title: "Foundation", genre: "Science Fiction", publishingYear: 1951 },
    { title: "Jane Eyre", genre: "Romance", publishingYear: 1847 },

    { title: "To Kill a Mockingbird", genre: "Fiction", publishingYear: 1960 },
    { title: "Rich Dad Poor Dad", genre: "Finance", publishingYear: 1997 },
    { title: "You Don't Know JS", genre: "Programming", publishingYear: 2015 },
    { title: "The Lord of the Rings", genre: "Fantasy", publishingYear: 1954 },
    { title: "Becoming", genre: "Memoir", publishingYear: 2018 },
    { title: "Mindset", genre: "Psychology", publishingYear: 2006 },
    { title: "Fahrenheit 451", genre: "Dystopian", publishingYear: 1953 },
    { title: "Zero to One", genre: "Business", publishingYear: 2014 },
    { title: "Neuromancer", genre: "Science Fiction", publishingYear: 1984 },
    { title: "Me Before You", genre: "Romance", publishingYear: 2012 },

    { title: "The Catcher in the Rye", genre: "Fiction", publishingYear: 1951 },
    { title: "The Intelligent Investor", genre: "Finance", publishingYear: 1949 },
    { title: "Eloquent JavaScript", genre: "Programming", publishingYear: 2011 },
    { title: "A Game of Thrones", genre: "Fantasy", publishingYear: 1996 },
    { title: "When Breath Becomes Air", genre: "Memoir", publishingYear: 2016 },
    { title: "Thinking, Fast and Slow", genre: "Psychology", publishingYear: 2011 },
    { title: "The Handmaid's Tale", genre: "Dystopian", publishingYear: 1985 },
    { title: "Good to Great", genre: "Business", publishingYear: 2001 },
    { title: "The Martian", genre: "Science Fiction", publishingYear: 2011 },
    { title: "The Notebook", genre: "Romance", publishingYear: 1996 },

    { title: "Animal Farm", genre: "Fiction", publishingYear: 1945 },
    { title: "The 4-Hour Workweek", genre: "Self-Help", publishingYear: 2007 },
    { title: "Design Patterns", genre: "Programming", publishingYear: 1994 },
    { title: "The Name of the Wind", genre: "Fantasy", publishingYear: 2007 },
    { title: "Steve Jobs", genre: "Biography", publishingYear: 2011 },
    { title: "The Power of Habit", genre: "Psychology", publishingYear: 2012 },
    { title: "The Road", genre: "Dystopian", publishingYear: 2006 },
    { title: "Start with Why", genre: "Business", publishingYear: 2009 },
    { title: "Ender's Game", genre: "Science Fiction", publishingYear: 1985 },
    { title: "The Fault in Our Stars", genre: "Romance", publishingYear: 2012 }
];

//  books.forEach((bk)=>{ 
// console.log(bk.title);
// })


books.forEach((itms)=>{ 
  console.log(itms.title); 
})

let count_books = 0; 
const countBooks = books.forEach((items)=>{
if (items.publishingYear >= 2010){ 
  count_books++;  
}
})

console.log(count_books); 