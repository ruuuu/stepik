// Задача 2: Гонка промисов  Promise.race()


// Напишите функцию raceToFinish, которая использует метод Promise.race для выполнения промисов. 
// Функция должна возвращать результат первого завершённого промиса (выполненного или отклонённого).


// Ключевая особенность: в отличие от Promise.all, Promise.race не ждёт все промисы, а возвращает результат самого быстрого.



// function raceToFinish(promiseArray){

//   return Promise.race(promiseArray)   
//     .then(result => {       
//       console.log('Первый завершившийся промис (успешный):', result);      
//       return result;
//     })
//     .catch(error => {            
//       console.log('Первый завершившийся промис (с ошибкой):', error);      
//     })
// }



// const slowPromise = new Promise((resolve) => setTimeout(resolve, 3000, 'Медленный ответ'));       // третий пармтер это то, что передается в функцию resolve()
// const fastPromise = new Promise((resolve) => setTimeout(resolve, 1000, 'Быстрый ответ'));         // этот промис завершится первым

// raceToFinish([slowPromise, fastPromise]);      // выведет 'Быстрый ответ'





// пример с ошибкой:

// const slowPromiseWithError = new Promise((resolve) => setTimeout(resolve, 3000, 'Медленный ответ'));
// const fastPromiseWithError = new Promise((resolve, reject) => setTimeout(reject, 500, 'Быстрая ошибка'));   // этот промис завершится первым


// raceToFinish([slowPromiseWithError, fastPromiseWithError]);   // выведет 'Быстрая ошибка'





// Альтернативный вариант с async/await:

async function raceToFinish(promiseArray){
  try {
    const results = await Promise.race(promiseArray);
    console.log('Первый завершившийся промис (успешный):', results);        
    return results;
  }
  catch(error) {             // если хотя  б один из промисов отклонится, то перйдет в этот блок
    console.error(error);       // выведет 'Ошибка при получении данных' 
    //throw error;
  }
}

const slowPromiseWithError = new Promise((resolve) => setTimeout(resolve, 3000, 'Медленный ответ'));
const fastPromiseWithError = new Promise((resolve, reject) => setTimeout(reject, 500, 'Быстрая ошибка'));   // этот промис завершится первым


raceToFinish([slowPromiseWithError, fastPromiseWithError]);   // выведет 'Быстрая ошибка'

