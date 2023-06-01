/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const carsPrice = [

    {
     carBrand:'BMW',
     price: 2600,
     isAvailableForSale: true
    },

    {
    carBrand:'AUDI',
    price: 2800,
    isAvailableForSale: true
    },

    {
     carBrand:'Mercedes',
     price: 3000,
     isAvailableForSale: false
    }
]

carsPrice.push({
     carBrand: 'Hyundai',
     price: 2000,
     isAvailableForSale: true
})

console.log(carsPrice);

