// Задача 3: setTimeout - КЛАССИКА!

// КОНТЕКСТ зависит от СПОСОБА ВЫЗОВА:

// если obj.method(), то this = obj

// если method(), то this = window/undefined

// В методах объекта надо использовать ОБЫЧНУЮ фукнцию, а не стрелочную!!!

// В колбэке setTimeout обычная функция теряет контекст this. Решения: либо стрелочная функция, либо bind, или сохранение this в переменную.




const user = {
  // контекст1
  name: 'Alice',

  greet: function() {
    // контекст1
    setTimeout(function() {     // обычная фукнция в коллбеке
      // контекст2
      console.log(`Hello, ${this.name}`);     // this = undefined/window
    }, 100);
  },


  greetArrow: function() {
    // контекст1
    setTimeout(() => {      // стрелочная  фукнция в коллбеке
      // контекст1
      console.log(`Hello, ${this.name}`);     // this = user то есть контекст от родителя(окружающей области) greetArrow(контекст1)
    }, 100);
  }
};




user.greet();         // создаетс контекст1, выведет Hello, undefined
user.greetArrow();    // создаетс контекст1, выведет Hello, Alice




// РЕШЕНИЕ1:  чтобы в user.greet() this = user нужно коллбэк сделать стрелочной фукнцией:

// const user1 = {
//   // контекст1
//   name: 'Alice',

//   greet: function() {
//     // контекст1
//     setTimeout(() => {     // коллбёк сделали стрелочной фунцкией
//       // контекст2
//       console.log(`Hello, ${this.name}`);     // this = undefined/window
//     }, 100);
//   },

// }



// Решение2: использовать .bind(this)
// const user1 = {
//   // контекст1
//   name: 'Alice',

//   greet: function() {
//     // контекст1
//     setTimeout(function() {     // обычная фукнция в коллбеке
//       // контекст2
//       console.log(`Hello, ${this.name}`);    
//     }.bind(this), 100);
//   },

// }




// Решение3:  сохрнаить this в перменную
const user1 = {
  // контекст1
  name: 'Alice',

  greet: function() {
    let t = this        //  сохрнаили в перменную контекст this
    // контекст1
    setTimeout(function() {     // обычная фукнция в коллбеке
      // контекст2
      console.log(`Hello, ${t.name}`);     
    }, 100);
  },

}

user1.greet(); 