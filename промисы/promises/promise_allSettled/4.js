// Пример 4: Обработка форм с несколькими асинхронными валидациями



async function validateForm(formData) {


  const validations = [                   //  массив промисов
    validateEmail(formData.email),
    validatePassword(formData.password),
    checkUsernameAvailability(formData.username),
    validateAge(formData.age)
  ];
  
  console.log('validations: ', validations)             // [Promise { 23 }, Promise { <rejected> 'Пароль слишком короткий' },  Promise { { warning: true, message: 'Имя пользователя занято' } },  Promise { 12 }]


  const results = await Promise.allSettled(validations);    // метод ждет когда завершаться(успешно или с ошибкой) все промисы и вернет новый выполненный промис  и массив [{status: , value: успех}, {status: , reason: ошибка}, {}]  этих промисов
  // console.log('typeof((results): ', typeof results)   
  console.log('results: ', results)                   //  [{ status: 'fulfilled', value: 23 },  { status: 'rejected', reason: 'Пароль слишком короткий' },  {status: 'fulfilled',   value: { warning: true, message: 'Имя пользователя занято' }}]


  const errors = results
    .filter(result => result.status === 'rejected')
    .map(result => result.reason);
  

  const warnings = results
    .filter(result => result.status === 'fulfilled' && result.value.warning)
    .map(result => result.value.message);
  

  // console.log('errors: ', errors)
  // console.log('warnings: ', warnings)
  

  return {
    isValid: errors.length === 0,
    errors: errors,
    warnings: warnings
  };
}





// Симуляция валидаций:
const validateEmail = () => Promise.resolve(23);              // промис немедленно(синхронно) разрешится с результатом = 23

const validatePassword = () => Promise.reject("Пароль слишком короткий");   // промис немедленно(синхронно) отклонится c результатом = 'Пароль слишком короткий'

const checkUsernameAvailability = () => Promise.resolve({ warning: true, message: "Имя пользователя занято" });     // промис разрешитсяне медленно(синхронно) c результатом = переданный объект

const validateAge = () => Promise.resolve(12);          // промис разрешится немедленно(синхронно) с результатом = 12



// использование промиса:
validateForm({ email: 'rufink1@mail.ru', passowrd: 'weqweqw', username: 'Rusds', age: 34 })         //  Promise в статусе pending
  .then((res) => console.log(res))         //  res это то что вернт метод 

