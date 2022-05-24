// Существует игра в города. Ее правила: в города играют двое и более человек,
// в которой каждый участник в свою очередь называет реально существующий город любой страны, 
// название которого начинается на ту букву, которой оканчивается название предыдущего участника. 
// Давайте реализуем эту игру. Пусть играют два человека за одним компьютером. Ходят по очереди. 
// Города вводятся в один инпут и отправляются по нажатию клавиши Enter. 
// Браузер должен запоминать города, которые уже были, и не принимать такие города.

const input = document.getElementById('input')
const btn = document.getElementById('btn')
const result = document.getElementById('result')
const search = document.getElementById('search')


let cityArray = []
let citylettersArray = []
document.onkeydown = function (e) {
    if (e.keyCode === 13) {
        input.value = input.value.toUpperCase()
        let lettersArray = input.value.split('')
        console.log(lettersArray);

        if(cityArray.includes(input.value)) {
            search.innerHTML = 'Такой город уже был!'
        }; 

        cityArray.push(input.value)
        console.log(cityArray);
       
        citylettersArray = cityArray.join('')
        citylettersArray = citylettersArray.split('').reverse()
        console.log(citylettersArray);
        console.log(input.value.length);

        if (input.value === 'МОСКВА') {
            result.innerHTML = 'Отлично, так держать!'
            result.style.color = 'white'
        } else if (lettersArray[0] != citylettersArray[input.value.length]) {
            result.innerHTML = 'Последняя буква предыдущего города не совпадает с первой буквой указанного города'
            result.style.color = 'rgb(185, 46, 46)'
        } else {
            result.innerHTML = 'Отлично, так держать!'
            result.style.color = 'white'
        }
    
        input.value = ''
    }
}
// let str = ['Саранск','Кострома']

// let arr = str.join('')
// arr = arr.split('')
// console.log(arr); // выведет 'London'