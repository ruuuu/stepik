// Пример 7:  Обычная функция и  Приоритеты bind/call



// this — это контекст выполнения функции. Определяется тем, как функция вызвана, а не тем, где объявлена.

// функция.call(context, arg1, arg2...) — вызывает функцию(метод) с заданным this = context(obj котрый хотим привязать) и аргументами, переданными по отдельности.

// функция.apply(context, [arg1, arg2...]) — то же, что call, но аргументы передаются в виде массива.

// функция.bind(context, arg1, arg2...) — не вызывает функцию, а возвращает новую функцию, с навсегда привязанным this = context(obj котрый хотим привязать) (и, опционально, аргументами).

// После первого вызова bind нельзя изменить контекст this  повторным вызовом bind/call/apply!!

// стрелочные функции игнорируют call/apply/bind



const obj1 = { name: 'Alice' };
const obj2 = { name: 'Bob' };

function getName() {
  return this.name;
}


const boundToObj1 = getName.bind(obj1);         // вернет функцию getName, this = obj1 навсегда зафиксируется
// console.log('boundToObj1 ', boundToObj1)


const doubleBound = boundToObj1.bind(obj2);     // вернет функцию getName. Тк boundToObj1 создан через bind, у него this = obj1, а тк повторный вызов bind/call/apply после bind  не меняет контекст this, то this = obj1. 
// console.log('doubleBound ', doubleBound)



console.log(getName.call(obj2));      // call вызывет функцию getName и устаналвивает this = obj2, выведет Bob

console.log(boundToObj1());           // вызов getName c this = obj1, выведет Alice
console.log(boundToObj1.call(obj2));  // Тк boundToObj1 создан через bind, у него this = obj1 навсегда, а тк Повторный вызов bind/call/apply после bind  не меняет контекст this, то this = obj1. Выведет Alice 

console.log(doubleBound());         // вызов getName c this = obj1. После первого вызова bind нельзя изменить контекст this  повторным вызовом bind/call/apply, поэтому выведет Alice
