// > - чон белги
// < - кичинекей белги
// >= - чон же барабар
// <= - кичине же барабар
// = - барабар
// == - не строгий барабар
// === - строгий барабар

// console.log(21>20)
// console.log(2===2)
// console.log("2" == 2)
// console.log("2" === 2)
// console.log(Number("2") === 2)

// let str= "123456"
// console.log(str)
// let num=11112
// console.log(num)       // сан кылып чыгарат
// console.log(+str)

// let num = 10
// console.log(num)
// console.log(String(num))         строка кылып чыгарып берет
// console.log(num.toString(num))

// if - эгерде
// else - болбосо
//
// if (5===5){
//     console.log("true")
// }else{
//     console.log("false")
// }

// let num = 7
// if(num>=5){
//     console.log("true")
// }else{
//     console.log("false")
// }

// let color="red"
// if(color==="red"){
//     console.log("токто")
// }else if(color==="yellow"){
//     console.log("даярдан")
// }else if(color==="green"){
//     console.log("айдасан болот")
// }else{
//     console.log("мындай цвет жок")
// }

// && - и - жана -логическая умножения(амперсант)
// ||  или - же - логическая сумма

// console.log(false && false && false && false)
// console.log(true && false && false && true)
// console.log(true || true && false || true)

// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
// let a = 10
// if (a===10){
//     console.log('верно')
// }else {
//     console.log('неверно')
// }
// // 2. Вам даны две переменные a=50, b=100. Составьте условие, по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
// let a=50, b=100
// if (a>b){
//     console.log('a больше b ')
// }else {
//     console.log('a меньше b')
// }

// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль будет выводиться 'positive' - если число больше 0, 'равно' если число равно 0, "negative" если число меньше 0.
// let a= -2
// if (a>0){
//     console.log("positive")
// } else if(a===0){
//     console.log("равно")
// }else {
//     console.log("negative")
// }


// 4. Вам дана переменная number=45. Составьте условие, по которому будет выводиться в консоль "Четное число", "Нечетное число".
// let number=45
// if (number/2===0){
//     console.log("Четное число")
// }else {
//     console.log("нечетное число")
// }

// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому, остаток деления a на b, будет выводиться консоль "Четное число", "Нечетное число".
// let a=10, b=2
// if (a%b===0){
//     console.log("Четное число")
// }else{
//     console.log("Нечетное число")
// }
// a%b === 0 ? console.log ("Четное число") : ("Нечетное число")
// ? - true
// : - false

// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет
// выводится тип этой переменной - "boolean", "number", "string".
// let s = 1234
// if (typeof s === "boolean"){
//     console.log("boolean")
// }else if (typeof s==="number"){
//     console.log("number")
// }else if (typeof s==="string"){
//     console.log("string")
// }else {
//     console.log(typeof s)
// }

// 7. Вам дана переменная а. Если переменная a больше
// одного и меньше 9-ти, то выведите 'Верно',
// иначе выведите 'Неверно'.
// let a = 5
// if(a>1 && a<9){
//     console.log(`Верно`)
// }else{
//     console.log(`Неверно`)
// }
// a>1 && a<9 ? console.log("верно"): console.log("неверно")

// 8. Вам дана переменная а. Если переменная a равна
// трем или равна семи, то прибавьте к ней 7, иначе поделите
// ее на 10. Выведите новое значение переменной в консоль.
// let a = 3
// if(a === 3||a === 7 ){
//     console.log(a + 7)
// }else{
//     console.log(a / 10)
// }
// a===3 || a===7 ? console.log(a+7): console.log(a/10)

// console.log(true || true || true || true || true || true)
// console.log(false && true || true && false)
// console.log(false && true || false && true)

// 9. Вам даны переменные а , b. Если переменная a равна
// или меньше 0, а переменная b больше или равна 5, то
// выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
// let a=1, b=7
// if(a<=0 && b>=5){
//     console.log(a+b)
// }else {
//     console.log(a-b)
// }

// 10. Вам даны переменные a , b. Если переменная a больше
// 4-х и меньше 10-ти, или переменная b больше или равна
// 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// let a=5, b=10
// if((a>4 && a<10)||(b>=7 && b<17)){
//     console.log('Верно')
// }else{
//     console.log('Неверно')
// }
// let color=prompt()
// if(color==="red"){
//     console.log("стоп")
// }else if(color==="yellow"){
//     console.log("приготовься")
// }else if(color==="green"){
//     console.log("иди")
// }else{
//     console.log("нет такого цвета")
// }


// let day = +prompt()
// if(day === 1){
//     console.log("понедельник")
// } else if(day === 2){
//     console.log("вторник")
// } else if(day === 3){
//     console.log("среда")
// } else if(day === 4){
//     console.log("четверг")
// } else if(day === 5){
//     console.log("пятница")
// } else if(day === 6){
//     console.log("суббота")
// } else if(day === 7){
//     console.log("воскресенье")
// } else {
//     console.log("ошибка")
// }

// let film=+prompt()
// if(film>=1 && film<=6){
//     console.log("лунтик")
// }else if(film>=7 && film<=12){
//     console.log("том и джерри")
// } else if(film>=13 && film<=17){
//     console.log("marvel")
// }else if(film>=18 && film<=70){
//     console.log("ужастик")
// }else{
//     console.log("ты что ещё живой!")
// }

// let a=10
// let b=14
// a>b ? console.log("true"):console.log("false")

// let a=+prompt("1")
// let w=prompt("+")
// let b=+prompt("2")
//
// if(w==="+"){
//     console.log(a+b)
// }else if(w==="-"){
//     console.log(a-b)
// }else if(w==="*"){
//     console.log(a*b)
// }else if(w==="/"){
//     console.log(a / b)
// }else {
//     console.log("mistake")
// }

//11. Вам дана переменная month. В ней лежит какое-то число из интервала от
// 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето,
// весна, осень).
// let month=+prompt(12)
// if(month>=3 && month<=5){
//     console.log("spring")
// }else if(month>=6 && month<=8){
//     console.log("summer")
// }else if(month>=9 && month<=11){
//     console.log("autumn")
// }else if(month>=1 && month<=2 || month===12){
//     console.log("winter")
// }else{
//     console.log("error")
// }

// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1
// до 31. Определите в какую декаду месяца попадает это число (в первую, вторую
// или третью).
// let day=+prompt(31)
// if (day>=1 && day<=10){
//     console.log("первая декада месяца")
// }else if(day>=11 && day<=20){
//     console.log("вторая декада месяца")
// }else if(day>=21 && day<=31){
//     console.log("третья декада месяца")
// }else{
//     console.log("такого десятилетия не существует")
// }
// let name=prompt("What is your name?", "name")



