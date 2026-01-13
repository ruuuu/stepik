// Сложный пример с привязкой контекста

function Counter() {

    this.count = 0;
    
    setInterval(function() {
        this.count++;
        console.log(this.count);
    }, 1000);

}




new Counter();      // Что будет происходить?

// Как исправить? (несколько вариантов)