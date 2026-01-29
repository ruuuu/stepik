// Пример 4: Обработка форм с несколькими асинхронными валидациями

async function validateForm(formData) {


  const validations = [
    validateEmail(formData.email),
    validatePassword(formData.password),
    checkUsernameAvailability(formData.username),
    validateAge(formData.age)
  ];
  
  const results = await Promise.allSettled(validations);
  

  const errors = results
    .filter(result => result.status === 'rejected')
    .map(result => result.reason);
  

  const warnings = results
    .filter(result => result.status === 'fulfilled' && result.value.warning)
    .map(result => result.value.message);
  


  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}





// Симуляция валидаций:
const validateEmail = () => Promise.resolve();

const validatePassword = () => Promise.reject("Пароль слишком короткий");

const checkUsernameAvailability = () => 
  Promise.resolve({ warning: true, message: "Имя пользователя занято" });

const validateAge = () => Promise.resolve();