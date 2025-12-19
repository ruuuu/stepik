// Пример 6: Сложный пример с классами


// Стрелочная функция и обычная функция в конструкторе , в них this = экземпляру класса(объекту класса) 
// Стрелочная функция в классе (не в конструкторе), в ней this = экземпляру класса(объекту класса) 
// Обычная функция в классе(метод) (не в конструкторе), в ней this зависит от контекста вызова: если вызов как obj.method(), то this = экземпляру класса, если как method() то this = undefined
// Обычный метод класса(функция объявленная не в контуркторе, а в теле класса) — теряет контекст при присваивании переменной (ex: const dec = counter.decrement; )



class Counter {

  constructor() {
    this.count = 0;

    this.increment = () => {    // Стрелочная функция в конструкторе , this = экземпляру класса(те this = counter)
      this.count++;
      console.log(this.count);
    };
  }
  

  decrement() {   // Обычная функция(метод) в классе (не в конструкторе), в ней this зависит от контекста вызова
    this.count--;
    console.log(this.count);
  }
  

  static reset() {
    this.count = 0;
    console.log('Reset to:', this.count);
  }
}



const counter = new Counter();        // созали эксземпляр класса Counter {count: 0, increment: function}
const inc = counter.increment;        // стрелч функция в контрукторе, в ней this = экземпляру класса
const dec = counter.decrement;        // обычная функция(метод) в классе (не в конструкторе), в ней this зависит от контекста вызова



counter.increment(); // 1
inc();               //  стрелч функция в контрукторе, в ней this = экземпляру класса, выведет 2

counter.decrement();        // тк вызов как obj.method(), то this = экземпляру класса,  выведет 1
dec();                      // тк вызов как method(), то this = undefined(контекст потерляся)

Counter.reset();         // reset — статический метод. Внутри него this ссылается на сам класс Counter, а не на экземпляр(counter). 
// У класса нет свойства count, поэтому this.count = 0 создаст свойство count у класса Counter, но console.log(this.count) выведет 0.