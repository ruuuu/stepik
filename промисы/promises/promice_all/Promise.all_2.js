

const slow = new Promise(resolve => setTimeout(() => resolve('медленный'), 500));           // -> в Исполнено (завершился с успехом чеерз 500мс) (асинхронно)
const fast = Promise.resolve('быстрый');                                                    // -> в Исполнено (завершился с успехом НЕМЕДЛЕННО(синхронно))


Promise.all([slow, fast])
  .then(results => {
    console.log(results);         // выведет ['медленный', 'быстрый'] — порядок исходного массива!
  });