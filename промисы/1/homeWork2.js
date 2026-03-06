// Создайте промис с ошибкой через 1 секунду, обработайте её с помощью catch и выведите сообщение об ошибке.


function myFunc() {               

  return new Promise((resolve, reject) => {     
   
    setTimeout(() => {

      reject(new Error('Произошла ошибка через 1 с'));      //  промис отклонился чере 1 с, потом  вызовется фунция reject(), те то что в catch()
    }, 1000);               
  });

}





myFunc()      // вернет промис
  .then((result) => {       // если промис разрешлися, то  вызовется resolve()
    console.log(`Успешно ${result}`)
  })
  .catch((error) => {         // если промис отклонился, то  вызовется reject()
    console.log(`Ошибка перехвачена - ${error}`)
  })
  .finally(() => {
    console.log('Обработка завершена')
  })