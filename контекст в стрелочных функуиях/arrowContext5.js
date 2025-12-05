// Пример 5: Игра с несколькими контекстами


// КОНТЕКСТ зависит от СПОСОБА ВЫЗОВА:

// если obj.method(), то this = obj

// если method(), то this = window/undefined


// Запомни простое правило:

// Обычная функция: "Я создам свой мир (this), когда меня позовут"

// Стрелочная функция: "Я буду жить в мире того, кто меня создал"


// В методах объекта надо использовать ОБЫЧНУЮ фукнцию, а не стрелочную!!!


const game = {
    // КОНТЕКСТ 1:
    name: "Рыцарь",
    level: 1,
    
    улучшитьОружие: function() {
        // КОНТЕКСТ 1(тк вызов будет obj.method(), то this = obj): this = объект game
      
        console.log(`Улучшаем оружие для ${this.name}`); // "Рыцарь" 
        
        const funcObj = {
            simple: function() {
                // КОНТЕКСТ 2: тк вызываем как funcObj.simple(), то this = funcObj
                console.log("Обычная функция, this =", this);  //    { simple: f, arrow: f }
                console.log("this.name ", this.name)  // undefined
            },
            
            // Стрелочная функция - НЕ создает новый контекст
            arrow: () => {
                // КОНТЕКСТ 1: тк вызываем как funcObj.arrow(), то this = funcObj, но ткт стрелочная юерет контект от родителя, то this = объект game
                console.log("Стрелочная функция, this =", this); // { name: "Рыцарь",  level: 1,  улучшитьОружие: f,  прокачатьПерсонажа: f }
                console.log("this.name ", this.name)  // "Рыцарь"
            }
        };
        
        funcObj.simple(); // Создается КОНТЕКСТ 2
        funcObj.arrow();  // Используется КОНТЕКСТ 1
    },


    прокачатьПерсонажа: function() {
        // КОНТЕКСТ 1: тк вызов будет obj.method(), то this = obj то есть  this = объект game
        const oldLevel = this.level; // 1
        
        const methods = [
            // Обычная функция
            function() { 
                // КОНТЕКСТ 3:  тк вызываем как methods[0](), то this = window/undefined
                console.log("Метод 1, this =", this); // this = window/undefined
                return this?.level ? this.level++ : "нет уровня"; // нет уровня
            },
            
            // Стрелочная функция
            () => { 
                // КОНТЕКСТ 1(что и у родтеля)
                console.log("Метод 2, this =", this); // объект game
                return this.level++; // 2
            }
        ];
        
        methods[0](); // ❌ this = window/undefined, вернет  "нет уровня"
        methods[1](); // ✅ this = объект game, вернет 2
        console.log(`Уровень: ${oldLevel } → ${this.level}`); // Уровень:  1 → 2
    }
};



game.улучшитьОружие(); // Создается КОНТЕКСТ 1
game.прокачатьПерсонажа(); // Создается КОНТЕКСТ 1





