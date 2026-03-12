// Задача 1: Асинхронный таймер\

// Напишите функцию asyncTimer, которая имитирует работу обычного таймера. 
// Пользователь вводит время (в секундах), и функция выводит сообщение "Таймер завершен" после указанного времени, используя async/await.



async function asyncTimer(seconds) {

    console.log(`Таймер запущен на ${seconds} секунд...`);
    console.log(`Ожидание...`);

    let promise = new Promise((resolve) => {
      setTimeout(resolve, seconds * 1000)         // через 15с(симуляция задержки) промис разрешится и вызовется resolve()
    });
    
    await promise;     // Ждем завершения промиса, поэтому выпонление функции приостанавливается до тех пор, пока промис не будет разрешен
    
    console.log('Таймер завершен');            // "Таймер завершен"
}




// Пример использования с вводом от пользователя:
async function runTimer() {
    try {
        
        const userInput = prompt('Введите время в секундах:');  // Получаем ввод от пользователя
        const seconds = parseFloat(userInput);
        
        
        await asyncTimer(seconds);
    } catch (error) {
        console.error('Ошибка:', error.message);
    }
}




runTimer();  // НАЧАЛО