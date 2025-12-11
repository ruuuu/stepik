// Пример 1: Классика жанра
// В обычной функции (greet): this определяется в момент вызова функции и зависит от того, как ее вызвали (перед точкой). 
// Если вызвать просто как greet(), то в строгом режиме this = undefined.
// стрелочная: Её this — это this той области, где был создан объект obj, всегда имеет this = window

// КОНТЕКСТ зависит от СПОСОБА ВЫЗОВА:

// если obj.method(), то this = obj

// если method(), то this = window/undefined


"use strict";


const obj = {
  name: 'Alice',

  greet: function() {       // вызов как obj.method(), поэтому this = obj
    console.log(`Hello, ${this.name}`);    // 'Alice'
  },

  greetArrow: () => { // у стрелочной фунции нет своего this, она его берет из внешней облвсти(в данном случае window) 
    console.log(`Hi, ${this.name}`); // undefined
  }
};


const greet = obj.greet; //  это функция
const greetArrow = obj.greetArrow;  //  это функция




// obj.greet();      // вызов как obj.method(), выведет 'Alice'
// obj.greetArrow(); // вызов как obj.method(), но тк стрелочная фукнция(this = window), то выведет undefined
// greet();          // тк функция вызвана без контекста, то  this = undefined(строгий режим), в нестргом режиме это window
// greetArrow();     //  тк стрелочная всегда имеет this = window, то выведет undefined