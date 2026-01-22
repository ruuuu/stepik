// Создайте промис с ошибкой через 1 секунду, обработайте её с помощью catch и выведите сообщение об ошибке.


function myFunc() {               

  return new Promise((resolve, reject) => {     
   
    setTimeout(() => {

      reject(new Error('Произошла ошибка через 1 с'));      // если промис отклонился , то вызовется фунция reject(), те то что в catch()
    }, 1000);               
  });

}





myFunc()
  .then((result) => {       // если промис разрешлися, то  вызовется resolve()
    console.log(`Успешно ${result}`)
  })
  .catch((error) => {      
    console.log(`Ошибка перехвачена - ${error}`)
  })
  .finally(() => {
    console.log('Обработка завершена')
  })