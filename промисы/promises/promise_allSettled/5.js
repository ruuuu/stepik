// Пример 5: Сравнение с Promise.all() и Promise.any()


const promises = [
  Promise.resolve("A"),
  Promise.reject("B"),
  Promise.resolve("C")
];


// Разные стратегии обработки промиса:
Promise.all(promises)        // вернет промис отклоенный с результатом = "B"
  .then((res) => console.log(res))
  .catch(e => console.log("all:", e));



Promise.allSettled(promises)      // → дождется когда все промисы выполняться(неважно с успехом или ошибкой) и вернет объект с их  статусами и их результатами
  .then(r => console.log("allSettled:", r));



Promise.any(promises)        // вернет промис успешный с результатом = "A"
  .then(r => console.log("any:", r));
