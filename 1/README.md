# Test 1

Para responder a este test encontrarás un archivo llamado `test.js` en esta 
misma carpeta donde hay un pequeño fragmento de código que deberás analizar 
y responder a las siguientes cuestiones. 

1. En el fragmento de código de nuestro archivo (`test.js`) podemos encontrar
 hasta 3 variables. ¿Podrías decirnos cuál sería el valor de todas ellas al 
 finalizar la ejecución del script?
 
 `rgb` contendria el valor de `wb` ya que Object.assign asigna todas las propiedades del segundo objeto al 
 primero pasado por parametro.
 
2. Modifica el código para que las variables `rgb` y `wb` mantengan sus valores 
iniciales y `colors` tenga los valores de ambas al finalizar la ejecución del 
script.
  ```
    var colors = Object.assign( {}, rgb, wb );
    // or maybe
    var colors = { ...rgb, ...wb };
  ```
3. Además, tenemos un bug localizado en dispositivos con Internet Explorer… 
El código de nuestro script no funciona y necesitamos que se ejecute también 
en este navegador. ¿Sabrías identificar cuál es el problema? ¿Qué solución nos
 propones?
 `Object.assign()` no esta disponible en IE por lo que tendriamos que recorrer las propiedades del
 cada objeto y asignarselas al nuevo objeto que queremos crear.

**PS**: No es estrictamente necesario tener Internet Explorer para poder identificar y/o resolver el bug. 
