// Таймер на основе замыкания

// Напишите функцию createTimer(), которая возвращает объект с двумя методами: start() 
// и stop(). Метод start() начинает отсчет времени, а метод stop() возвращает количество секунд, 
// прошедших с момента старта.

function createTimer(){
  let startTime;

  return {

    start: function(){
      startTime = performance.now();
      console.log('Таймер запущен')
    },

    stop: function(){
      let endTime = performance.now();
      let duration = (endTime - startTime) / 1000; // сколько колво секунд прошло с момента старта

      return parseFloat(duration)
    }
  }

}




const timer = createTimer();
timer.start();

setTimeout(() => {
    console.log(timer.stop()); // Примерно 3 
}, 3000);