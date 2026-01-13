
// КОНТЕКСТ this зависит от СПОСОБА ВЫЗОВА:

// если obj.method(), то this = obj

// если method(), то this = window/undefined


// В методах объекта надо использовать ОБЫЧНУЮ фукнцию, а не стрелочную!!!


const library = {
    // КОНТЕКСТ1:
    name: "Городская библиотека",
    books: [
        { name: "JS для чайников", pages: 300 },
        { name: "React с нуля", pages: 250 },
        { name: "Алгоритмы", pages: 500 }
    ],
    

    findBooks: function() {
        // КОНТЕКСТ1: тк вызов будет obj.method(), то this = obj то есть this = library
        console.log(`Библиотека: ${this.name}`);  // "Городская библиотека"
        
        // ❌ forEach с обычной функцией
        this.books.forEach(function(book, ind) {
            // КОНТЕКСТ2: this = undefined
            console.log(`${ind + 1}. ${book.name}`);
            console.log(`В библиотеке ${this.name}`);    // this = undefined
        });
        
      
        // ✅ forEach со стрелочной функцией
        this.books.forEach((book, ind) => {
            // КОНТЕКСТ1: this берем у родителя те this = library 
            console.log(`${ind + 1}. ${book.name}`);
            console.log(`   (в библиотеке ${this.name})`);    // Городская библиотека
        });
    },
    

    findFatBooks: function(limitPage) {
        // КОНТЕКСТ1: тк вызов будет obj.method(), то this = obj то есть this = library
        
        return this.books.filter(book => {
            return book.pages > limitPage && this.name.includes("Городская");    // ✅ this доступен
        });
    }
};




library.findBooks(); // создается КОНТЕКСТ1
const fatBooks = library.findFatBooks(400);  // создается КОНТЕКСТ1
console.log("Толстые книги:", fatBooks);