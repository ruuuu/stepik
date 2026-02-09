// Пример 4: Смешанные типы значений




Promise.any([
  new Promise((resolve) => setTimeout(resolve, 1000, 'медленный')),         //  промис выплнится через 1с(асинхронно)
  Promise.resolve('строка'),      //  промис сразу(синхронно) выплнится
  Promise.resolve(42)             //  промис сразу(синхронно) выплнится
])
.then((value) => {
  console.log(value); // 'строка'
});