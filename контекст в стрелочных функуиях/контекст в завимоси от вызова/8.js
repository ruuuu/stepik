// Пример 8: Стрелочная функция + call/apply

// РАЗОБРАТЬ!!

const car = { brand: 'Toyota' };
const bike = { brand: 'Yamaha' };

const showBrand = () => {
  console.log(this.brand);
};

const showBrandRegular = function() {
  console.log(this.brand);
};

showBrand.call(car);           // Вопрос: что выведет?
showBrand.apply(bike);         // Вопрос: что выведет?
showBrandRegular.call(car);    // Вопрос: что выведет?
showBrandRegular.apply(bike);  // Вопрос: что выведет?

const boundArrow = showBrand.bind(car);
const boundRegular = showBrandRegular.bind(bike);

boundArrow();                  // Вопрос: что выведет?
boundRegular();                // Вопрос: что выведет?