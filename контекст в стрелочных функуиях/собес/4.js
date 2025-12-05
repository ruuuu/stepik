// Задача 4: Цепочка вызовов


// КОНТЕКСТ зависит от СПОСОБА ВЫЗОВА:

// если obj.method(), то this = obj

// если method(), то this = window/undefined

// В методах объекта надо использовать ОБЫЧНУЮ фукнцию, а не стрелочную!!!



const calculator = {
  value: 0,

  add: function(num) {
    this.value += num;  // тк вызов add() происходит как calculator.add(5), значит this = calculator
    return this;  // calculator
  },

  multiply: function(num) { // тк вызов multiply() происходит как calculator.multiply(2), значит this = calculator
    this.value *= num;
    return this;   // calculator
  },

  show: () => {
    console.log(this.value); // this = undefined/window, тк стрелочная фукнция берет контекст внешне области(глобальной)
    return this;
  }
};



calculator.add(5).multiply(2).show(); // undefined