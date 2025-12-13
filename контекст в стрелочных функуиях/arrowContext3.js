// Пример 3: Таймеры и события (самое полезное!)

// КОНТЕКСТ зависит от СПОСОБА ВЫЗОВА:
// если obj.method(), то this = obj
// если method(), то this = window/undefined


// Запомни простое правило:

// Обычная функция: "Я создам свой мир (this), когда меня позовут"

// Стрелочная функция: "Я буду жить в мире того, кто меня создал
// "

// В методах объекта надо использовать ОБЫЧНУЮ фукнцию, а не стрелочную!!!


const button = {
    // КОНТЕКСТ1
    text: "Нажми меня",
    clicks: 0,
    
    // ❌ Проблема с обычной функцией в setTimeout
    method1: function() {       // КОНТЕкСТ1
        // тк вызываем как button.method1(), поэтому this = button
        
        console.log('this in method1= ', this)          // button = { text: 'Нажми меня',  clicks: 0,  method1: Fuction,  method2: Fuction,  method3: Fuction }

        setTimeout(function() {
            // контекст2, тут обычная фкнуия, потому контекст уже другой: this = window/indefined
            this.clicks++;              // ❌ Не работает
            console.log("Кликов:", this.clicks);            // undefined
        }, 1000);
    },
    


    // ✅ Старое решение: сохранить this
    method2: function() {       // КОНТЕкСТ1
        // тк вызываем как button.method2(), поэтому this = button
        console.log('this in method2= ', this)  // button = { text: 'Нажми меня',  clicks: 0,  method1: Fuction,  method2: Fuction,  method3: Fuction }


        const self = this; // Сохраняем  контекст this
        console.log('self = ', self)        // т е  { text: "Нажми меня", clicks: 0, method1: [Function: method1], method2: [Function: method2], method3: [Function: method3] }
        
        setTimeout(function() {
            // контекст3
            self.clicks++;               
            console.log("Кликов (старый способ):", self.clicks);
        }, 1000);
    },

    
    
    // ✅ Современное решение: стрелочная функция
    method3: function() {       // КОНТЕкСТ1
        //  тк вызываем как button.method2(), поэтому this = button
        console.log('this in method3= ', this)          // { text: 'Нажми меня',  clicks: 0,  method1: Fuction,  method2: Fuction,  method3: Fuction }

        setTimeout(() => { 
            // стрелочная функция берет this из окружающей функции те КОНТЕСТ1! т е this = button
            console.log('this = ', this)             // т е  { text: "Нажми меня", clicks: 1, method1: [Function: method1], method2: [Function: method2], method3: [Function: method3] }

            this.clicks++;          // ✅ Работает!
            console.log("Кликов (стрелочная):", this.clicks);
        }, 1000);
    }
};



button.method1(); // ❌
button.method2(); // ✅ Кликов: 1
button.method3(); // ✅ Кликов: 2