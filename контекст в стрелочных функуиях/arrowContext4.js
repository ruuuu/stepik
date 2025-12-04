// Пример 4: Обработчики событий DOM

class Counter{
    constructor() {
        // Контекст1
        this.account = 0;
        this.elem = document.createElement('button');
        this.elem.textContent = 'Кликни';
        console.log('this1 ', this)


        
        //❌ Неправильно - теряем контекст this
        this.elem.addEventListener('click', function() {
            // Контекст2
            this.account++; // ❌ контекст this = элемент кнопки, а не экземпляр класса
            console.log(this.account); // undefined
        });
        


        // ✅ Правильно - стрелочная функция(т к у нее нет своего контекста this, она берет контекст из своего окружения)
        this.elem.addEventListener('click', () => {
            // Контекст1
            this.account++; // ✅  контекст this = экземпляр класса Counter
            console.log("Счет:", this.account);
        });
    }
}

const myCounter = new Counter(); // создали экземпляр(объект= {счет: 0, элемент: 'button'}) класса 
console.log('мойСчетчик ', myCounter)
//document.body.appendChild(мойСчетчик.элемент);