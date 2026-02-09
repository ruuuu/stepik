// Пример 1: Первый успешный промис


// const promise1 = Promise.reject('Ошибка 1');
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'Успех 2'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 200, 'Успех 3'));

// Promise.any([promise1, promise2, promise3])
//   .then((result) => {          // в result запишется результат промиса Promise.any
//     console.log('Первый успешный:', result); // "Успех 2"
//   })
//   .catch((error) => {
//     console.error('Все промисы отклонены:', error);
//   });





// const promise1 = Promise.reject('Ошибка 1');        // промис синхрнно отклонится с ошибкой "Ошибка 1'"
// const promise2 = new Promise((resolve) => setTimeout(() => resolve("Успех2"), 400));       // промис разрешится с результатом "Успех2"
// const promise3 = new Promise((_, reject) => setTimeout(() => reject("Ошибка3"), 200));     // промис отклонится с результатом "Ошибка3"




// Promise.any([promise1, promise2, promise3])    // вернет первый успешно выполнившийся промис, в result сохранится результ этог промиса 
//   .then((result) => {
//     console.log('Первый успешный:', result);      // "Успех 2"
//   })
//   .catch((error) => {     // в error запишется результаты всех выполнившихся с ошибкой прмисов
//     console.error('Все промисы отклонены:', error);
//   });




// Пример когда все промисы отклонены: 

const promise1 = Promise.reject('Ошибка 1');        // промис синхрнно(сразу) отклонится с ошибкой "Ошибка 1'"
const promise2 = new Promise((_, reject) => setTimeout(() => reject("Ошибка2"), 400));
const promise3 = new Promise((_, reject) => setTimeout(() => reject("Ошибка3"), 200));




Promise.any([promise1, promise2, promise3])    // вернет первый успешно выполнившийся промис, в result сохранится результ этог промиса 
  .then((result) => {
    console.log('Первый успешный:', result);      // 
  })
  .catch((error) => {     // в error запишется результаты всех выполнившихся с ошибкой прмисов
    console.error('Все промисы отклонены:', error);
  });
