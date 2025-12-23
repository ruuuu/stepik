// Пример 6: Контекст в цепочке вызовов


// Возврат this из методов позволяет создавать цепочки вызовов. Контекст (calculator) передается по цепочке.

// Паттерн "чейнинг" работает, потому что каждый метод возвращает this


const calculator = {
  value: 0,

  add: function(num) {
    this.value += num;
    return this; // Возвращаем сам объект для цепочки
  },

  multiply: function(num) {
    this.value *= num;
    return this;
  },

  getResult: function() {
    return this.value;
  }
};



// Паттерн "чейнинг" работает, потому что каждый метод возвращает this
const result = calculator.add(5).multiply(2).add(10).getResult();
console.log(result); // (0+5)=5, (5*2)=10, (10+10)=20 -> 20