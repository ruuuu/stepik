// Стрелочные функции как методы в конструторе



// Обычные функции(методы) в конструкторе или прототипе — this определяется при вызове(obj.method()).

// Стрелочные фукнции(методы) в конструкторе — this фиксируется на создаваемом объекте(person), т е this = person.



function Person(name) {     // конструткор

    this.name = name;


    this.sayName = () => {            //  стрелочная фукнция в констркторе
        console.log(this.name);
    };


    this.delayedSayName = function() {    //  обычная фукнция в конструкторе

        setTimeout(() => {
            console.log(this.name);
        }, 100);
    };
}



const person = new Person('Alice');       // создаем объект { name: 'Alice', sayName: [Function (anonymous)] }

const say = person.sayName;       // функуия 

say();                         // вызов фукнии sayName(), выведет 'Alice'
person.delayedSayName();      // тк. вызов как obj.method(), то this = person, затем стрелочная фукняи(коллбэк) берет this из лексичесго окружения(те из delayedSayName()), выведет Alice