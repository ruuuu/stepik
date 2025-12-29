// 7. Задача с собеседования (с подвохом)




// const length = 4;         // глоб область видимости

// function callback() {              // тк глоб область видимости, то this = window/global
//   console.log(this.length);       // this определяется в момент вызова функции, а не в момент её объявления. а в глоб области length = 4, значит выведет 4
// }


// const obj = {       // глоб область видимости
//   length: 5,
  
//   method(callback) {
//     callback();           // тк вызов происходит как method(), а не как obj.method() те без контекста, то this = window/global
//     console.log(this.length);     // выведет 5
//   }
// };



// obj.method(callback); // undefined





// РЕШЕНИЕ1: чтобы obj.method(callback) вернуло 5 нужно ипоьзвать call():

// const length1 = 4;         // глоб область видимости

// function callback() {              // тк глоб область видимости, то this = window/global
//   console.log(this.length1);       // this определяется в момент вызова функции, а не в момент её объявления. а в глоб области length = 4, значит выведет 4
// }


// const obj1 = {              // глоб область видимости
//   length1: 5,
  
//   method(callback) {   
//     callback.call(this);               // call вызывает callback() с this = obj1, выведет 5
//     console.log(this.length1);        // выведет 5
//   }
// };



// obj1.method(callback);    // выведет 5




// РЕШЕНИЕ2: чтобы obj.method(callback) вернуло 5 нужно callback сдеалть как метод объекта и в method вызывать как this.callback()

const length1 = 4;         // глоб область видимости

const obj1 = {              // глоб область видимости
  length1: 5,

  callback() {              // фукнию сделали как метод объекта
   console.log('this в callback: ', this)           // тк вызов this.callback(), то this = obj1
   console.log('this.length1 in callback: ', this.length1);     // { length1: 5, callback: func,  method: func }  
  },
  
  method() {   
    console.log(this.callback())                  //  this = obj1
    console.log('this in method: ', this)        // { length1: 5, callback: func,  method: func }
    console.log('this.length1 in method: ', this.length1);        // выведет 5
  }
};



obj1.method();    // выведет 5