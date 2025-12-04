// Пример 2: Работа внутри объекта

// КОНТЕКСТ зависит от СПОСОБА ВЫЗОВА:

// если obj.method(), то this = obj

// если method(), то this = window/undefined




const company = {
    //  КОНТЕКСТ1
    name: "IT-Компания",
    persons: ["Аня", "Боря", "Вова"],
    
    // ❌ ПЛОХО: стрелочная функция в методе объекта
    показатьСотрудниковПлохо: () => {
        // console.log('this ', this) // {}
        //console.log(this.name); // undefined!
        this.persons.forEach(person => {
            console.log(person);
        });
    },
    
    // ✅ ХОРОШО: обычная функция в методе объекта
    показатьСотрудниковХорошо: function() {
        //  КОНТЕКСТ1
        console.log(this.name); // "IT-Компания" 
        this.persons.forEach(person => {
            console.log(person); // выведет
        });
    },
    
    // ✅ ХОРОШО: стрелочная функция ВНУТРИ обычной
    показатьСОтсчетом: function() {
        //  КОНТЕКСТ1
        console.log("Компания:", this.name);
        
        this.persons.forEach((person, i) => {
            // Эта стрелочная функция видит this из показатьСОтсчетом
            console.log(`${i + 1}. ${person} работает в ${this.name}`);
        });
    }
};

company.показатьСотрудниковПлохо(); // ❌ Не работает
company.показатьСотрудниковХорошо(); // ✅ Работает
company.показатьСОтсчетом(); // ✅ Работает 