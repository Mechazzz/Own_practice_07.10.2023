/* function getAvailableBooks (books) {
 let availableBookTitles = ""
 for ( const book of books) {
    if (book.stock > 0) {
        availableBookTitles += ` ${book.title}
        `;
    }
 }
 return `The following books are available: ${availableBookTitles}
 `;
}

const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", stock: 0 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", stock: 5 },
    { title: "1984", author: "George Orwell", stock: 3 },
    { title: "Pride and Prejudice", author: "Jane Austen", stock: 2 }
  ];

  const availableBookMessage = getAvailableBooks (books);

  console.log(availableBookMessage); */


/*   // -------------------------- arrow function
  let addTwoNumbers = (a,b) => {
    return a + b
  }

  let result = addTwoNumbers(3,5)
  let otherResult = addTwoNumbers(8,9)
  console.log (result)
  console.log (otherResult)

// egy sorosoknal elhagyhato a kapcsos zarojel
  let otherAdd = (a,b) => a + b;
  let rresult = otherAdd(8,8)
  console.log(rresult)

  // ha egy paraméter van, a zárójelen elhagyhatoak
  let greet = name =>`Hello ${name}`
  console.log(greet("David")); */


  // Callback
/*   let num = 8;
  function multiply (theNumber) {
    return theNumber * 2;
  }
  multiply(num);
  console.log(multiply(num)) */

/*   function theFunction (name, callback) {
    console.log(`Hello ${name}!`);
    callback();
  }

  function bye() {
    console.log("ByeBye!")
  }

  theFunction("David", bye) */

  
  // Builtin Features