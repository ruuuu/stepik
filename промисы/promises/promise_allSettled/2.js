// Пример 2: Разница с Promise.all()

// Promise.all() — прерывается при первой ошибке (вернет новый промис отклоненный, c результатом от отклоненного промиса и передаст его в catch)


Promise.all([
  Promise.resolve("Успех 1"),
  Promise.reject("Ошибка!"),
  Promise.resolve("Успех 2") // Этот промис даже не начнет выполняться
])
  .then(console.log)
  .catch(error => console.log("Promise.all упал с ошибкой:", error));







// Promise.allSettled() — ждет все промисы(и разрешившиеся, и отклонившиеся). Вернет промис с результатом каждого промиса
Promise.allSettled([
  Promise.resolve("Успех 1"),
  Promise.reject("Ошибка!"),
  Promise.resolve("Успех 2")
])
  .then(results => console.log("Все результаты:", results)); 

// Выведет:
//  Все результаты: [
//   { status: 'fulfilled', value: 'Успех 1' },
//   { status: 'rejected', reason: 'Ошибка!' },
//   { status: 'fulfilled', value: 'Успех 2' }
// ] 