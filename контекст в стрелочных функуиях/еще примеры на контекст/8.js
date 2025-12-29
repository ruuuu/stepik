// 8. Еще одна хитрая задача


// this — это контекст выполнения функции. Определяется тем как функция вызывается, а не там где она объявлена.




// var prop = 10;    // Глобальная переменная (при использовании var в нестрогом режиме она становится свойством window)   

// const obj = {
//   prop: 20,
  
//   getProp: function() {
//     return this.prop;
//   }
// };



// const freeFunc = obj.getProp;     // обычная функия (ссылка на функцию)


// // console.log(obj.getProp());       // тк вызов как obj.method(), то this = obj,  выведет  20

// console.log(freeFunc());            // тк вызов как method() (т е без контекста), то this = global/window( в нестрогий режим), выведет 10



// freeFunc() Если в строгом режиме(use strict), this = undefined, то выведет undefined
// freeFunc() Если бы у prop было let или const, то выведет undefined





// РЕШЕНИЕ1: чтобы выводило 20, нужно использовать bind():

// var prop1 = 10;

// const obj1 = {
//   prop1: 20,
  
//   getProp: function() {
//     return this.prop1;
//   }
// };



// const freeFunc1 = obj1.getProp.bind(obj1);      // использовали bind(): вернет новую фукнуию с нвсегла фиксированным this = obj1  

// console.log(obj1.getProp());  // 20
// console.log(freeFunc1());     //  теперь this = obj1, выведет 20




// РЕШЕНИЕ2: чтобы выводило 20, нужно использовать в методе объекта стелочную фукнцию и тогда this = obj:

var prop1 = 10;

const obj1 = {
  prop1: 20,
  
  getProp: function() {
    const fun = () => {     // у стрелочно фукнци нет своего this, она его берет из окружающей области(то есть из getProp)
      return this.prop1;
    }

    return fun();
  }
};



const freeFunc1 = obj1.getProp;      // обычная функция

console.log(obj1.getProp());  // 20
console.log(freeFunc1());     //  
