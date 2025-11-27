// Последовательность чисел с шагом (задача на замыкание)

// Напишите функцию createSequence(start, step), которая возвращает функцию. Эта функция должна возвращать следующее 
// число в последовательности при каждом вызове.

function createSequence(start, step){ // внешняя фукнция

  let num = start       // 10, эта перменная замыкается(запоминается) внутреннней функцией innerFunction

  // Перменные  start step num из замыкания

  function innerFunction(){ // эта функция(внутренняя) запоминает(замыкает) переменные start, step, num из внешней функции. Эти переменные не уничтожаются после выполнения createSequence, потому что на них есть ссылка из возвращенной функции innerFunction.
    // обращение к переменной из внешней функции
    num += step;
    return num;
  }

  return innerFunction;     // возвращается фукнция, но не вызывается
}


const sequence = createSequence(10, 2); // создается переменная num=10, создается step=2, создается фукнция innerFunction
// по обычной логике, после завершения функции createSequence, переменные num и step должны быть уничтожены. 
// Но благодаря замыканию: innerFunction "запоминает"(замыкает) эти переменные
console.log(sequence()) // 10
console.log(sequence()) // 12
console.log(sequence()) // 14



// Расширенный способ:
// function createSequence(start, step){

//   let num = start  // 10

//   const initStart = start

//   return {

//     next: function(){ //  функция запоминает перменные start, step, num из внешней области видимости
//       num += step;
//       return num;
//     },

//     reset: function(){
//       num = initStart; 
//     },

//     getCurrent: function(){
//       return num; 
//     }
//   }

// }

// const sequence = createSequence(10, 2);
// console.log(sequence.next()) // 10
// console.log(sequence.next()) // 12
// console.log(sequence.next()) // 14

// sequence.reset() // 

// console.log(sequence.getCurrent()) // 10