// 3. Использование bind, call, apply


// this — это контекст выполнения функции. Определяется  в момент вызова фукнции, а не в момент объяления.

// функция.call(context, arg1, arg2...) — вызывает функцию(метод) с заданным this = context(obj котрый хотим привязать) и аргументами, переданными по отдельности.

// функция.apply(context, [arg1, arg2...]) — то же, что call, но аргументы передаются в виде массива.

// функция.bind(context, arg1, arg2...) — не вызывает функцию, а возвращает новую функцию, с навсегда привязанным this = context(obj котрый хотим привязать) (и, опционально, аргументами).

// После первого вызова bind нельзя изменить контекст this  повторным вызовом bind/call/apply!!

// стрелочные функции игнорируют call/apply/bind



const person = {
  name: 'Alice'
};


function showInfo(age, city) {      // обычная фукнция
  console.log(`${this.name}, ${age} years, from ${city}`);
}



showInfo.call(person, 30, 'Moscow');      // call вызывает showInfo с this = person, выведет:  Alice, 30 years, from Moscow


showInfo.apply(person, [30, 'Moscow']);       // apply вызывает showInfo с this = person, выведет: Alice, 30 years, from Moscow


const boundFunc = showInfo.bind(person, 30);   // вернет новую фукнцию boundFunc с  навегда фиксрованным привязанным конектсом this = person 
boundFunc('Moscow');        // выведет: Alice, 30 years, from Moscow