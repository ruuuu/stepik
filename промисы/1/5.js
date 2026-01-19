// Небольшие улучшения для реального использования 1.js:




function fetchUserData() {

  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      try {
        // В реальном приложении здесь может быть сложная логика
        const userData = {
          id: 1,
          name: '',  // Иван Иванов
          email: 'ivan@example.com',
          age: 28,
          city: 'Москва'
        };
        
        // Можно добавить валидацию
        if (!userData.name || !userData.email) {
          reject(new Error('Невалидные данные пользователя'));
        }
        
        resolve(userData);
      } catch (error) {
        reject(new Error(`Ошибка при создании данных: ${error.message}`));
      }
    }, 2000);
  });

}


// использоание промиса:
fetchUserData()
  .then((userData) => {
    console.log('Получены данные:', userData);
    
    userData.yearOfBirth = new Date().getFullYear() - userData.age;   // Добавляем дополнительные вычисляемые поля
    userData.isAdult = userData.age >= 18;
    return userData;
  })
  .then((enrichedData) => {   // enrichedData = объект с новыми полями
    console.log('Обогащенные данные:', enrichedData);
    
    return {
      name: enrichedData.name,
      email: enrichedData.email,
      isAdult: enrichedData.isAdult
    };
  })
  .then(finalData => {      // finalData = { name, email, isAdult }
    console.log('Финальные данные для отображения:', finalData);
  })
  .catch(error => {
    console.error('Произошла ошибка:', error.message);    // этот блок выполитсяя если reject() вызовется
  })
  .finally(() => {
    console.log('Запрос завершен');
  });
