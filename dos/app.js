//Variables
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario;
let contador = 1;
let maximoIntentos = 3;

while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));

    console.log(numeroUsuario);
    
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}, lo hiciste en ${contador} ${intentos == 1 ? 'intento' : 'intentos'}`); 
    } else {
        if(numeroUsuario > numeroSecreto){
            alert("El numero secreto es menor");
        }else{
            alert("El numero secreto es mayor");
        
            contador++;
            intentos = 'veces';

            
            if(contador > maximoIntentos){
                alert(`Llegaste al numero maximo de ${maximoIntentos} intentos`);
                break;
            }
        }
    }
}