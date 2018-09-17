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
var promise = new Promise(function (resolve, reject){
    setTimeout(function () {
        if (Math.round(Math.random()) === 1) {
            resolve("Success!");
        } else {
            reject("Fail!");
        }
    }, 1000);
});

promise
    .then(function(successMessage)  {
        console.log("Yes! " + successMessage);
    })
    .catch(function (failMessage) {
        console.log("No! " + failMessage);
    });