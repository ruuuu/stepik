// Пример 1: Первый успешный промис

const promise1 = Promise.reject('Ошибка 1');
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'Успех 2'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 200, 'Успех 3'));



Promise.any([promise1, promise2, promise3])
  .then((result) => {
    console.log('Первый успешный:', result); // "Успех 2"
  })
  .catch((error) => {
    console.error('Все промисы отклонены:', error);
  });
