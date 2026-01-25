// Ошибка приходит первой


const fastError = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Быстрая ошибка!")), 500);
});

const slowSuccess = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Медленный успех"), 2000);
});



// первый промис отклонится через 5 мс(асинхронно), втрой разрешится через 2 с(асинхроно)
// первый промис завершися раньше
Promise.race([fastError, slowSuccess])     // вернет новый промис(отклоненный), его резульат будет от промиса fastError и передан в catch()
    .then(result => {
        console.log("Успех:", result);
    })
    .catch(error => {
        console.log("Поймана ошибка:", error.message);      //  выведет "Поймана ошибка: Быстрая ошибка!""
    });