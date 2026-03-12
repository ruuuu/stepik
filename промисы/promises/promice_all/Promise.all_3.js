// Практические примеры:

// Параллельные(одновременные) запросы к API:
const urls = [
  'https://api.example.com/users',
  'https://api.example.com/posts',
  'https://api.example.com/comments'
];

const requests = urls.map(url => fetch(url));     // вернет массив промисов завершившихся успехом(-> Исполнено) 

Promise.all(requests)    
  .then(responses => Promise.all(responses.map(r => r.json())))   //  в responses запишется то что вернет вехний Promise.all()
  .then(data => {
    const [users, posts, comments] = data;              // деструктуризация массива
    // обрабатываем все данные
  })
  .catch(error => console.error('Один из запросов не удался:', error));