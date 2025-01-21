let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafio';

function buttonConsole() {
    console.log('El boton fue clickeado');
}

function prompts() {
    let city = prompt('Ingresa tu ciudad');
    alert(`Estuve en ${city} y me acorde de ti`);
}

function love() {
    alert('Yo amo Js');
}

function sum () {
  let a = prompt('Ingresa un numero');
  let b = prompt('Ingresa otro numero');
  alert(`La suma de los numeros es: ${parseInt(a) + parseInt(b)}`);
}