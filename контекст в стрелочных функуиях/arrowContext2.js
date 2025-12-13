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
    // func1: () => {
    //     // тк вызываем как company.func1(), поэтому this = undefined
    //     console.log('this ', this)      // {}
    //     // console.log(this.name)       // undefined
    //     // console.log(this.persons)    // this.persons = undefined

    //     this.persons.forEach(person => {        
    //         console.log(person)          // undefined
    //     });
    // },


    
    //  чтобы исправить, нужно стрелочную обернуть в обычную фукнию:
    func11: function() {
       return () => {
        
        console.log('this ', this)      // { name, person, func1, func2, func3 }
        console.log(this.name)          
        console.log(this.persons)       

        this.persons.forEach(person => {        
            console.log(person)          // выведет
        });
      };

      
    },
       
    

    // ✅ ХОРОШО: обычная функция в методе объекта
    func2: function() {
        //  Тк вызываем как company.func2(), поэтому this = company
        console.log(this.name)          // "IT-Компания" 
        console.log(this.persons)       // ["Аня", "Боря", "Вова"]

        this.persons.forEach(person => {
            console.log(person)        // выведет
        });
    },
    

    // ✅ ХОРОШО: стрелочная функция ВНУТРИ обычной
    func3: function() {
        // Тк вызываем как company.func3(), поэтому this = company
        console.log("Компания:", this.name)      // "IT-Компания"
        
        this.persons.forEach((person, i) => {
            // Эта стрелочная функция видит this из func3
            console.log(`${i + 1}. ${person} работает в ${this.name}`)     // выведет
        });
    }
};



// company.func1();        // undefined

const f = company.func11();     //  работает, f-фукнция
f()
// company.func2();    //  Работает
// company.func3();    // Работает 