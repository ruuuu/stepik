// Задача 3: Любой успешный промис  Promise.any()


// Напишите функцию getFirstSuccessful, которая использует метод Promise.any и возвращает результат первого успешно завершённого промиса. 
// Если все промисы отклонены, функция должна выводить сообщение об ошибке.


// function getFirstSuccessful(promiseArray){

//   return Promise.any(promiseArray)   
//     .then(result => {       
//       console.log('Первый завершившийся промис (успешный):', result);      
//       return result;
//     })
//     .catch(error => {            
//       console.log('Все промисы отклонены :', error);      
//     })
// }




// const promise1 = Promise.reject('Ошибка 1');
// const promise2 = Promise.reject('Ошибка 2');
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'Успех!'));

// getFirstSuccessful([promise1, promise2, promise3]); 



// Альтернативный вариант с async/await:
async function getFirstSuccessful(promiseArray){

  try {
    const results = await Promise.any(promiseArray);
    console.log('Первый завершившийся промис (успешный):', results);      
    return results;
  }
  catch(error) {
    console.log('Все промисы отклонены :', error);   
  }

}



const promise1 = Promise.reject('Ошибка 1');
const promise2 = Promise.reject('Ошибка 2');
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'Успех!'));

getFirstSuccessful([promise1, promise2, promise3]); 