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

// Объектные литералы {} НЕ создают новой области видимости для this!

// Только функции (function), методы, блоки кода создают новую область видимости.

// Стрелочная функция getNameArrow создана внутри объектного литерала department, но этот литерал:

// Не является функцией

// Не является блоком с {} (в смысле области видимости для this)

// Это просто значение, присваиваемое свойству department

// Где же тогда внешняя область для стрелочной функции?

// Код выполняется в глобальной области видимости (или на верхнем уровне модуля в Node.js).

// Объект company создается в этой глобальной области.

// Стрелочная функция getNameArrow "видит" this из той области, где был создан объект company, то есть из глобальной области.