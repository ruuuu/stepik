
// Напишите функцию delayedResponse, которая разрешается через указанное количество миллисекунд и выводит сообщение о времени задержки.




function delayedResponse(ms) {               

  return new Promise((resolve, reject) => {     
   
    setTimeout(() => {

      resolve(`Время задержки ${ms}`);      // промис разрешится через ms, потом вызовется фунция resolve(), те то что в then()
    }, ms);               
  });

}




function myFunc(ms)  {

  delayedResponse(ms)   //  если промис разрешлися, то  вызовется resolve()
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {           // если промис отклонится то перейдем сюда
      console.error('Ошибка:', error.message);
    });
}





myFunc(3000)