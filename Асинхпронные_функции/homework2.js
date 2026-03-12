// Задача 2: Одновременное выполнение асинхронных операций

// Напишите функцию runTasksSimultaneously, которая выполняет несколько асинхронных задач одновременно и возвращает их результаты. 
// Задачи должны выполняться одновременно, а результат выводиться только после завершения всех операций.




// Функция для имитации асинхронных задач с разным временем выполнения:

async function simulateTask(taskName, duration) {

    console.log(`Задача "${taskName}" началась (займет ${duration}с)`);
    
    return new Promise((resolve) => {
        
      setTimeout(() => {
        console.log(`Задача "${taskName}" завершена`);
        resolve(`Результат задачи "${taskName}" (выполнена за ${duration}с)`);
      }, duration * 1000)  // чеерз duration * 1000с промис завершится и запустится resolve()
    });
};



// Функция для одновременного выполнения нескольких задач:

async function runTasksSimultaneously(tasks) {

    console.log('Запуск всех задач одновременно...\n');
    
    try {
        const results = await Promise.all(tasks.map(task => task()));   // Запускаем все задачи одновременно с помощью Promise.all
        return results;
    } catch (error) {
        console.error('\n Одна из задач завершилась ошибкой:', error.message);
        throw error;
    }
};




// Пример использования:

async function example() {
    
    const tasks = [ 
        () => simulateTask('Задача 1', 2),  // Создаем массив задач с разным временем выполнения
        () => simulateTask('Задача 2', 3),
        () => simulateTask('Задача 3', 1),
        () => simulateTask('Задача 4', 4)
    ];    // получили массив промисов
    
    try {
        const results = await runTasksSimultaneously(tasks);
        console.log('Результаты:', results);
    } catch (error) {
        console.log('Программа завершилась с ошибкой');
    }
};


example();    // НАЧАЛО





