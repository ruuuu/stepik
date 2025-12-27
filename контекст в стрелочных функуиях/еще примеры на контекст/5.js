// 5. Пример с setTimeout (очень частый на собеседованиях)



// В колбэке setTimeout обычная функция теряет контекст this. Решения: стрелочная функция, bind, или сохранение this в переменную.




const timerObj = {

  message: 'Hello!',
  
  // плохая идетя в коллбэк указывать обычную фукнуию, у нее свой  this, это контекст потеряется
  showMessageRegular() {
    setTimeout(function() {     //  в коллбэке обычная фукнция, то this = undefined, чтобы избедать этого нужно передать стрелочную функцию
      console.log(this.message);      // undefined
    }, 100);
  },
  

  // контекст this в переменную  сохранить
  showMessageRegular1() {
    let t = this            //  контекст this в переменную
    setTimeout(function() {    //  в коллбэке обычная фукнция, то this = undefined, чтобы избедать этого нужно передать стрелочную функцию
      console.log(t.message);      // Hello!
    }, 100);
  },


  // в коолбэке использовать стрелочную функцию
  showMessageArrow() {
    setTimeout(() => {      //  в коллбэке стрелочая фукнция(берет this из окружающей области), то есть из showMessageArrow, то this = timerObj
      console.log(this.message);      // Hello!
    }, 100);
  },


  // использварние.bind(this)
  showMessageBind() {
    setTimeout(function() {       //  в коллбэке обычная фукнция, но тк вызывали ее при помщи .bind(this), то this = timerObj
      console.log(this.message);    // Hello!
    }.bind(this), 100);
  }
};




timerObj.showMessageRegular();      // undefined
timerObj.showMessageArrow();        // Hello!
timerObj.showMessageBind();         // Hello!
timerObj.showMessageRegular1()       // Hello!