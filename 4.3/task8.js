// Замыкание для отслеживания суммы чисел

// Напишите функцию createSumTracker(), которая возвращает функцию для добавления числа к общей сумме и функцию 
// для получения текущей суммы.


function createSumTracker(){

  let sum = 0 //


  return {
    add: function(num){
      sum += num;
    },

    get: function(){
      return sum;
    }
  }
}


const sumTracker = createSumTracker();  // { add: , get: }

sumTracker.add(5);
sumTracker.add(10);

console.log(sumTracker.get());




// либо со стрелочными:

function createSumTracker(){

  let sum = 0 //


  return {
    add: (num) => {
      sum += num;
    },
    
    get: () => {
      return sum;
    }
  }
}