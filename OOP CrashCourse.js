// // const s1 = "Hello";
// // console.log(typeof s1);

// // const s2 = new String("Helloooo")
// // console.log(typeof s2);

// // console.log(window);

// const book1 = {
//     title : "Book One",
//     author : "John Doe",
//     year : "2013",
//     getSummary : function(){
//         return `${this.title} was written bt ${this.author} in ${this.year}`
//     }
// }

// const book2 = {
//     title : "Book Two",
//     author : "Jane Doe",
//     year : "2018",
//     getSummary : function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// }

// console.log(book1.title);
// console.log(book1.getSummary());
// console.log(book2.getSummary());
// console.log(Object.values(book1));

// Constructor

// function Book (title, author, year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// Book.prototype.getSummary = function(){
//     return `${this.title} was written by ${this.author} in ${this.year}`
// }

// Book.prototype.getAge = function(){
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`
// }

// Book.prototype.revise = function(newYear){
//     this.year = newYear;
//     this.revised = true;
// }

const book1 = new Book("Book One", "John Doe", "2018")
const book2 = new Book("Book Two", "Jane Doe", "2013")
console.log(book1.getAge());
book1.revise("2000");
console.log(book1.getAge());

function Magazine(title,author,year,month){
    Book.call(this,title,author,year)
    this.month = month;
}

const mag1 = new Magazine("Magazine", "Jane Eyre", "2018","September")
console.log(mag1);

class Book {
    constructor(title,author,year){
        this.title = title;
        this.year = year;
        this.author = author;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}` }

    static bookStore(){
        return `Barnes & Noble`
    }
}

// const book1 = new Book("Book One","Jane Eyre","2012")
// console.log(book1.getSummary());
// console.log(Book.bookStore());

class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year)
        this.month = month;
    }
}

const magazine1 = new Magazine("magazine1", "Burak","2023","October" );
console.log(magazine1.getSummary());