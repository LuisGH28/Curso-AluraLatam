console.log("Bienvendo a appOne.js");
let name = "Juan";
console.log("Hola " + name);
let language = prompt("Cual es el lenguaje de programación que más te gusta?");
console.log(language);
let valueOne = 10;
let valueTwo = 20;
let result = valueOne + valueTwo;
console.log(result);
let age = prompt("Cual es tu edad?");
let major = (age >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(major);
let number = prompt("Ingresa un número");
if (number > 0) {
    console.log("El número es positivo");
}else{
  console.log("El número es negativo");
}
let numberTwo = 0;
while (numberTwo < 10) {
    console.log(numberTwo);
    numberTwo++;
}
let numberThree = Math.floor(Math.random() * 10);
console.log(numberThree);
let numberFour = Math.floor(Math.random() * 10) + 1;
console.log(numberFour);
let numberFive = Math.floor(Math.random() * 10000) + 1;
console.log(numberFive);


