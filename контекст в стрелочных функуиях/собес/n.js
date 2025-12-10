const obj = {
  value: 42,
  
  getValue: () => {
    console.log(this.value); // undefined
  }
};

console.log(obj.getValue()); // undefined

// Стрелочная функция getValue берет this из внешней области(window), а не из объекта obj, в котором она объявлена. 
// В данном случае внешняя область - глобальная, поэтому this.value это window.value, который undefined. 
// Для методов объектов нужно использовать обычные функции."

// Поэтому в методах объекта надо писать ОБЫЧНУЮ функцию, а не стрелочную!!