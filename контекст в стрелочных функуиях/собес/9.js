// Задача 9: bind/call/apply со стрелочными фуниями

// bind/call/apply не работает со стрелочными функциями! Работают только с обычными функуиями
// если стрелочную фукнцию поместить в метод объекта, то this = obj



// Используй стрелочные функции когда:
// Нужно сохранить контекст внешней функции

// Колбэки (setTimeout, промисы, обработчики событий)

// Короткие функции-обработчики в массивах (map, filter)

// Используй обычные функции когда:
// Нужны методы объектов (чтобы this указывал на объект)

// Нужно использовать call/apply/bind

// Нужен конструктор

// Нужен доступ к arguments





const car = {
  brand: 'Toyota'
};


const getBrand = () => {     // this = window/global, стрелочная фукнция берет this из внешней области
  console.log(this.brand);   // undefined, чтобы заработало, надо сделать getBrand() ОБЫЧНОЙ фукнцией
};


const getBrandRegular = function() { // при вызове создаетс свой this
  console.log(this.brand);      // call()  устанавливает this = car
};



getBrand.call(car);           // undefined ❌ (стрелочные игнорируют bind/call/apply)
getBrandRegular.call(car);    // this = car, 'Toyota'







// Чтобы getBrand() сработала, надо ее сделать ОБЫЧНОЙ фукнцией и как метод объекта(если стрелочную фукнцию поместить в метод объекта, то this = obj):

const car1 = {
  brand: 'Toyota',

  getBrand: function() {     // сделали из стрелочной обычную и как метод объекта. Тк вызов obj.method(),  фукния является методом объекта, то this = car
      console.log(this.brand);   // 'Toyota'
  },

  getBrandRegular: function(){
    return () => {
      console.log(this.brand); // тк стрелочную фукнцию внесли в метод объекта, то this = car1
    }
  }

};



car1.getBrand() // 'Toyota'


const func = car1.getBrandRegular()
func() // 'Toyota'