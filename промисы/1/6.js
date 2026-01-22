// Пример 2: Использование в реальном сценарии



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
          reject(new Error('Невалидные данные пользователя'));      // отклоняем промис 
        }
        
        resolve(userData);      // разрешаем промис 
      } catch (error) {
        reject(new Error(`Ошибка при создании данных: ${error.message}`));      // отклоняем промис 
      }
    }, 2000);
  });

}


// использование промиса:
function displayUserProfile() {

  const loadingElement = document.createElement('div');
  loadingElement.textContent = 'Загрузка...';
  document.body.appendChild(loadingElement);
  
  fetchUserData()             // венрнет промис

    .then(userData => {
      const profile = document.createElement('div');
      profile.innerHTML = `
        <h2>${userData.name}</h2>
        <p>Email: ${userData.email}</p>
        <p>Город: ${userData.city}</p>
        <p>Возраст: ${userData.age}</p>
      `;

      return profile;  // <div><h2><p><p><p></div>
    })
    .then(profileElement => {       // profileElement это то, что вернет предыдущий then()
      document.body.removeChild(loadingElement);
      document.body.appendChild(profileElement);      
    })
    .catch(error => {        // этот блок выполнится  если вызовется reject()
      loadingElement.textContent = `Ошибка: ${error.message}`;
      loadingElement.style.color = 'red';
    });
}


displayUserProfile()
