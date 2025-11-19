/* eslint-disable max-classes-per-file */

class LibraryItem {
  isCheckedOut = false
constructor(title, year){
  this.title = title;
  this.year = year;

}
checkOut(){
  this.isCheckedOut = true
  return `${this.title} has been checked out`
}
returnItem(){
  this.isCheckedOut = false
  return `${this.title} has been returned`
}
getDescription(){
  return `${this.title} (${this.year})`
}
}



class Book extends LibraryItem {
  constructor(title, year, author,pages){
    super(title, year)
    this.author = author;
    this.pages = pages;
  }
  getDescription(){
    return `${this.title} (${this.year}) by ${this.author}, ${this.pages} pages`
  }

}

class DVD extends LibraryItem {
 
  constructor(title, year, director, runtime){
    super(title, year)
    this.director = director;
    this.runtime = runtime
    
  }
  getDescription(){
    return `${this.title} (${this.year}) directed by ${this.director}, ${this.runtime} min`
  }
 


}
const dvd = new DVD('Inception', 2010, 'Christopher Nolan', 148);
console.log(dvd.title); // Inception
console.log(dvd.director); // Christopher Nolan
console.log(dvd.runtime); // 148
console.log(dvd.getDescription()); // Inception (2010) directed by Christopher Nolan, 148 min
console.log(dvd.checkOut()); // Inception has been checked out
console.log(dvd.isCheckedOut); // true

class Magazine extends LibraryItem {
constructor(title, year, issue){
  super(title, year)
  this.issue = issue;

}
getDescription(){
  return `${this.title} (${this.year}) Issue #${this.issue}`
}



}

const magazine = new Magazine('National Geographic', 2024, 5);
console.log(magazine.title); // National Geographic
console.log(magazine.issue); // 5
console.log(magazine.getDescription()); // National Geographic (2024) Issue #5
console.log(magazine.checkOut()); // National Geographic has been checked out
console.log(magazine.returnItem()); // National Geographic has been returned


module.exports = {
  LibraryItem,
  Book,
  DVD,
  Magazine,
};
