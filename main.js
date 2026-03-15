// let nick = prompt('Введите ваше имя');
// alert( "Привет, " + nick );

// let yearOfBirth = +prompt('Введите год своего рождения');
// const ourYear = 2026;
// alert(ourYear - yearOfBirth);

// let squareLength = +prompt('Введите длину стороны квадрата');
// alert (squareLength * 4);

// let circleRadius = +prompt('Введите радиус окружности');
// const PI = 3.14;
// alert((circleRadius ** 2) * PI);









// let age = +prompt("Введите возраст");
// switch (true) {
//     case age > 0 && age < 2 :
//         alert ('Вы ребенок')
//         break;
//     case age > 12 && age <= 18 :
//         alert ('Вы подросток')
//         break;
//     case age > 18 && age <= 60 :
//         alert ('Вы взрослый')
//         break;
//     case age > 60 :
//         alert ('Вы пенсионер') 
//         break;
//     default:
//         alert ('Вы ошибка')
//         break;
// }

// let symbol = +prompt('Введите число');
// switch(symbol) {
//     case 0 :
//         alert (')')
//         break;
//     case 1 :
//         alert ('!')
//         break;
//     case 2 :
//         alert ('@')
//         break;
//     case 3 :
//         alert ('#')
//         break;
//     case 4 :
//         alert ('$')
//         break;
//     case 5 :
//         alert ('%')
//         break;
//     case 6 :
//         alert ('^')
//         break;
//     case 7 :
//         alert ('&')
//         break;
//     case 8 :
//         alert ('*')
//         break;
//     case 9 :
//         alert ('(')
//         break;
// }

// let num = +prompt('Введите трехзначное число');
// let n100 = Math.floor(num / 100);
// let n10 = (Math.floor(num / 10)) % 10;
// let n1 = num % 10;
// if (n1 === n10 && n10 === n100){
//     alert ('Все одинаковые')
// }else if (n1 === n10 || n1 === n100 || n10 === n100){
//     alert('Две цифры')
// } else{
//     alert('Все разные')
// }

// let year = +prompt('Введите год');
// if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0){
//     alert('Високосный')
// }else{
//     alert('Невисокосный')
// }













// let number1 = +prompt('Введите число от');
// let number2 = +prompt('Введите число до');
// let sum = 0
// for (i = number1; i <= number2; i++){
//     sum +=i;
// }
// console.log (sum)

// let number1 = +prompt('Введите');
// let number2 = +prompt('Введите');
// for (i=number1; ;i-- ){
//     if (number1 % i == 0 && number2 % i ==0){
//         console.log (i)
//         break;
//     }
// }

// let number = +prompt('Введите число');
// for (i = 1; i <= number; i++){
//     if (number % i == 0){
//         console.log (i)
//     }
// }

// let number = +prompt('Введите');
// let count = 0;
// while (number > 0) {
//     count++
//     number = Math.floor(number / 10)
// }
// console.log(count)














// function getValue (a, b) {
//     if (a < b){
//         return -1
//     } else if(a > b){
//         return 1
//     }else{
//        return 0
//     }
// }
// console.log(getValue(3, 2))

// function calcFactorial (num){
//     let factorial = 1;
//     for (i = 1; i <= num; i++){
//        factorial *= i;
//     }
//     return factorial
// }
// console.log(calcFactorial(4))

// function aad (num1, num2, num3){
//     return (num1 + "" + num2 + "" + num3 + "")
// }
// console.log(aad(1, 2, 3))

// function calcSquare (length, width){
//     if (width == undefined){
//         return length**2
//     }else{
//         return length * width
//     }
// }
// console.log(calcSquare(2))
// console.log(calcSquare(2, 4))








// const car = {
//     barnd : 'krutaya',
//     model : 'tachka',
//     year : 23,
// }

// console.log (`У меня есть ${car.barnd} ${car.model} ${car.year} года выпуска`)

// const product = {
//     name : 'Футболка',
//     price : 1500,
//     quantity : 10,
// }
// product.totalPrice = product.price * product.quantity
// console.log (product)

// const rectangle = {
//     widtg : 10,
//     height : 15,
// }
// rectangle.area = rectangle.widtg * rectangle.height
// console.log(rectangle)

// const item = {
//     price : 200,
//     discount : 20,

// }
// item.finalPrice = item.price - (item.price * item.discount / 100)
// console.log(item.finalPrice)







// const queue = ['Иван', 'Мария', 'Петр'];
// queue.push('Анна');
// queue.shift();
// queue.unshift('Олег');
// console.log (queue);



// const callStack = [];
// function login (){
//     validate();
// };
// function validate(){
//     save();
// };
// function  save (){
//    console.trace();
// };
// login();



// const busStop = ['Анна', 'Борис'];
// busStop.push('Виктор', 'Галина');
// busStop.shift();
// busStop.length = 0;
// console.log (busStop);
// console.log ('Автобус уехал. Пассажиров: 0');

// const shoppingList = ['хлеб', 'молоко'];
// shoppingList.push('яйца');
// shoppingList.unshift('масло');
// shoppingList.pop();
// shoppingList.shift();
// console.log(shoppingList)






