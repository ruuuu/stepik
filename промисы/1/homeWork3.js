
// Напишите функцию delayedResponse, которая разрешается через указанное количество миллисекунд и выводит сообщение о времени задержки.




function delayedResponse(ms) {               

  return new Promise((resolve, reject) => {     
   
    setTimeout(() => {

      resolve(`Время задержки ${ms}`);      // промис разрешится через ms, потом вызовется фунция resolve(), те то что в then()
    }, ms);               
  });

}




function myFunc(ms)  {

  delayedResponse(ms)   //  врнет промис
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {           // Добавляем обработку ошибок
      console.error('Ошибка:', error.message);
    });
}





myFunc(3000)