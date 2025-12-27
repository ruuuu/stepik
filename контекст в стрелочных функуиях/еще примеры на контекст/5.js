// 5. Пример с setTimeout (очень частый на собеседованиях)



// В колбэке setTimeout обычная функция теряет контекст. Решения: стрелочная функция, bind, или сохранение this в переменную.




const timerObj = {

  message: 'Hello!',
  
  showMessageRegular() {
    setTimeout(function() {     //  в коллбэке обычная фукнция, то this = undefined, чтобы избедать этого нужно передать стрелочную функцию
      console.log(this.message);      // undefined
    }, 100);
  },
  

  showMessageRegular1() {
    let t = this            //  контекст this в переменную
    setTimeout(function() {    //  в коллбэке обычная фукнция, то this = undefined, чтобы избедать этого нужно передать стрелочную функцию
      console.log(t.message);      // Hello!
    }, 100);
  },


  showMessageArrow() {
    setTimeout(() => {      //  в коллбэке стрелочая фукнция(берет this из окружающей области), то this = timerObj
      console.log(this.message);      // Hello!
    }, 100);
  },

  
  showMessageBind() {
    setTimeout(function() {   //  в коллбэке обычная фукнция, но тк вызывали ее при помщи .bind(this), то this = timerObj
      console.log(this.message);    // Hello!
    }.bind(this), 100);
  }
};




timerObj.showMessageRegular();      // undefined
timerObj.showMessageArrow();        // Hello!
timerObj.showMessageBind();         // Hello!
timerObj.showMessageRegular1()       // Hello!