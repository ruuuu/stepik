

const user = {
  name: 'John',

  sayHi: function() {
    setTimeout(function() {
      console.log(`Hello, ${this.name}`);  // this = undefined, тк при вызове обыной фунуии создается свой контекст this
    }, 100);
  }

} 

user.sayHi() // undifened


// чтобы this = user, надо в setTimeoiut передать не обычную, а стрелочную фукнию:
const user1 = {
  name: 'John',

  sayHi: function() {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`);  // this = user, тк стрелчная функция берет this из внешней области(а это функция sayHi и у нее this = user)
    }, 100);
  }

} 

user1.sayHi() // John