// function biggestNumber (num){
//     if (num < 10){
//         return num
//     }
//     let lastNum = num % 10;
//     let ostNum = Math.floor(num/10);
//     let maxNum = nod (ostNum)
//     return maxNum > lastNum ? maxNum : lastNum
// }
// console.log(nod(256))
// console.log(nod(971))


// function nod (num, b = num){
//     if (b === 2){
//         return true
//     }
//     if (num % (b - 1) !== 0){
//         return nod (num, b - 1)
//     } return false
// }


// function nod (a, b){ 
//     if (a % b === 0){ 
//     return b 
//     } 
//     return nod (b, a % b)
// }






// let car1 = {
//   manufacturer : 'Porsche AG',
//   model : 'Porsche 911 Turbo',
//   year : 1975,
//   averageSpeed : 80,
//   information (){
//     return `${this.model} from the manufacturer ${this.manufacturer} ${this.year} year. Has average speed ${this.averageSpeed}`
//   },
//   calculateTime(distance){
//     let time = Math.round(distance / this.averageSpeed);
//     console.log(time)
//     if (time < 4){
//       return time
//     }else {
//       return time + (Math.floor(time/4))
//     }
//   }

// }

// let car2 = {
//   information(model, manufacturer, year, averageSpeed){
//     return `${model} from the manufacturer ${manufacturer} ${year} year. Has average speed ${averageSpeed}`
//   },
//   calculateTime(distance, averageSpeed){
//     let time = Math.round(distance / averageSpeed);
//     console.log(time)
//     if (time < 4){
//       return time
//     }else {
//       return time + (Math.floor(time/4))
//     }
//   }
// }



// let fractionCalculator = {
//   sumFractions(n1, d1, n2, d2){
//     if (d1 === d2){
//       return `${n1 + n2} / ${d1}`
//     }
//     let s1 = (n1 * d2) + (n2 * d1);
//     let s2 = d1 * d2;
//     return `${s1}/${s2}`
//   },

//   subtractionFractions(n1, d1, n2, d2){
//     if (d1 === d2){
//       return n1 - n2 + '/' + d1
//     }
//     let s1 = (n1 * d2) + (n2 * d1);
//     let s2 = d1 * d2;
//     return `${s1}/${s2}`
//   },

//   multiplicationFractions(n1, d1, n2, d2){
//     return `${n1 * n2}/${d1 * d2}`
//   },

//   divisionFractions(n1, d1, n2, d2){
//     return `${n1 * d2}/${d1 * n2}`
//   },

//   nodFractions(n, d){
//     let more = d ;
//     let less = n;
//     if (n > d){
//       more = n;
//       less = d
//     }
//     let nod = 1;
//     for (i = less; i > 1; i--){
//       if (more % i === 0 && less % i === 0){
//         nod = i;
//       }
//     }
//     if (d / nod === 1){
//       return `${n / nod}`
//     }
//     return `${n / nod}/${d / nod}`
//   }
// }




// let time = {
//   hours : Math.floor(Math.random() * (24 - 1) + 1),
//   minutes :  Math.floor(Math.random() * (60 - 1) + 1),
//   seconds: Math.floor(Math.random() * (60 - 1) + 1),

//   getTime (){
//     return `${this.hours}.${this.minutes}.${this.seconds}`
//   },

//   increaseHours(h){
//     sum = this.hours + h
//     if (sum >= 24){
//       sum %= 24
//     }
//     return `${sum}.${this.minutes}.${this.seconds}`;
//   },
//     increaseMinutes(m){
//     sum = this.minutes + m
//     h = this.hours;
//     if (sum >= 60){
//       h += Math.floor(sum / 60); 
//       sum %= 60;
//     }
//     return `${h}.${sum}.${this.seconds}`;
//   },
//     increaseSeconds(s){
//     h = this.hours;
//     m = this.minutes;
//     sum = this.seconds + s
//     if (sum >= 60){
//     m += Math.floor(sum / 60) ; 
//     sum %= 60;
//     }
//     if(m >= 60){
//       h += Math.floor(m / 60) ; 
//       m %= 60;
//     }
//     return `${h}.${m}.${sum}`;
//   },

// }






// const time = document.querySelector('.time');
// time.style.fontSize = '200px';
// time.style.margin = '300px 450px';


// class Timer {
//     start = new Date()
//     finish = new Date('2026-06-01')

//     constructor(){}

//     getTime(){
//         let difference = (this.finish - this.start)
//         let hours = (Math.floor(difference / (1000 * 60 * 60))) - 3
//         let minutes = Math.floor((difference % (1000 * 60 * 60 )) / (1000 * 60 ));
//         let seconds = Math.floor((difference % (1000 * 60 )) / (1000) );
//         return time.innerHTML =`${hours}:${minutes}:${seconds}`
//     }
    
// }

// setInterval(() => {
//     const timer = new Timer
//     timer.getTime()
// }, 1000);



const btn = document.querySelector('.btn')
const input = document.querySelector('input')
const toDo = document.querySelector ('.to-do__list')

btn.addEventListener('click', () => {
    const newLi = document.createElement('li');
    newLi.innerHTML = `${input.value} <button class='delete'>x</button>`
    toDo.appendChild(newLi);
})


toDo.addEventListener('click', (e) =>{ 
 if(e.target.classList.contains('delete')){
     e.target.closest('li').remove();
 }
 })