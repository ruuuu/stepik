// Пример 3: Комбинирование с другими промисами


function fetchUserData() {

  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      try {
        // В реальном приложении здесь может быть сложная логика
        const userData = {
          id: 1,
          name: 'Иван Иванов',  // 
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





// использование промиса:
function fetchUserWithPosts() {

  fetchUserData()     // вернет промис
    .then(user => {
      console.log('Пользователь мой:', user.name);
     
      return new Promise(resolve => {     // вернет новый промис
        setTimeout(() => {
          resolve({
            user,
            posts: [
              { id: 1, title: 'Первый пост', date: '2024-01-15' },
              { id: 2, title: 'Второй пост', date: '2024-01-16' }
            ]
          });
        }, 1000);
      });
    })
    .then(data => {           // этот then() выполнится, когда разрешится промис из предыдущего then(). data это то, что в resolve, те {user, posts: []} 
      console.log(`Пользователь ${data.user.name} имеет ${data.posts.length} постов`);
      return data;
    })
    .catch(error => {
      console.error('Ошибка при получении данных:', error);
    });
}


fetchUserWithPosts()


// Ключевые моменты для запоминания:
// Каждый then возвращает значение, которое становится аргументом для следующего then

// Можно возвращать новый промис в then, и следующий then будет ждать его разрешения

// catch ловит ошибки из всей цепочки выше

// finally выполняется всегда - независимо от успеха или ошибки



