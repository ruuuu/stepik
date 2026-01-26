// Практическое применение — таймаут



// Промис для получения данных с сервера:
function fetchData() {
  
    return new Promise((resolve) => {     // промис разрешится черз 5с(асинхронно) 
        setTimeout(() => {
            resolve("Данные с сервера получены");
        }, 5000);                                               // Имитируем долгий запрос (5 сек)
    });
}



// Промис для таймаута:
function timeout(ms) {

    return new Promise((_, reject) => {    // промис отклонится черз 3ms(асинхронно) 
        setTimeout(() => {      
            reject(new Error(`Запрос превысил лимит времени: ${ms}мс`));
        }, ms);
    });
}





// т к первее завершится(с ошибкой) промис из timeout, то race() вернет новый промис(отклоненный), и его резульат будет передан в catch()
Promise.race([fetchData(), timeout(3000)])
    .then(data => {
        console.log("Успех:", data);
    })
    .catch(error => {
        console.log("Ошибка:", error.message);      // вывдет "Ошибка: Запрос превысил лимит времени: 3000мс"
    });