// 5. Пример с setTimeout (очень частый на собеседованиях)



// В колбэке setTimeout обычная функция теряет контекст. Решения: стрелочная функция, bind, или сохранение this в переменную.




const timerObj = {

  message: 'Hello!',
  
  showMessageRegular() {
    setTimeout(function() {
      console.log(this.message);      // undefined
    }, 100);
  },
  

  showMessageArrow() {
    setTimeout(() => {
      console.log(this.message);      // Hello!
    }, 100);
  },

  
  showMessageBind() {
    setTimeout(function() {
      console.log(this.message);    // Hello!
    }.bind(this), 100);
  }
};




timerObj.showMessageRegular();
timerObj.showMessageArrow();
timerObj.showMessageBind();