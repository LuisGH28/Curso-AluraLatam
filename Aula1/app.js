let secretNumber;
let counter = 1;


function assignElementText(element, text) {
    let elementHtml = document.querySelector(element);
    elementHtml.innerHTML = text;
}

function verifyNumber () {
    let number = parseInt(document.getElementById('userNumber').value);
    console.log(secretNumber);
    console.log(number);

    if(secretNumber === number) {
        assignElementText('p', `Felicidades, adivinaste el numero secreto en ${counter} ${(counter === 1 ? 'intento' : 'intentos')}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // El usuario no adivino el numero secreto
        if(number > secretNumber) {
            assignElementText('p', 'El numero secreto es menor');
        }else{ 
            assignElementText('p', 'El numero secreto es mayor');
        }
        counter++;
        clear();
    }
    return;
}

function init(){
    assignElementText('h1', 'Juego del numero secreto');
    assignElementText('p', 'Adivina el numero secreto entre 1 y 10');
    secretNumber = randomNumber();
    counter = 1;
}

function reboot(){
    // Limipiar el campo de texto
    clear();
    init();
    // Desabilitar el boton de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled', true);
    // Inicializar el contador
    
}

function clear () {
    document.getElementById('userNumber').value = '';
}

function randomNumber () {
    return Math.floor(Math.random() * 10) + 1;
}

init();