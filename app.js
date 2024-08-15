var p1 = 167;
var p2 = 149;
var n = p1 * p2;
var phyn = (p1 - 1) * (p2 - 1);
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
canvas.width = document.body.clientWidth;;
canvas.height = document.body.clientHeight;;
var fontSize = 16;
var columns = Math.floor(document.body.clientWidth / fontSize);
var drops = [];
var rainInterval;
var isRaining = true;
var str = "JavaScript Hacking Effect";
// Obtener los botones por su ID
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
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


function resizeCanvas() {
    stopRain();
    // Ajusta el tamaño del canvas al tamaño del body
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    startRain();
}



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

function encriptarRsa() {

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

function desencriptarRsa() {

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

function encriptacionAlura() {

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

function validarEntrada() {
  const input = document.getElementById('criptacion');
  const mensaje = document.getElementById('mensaje');
  const valor = input.value;

  // Expresión regular que permite solo letras minúsculas y números
  const regex = /^[a-z0-9]*$/;

  if (!regex.test(valor)) {
      mensaje.textContent = "No se permiten mayúsculas ni caracteres especiales.";
      input.value = valor.slice(0, -1); // Elimina el último carácter ingresado
  } else {
      mensaje.textContent = ""; // Limpiar el mensaje si la entrada es válida
  }
}

function draw() {
  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.font = "700 " + fontSize + "px";
  context.fillStyle = "#00cc33";
  console.log(canvas.width);

  for (var i = 0; i < Math.floor(canvas.width / fontSize); i++) {
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


// Función para manejar el clic en los botones
function handleButtonClick(clickedButton) {
  
  if (clickedButton.classList.contains('pressed')) {
      return;
  }

  // Alternar el estado del botón clicado
  clickedButton.classList.add('pressed');

  // Deshacer el estado hundido del otro botón
  if (clickedButton === button1) {
      button2.classList.remove('pressed');
  } else {
      button1.classList.remove('pressed');
  }
}

// Función para determinar cuál botón está hundido
function Encriptar() {

  if (button1.classList.contains('pressed')) {

      encriptacionAlura();

  } else if (button2.classList.contains('pressed')) {

            encriptarRsa();

  } else {

      console.log('Ningún botón está hundido.');

  }
}

function DesEncriptar() {

  if (button1.classList.contains('pressed')) {

      desencriptacionAlura();

  } else if (button2.classList.contains('pressed')) {

            desencriptarRsa();

  } else {

      console.log('Ningún botón está hundido.');

  }
}

// Agregar eventos de clic a los botones
button1.addEventListener('click', function() {
  handleButtonClick(this);
  checkButtonState(); // Verificar el estado después de hacer clic
});

button2.addEventListener('click', function() {
  handleButtonClick(this);
  checkButtonState(); // Verificar el estado después de hacer clic
});


for (var i = 0; i < Math.floor(canvas.width / fontSize); i++) {
  drops.push(0);
}

// Escucha el evento de cambio de tamaño de la ventana para ajustar el canvas
window.addEventListener('resize', resizeCanvas);



startRain();