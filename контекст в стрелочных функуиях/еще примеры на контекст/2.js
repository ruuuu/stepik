// 2. Стрелочная функция vs Обычная функция

const obj = {
  value: 42,
  
  regularFunc: function() {
    console.log('Regular:', this.value);
  },
  

  arrowFunc: () => {
    console.log('Arrow:', this.value);
  },
  

  nested: function() {

    const innerArrow = () => {    //  стелочная функция
      console.log('Inner arrow:', this.value);
    };
    
    const innerRegular = function() {   //  обычная функция, звисит от способа вызова
      console.log('Inner regular:', this.value);
    };
    
    innerArrow();       //  стелочная функция, берет this из окружающей области, тк она внутри nested, значит this берет из nested, то есть this = obj, выведет 42 
    innerRegular();     //  обычная функция, звисит от способа вызова: тк вызов как method(), то this = undefined
  }
};



obj.regularFunc()  // обычная фукнция. тк вызов как obj.method(), то this = obj, выведет 42
obj.arrowFunc();    // стрелчая фукния не иметт своего контекста, берет из внешней области, а внешняя обасть это глоб область, значит this = undefined/window
obj.nested(); // обычная фукнция. тк вызов как obj.method(), то this = obj