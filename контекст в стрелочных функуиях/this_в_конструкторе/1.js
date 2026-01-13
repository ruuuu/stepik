// Поведение this в функции объявленной в конструкторе


// Стрелочная функция и обычная функция в конструкторе , в них this = экземпляру(объекту) 
// Стрелочная функция в классе (не в конструкторе), в ней this = экземпляру класса(объекту класса) 
// Обычная функция в классе (не в конструкторе), в ней this зависит от контекста вызова


function Person(name) {       // конструктор - функция вызванная с оператром new
    this.name = name;
}


const person = new Person('John');      // создаем объект { name: 'John' }

console.log(person.name);               // this = экземпляру(объекту), выведет  John





// Что будет без new:

function Person(name) {
    this.name = name;
}

const person1 = Person('John');       // забыли new, тогда функция выполняется не как конструктор, а как обычная фукнция, тогда this = window(нестрогий режим)/global(Node.js)
console.log(person1);                 //  выведет undefined
console.log(window.name);             // this = window - глоб объект,  выведет в браузере 'John'