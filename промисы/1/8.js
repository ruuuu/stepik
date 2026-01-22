// Пример из реальной жизни


// Аналогия с приготовлением кофе

function makeCoffee() {

  return new Promise((resolve) => {
    console.log('Начинаем готовить кофе...');

    setTimeout(() => {
      const coffee = {
        type: 'капучино',
        size: 'средний',
        sugar: true
      };

      resolve(coffee);          // промис разрешится через 3 с

    }, 3000);
  });
}








// Использование промиса



makeCoffee()
  .then((coffee) => {
    console.log(`Кофе ${coffee.type} готов!`);
   
    coffee.withCinnamon = true;
    return coffee;
  })
  .then((coffeeWithCinnamon) => {       // coffeeWithCinnamon это то что вернет предыдцщи  then
    console.log('Добавили корицу!');
    return `Ваш ${coffeeWithCinnamon.type} с корицей готов к подаче`;
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log('Ой, кофе пролили:', error);
  })
  .finally(() => {
    console.log('Процесс приготовления кофе завершен');
  });