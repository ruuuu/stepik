// Задача 1: Ожидание всех промисов Promise.all()

// Напишите функцию fetchData, которая принимает массив промисов и использует метод Promise.all для их выполнения. 
// Если все промисы завершились успешно, функция должна вывести массив результатов. Если хотя бы один промис отклонён — отобразить ошибку.



function fetchData(promiseArray){

  Promise.all(promiseArray)   //  жет выполнения всех промисов
    .then(results => {        // если все промисы разрешаться, то перейдет в этот блок
      console.log('Все промисы успешно выполнены:'); 
      console.log(results);      
      return results;
    })
    .catch(error => {             // если хотя  б один из промисов отклонится, то перйдет в этот блок
      console.error(error);       // выведет 'Ошибка при получении данных' 
    })
}



const promise1 = Promise.resolve('Данные 1');
const promise2 = Promise.resolve('Данные 2');
const promise3 = Promise.reject('Ошибка при получении данных');



fetchData([promise1, promise2, promise3]);




// Альтернативный вариант с async/await:

async function fetchData(promiseArray){
  try {
    const results = await Promise.all(promiseArray); // ожидаем завершения промиса
    console.log('Все промисы успешно выполнены:'); 
    console.log(results);      
    return results;
  }
  catch(error) {             // если хотя  б один из промисов отклонится, то перйдет в этот блок
    console.error(error);       // выведет 'Ошибка при получении данных' 
    throw error;
  }
}

