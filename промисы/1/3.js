
function fetchUserData() {            // фукнция возврвщает промис(обещание вернуть результат(успешный или неуспешный ) через 2 с) котрый разрешится через 2 с

  return new Promise((resolve) => {   //  resolve() - функция, которую нужно вызвать, когда промис разрешится
    
    setTimeout(() => {
      
      const userData = {
        id: 1,
        name: 'Иван Иванов',
        email: 'ivan@example.com',
        age: 28,
        city: 'Москва'
      };
      
      
      resolve(userData);    //  через 2с(симуляция запроса к серверу) промис разрешится(-> Исполнено) и вызовется resolve()  те первый then
    }, 2000);
  });
}




// Использование функции с цепочкой методов then

fetchUserData()     // вернет промис

  .then((userData) => {             //  этот блок выполнится, когда промис разрешится. В then функция resolve().
    console.log('Данные пользователя успешно получены:');
    console.log(userData);
    
    
    const formattedData = {
      fullName: userData.name,
      contact: userData.email,
      location: userData.city
    };
    
    return formattedData;
  })
  .then((formattedData) => {          // тут formattedData это то что вернет преддыдущий then()
    console.log('\nОтформатированные данные:');
    console.log(formattedData);
    
    console.log(`\nПользователь: ${formattedData.fullName}`);
    console.log(`Контакт: ${formattedData.contact}`);
  })
  .catch((error) => {            // ловит ЛЮБУЮ ошибку в цепочке then выше
    console.error('Ошибка при получении данных:', error);
  })
  .finally(() => {              // выполнится в люом случае
    console.log('\nОперация получения данных завершена.');
  });