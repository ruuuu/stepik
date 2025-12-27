// 8. Еще одна хитрая задача

// РАЗОБРАТЬ


var prop = 10;

const obj = {
  prop: 20,
  
  getProp: function() {
    return this.prop;
  }
};

const freeFunc = obj.getProp;

console.log(obj.getProp()); // 20
console.log(freeFunc());    // 10 (в нестрогом режиме, т.к. var создает свойство в глобальном объекте)
// В строгом режиме или с let/const - undefined