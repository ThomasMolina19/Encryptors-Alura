# Encriptador Web

![](https://static.vecteezy.com/system/resources/previews/004/459/376/non_2x/private-digital-key-glyph-icon-encryption-key-silhouette-symbol-negative-space-isolated-illustration-vector.jpg)

Este proyecto es una página web que incluye dos encriptadores diferentes: el Encriptador Alura y el Encriptador RSA. La página permite a los usuarios encriptar y desencriptar texto utilizando cualquiera de los dos métodos.

Encriptador Alura
=============
Este encriptador reemplaza las vocales en el texto de acuerdo con las siguientes reglas:

- 'a' se convierte en 'ai'
- 'e' se convierte en 'enter'
- 'i' se convierte en 'imes'
- 'o' se convierte en 'ober'
- 'u' se convierte en 'ufat'

Encriptador RSA
=============

Este encriptador utiliza el algoritmo RSA, un método criptográfico de clave pública que convierte el texto en números grandes. RSA es uno de los métodos más seguros para encriptar información y es ampliamente utilizado en la seguridad informática.

A todos las letras se les asigna un valor numerico y este es el numero que se encriptara con el algoritmo.

- 'a' se convierte en '0'
- 'b' se convierte en '1'
- 'c' se convierte en '2'
- 'd' se convierte en '3'
- 'e' se convierte en '4'
- 'f' se convierte en '5'
- 'g' se convierte en '6'
- 'h' se convierte en '7'
- 'i' se convierte en '8'
- 'j' se convierte en '9

Y así sucesivamente hasta llegar a la 'z'. Adicionalmente, agregamos el espacio representado por el ' ', en este algoritmo donde la llave privada son los primos p y q, por motivo pedagógico estos se fijan y se les da el valor de 167 y 149. 

###Nota sobre el Encriptador RSA
Aunque el encriptador de Alura era obligatorio para este proyecto, decidí incluir también un encriptador RSA. Esta decisión fue motivada por mi interés en aprender más sobre criptografía y cómo implementar algoritmos más complejos en JavaScript. El encriptador RSA ofrece un método robusto y seguro para encriptar datos, lo que me permitió explorar conceptos avanzados en programación y seguridad informática.

###Links

`<link>` : <https://thomasmolina19.github.io/Encryptors-Alura/>

###Licencia
Este proyecto está licenciado bajo la MIT License.

###End
