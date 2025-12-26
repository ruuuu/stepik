// Задача 9: bind/call/apply со стрелочными фуниями



// функция.call(context, arg1, arg2...) — вызывает функцию(метод) с заданным this = context(obj котрый хотим привязать) и аргументами, переданными по отдельности.

// функция.apply(context, [arg1, arg2...]) — то же, что call, но аргументы передаются в виде массива.

// функция.bind(context, arg1, arg2...) — не вызывает функцию, а возвращает новую функцию, с навсегда привязанным this = context(obj котрый хотим привязать) (и, опционально, аргументами).




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
  console.log(this.brand);   // undefined, чтобы заработало, надо сделать getBrand() ОБЫЧНОЙ фукнцией и вызывать  ее так: getBrand.call(car)
};


const getBrandRegular = function() {    // обычная функция  при вызове создает свой this, this = undefined
  console.log(this.brand);      // call()  устанавливает this = car
};



getBrand.call(car);           // call вызывает фукнуию getBrand c this = car, но ткстрелочные игнорируют bind/call/apply, то   undefined ❌ ()
getBrandRegular.call(car);    // call вызывает фукнуию getBrandRegular с this = car, выведет 'Toyota'







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



car1.getBrand()     // 'Toyota'


const func = car1.getBrandRegular()
func()      // 'Toyota'