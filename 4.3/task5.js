// функция с замыканием для контроля доступа по паролю.

// Напишите функцию createProtectedResource(password), которая возвращает объект с двумя методами: 
// access() и changePassword(newPassword). Метод access() должен принимать пароль и возвращать доступ 
// к ресурсу, если пароль верен. Метод changePassword(newPassword) позволяет изменить пароль, но 
// только при вводе текущего правильного пароля.



function createProtectedResource(password){ // замыкание испльзуется для создани приватной перменной(currentPassword), доступ к ней только через методы объекта 


  let currentPassword = password      // приватная,  сохраняется в замыкании и недоступна из вне
  
  return {

    access: function(anotherPassword){
      if(currentPassword === anotherPassword){
        return 'Доступ разрешен'
      }
      else{
        return 'Доступ запрещен'
      }
    },

    changePassword: function(newPassword, oldPassword){
      if(oldPassword === currentPassword){      
        currentPassword = newPassword
      }
    }
  }

};



const resource = createProtectedResource('mySecret');
console.log(resource.access('wrongPassword')); // Доступ запрещен


console.log(resource.access('mySecret')); // Доступ разрешен


resource.changePassword('newSecret', 'mySecret');
console.log(resource.access('newSecret')); // Доступ разрешен