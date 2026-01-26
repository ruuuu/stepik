// Пример 1:



const promise1 = Promise.resolve(42);
const promise2 = Promise.reject("Ошибка!");
const promise3 = new Promise(resolve => setTimeout(() => resolve(100), 1000));



Promise.allSettled([promise1, promise2, promise3])     // вернет массив объектов результатов промисов [{ status: , value: }, { status: , reason: }, { status: , value: }]
  
  .then(results => {            //  results = [{ status: , value: }, { status: , reason: }, { status: , value: }]
    console.log("Все промисы завершены:");

    results.forEach((result, index) => {
      console.log(`Промис ${index}:`, result);
    });
  });



  
// Вывод:
// Все промисы завершены:
// Промис 0: {status: 'fulfilled', value: 42}
// Промис 1: {status: 'rejected', reason: 'Ошибка!'}
// Промис 2: {status: 'fulfilled', value: 100}