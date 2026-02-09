// Пример 3: Практическое использование — самый быстрый источник данных





// Получение данных из нескольких источников (используется первый ответивший)

const fastSource = fetch('https://httpbin.org/brotli').catch(() => 'timeout');
const reliableSource = fetch('https://httpbin.org/deflate').catch(() => 'timeout');
const backupSource = fetch('https://httpbin.org/html').catch(() => 'timeout');


//  console.log(Promise.any([fastSource, reliableSource, backupSource]))  // Promise { <pending> }

Promise.any([fastSource, reliableSource, backupSource])   //  вернет первый успешно выполнвшийся ромис
  .then((response) => {   // в response передастся то,  что вернет Promise.any(его результат)
    console.log('Данные получены от самого быстрого источника');
    console.log('response ', response)
    return response.json();
  })
  .then((data) => {     //  в data передастся то что вернет предыддущий then()
    console.log('Данные:', data);
  })
  .catch(() => {
    console.error('Все источники недоступны');
  });
