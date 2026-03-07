// Задача 4: Результаты всех промисов  Promise.allSettled


// Напишите функцию getAllResults, которая использует метод Promise.allSettled() и выводит результаты всех промисов, независимо от их состояния (выполнен или отклонён).


function getAllResults(promiseArray){

  return Promise.allSettled(promiseArray)   
    .then(results => {       
      console.log('Все промисы:', results);      
      return results;
    })
}


const promise1 = Promise.resolve('Задача выполнена');
const promise2 = Promise.reject('Ошибка задачи');
const promise3 = Promise.resolve('Ещё один успешный результат');
const promise4 = Promise.reject('Другая ошибка');


getAllResults([promise1, promise2, promise3, promise4]);

// выведет:  [ { status: 'fulfilled', value: 'Задача выполнена' },  { status: 'rejected', reason: 'Ошибка задачи' }, { status: 'fulfilled', value: 'Ещё один успешный результат' },{ status: 'rejected', reason: 'Другая ошибка' } ]

