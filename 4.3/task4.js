// Функция, которая "замораживает" состояние объекта

// Напишите функцию createFreezer(obj), которая принимает объект и возвращает функции для получения
//  значения свойства и для изменения его. Но изменение должно быть разрешено только один раз для 
// каждого свойства.

function createFreezer(obj){

  //let name = obj.name;
  

  return {

    get: function(){
      return obj.name;
    },
    set: function(key, value){
      obj[key] = value
      //console.log(obj[key])
    }
  }

};



const freezer = createFreezer({ name: 'Alice' });     // { get: function(), set: function() }
console.log(freezer.get('name'));     // Alice


freezer.set('name', 'Bob');
console.log(freezer.get('name'));     // Bob


let frozeObj = Object.freeze(freezer);       // заморозили объект freezer
frozeObj.set('name', 'Charlie');       // Ничего не меняется
console.log(frozeObj.get('name'));      // Bob