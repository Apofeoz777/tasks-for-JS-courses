/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const str = 'string'

const number = 1989

const married = true

const abs = null

const city = undefined

const users = {
    name: 'Nikita',
    surname: 'Pavlenco',
    age: 34,
    married: true,
    hobby: undefined 
}

const arrayTelNumber = ['079345345','078934587','079345467','079566545']



console.log(typeof str);
console.log(typeof number);
console.log(typeof married);
console.log(typeof abs);
console.log(typeof city);
console.log(typeof users);
console.log(typeof arrayTelNumber);
