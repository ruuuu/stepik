// Напишите на js  функцию fetchUserData, которая симулирует получение данных о пользователе с задержкой 2 секунды, 
// и обработайте результат через цепочку методов then.


function fetchUserData() {               // фукнция возврвщает промис котрый разрешится через 6 с

  return new Promise((resolve) => {     //  resolve() - функция, которую нужно вызвать, когда операция завершится успешно
   
    setTimeout(() => {
      
      const userData = {
        id: 1,
        name: 'Иван Иванов',
        email: 'ivan@example.com',
        age: 28,
        city: 'Москва'
      };
      
      
      resolve(userData);    // через 6с(симуляция запроса к серверу) промис разрешится успешно/неуспешно и вызовется resolve()/reject()
    }, 6000);               
  });

}




// цепочка промисов
// Использование промиса


fetchUserData()                   // вернет промис    
  .then((userData) => {           //  этот блок выполнится, когда промис завершится успешно(затем вызовется resolve()). В then функция resolve(), здесь userData это исходные данные
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


