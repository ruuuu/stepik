// Пример 2: Работа внутри объекта

// КОНТЕКСТ зависит от СПОСОБА ВЫЗОВА:

// если obj.method(), то this = obj

// если method(), то this = window/undefined


// В методах объекта надо использовать ОБЫЧНУЮ фукнцию, а не стрелочную!!!

const company = {
    //  КОНТЕКСТ1
    name: "IT-Компания",
    persons: ["Аня", "Боря", "Вова"],
    
    // ❌ ПЛОХО: стрелочная функция в методе объекта
    показатьСотрудниковПлохо: () => {
        // тк вызываем как company.показатьСотрудниковПлохо(), поэтому this = undefined
        console.log('this ', this) // {}
        console.log(this.name); // undefined!
        this.persons.forEach(person => {
            console.log(person);
        });
    },
    
    // ✅ ХОРОШО: обычная функция в методе объекта
    показатьСотрудниковХорошо: function() {
        //  КОНТЕКСТ1, тк вызываем как company.показатьСотрудниковХорошо(), поэтому this = company
        console.log(this.name); // "IT-Компания" 
        this.persons.forEach(person => {
            console.log(person); // выведет
        });
    },
    
    // ✅ ХОРОШО: стрелочная функция ВНУТРИ обычной
    показатьСОтсчетом: function() {
        //  КОНТЕКСТ1, тк вызываем как company.показатьСОтсчетом(), поэтому this = company
        console.log("Компания:", this.name);
        
        this.persons.forEach((person, i) => {
            // Эта стрелочная функция видит this из показатьСОтсчетом
            console.log(`${i + 1}. ${person} работает в ${this.name}`); // выведет
        });
    }
};



company.показатьСотрудниковПлохо(); // ❌ Не работает
company.показатьСотрудниковХорошо(); // ✅ Работает
company.показатьСОтсчетом(); // ✅ Работает 