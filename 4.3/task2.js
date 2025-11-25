// Функция с частичным применением (partial application) на основе замыкания

// Напишите функцию partial(fn, fixedValue), которая принимает функцию и фиксированное значение 
// одного из аргументов. Возвращаемая функция принимает оставшийся аргумент и применяет оба аргумента 
// к исходной функции.


function sum(a, b) { return a + b; }



function partial(fn, fixedValue){ // передаем функцию и аргумент

  return function(remainValue){     // замыкание
    
    return fn(fixedValue, remainValue)
  }
}





const addFive = partial(sum, 5); // sum(5)

console.log(addFive(10))