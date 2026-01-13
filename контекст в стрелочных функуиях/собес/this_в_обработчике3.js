// Пример 9: DOM события + this 

// если this находится в обрбаотчике события, то this = Элемент, на котором произошло событие



const button = document.createElement('button');
button.textContent = 'Click me';



const handler = {
  count: 0,

  handleClick: function() {
    console.log('Button clicked', this.count++); // this = button, у button нет свойства count
  },

  handleClickArrow: () => {
    console.log('Arrow clicked', this.count++);   // стролоч фкнция this берет из внешней области, то есть this = window(в браузере), undefined++ = NaN 
  }
};




// Вопрос: что будет при клике в каждом случае?
button.addEventListener('click', handler.handleClick);  // т к this находится в обрбаотчике события, то this = button, у button нет свойства count,  выведет Nan

button.addEventListener('click', handler.handleClickArrow);     //  выведет Nan


button.addEventListener('click', function() {
  console.log('Anonymous', this);   // тк this находится в обрбаотчике события, то this = Элемент, на котором произошло событие, this = button 
});


button.addEventListener('click', () => {
  console.log('Arrow anonymous', this); //  ттк. стелочная функция, то this = window(глоб объект)
});