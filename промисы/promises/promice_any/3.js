// Пример 3: Практическое использование — самый быстрый источник данных





// Получение данных из нескольких источников (используется первый ответивший)

const fastSource = fetch('https://api.fast.com/data').catch(() => 'timeout');
const reliableSource = fetch('https://api.reliable.com/data').catch(() => 'timeout');
const backupSource = fetch('https://api.backup.com/data').catch(() => 'timeout');



Promise.any([fastSource, reliableSource, backupSource])
  .then((response) => {
    console.log('Данные получены от самого быстрого источника');
    return response.json();
  })
  .then((data) => {
    console.log('Данные:', data);
  })
  .catch(() => {
    console.error('Все источники недоступны');
  });
