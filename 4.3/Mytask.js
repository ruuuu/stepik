let globalCalled = false;
let globalResult;

function brokenOnce(fn) {
  if (!globalCalled) {
    globalCalled = true;
    globalResult = fn();
  }
  return globalResult;
}


// const init1 = () => brokenOnce(() => console.log('Init 1'));
// const init2 = () => brokenOnce(() => console.log('Init 2'));



// Как должно работать правильно:

const init1 = brokenOnce(() => console.log('Init 1'));
const init2 = brokenOnce(() => console.log('Init 2'));

init1(); // "Init 1" ✅
init1(); // ничего ✅
init2(); // "Init 2" ✅ (работает независимо!)
init2(); // ничего ✅

//Вывод:
//Глобальные переменные уничтожают изоляцию между разными экземплярами функций. Замыкание же позволяет 
// каждой функции иметь свое собственное, изолированное состояние, что и делает реализацию с замыканием корректной.


