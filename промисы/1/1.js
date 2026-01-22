// Напишите на js  функцию fetchUserData, которая симулирует получение данных о пользователе с задержкой 2 секунды, 
// и обработайте результат через цепочку методов then.




// Разрешить промис — значит сказать ему: "Всё сделал успешно, вот твои данные, можешь работать дальше (then)".

// Это противоположность отклонению (reject), которое говорит: "Всё сломалось, вот ошибка, обработай её (catch)".  

// На практике ты чаще будешь употреблять (использовать .then и .catch) уже готовые промисы из fetch(), библиотек и т.д., 
// но понимать, что внутри них кто-то в итоге вызывает resolve() или reject()




function fetchUserData() {               // фукнция возврвщает промис(обещание вернуть результат(успешный или неуспшный)  через 6с) котрый разрешится через 6 с

  return new Promise((resolve) => {     //  resolve() - функция, которую нужно вызвать, когда операция(промис) завершится успешно
   
    setTimeout(() => {
      
      const userData = {
        id: 1,
        name: 'Иван Иванов',
        email: 'ivan@example.com',
        age: 28,
        city: 'Москва'
      };
      
      
      resolve(userData);    // через 6с(симуляция запроса к серверу) промис разрешится и вызовется resolve(), те первый then
    }, 6000);               
  });

}




// цепочка промисов
// Использование промиса


fetchUserData()                   // вернет промис    
  .then((userData) => {           //  этот блок выполнится, когда промис разрешится(затем вызовется resolve()). В then функция resolve(), здесь userData это исходные данные
      console.log('Данные пользователя успешно получены:');
      console.log(userData);
  })
  .catch((error) => {
      console.error('Ошибка при получении данных:', error);
  })
  .finally(() => {
      console.log('\nОперация получения данных завершена.');
  });

  


//  Альтернативный вариант с async/await (для сравнения):

// async function fetchAndDisplayUserData() {     // асинхронная функция

//   try {
//     const userData = await fetchUserData();    // вернет промис
//     console.log('Данные получены:', userData);
    
//     const formattedData = {
//       fullName: userData.name,
//       contact: userData.email
//     };
    
//     console.log('Отформатировано:', formattedData);
    
//   } catch (error) {
//     console.error('Ошибка:', error);
//   } finally {
//     console.log('Завершено');
//   }
// }


// fetchAndDisplayUserData();


