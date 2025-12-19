// Пример 7: Приоритеты bind/call

// РАЗОБРАТЬ!!

const obj1 = { name: 'Alice' };
const obj2 = { name: 'Bob' };

function getName() {
  return this.name;
}

const boundToObj1 = getName.bind(obj1);
const doubleBound = boundToObj1.bind(obj2);

console.log(getName.call(obj2));    // Вопрос: что выведет?
console.log(boundToObj1());         // Вопрос: что выведет?
console.log(doubleBound());         // Вопрос: что выведет?
console.log(boundToObj1.call(obj2)); // Вопрос: что выведет?