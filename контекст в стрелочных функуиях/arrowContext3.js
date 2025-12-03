// Пример 3: Таймеры и события (самое полезное!)

const button = {
    text: "Нажми меня",
    clicks: 0,
    
    // ❌ Проблема с обычной функцией в setTimeout
    method1: function() {
        setTimeout(function() {
            // НОВЫЙ контекст! this = window
            this.clicks++;              // ❌ Не работает
            console.log("Кликов:", this.clicks);            // undefined
        }, 1000);
    },
    
    // ✅ Старое решение: сохранить this
    method2: function() {
        const self = this; // Сохраняем  контекст this
        
        setTimeout(function() {
            self.clicks++;               // ✅ Используем сохраненный self
            console.log("Кликов (старый способ):", self.clicks);
        }, 1000);
    },
    
    // ✅ Современное решение: стрелочная функция
    method3: function() {
        setTimeout(() => {
            // Берет this из окружающей функции! т е this=button
            this.clicks++; // ✅ Работает!
            console.log("Кликов (стрелочная):", this.clicks);
        }, 1000);
    }
};

button.method1(); // ❌
button.method2(); // ✅ Кликов: 1
button.method3(); // ✅ Кликов: 2