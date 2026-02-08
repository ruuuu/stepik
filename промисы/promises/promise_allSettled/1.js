// Пример 1:



const promise1 = Promise.resolve(42);             // немедленно(синхронно) вернет рзрешенный успешно промис с результатом 42
const promise2 = Promise.reject("Ошибка!");         // немедленно(синхронно) вернет рзрешенный с ошибкой промис с результатом Ошибка
const promise3 = new Promise(resolve => setTimeout(() => resolve(100), 1000));    // асинхронно(через 1 с) вернет рзрешенный успешно промис с результатом 100




Promise.allSettled([promise1, promise2, promise3])     // возвращаемый новый промис выполнися когда все промисы  завершаться и вернет массив объектов результатов промисов [{ status: , value: }, { status: , reason: }, { status: , value: }]
  
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