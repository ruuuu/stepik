// Задача 6: Event Listeners (практическая!)

// если this находится в обрбаотчике события, то this = Элемент, на котором произошло событие


const button = document.createElement('button');
button.textContent = 'Click me';


document.body.append(button);


const handler = {
  clicks: 0,

  handleClick: function() { // обработчик события
    this.clicks++; // this в обрбаотчике события, значит this = элемент button (элемент на котром произошло событие), у button нет свойства clicks
    console.log(`Clicks: ${this.clicks}`); // undefined++ = NaN 
  },

  handleClickArrow: () => { // обработчик события
    this.clicks++; // this берет из внешней области, то есть this = window(в браузере), undefined++ = NaN 
    console.log(`Arrow clicks: ${this.clicks}`); // 
  }
};



button.addEventListener('click', handler.handleClick); // NaN
button.addEventListener('click', handler.handleClickArrow); // Nan



// // Чтобы this = handler, 
// // способ1: использовать bind() чаще на практике испоьзуют:
// button.addEventListener('click', handler.handleClick.bind(handler)); // тперь this = handler


// button.addEventListener('click', handler.handleClickArrow()); // здесь все равно this = window




// // способ2:  обернуть в стрелочную функцию: 
// button.addEventListener('click', () => {
//   handler.handleClick()  // здесь вызываем handleClick() как obj.method(), и тогда this = obj
// });

// button.addEventListener('click', () => {
//   handler.handleClickArrow() // Все равно this = window
// });



// // способ3(ПРавильный подход):
// const handler1 = {
//   clicks: 0,

//   handleClick: function() {
//     this.clicks++; // this = handler1, тк вызывется как obj.method
//     console.log(`Clicks: ${this.clicks}`); 
//   },

//   setupEventListeners: function(){ // если стрелочную фукнцию(обработчик) поместить в метод объекта, то this = obj.  Чаще на практике испоьзуют
//     button.addEventListener('click', () => {
//       this.clicks++; // this = handler1
//       console.log(`Arrow clicks: ${this.clicks}`); // Работает
//     });
//   }
  
// };

// handler1.setupEventListeners();  // this = handler1 (вызываем как obj.method())
// button.addEventListener('click', () => {
//   handler1.handleClick()  // здесь вызываем handleClick() как obj.method(), и тогда this = obj
// });



//  способ4(Самый ПРавильный подход): стерлчоная функция-обработчик
const handler2 = {
  clicks: 0,
  
  // Стрелочная функция как метод не подходит!
  // Но можно сделать так:
  handleClick: function() {
    this.clicks++;
    console.log(`Clicks: ${this.clicks}`);
  }
};

// Используем стрелочную функцию как обработчик
button.addEventListener('click', () => {
  handler2.clicks++;     
  console.log(`Clicks: ${handler2.clicks}`);    // Работает!
});