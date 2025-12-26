// В колбэке setTimeout обычная функция теряет контекст this. Решения: либо стрелочная функция, либо bind, или сохранение this в переменную.



const user = {
  name: 'John',

  sayHi: function() {
    setTimeout(function() {
      console.log(`Hello, ${this.name}`); // this = undefined, тк при вызове обычной фунуии создается свой контекст this, чтобы устанить это надо в setTimeout перелатвать стрелочную функцию и тгда она возьмет this из внешней области(в данном случае из фукнции sayHi)
    }, 100);
  },


  sayHiArrow: function() {
    setTimeout(() => {
      console.log(`Hi, ${this.name}`); // стрелчна функия берет this из внейшней области( в данном случае это фукнци sayHiArrow, а у нее this=user )
    }, 100);
  },


  sayHiBind: function() {
    setTimeout(function() {
      console.log(`Hey, ${this.name}`);  // т к bind(this) привязывает this внешней функции(то есть sayHiBind), то this=user
    }.bind(this), 100);
  }

};



user.sayHi();           // выведет undefined
user.sayHiArrow();     // выведет John
user.sayHiBind();     // выведет John