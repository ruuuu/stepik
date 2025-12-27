// В колбэке setTimeout обычная функция теряет контекст this. Решения: либо стрелочная функция, либо bind, или сохранение this в переменную.


const user = {
  name: 'John',

  sayHi: function() {
    setTimeout(function() {     // в коллбэке обычна фукнция 
      console.log(`Hello, ${this.name}`);  // this = undefined, тк при вызове обыной фунуии создается свой контекст this
    }, 100);
  }

} 

user.sayHi() // undifened






// РЕШЕНИЕ 1:
// чтобы this = user, надо в setTimeoiut передать не обычную, а стрелочную фукнию:
// const user1 = {
//   name: 'John',

//   sayHi: function() {
//     setTimeout(() => {    // в коллбэке вместо обычной стрелочная фукнция 
//       console.log(`Hello, ${this.name}`);  // this = user, тк стрелчная функция берет this из внешней области(а это функция sayHi и у нее this = user)
//     }, 100);
//   }

// } 

// user1.sayHi() // John



// РЕШЕНИЕ 2:
// чтобы this = user, надо коллбэк-фукнию вызываем при помщи .bind(this)
// const user1 = {
//   name: 'John',

//   sayHi: function() {
//     setTimeout(function() {    // коллбэк-фукнию вызываем при помщи .bind(this)
//       console.log(`Hello, ${this.name}`);  // this = user
//     }.bind(this), 100);
//   }

// } 

// user1.sayHi() // John



// РЕШЕНИЕ 3:
// чтобы this = user, надо this сохранить в переменную:
const user1 = {
  name: 'John',

  sayHi: function() {
    let t = this    // this сохранили в переменную

    setTimeout(function() {     // в коллбэке обычна фукнция 
      console.log(`Hello, ${t.name}`);     
    }, 100);
  }

} 

user1.sayHi()     // John




