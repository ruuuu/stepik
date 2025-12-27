// 7. Задача с собеседования (с подвохом)

// РЗОБРАТЬ: 


const length = 4;

function callback() {
  console.log(this.length);
}


const object = {
  length: 5,
  
  method(callback) {
    callback();           // Что выведет?
  }
};



object.method(callback, 1, 2, 3);