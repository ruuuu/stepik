// Пример 4: Обработчики событий DOM


class Counter{
    constructor() {
        // Контекст1
        this.account = 0;
        this.elem = document.createElement('button');
        this.elem.textContent = 'Кликни';
        console.log('this1 ', this)


        
        //❌ Неправильно -  обычная фукнция создает свой this
        this.elem.addEventListener('click', function() {
            // Контекст2
            this.account++;                 // ❌  this = элемент кнопки, а не экземпляр класса
            console.log(this.account);      // undefined
        });
        


        // ✅ Правильно - стрелочная функция(т к у нее нет своего контекста this, она берет контекст из своего окружения те из внешней области)
        this.elem.addEventListener('click', () => {
            // Контекст1
            this.account++;         // ✅  this = экземпляр класса Counter
            console.log("Счет:", this.account);
        });
    }
}



const myCounter = new Counter();        // создали экземпляр(объект) {account: 0, elem: 'button'} класса 
console.log('мойСчетчик ', myCounter)
//document.body.appendChild(мойСчетчик.элемент);