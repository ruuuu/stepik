// Задача 2: Вложенные объекты


// КОНТЕКСТ зависит от СПОСОБА ВЫЗОВА:

// если obj.method(), то this = obj

// если method(), то this = window/undefined


const company = {
  // контекст1
  name: 'TechCorp',

  department: {
    // контекст1
    name: 'Dev',

    getDeptName: function() {
      // контекст1
      console.log(this.name); // тк вызов getDeptName() происхдит как department.getDeptName(), getDeptName - обычнаяя фукнция(не стрелочная), то this = department
    }, 
    
    getDeptArrow: () => {
      // контекст1
      console.log(this.name); // this = undefined,  тк стрелочная фукнция берет контекст внешне области(глобальной)
    }
  }
};



company.department.getDeptName(); // 'Dev'
company.department.getDeptArrow(); // undefined