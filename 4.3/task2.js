// Функция с частичным применением (partial application) на основе замыкания

// Напишите функцию partial(fn, fixedValue), которая принимает функцию и фиксированное значение 
// одного из аргументов. Возвращаемая функция принимает оставшийся аргумент и применяет оба аргумента 
// к исходной функции.


function sum(a, b) { return a + b; }



function partial(fn, fixedValue){ // передаем функцию и аргумент

  let result = (remainValue) => {     // замыкание
    
      return fn(fixedValue, remainValue);
  }

  return result;
}





const addFive = partial(sum, 5); // function(remainValue)

console.log(addFive(10)) // вызов sum(5, 10)