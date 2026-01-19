// Более сложный пример с обработкой ошибок и валидацией


function fetchUserDataWithValidation() {      // фукнция возврвщает промис(обещание вернуть результат(успешный или неуспшный), черзу 2 с) котрый разрешится через 2 с

  return new Promise((resolve, reject) => {     // resolve() - функция, которую нужно вызвать, когда операция завершится успешно

    setTimeout(() => {
      const success = Math.random() > 0.2; 
      
      if (success) {
        const userData = {
          id: 1,
          name: 'Иван Иванов',
          email: 'ivan@example.com',
          age: 28,
          city: 'Москва'
        };

        resolve(userData);          // разрешаем промис (через 2c)
      } else {
        reject(new Error('Не удалось получить данные пользователя'));             // reject() - функция, которую нужно вызвать, когда операция завершится НЕуспешно
      }
    }, 2000);                       // через 2с(симуляция запроса к серверу) промис разрешится/отклонится и вызовется resolve()/reject()
  });
}



// В цепочка промисов каждый .then() возвращает новое значение, которое попадает в следующий .then()!!
// Использование промиса



fetchUserDataWithValidation()         // вернет промис  
  
  .then((userData) => {               // Этот блок выполнится, когда промис разрешится.   userData-это исхдные данные. В then функция resolve()
    if (!userData.name || !userData.email) {
      throw new Error('Неполные данные пользователя');
    }

    return userData;
  })
  .then((userData) => {       // здесь userData это то, что вернул предыдущий then
    console.log(`\nПривет, ${userData.name}!`);
    console.log(`Ваш email: ${userData.email}`);
    console.log(`Город: ${userData.city || 'Не указан'}`);
  })
  .catch((error) => {
    console.error(`Ошибка: ${error.message}`);
  });