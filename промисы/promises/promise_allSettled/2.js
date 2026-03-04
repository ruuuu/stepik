// Пример 2: Разница  Promise.all() и Promise.allSettled()



// Promise.all() — прерывается при первой ошибке (вернет новый промис отклоненный, c результатом отклоненного промиса и передаст его в catch)


// Promise.all([
//   Promise.resolve("Успех 1"),
//   Promise.resolve("Успех 2"),      // Этот промис даже не начнет выполняться
//   Promise.reject("Ошибка!"),      // тут промис выполнится с ошибкой  и прервется и результат его передастся в catch
// ])
//   .then((result) => { 
//     console.log(result) 
//   })
//   .catch(error => console.log("Promise.all упал с ошибкой:", error));







// Promise.allSettled() — ждет все промисы(и разрешившиеся, и отклонившиеся). Вернет выполненный промис с результатом каждого промиса
Promise.allSettled([
  Promise.resolve("Успех 1"),                 // немедленно(синхронно) разрешится
  Promise.reject("Ошибка!"),                  // немедленно(синхронно) отклонится
  Promise.resolve("Успех 2")                  // немедленно(синхронно) разрешится
])
  .then(results => console.log("Все результаты:", results));    // results это результат(массив) возвращаемого выполненного промиса от Promise.allSettled

// Выведет:
//  Все результаты: [
//   { status: 'fulfilled', value: 'Успех 1' },
//   { status: 'rejected', reason: 'Ошибка!' },
//   { status: 'fulfilled', value: 'Успех 2' }
// ] 