// Сложный пример с привязкой контекста



// function Counter() {     //  конструктор

//     this.count = 0;     // this = Counter
    
//     setInterval(function() {            // в коллбэке(у обычной фукнции) свой контекст this, поэтому this  это глоб объект(не строгий режим), т е this = window(в браузере)/global(Node.js)
//         this.count++;
//         console.log(this.count);        // undefined
//     }, 1000);

// }




// new Counter();      // создает объект { count: 0, }, this = Counter



// Как исправить? (несколько вариантов)
// РЕЩЕНИЕ1: в коллбэке использовать стрелочную функуию(тогла она контектс this  возьмет из своего окружения, те this = Counter)
// function Counter() {         //  конструктор

//     this.count = 0;          // this = Counter
    
//     setInterval(() => {            // коллбэком является стрелочая фукнция, тут this = Counter
//         this.count++;
//         console.log(this.count);        
//     }, 1000);

// }

// new Counter();      // будет выводить 1. 2 3 4 5 с интервалом в 1 сек и так до бесконечности




// РЕШЕНИЕ2: Сохранить this в переменную
// function Counter() {
//     this.count = 0;
//     const self = this;      // Сохраняем контекст this
    
//     setInterval(function() {
//         self.count++;
//         console.log(self.count);
//     }, 1000);
// }


// new Counter();     




// РЕШЕНИЕ3: Использовать bind()- вернет новую фукнцию с навсегда привязанным this 

function Counter() {            //  конструктор

    this.count = 0;             // this = Counter
    
    setInterval(function() {                 
        this.count++;
        console.log(this.count);        
    }.bind(this), 1000);                // в bind указали контекст this и он уже не изменится

}




new Counter();