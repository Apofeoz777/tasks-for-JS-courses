/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */
class ExtendedArray extends Array {
    sum () {
        return this.reduce((acc, el) => acc + el, 0)
    }
    onlyNumbers() {
        return this.filter(item => typeof item === 'number');
    }
}

const numbers = new ExtendedArray(5,3,10,10,)

console.log(numbers.sum());
console.log(numbers.onlyNumbers());


const orders = new ExtendedArray(6,7,8)

console.log(orders.sum());
console.log(orders.onlyNumbers());

numbers.forEach(el => console.log(el + 2))

orders.forEach(el => console.log(el - 5))