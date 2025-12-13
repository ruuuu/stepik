//  (глобальный) контекст1
const globalVar = "Я глобальная";


function parent() {     //  контекст2
    
    const parentVar = "Я родительская";
    
    function chield() {     // контекст3
        const baby = "Я детская";
        console.log(globalVar);  // найдет из контекст1  
        console.log(parentVar);  // найдет из контекст2
        console.log(baby);    // найдет в этом контесте     
    }
    
    
    chield();   // создается контекст3, после отработывания функцииб он удалится и переменные станут недоступными
    
    
    // console.log(baby);     // ❌ Ошибка! тк Контекст3 уже удален, поэтому undefined

    console.log(globalVar);     // найдет из контекст1  
    console.log(parentVar);     // найдет из контекст2
}


parent()    // создается контекст2, после отрабатывания он удаляется и тогда его перменные(parentVar) становятя недоступными в др контекстах
//  Контекст parent() удаляется
