// 6. Пример с конструкторами


// Обычные функции(методы) (в конструкторе или прототипе) — this определяется при вызове(obj.method()).

// Стрелочные методы в конструкторе — this фиксируется на создаваемом объекте(person1). т е this = person1




function Person(name) {     // констурктор - это функция Person, которая вызывается с оператором new

  this.name = name;
  

  this.sayNameRegular = function() {    // обычная функия в контсруткторе, тк ее вызываем как method(), то this undefined
    console.log('Regular:', this.name);
  };
  

  this.sayNameArrow = () => {       // стрелоччная функия. в контсруткторе, тут this = person1
    console.log('Arrow:', this.name);
  };
}




const person1 = new Person('John');   // создали экземпляр(объект)
const person2 = new Person('Jane');   // создали экземпляр(объект)



const regularFunc = person1.sayNameRegular;   // обычная функция
const arrowFunc = person1.sayNameArrow;       // стрелочная функция





// regularFunc();      // тк ее вызываем как method(), то this= undefined, выведет undefined
// arrowFunc();        // тк это стрелочная в конcтрукторе, то тут this = person1, выведет 'John'

person1.sayNameRegular()    // выведет 'John'