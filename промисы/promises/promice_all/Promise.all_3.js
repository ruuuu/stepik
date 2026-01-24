// Практические примеры:

// Параллельные запросы к API:
const urls = [
  'https://api.example.com/users',
  'https://api.example.com/posts',
  'https://api.example.com/comments'
];

const requests = urls.map(url => fetch(url));     // массив завешившихся успехос(-> Исполнено) промисов вернет 

Promise.all(requests)
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(data => {
    const [users, posts, comments] = data;
    // обрабатываем все данные
  })
  .catch(error => console.error('Один из запросов не удался:', error));