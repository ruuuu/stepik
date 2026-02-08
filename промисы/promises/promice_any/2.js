// Пример 2: Все промисы отклоняются


const promise1 = Promise.reject('Ошибка 1');
const promise2 = Promise.reject('Ошибка 2');
const promise3 = Promise.reject('Ошибка 3');




Promise.any([promise1, promise2, promise3])
  .then((result) => {
    console.log('Успех:', result);
  })
  .catch((error) => {
    console.error('Все отклонены!');
    console.error('Имя ошибки:', error.name); // "AggregateError"
    console.error('Ошибки:', error.errors); // ["Ошибка 1", "Ошибка 2", "Ошибка 3"]
  });