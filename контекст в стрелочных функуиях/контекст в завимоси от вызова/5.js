// Пример 5: Конструктор и this

// Обычные функции(методы) (в конструкторе или прототипе) — this определяется при вызове(obj.method()).

// Стрелочные методы в конструкторе — this фиксируется на создаваемом объекте(bmw).

// Стрелочные методы в прототипе — обычно неправильный паттерн, так как this не будет ссылаться на экземпляр(this = undefined).




function Car(model) {    // констурктор-это функция Car, которая вызывается с оператором new
  this.model = model;

  this.getModel = function() {    // обычная фукнция в контуркторе, вызов как obj.method(), значит this = Car 
    return this.model;
  };

  this.getModelArrow = () => {    // стрелочная в контрукторе, она this берет из окружающего констекста(т е из констурктора), значит this = Car
    return this.model;
  };
}



Car.prototype.getProtoModel = function() {      // обычная фукнция в прототипе, вызывается  как obj.method(), значит this = Car
  return this.model;
};


// неверно:
Car.prototype.getProtoModelArrow = () => {     // стрелочная фукнция в прототипе, this зафиксирован на момент создания прототипа,  (обычно это глобальный объект(window) или undefined в strict mode) 
  return this.model;      // this =  undefined
};





const bmw = new Car('BMW'); // создали экземпляр(объект) Car = { model: 'BMW', getModel: fucntion , getModelArrow:function }, возвращается this = Car (если явно не возвращается другой объект)


console.log(bmw.getModel());             //  выведет BMW
console.log(bmw.getModelArrow());       // выведет BMW
console.log(bmw.getProtoModel());      // выведет BMW
console.log(bmw.getProtoModelArrow());   // выведет undefined
// console.log('Car.prototype ', Car.prototype)  // { getProtoModel: [Function (anonymous)], getProtoModelArrow: [Function (anonymous)]}



// Стрелочная функция getProtoModelArrow создается при инициализации Car.prototype.

// В этот момент this равен глобальному объекту (или undefined в strict mode), а не будущим экземплярам Car.

// Поэтому this.model в ней ссылается на несуществующее свойство model глобального объекта.



// Прототип:
// Car.prototype — это объект, который получают все экземпляры, созданные через new Car().

// Методы в прототипе общие для всех экземпляров (экономия памяти).

// При обращении к свойству объекта (например, bmw.getProtoModel()) JavaScript ищет его сначала в самом объекте, затем в цепочке прототипов.





