// Пример 3: Практический случай — загрузка данных из нескольких источников


async function fetchMultipleSources(urls) {

  const promises = urls.map(url =>                // [ Promise { <pending> }, Promise { <pending> }, Promise { <pending> } ]
    fetch(url)                                    //  fetch работает асинхронно (не блокирует выполнение другого кода) и возвращает сразу объект Promise в состоянии pending, он разрешается(-> fulfilled) в объект Response = {ok, status, statusText, url, headers, body}
      .then(response => {                         // состояние промиса fulfilled с объектом Response, передаем Response
        return response.json()
      })
      .catch(error => ({ error: true, message: error.message }))            // при сетевой ошибке/CORS, промис отклонится с объектом Error, котрый передаем в catch
  );
    
  


  const results = await Promise.allSettled(promises);             // метод ждет когда завершаться все промисы и вернет новый выполненный(когда все промисы выполнться) промис,  и массив объектов {status: , value:} этих промисов
  // console.log('results allSettled(promises): ', results)          // [ { status: 'fulfilled', value: }, {}, {}]

  
  const successfulData = [];
  const errors = [];
  
  results.forEach(result => {
    if (result.status === 'fulfilled') {
      successfulData.push(result.value);
    } else {
      errors.push(result.reason);
    }
  });

  
  return {
    successful: successfulData,
    failed: errors,
    total: results.length,
    succeeded: successfulData.length
  };
}




// Использование
const urls = [
  'https://api.example.com/data1',
  'https://api.example.com/data2',
  'invalid-url'                   // Этот запрос завершится ошибкой
];

fetchMultipleSources(urls)        //  вернет объект {successful, errors, total, succeeded}
  .then(report => {               // report  это результат fetchMultipleSources
    console.log('report: ', report)
    console.log(`Успешно: ${report.succeeded}/${report.total}`);
    console.log("Успешные данные:", report.successful);
    console.log("Ошибки:", report.failed);
  });


// -----------------------------------------------------------------------------------------------------------------

// Альтернативный подход с async/await:
async function fetchMultipleSources(urls){

  const promises = urls.map(async (url) => {
      try{
        const response = await fetch(url);          // промис может отклонится при сетевой ошибке(нет инета, CORS блокировка) или неверный урл сервеар
        return await response.json();
      } catch(error){
          return { error: true, message: error.message }
      }
  });
  
  
  // остаьной код такой же
}
  

  