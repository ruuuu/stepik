// Пример 9: DOM события + this 



const button = document.createElement('button');
button.textContent = 'Click me';



const handler = {
  count: 0,

  handleClick: function() {
    console.log('Button clicked', this.count++);
  },

  handleClickArrow: () => {
    console.log('Arrow clicked', this.count++);
  }
};




// Вопрос: что будет при клике в каждом случае?
button.addEventListener('click', handler.handleClick);

button.addEventListener('click', handler.handleClickArrow);

button.addEventListener('click', function() {
  console.log('Anonymous', this);
});

button.addEventListener('click', () => {
  console.log('Arrow anonymous', this);
});