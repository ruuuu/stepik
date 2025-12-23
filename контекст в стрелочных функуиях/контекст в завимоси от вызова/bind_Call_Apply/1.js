// Пример 1: Потеря контекста (самая частая проблема)

const user = {
  name: 'Анна',

  greet: function() {
    console.log(`Привет, меня зовут ${this.name}`);
  }
};



// Работает, т.к. вызывается как метод объекта
user.greet();         // вызов как obj.method(), this = user, выведет  "Привет, меня зовут Анна"

const greetFunc = user.greet;       // сохраили метод в переменную
greetFunc();        // вызов как method(), поэтому this = undefind, выведет "Привет, меня зовут undefined"


// Решение через bind (фиксируем контекст this):
const boundGreet = user.greet.bind(user);       // Создаем новую функцию, где this = user
boundGreet();     // выведет  "Привет, меня зовут Анна"

// Полезно для отложенных вызовов:
setTimeout(user.greet.bind(user), 1000);
