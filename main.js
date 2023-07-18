/* Задание 1 */
// const reversArr = (array) => {
//     return array.reverse()
// }
//
// console.log(reversArr([1, 2, 3]))

/* Задание 2 */
// const clearArr = (array) => {
//     return array.filter(el => el)
// }
//
// console.log(clearArr([0, 1, false, 2, undefined, '', 3, null]))

/* Задание 3 */
// Loading...

/* Задание 4 */
// const arr1 = ['a', 'b', 'c']
// const arr2 = [1, 2, 3]
// console.log(...arr1,...arr2)

/* Задание 5 */
// const arr1 = [1, 2, 3];
// const elementsOne = 4;
// const elementsTwo = 5;
// const elementsThree = 6;
// arr1.push(elementsOne, elementsTwo, elementsThree)
// console.log(arr1)

/* Задание 6 */
// const arr1 = [1, 2, 3];
// const elementsOne = 4;
// const elementsTwo = 5;
// const elementsThree = 6;
// arr1.unshift(elementsOne, elementsTwo, elementsThree)
// console.log(arr1)

/* Задание 7 */
// const arr = [1, 2, 3, 4, 5];
// console.log(...arr.splice(0, 1),...arr.splice(2, 4))

/* Задание 8 */
// const obj = {
//     js: 'test',
//     jq: 'hello',
//     css: 'world',
// }
//
// console.log(Object.keys(obj));

/* Задание 9 */
// const joinEl = (arr) => {
//     return arr
// }
// console.log(joinEl(['Капуста', 'Репа', 'Редиска', 'Морковка'].join(', ')))

/* Задание 10 */
// Loading...

/* Задание 11 */
const cars = [
    {
        make: "Ford",
        model: "Mustang",
        year: 1969,
        color: "red",
        price: 25000
    },
    {
        make: "Ford",
        model: "F-150",
        year: 2017,
        color: "blue",
        price: 30000
    },
    {
        make: "Tesla",
        model: "Model S",
        year: 2018,
        color: "black",
        price: 120000
    },
    {
        make: "Chevrolet",
        model: "Camaro",
        year: 1970,
        color: "orange",
        price: 60000
    },
    {
        make: "Dodge",
        model: "Challenger",
        year: 2019,
        color: "red",
        price: 35000
    },
    {
        make: "Chevrolet",
        model: "Corvette",
        year: 2019,
        color: "blue",
        price: 90000
    },
    {
        make: "Tesla",
        model: "Model 3",
        year: 2019,
        color: "white",
        price: 40000
    },
    {
        make: "Mercedes",
        model: "C-Class",
        year: 2019,
        color: "black",
        price: 60000
    }
]
// 1 фильтровать по цене. от 40000 до 60000 и год до 2019
// const priceFilter = (array) => {
//     return array.filter(car => car.price >= 40000 && car.price <= 60000 && car.year <= 2019)
// }
//
// console.log(priceFilter(cars))

// 2 марка
// const modelFilter = (array) => {
//     return array.filter(car => car.make === 'Ford')
// }
//
// console.log(modelFilter(cars))