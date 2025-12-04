// Пример 3: Таймеры и события (самое полезное!)

const button = {
    // КОНТЕКСТ1
    text: "Нажми меня",
    clicks: 0,
    
    // ❌ Проблема с обычной функцией в setTimeout
    method1: function() {
        // КОНТЕКСТ1
        
        // console.log('this in method1= ', this)  // { text: 'Нажми меня',  clicks: 0,  method1: Fuction,  method2: Fuction,  method3: Fuction }

        setTimeout(function() {
            // контекст2, контекст уже другой: this = window
            this.clicks++;              // ❌ Не работает
            console.log("Кликов:", this.clicks);            // undefined
        }, 1000);
    },
    

    // ✅ Старое решение: сохранить this
    method2: function() {
        // КОНТЕКСТ1
        // console.log('this in method2= ', this)  // { text: 'Нажми меня',  clicks: 0,  method1: Fuction,  method2: Fuction,  method3: Fuction }


        const self = this; // Сохраняем  контекст this
        console.log('self = ', self)    // т е  { text: "Нажми меня", clicks: 0, method1: [Function: method1], method2: [Function: method2], method3: [Function: method3] }
        
        setTimeout(function() {
            // контекст3
            self.clicks++;               // ✅ Используем сохраненный self
            console.log("Кликов (старый способ):", self.clicks);
        }, 1000);
    },

    
    // ✅ Современное решение: стрелочная функция
    method3: function() {
        // КОНТЕКСТ1
        console.log('this in method3= ', this)   // { text: 'Нажми меня',  clicks: 0,  method1: Fuction,  method2: Fuction,  method3: Fuction }

        setTimeout(() => {
            // Берет this из окружающей функции те КОНТЕСТ1! т е this=button
            console.log('this = ', this)  // т е  { text: "Нажми меня", clicks: 1, method1: [Function: method1], method2: [Function: method2], method3: [Function: method3] }

            this.clicks++; // ✅ Работает!
            console.log("Кликов (стрелочная):", this.clicks);
        }, 1000);
    }
};

button.method1(); // ❌
button.method2(); // ✅ Кликов: 1
button.method3(); // ✅ Кликов: 2