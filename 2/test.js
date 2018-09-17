for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}

// para este caso en especifico
[0,1,2,3,4].forEach( x => setTimeout(()=> console.log(x), (x+1)*1000) );

// o si se quiere
for (var i = 0, j= 0; i < 5; i++) {
    setTimeout(function () {
        console.log(j++);
    }, 1000 * (i + 1))
}