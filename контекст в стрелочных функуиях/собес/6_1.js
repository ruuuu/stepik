// если стрелочную фукнцию(обработчик) поместить в метод объекта, то this = obj
// если this находится в обрбаотчике события, то this = Элемент, на котором произошло событие



const button = document.createElement('button');
button.textContent = 'Test Click';
document.body.appendChild(button); 



const handler1 = {
  clicks: 0,

  handleClick: function() {
    console.log('В handleClick this =', this); // handler1
    console.log('this === handler1?', this === handler1); // true
    
    this.clicks++; 
    console.log(`Clicks: ${this.clicks}`); 
  },


  setupEventListeners: function(){ 
    console.log('В setupEventListeners this =', this); // handler1
    
    button.addEventListener('click', () => {     // если стрелочную фукнцию(обработчик) поместить в метод(setupEventListeners) объекта, то this = obj.  Чаще на практике испоьзуют
      console.log('В стрелочной функции this =', this); // handler1
      console.log('this === handler1?', this === handler1); // true
      
      this.clicks++; 
      console.log(`Arrow clicks: ${this.clicks}`); 
    });
  }


};



handler1.setupEventListeners();  // this = handler1 ,тк вызоыв как obj.method()



button.addEventListener('click', () => {
  console.log('Во внешней стрелочной функции');
  handler1.handleClick();  // this = handler1 ,тк вызоыв как obj.method()
});

