# Test 3

En este caso, tenemos un código usando el objeto `Promise` (Promesa). Las *promises* 
(promesas) nos permiten manejar situaciones asíncronas en nuestras ejecuciones, 
pero tenemos un pequeño problema… No es una solución totalmente cross-browser. 
Sabemos que no funciona en Internet Explorer así que nos gustaría saber cómo 
modificarías nuestro código (`test.js`) para que funcione correctamente.

***
JavaScript no es asincrono ya que corren en un solo hilo en todo momento
las Promises nos permiten simular este comportamiento asi que la solucion para este codigo seria tanto
importar una biblioteca como Bluebirjs o utilizar una aproximacion usando `setTimeout` o quiza reemplazando
la promise en una simple Promise propia que "emule" el funcionamiento (Sin toda la complejidad de la real).

```
    // Promise does not exists the create it.
    if (!window.Promise) {
        window.Promise = function (executor) {
            this.executor = executor;
            this.err = function(){
            };
        };
    
        window.Promise.prototype.catch = function (cb) {
            this.err = cb;
        };
    
        window.Promise.prototype.then = function (cb) {
             this.executor(cb, (function (err) {
                 this.err(err);
             }).bind(this));
             return this;
        };
    }
```
***