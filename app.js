var p1 = 167;
var p2 = 149;
var n = p1 * p2;
var phyn = (p1 - 1) * (p2 - 1);
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var W = window.innerWidth;
var H = window.innerHeight;
var fontSize = 16;
var columns = Math.floor(W / fontSize);
var drops = [];
var rainInterval;
var isRaining = true;
var abecedario = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  " ",
];


// halla el maximo comun divisor entre phy(n) y e, para poder encontrar el e apropiado que de como resultado gcd(e,phy(n))=1
function mcd(a, b) {

  while (true) {

    gcd(a, b);
    if (gcd(a, phyn) == 1) {

      console.log(a);
      console.log(gcd(a, b));

      break;

    } else{

      a++;

    }

  }

  return a;

}

//encripta o desencripta los numeros con la formula a^n mod z
function expModZViaCuadradoRepetido(a, n, z) {
  let resultado = 1;
  let x = a % z;

  while (n > 0) {
      if (n % 2 === 1) { // Si n es impar
          resultado = (resultado * x) % z;
      }
      x = (x * x) % z; // Cuadrar x
      n = Math.floor(n * (0.5)); // Dividir n entre 2 y redondear hacia abajo
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

function encriptar() {

  const text = document.getElementById("criptacion");
  const muestra = document.getElementById("muestra");
  const texto = text.value;
  let e = 2;

  // divide los elementos uno por uno en la lista
  let listnumxnum = texto.split("");
  listnumxnum;
  listaconnumeros = [];
  listaconnumerosencrip = [];
  listaconnumerosdesencrip = [];
  const j = listnumxnum.length;

  // crea una lista donde pasa las letras a numeros para poder ser encriptados
  for (let i = 0; i < j; i++) {

    for (let n = 0; n < 28; n++) {

      if (listnumxnum[i] == abecedario[n]) {

        listaconnumeros.push(n);

      }

    }

  }

  // llama la funcion para hallar el e
  e = mcd(e, phyn);

  // encripta los numeros y los mete en una lista
  for (i = 0; i < listaconnumeros.length; i++) {

    let num = expModZViaCuadradoRepetido(listaconnumeros[i], e, n);

    if (num < 10) {

      let zero = "0";
      let letra = String(num);
      let combinedString = zero.toString() + letra.toString();
      listaconnumerosencrip.push(combinedString);

    } else {

      let letra = String(num);
      listaconnumerosencrip.push(letra);
    
    }

  }

  // junta los numeros y los mete en una lista
  let arrayString = listaconnumerosencrip.join(" ");
  muestra.value = arrayString;
  console.log(texto);
}

function desencriptar() {

  let listnumerosdes = [];
  let e = 2;
  let k = 1;
  let d = 0;
  let listnumencrip = [];
  let listaconnumerosdesencrip = [];
  const muestra = document.getElementById("muestra");
  const text = document.getElementById("criptacion");
  const texto = text.value;

  // divide los elemntos uno por uno en la lista
  let listnumxnum = texto.split("");
  console.log(listnumxnum);
  e = mcd(e, phyn);

  // encuentra el d
  while (true) {

    d = (1 + k * phyn) / e;

    if (Number.isInteger(d)) {

      break;

    } else {

      k++;

    }

  }

  // junta los numeros y los mete en una lista
  listnumencrip = texto.split(" "); // Divide la cadena en un array usando "-" como separador
  const enteros = listnumencrip.map((num) => parseInt(num));
  
  // descifra los numeros y los que son de un digito les agrega un 0 a la izquierda y los mete en una lista
  for (i = 0; i < listnumencrip.length; i++) {

    let nume = expModZViaCuadradoRepetido(enteros[i], d, n);
    console.log(enteros[i]);
    let letra = String(nume);
    listaconnumerosdesencrip.push(letra);

  }

  const j = listaconnumerosdesencrip.length;
  console.log(listaconnumerosdesencrip);

  // toma los numeros desencriptados y los vuelve letras de nuevo para asi meterlos en una lista
  for (let i = 0; i < j; i++) {

    for (let n = 0; n < 28; n++) {

      if (listaconnumerosdesencrip[i] == n) {
        listnumerosdes.push(abecedario[n]);
      }

    }

  }

  //junta los elementos de la lista
  let arrayString = listnumerosdes.join("");
  muestra.value = arrayString;
}

function encriptacionalura() {

  const text = document.getElementById("criptacion");
  const muestra = document.getElementById("muestra");
  const texto = text.value;

  // Mapeo de letras a sus reemplazos
  const reemplazos = {
      'a': 'ai',
      'e': 'enter',
      'i': 'imes',
      'o': 'ober',
      'u': 'ufat'
  };

  // Reemplazar las letras usando replace y una función
  let nuevoTexto = texto.replace(/[aeiou]/g, letra => reemplazos[letra]);

  // junta los numeros y los mete en una lista
  muestra.value = nuevoTexto;
}

function desencriptacionAlura() {
  const muestra = document.getElementById("muestra");
  const text = document.getElementById("criptacion");
  const texto = text.value;
  
  //Reemplazar las letras usando replace 
  const nuevoTexto = texto
  .replace(/enter/g, 'e')
  .replace(/imes/g, 'i')
  .replace(/ai/g, 'a')
  .replace(/ober/g, 'o')
  .replace(/ufat/g, 'u');

//envia el nuevo texto
muestra.value = nuevoTexto;
}

function copiar(){

  //utiliza la api clipboard.api
  const val = document.getElementById("muestra").value;
  navigator.clipboard.writeText(val);


}

function pegar(){
  
  navigator.clipboard.readText().then(function(clipText) {

    document.getElementById("criptacion").value = clipText;
    }, function() {
    alert("Failed to access clipboard.");
    
    })
}
function draw() {
  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0, 0, W, H);
  context.font = "700 " + fontSize + "px";
  context.fillStyle = "#00cc33";

  for (var i = 0; i < columns; i++) {
      var index = Math.floor(Math.random() * str.length);
      var x = i * fontSize;
      var y = drops[i] * fontSize;
      context.fillText(str[index], x, y);

      if (y >= canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
      }

      drops[i]++;
  }
}

function startRain() {
  rainInterval = setInterval(draw, 35);
}

function stopRain() {
  clearInterval(rainInterval);
}

function toggleRain() {
  if (isRaining) {
      stopRain();
  } else {
      startRain();
  }
  isRaining = !isRaining;
}


canvas.width = W;
canvas.height = H;
for (var i = 0; i < columns; i++) {
  drops.push(0);
}

var str = "JavaScript Hacking Effect";

startRain();



