// Функция, которая "замораживает" состояние объекта

// Напишите функцию createFreezer(obj), которая принимает объект и возвращает функции для получения
//  значения свойства и для изменения его. Но изменение должно быть разрешено только один раз для 
// каждого свойства.

function createFreezer(obj){

  let frozenObj = { ...obj }        // копия объекта obj

  let changedProperties = {}       // объект, сюда будем заносить свойства которые меняли



  
  return {

    get: function(key){
      return frozenObj[key];
    },
    set: function(key, value){
      if(!changedProperties[key]){      // если свойства key еще нет в объекте
          frozenObj[key] = value
          changedProperties[key] = true    // теперь свойство key есть в объекте
      }
      
      //console.log(obj[key])
    }
  }

};



const freezer = createFreezer({ name: 'Alice' });     // { get: function(), set: function() }
console.log(freezer.get('name'));     // Alice


freezer.set('name', 'Bob');
console.log(freezer.get('name'));     // Bob




freezer.set('name', 'Charlie');       // Ничего не меняется
console.log(freezer.get('name'));      // Bob