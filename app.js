var p1 = 7;
var p2 = 5;
var n = p1*p2;
var phyn = (p1-1)*(p2-1);
var abecedario = ["a", "b", "c","d", "e", "f","g", "h", "i","j", "k", "l","m", "n", "ñ","o", "p", "q","r", "s", "t","u", "v", "w","x", "y","z", " "];

function expModZViaCuadradoRepetido(a, n, z) {
    let resultado = 1;
    let x = a % z;

    while (n > 0) {
        if (n % 2 === 1) { // Si n es impar
            resultado = (resultado * x) % z;
        }
        x = (x * x) % z; // Cuadrar x
        n = Math.floor(n / 2); // Dividir n entre 2 y redondear hacia abajo
    }

    return resultado;
}


// Define una función para encontrar el GCD usando el Algoritmo de Euclides
function gcd(a, b) {
    // Si el segundo número es 0, el primer número es el GCD
    if (b === 0) {
        return a;
    } else {
        // Llama a la función recursivamente con 'b' y el residuo de 'a' dividido por 'b'
        return gcd(b, a % b);
    }
}

function encriptar(){
    let e=2;
    let k=1;
    let d=0;
    const text = document.getElementById('criptacion');
    const muestra = document.getElementById('muestra');
    const texto =text.value; 
    // divide los eemntos uno por uno en la lista
    let letraxletra = texto.split('');
    letraxletra;
    listaconnumeros=[];
    listaconnumerosencrip=[];
    listaconnumerosdesencrip=[];
    const j=letraxletra.length;
    // crea una lista donde pasa las letras a numeros para poder ser encriptados
    for (let i = 0; i < j; i++  ) {
        for (let n = 0; n < 28;n++) {
            if(letraxletra[i]==abecedario[n]){
                listaconnumeros.push(n);
            }   
        }
    }
    // halla el maximo comun divisor entre phy(n) y e, para poder encontrar el e apropiado que de como resultado gcd(e,phy(n))=1
    while (true){
        gcd(e, phyn);
        if(gcd(e, phyn)==1){
            console.log(e);
            console.log(gcd(e, phyn));
            break;
        }else{
            e++
        }

    }
    // encuentra el d
    while (true){
        d = (1+(k*phyn))/e;
        if(Number.isInteger(d)){
            break;
        }else{
            d++
        }
    }
    // encripta los numeros y los mete en una lista
    for (i = 0; i < listaconnumeros.length; i++) {
        let num=expModZViaCuadradoRepetido(listaconnumeros[i], e, n);
        if(num<10){
            let zero = '0'
            let letra=String(num);
            let combinedString = zero.toString() + letra.toString();
            listaconnumerosencrip.push(combinedString);

        }else{
            let letra=String(num);
            listaconnumerosencrip.push(letra);
        }
       
    }
    let arrayString = listaconnumerosencrip.join(' ');
    muestra.value = arrayString;



    console.log(d);
    console.log(expModZViaCuadradoRepetido(7, 7, 33));
    // console.log(letraxletra);
    // console.log(typeof letraxletra);
    // console.log(listaconnumeros);
    // console.log( abecedario.length);
    console.log(listaconnumerosencrip);




    return;

}

function desencriptar(){
    let listaconnumerosdes=[];
    let e=2;
    let k=1;
    let d=0;
    const muestra = document.getElementById('muestra');
    const text = document.getElementById('criptacion');
    const texto =text.value; 
    // divide los elemntos uno por uno en la lista
    let letraxletra = texto.split('');
    let listaconnumeros2 =[]; 
    let listaconnumerosdesencrip =[];
    letraxletra;
    console.log(letraxletra);
    // halla el maximo comun divisor entre phy(n) y e, para poder encontrar el e apropiado que de como resultado gcd(e,phy(n))=1
    while (true){
        gcd(e, phyn);
        if(gcd(e, phyn)==1){
            console.log(e);
            console.log(gcd(e, phyn));
            break;
        }else{
            e++
        }

    }
    // encuentra el d
    while (true){
        d = (1+(k*phyn))/e;
        if(Number.isInteger(d)){
            break;
        }else{
            d++
        }
    }
    // junta los numeros y los mete en una lista
    for (i = 0; i < letraxletra.length;) {
        let num1 =String(letraxletra[i]);
        let num2 =String(letraxletra[i+1]);
        let combinedString = num1.toString() + num2.toString();
        listaconnumeros2.push(combinedString);
        i=i+3
    }
    // descifra los numeros y los que son de un digito les agrega un 0 a la izquierda y los mete en una lista
    for (i = 0; i < listaconnumeros2.length; i++) {
        let num=expModZViaCuadradoRepetido(listaconnumeros2[i], d, n);
        if(num<10){
            let zero = '0'
            let letra=String(num);
            let combinedString = zero.toString() + letra.toString();
            listaconnumerosdesencrip.push(combinedString);

        }else{
            let letra=String(num);
            listaconnumerosdesencrip.push(letra);
        }
       
    }
    const j=listaconnumerosdesencrip.length;
    // toma los numeros desencriptados y los vuelve letras de nuevo para asi meterlos en una lista
    for (let i = 0; i < j; i++  ) {
        for (let n = 0; n < 28;n++) {
            if(listaconnumerosdesencrip[i]==n){
                listaconnumerosdes.push(abecedario[n]);
            }   
        }
    }

    //junta los elementos de la lista
    let arrayString = listaconnumerosdes.join('');
    muestra.value = arrayString;



    console.log(listaconnumeros2);
    console.log(listaconnumerosdesencrip);

    

}


 

