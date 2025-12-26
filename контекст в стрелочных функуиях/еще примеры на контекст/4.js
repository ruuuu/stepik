// 4. Сложный пример с цепочкой вызовов bind


// После первого вызова bind нельзя изменить контекст this  повторным вызовом bind/call/apply!!

// стрелочные функции игнорируют call/apply/bind


const obj1 = { x: 1 };
const obj2 = { x: 2 };
const obj3 = { x: 3 };

function showX() {
  return this.x;
}




const bound1 = showX.bind(obj1);    // bind создает новую функцию, с this = obj1
const bound2 = bound1.bind(obj2);   // тк bound1() уже была вызвана при помощи bind, то this не поменятеся, то есть this = obj1
const bound3 = showX.bind(obj3);    // bind создает новую функцию, с this = obj3

console.log(bound1());      //  1
console.log(bound2());      //  1
console.log(bound3());      //  3