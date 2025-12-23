// Пример 7: Приоритеты bind/call

// this — это контекст выполнения функции. Определяется тем, как функция вызвана, а не тем, где объявлена.

// функция.call(context, arg1, arg2...) — вызывает функцию(метод) с заданным this = context(obj котрый хотим привязать) и аргументами, переданными по отдельности.

// функция.apply(context, [arg1, arg2...]) — то же, что call, но аргументы передаются в виде массива.

// функция.bind(context, arg1, arg2...) — не вызывает функцию, а возвращает новую функцию, с навсегда привязанным this = context(obj котрый хотим привязать) (и, опционально, аргументами).





const obj1 = { name: 'Alice' };
const obj2 = { name: 'Bob' };

function getName() {
  return this.name;
}


const boundToObj1 = getName.bind(obj1);     // вернет новую функцию, this = obj1 навсегда зафиксируется

const doubleBound = boundToObj1.bind(obj2); 


console.log(getName.call(obj2));    // call вызывет фукнцию getName
console.log(boundToObj1());         // 
console.log(doubleBound());         // 
console.log(boundToObj1.call(obj2)); // 