// Пример 2: Вложенные объекты

const company = {
  name: 'Google',
  department: {
    name: 'Engineering',
    getName: function() {
      return this.name;
    },
    getNameArrow: () => {
      return this.name;
    }
  }
};

console.log(company.department.getName());     // 
console.log(company.department.getNameArrow()); // 