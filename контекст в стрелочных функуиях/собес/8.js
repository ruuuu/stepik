// Задача 8: Сложная вложенность

const app = {
  config: {
    apiUrl: 'https://api.example.com',
    log: () => {      // тк стрелочная фукнция берет this из внешней области(а тут она глобальная), то this = window(undefined)
      console.log(`API: ${this.apiUrl}`);     // undefined
    }
  },

  init: function() {   // this = app
    const setup = () => {   // если стрелочную фукнцию поместить в метод объекта, то this = obj
      console.log(`App initialized with ${this.config.apiUrl}`);
    };

    setup();
  }

};




app.config.log(); // undefined/window
app.init();       // тк вызов как obj.method(), то this = app.  Поэтому выведет  'https://api.example.com'