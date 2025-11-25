// Таймер на основе замыкания

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