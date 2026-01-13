// Потеря контекста this


// Обычные функции(методы) в конструкторе или прототипе — this определяется при вызове(obj.method()).

// Стрелочные фукнции(методы) в конструкторе — this фиксируется на создаваемом объекте(person), т е this = person.

// В колбэке у setTimeout обычная функция теряет контекст this.



function Person(name) {       // констуктор

    this.name = name;

    this.sayName = function() {       // обычная фукнция в конутрктре
        console.log(this.name);
    };
}



const person = new Person('Bob');     // { name: 'Bob', sayName: [Function (anonymous)] }


const say = person.sayName;           // фукнция 


say();      // тк вызов не как obj.method(),  то this = undefined, выведет undefined

setTimeout(person.sayName, 100);              // тк в колбэке у setTimeout обычная функция теряет контекст this, то this = undefined, вывдет undefined
setTimeout(() => person.sayName(), 200);      // тк в колбэке у setTimeout стрелочная функция, а она беерте this из окржуеия своего, то  выведет 'Bob'