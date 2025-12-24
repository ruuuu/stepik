// Пример 8: Стрелочная функция + call/apply


// стрелочные игнорируют call/apply/bind



const car = { brand: 'Toyota' };
const bike = { brand: 'Yamaha' };


const showBrand = () => {       // стрлочная фкнция
  console.log(this.brand);
};



const showBrandRegular = function() {     // обычная фукнция
  console.log(this.brand);
};




showBrand.call(car);           // стрелочные игнорируют call/apply, выведет undefined
showBrand.apply(bike);         // стрелочные игнорируют call/apply, выведет undefined
showBrandRegular.call(car);    // call вызывает showBrandRegular с this = car, выведет 'Toyota'
showBrandRegular.apply(bike);  // call вызывает showBrandRegular с this = bike, выведет 'Yamaha'




const boundArrow = showBrand.bind(car);     // стрелочные игнорируют call/apply/bind, выведет undefined
const boundRegular = showBrandRegular.bind(bike);     // вернет функцию showBrandRegular с this = bike навсегда фиксированным, выведет 'Yamaha'

boundArrow();                  // выведет undefined
boundRegular();                // выведет 'Yamaha'