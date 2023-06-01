/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */



// let timeInterval = setInterval(() => console.log('Сообщение номер 1'), 2000);

// setTimeout(() => { clearInterval(timeInterval); console.log('Сообщение номер 5')}, 10000);

// setInterval(timeInterval, 2000)

// setTimeout(()=> {clearInterval(timeInterval), 10000})

let a = 1

let timeMessage = setInterval(() => {
    
    console.log('Сообщение номер ' + a); 
    a += 1
    
   
}, 2000);

setTimeout(()=> clearInterval(timeMessage), 11000)