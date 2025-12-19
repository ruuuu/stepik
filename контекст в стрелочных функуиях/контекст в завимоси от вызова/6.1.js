// Поведение this в стрелочной функции объявленной в конструкторе


// Стрелочная функция и обычная функция в конструкторе , в них this = экземпляру класса(объекту класса) 
// Стрелочная функция в классе (не в конструкторе), в ней this = экземпляру класса(объекту класса) 
// Обычная функцияв классе (не в конструкторе), в ней this зависит от контекста вызова



class Person {

  constructor(name) {
    this.name = name;
    
    
    this.sayHello = () => {       // Стрелочная функция в конструкторе
      console.log(this.name);     // this ссылается на создаваемый экземпляр (this = экземпляру класса )
    };
    
    
    this.sayHi = function() {       //  обычная функция в конструкторе
      console.log(this.name);       // this также ссылается на экземпляр
    };
  }
  


  
  sayBye = () => {        // Стрелочная функция в теле класса (не в конструкторе)
    console.log(this.name);     // this ссылается на экземпляр
  };
  


  
  sayGoodbye() {         // Метод класса (обычная функция)
    console.log(this.name);       // зависит от контекста вызова, еслм как obj.method(), то this = obj
  }
}




const person = new Person('Иван');      // создали экземпляр класса,  person =  { name: , sayHello: function, sayHi: function}



// Все три варианта работают корректно при прямом вызове
// person.sayHello();      // this = person, выведет 'Иван'
// person.sayHi();         // this = person, выведет 'Иван'
// person.sayBye();        //  this = person, выведет 'Иван'
// person.sayGoodbye();    // т к вызов как obj.method(), то this = obj, выведет 'Иван'
  
// //sayGoodbye() // не сработает, ReferenceError: sayGoodbye is not defined


// // если вызывать так:
// const person1 = new Person('Иван');
// const hello = person1.sayHello;       //  стрелочная функция

// const goodbye = person1.sayGoodbye;   // обычная функция

// hello();     // 'Иван' - стрелочная функция в контруторе, она сохраняет контекст this = person1
// goodbye();   //  тк. вызывали как method() без контекста, то будет Ошибка или undefined - потеря контекста
