// Пример 2: Вложенные объекты

const company = {
  name: 'Google',

  department: {
    name: 'Engineering',

    getName: function() { // обычна фукнция,  тк вызов как obj.method, то this = obj те this = department
      return this.name;
    },

    getNameArrow: () => { // стрелчная фккнция, берет this из внешней области(тут внешняя область являеья глобальной - window)
      return this.name; // indefined
    }

  }
};

console.log(company.department.getName());     // вывдет  'Engineering'
console.log(company.department.getNameArrow()); // вывдет indefined