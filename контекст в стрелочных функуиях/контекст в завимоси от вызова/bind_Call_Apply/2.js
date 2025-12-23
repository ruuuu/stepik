// Пример 4: Сложный собеседный вопрос на комбинацию


// this — это контекст выполнения функции. Определяется тем, как функция вызвана, а не тем, где объявлена.

// функция.call(context, arg1, arg2...) — вызывает функцию(метод) с заданным this = context(obj котрый хотим привязать) и аргументами, переданными по отдельности.

// функция.apply(context, [arg1, arg2...]) — то же, что call, но аргументы передаются в виде массива.

// функция.bind(context, arg1, arg2...) — не вызывает функцию, а возвращает новую функцию, с навсегда привязанным this = context(obj котрый хотим привязать) (и, опционально, аргументами).




const obj = {
  x: 10,

  getX: function() { 
    return this.x; 
  }
};


const unbound = obj.getX;     // обычняа функция
console.log(unbound());       // тк вызов как method() то this = window/undefined (контекст this потерян)


const bound = obj.getX.bind(obj);     // новая функция(сохранили ее в перменную), здесь привязали this = obj навсегда
console.log(bound()); // 10



console.log(obj.getX.call({ x: 20 }));     // вызов obj.getX, this = { x: 20 } , выведет 20
console.log(bound.call({ x: 30 }));       // тк bound - функция созданная через bind, то у нее this = obj={ x: 10} навсегда, 
// то последующие  вызовы с call/aplly/bind не изменят this. Выведет 10