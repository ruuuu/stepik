// Последовательность чисел с шагом (задача на замыкание)

// Напишите функцию createSequence(start, step), которая возвращает функцию. Эта функция должна возвращать следующее 
// число в последовательности при каждом вызове.

// function createSequence(start, step){

//   let num = start  // 10

//   function innerFunction(){ // функция запоминает перменные start, step, num из внешней области видимости
//     let num1 = num
//     num += step;
//     return num1;
//   }

//   return innerFunction;

// }


// const sequence = createSequence(10, 2);
// console.log(sequence()) // 10
// console.log(sequence()) // 12
// console.log(sequence()) // 14



// Расширенный способ:
function createSequence(start, step){

  let num = start  // 10

  const initStart = start

  return {

    next: function(){ //  функция запоминает перменные start, step, num из внешней области видимости
      let num1 = num  // нач значение
      num += step;
      return num1;
    },

    reset: function(){
      num = initStart; 
    },

    getCurrent: function(){
      return num; 
    }
  }

}

const sequence = createSequence(10, 2);
console.log(sequence.next()) // 10
console.log(sequence.next()) // 12
console.log(sequence.next()) // 14

sequence.reset() // 

console.log(sequence.getCurrent()) // 10