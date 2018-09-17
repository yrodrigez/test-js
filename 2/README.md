# Test 2

El fragmento de código de nuestro fichero `test.js` nos devuelve un output no 
deseado. Queremos imprimir un valor incremental a cada segundo pero lo que 
nos devuelve el código es el mismo valor en cada iteración. 

1. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría
 por consola el script? ¿Cuál es el motivo?
 ***
 Imprimiria `4` 5 veces y ademas no se haria cada segundo sino que despues del primer segundo
  ya que cuando la funcion es llamada ese seria el valor que tiene `i` y al momento de ser llamada
  seria necesario hacer un calculo en el tiempo del `setTimeout`
  ***
2. Sabiendo que el output que buscamos es el que encuentras bajo estas líneas… 
¿Cómo solucionarías el fragmento de código para que el output sea el deseado?
***
existen varias soluciones 
```
    // para este caso en especifico simple y rapido
    [0,1,2,3,4].forEach( x => setTimeout(()=> console.log(x), (x+1)*1000) );
    
    // o si se quiere
   for (var i = 0, j= 0; i < 5; i++) {
     setTimeout(function () {
       console.log(j++);
     }, 1000 * (i + 1))
   }
```
***
```
    > 0
    > 1
    > 2
    > 3
    > 4
```