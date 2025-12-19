// Пример 6: Сложный пример с классами


class Counter {

  constructor() {
    this.count = 0;
    
    this.increment = () => {
      this.count++;
      console.log(this.count);
    };
  }
  
  decrement() {
    this.count--;
    console.log(this.count);
  }
  
  static reset() {
    this.count = 0;
    console.log('Reset to:', this.count);
  }
}

const counter = new Counter();
const inc = counter.increment;
const dec = counter.decrement;

counter.increment(); // Вопрос: что выведет?
inc();               // Вопрос: что выведет?
counter.decrement(); // Вопрос: что выведет?
dec();               // Вопрос: что выведет?
Counter.reset();     // Вопрос: что выведет?