// Задача 1: Базовый контекст


// КОНТЕКСТ зависит от СПОСОБА ВЫЗОВА:

// если obj.method(), то this = obj

// если method(), то this = window/undefined


const obj = {
  name: 'John',

  regularFunc: function() {
    console.log(this.name); // тк вызов regularFunc() происхдит как obj.regularFunc(), regularFunc - обычнаяя фукнция(не стрелочная), то this = obj
  },

  arrowFunc: () => {
    console.log(this.name); // тк вызов arrowFunc() происхдит как obj.arrowFunc(), но arrowFunc- стрелочная фун-ия, то this берет из внешней области,  здесь это window/undefined
  }

};



obj.regularFunc(); //  'John',
obj.arrowFunc();   // undefined