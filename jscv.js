
/**
console.log("Hola Mundo!");

document.getElementById("boton").onclick = function () {
    console.log("Capturamos el evento Click");
    document.getElementById("demo").innerHTML = "Estamos probando un Evento"
}


document.addEventListener('click', function () {
    console.log("Desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando un Evento";    
});
*/

document.getElementById("boton").addEventListener('click', function () {
    console.log("Desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando un Evento";    
});

document.getElementById('boton_color').addEventListener('click', function() {
    console.log("Color Hexadecimal")
    document.body.style.backgroundColor = '#FF9234';    
});

document.getElementById('boton_mod').addEventListener('click', function() {
    console.log("Color Hexadecimal Nuevamente")
    document.body.style.backgroundColor = '#FF4578';

});

document.getElementById('boton_ocultar').addEventListener('click', function() {
    console.log("Ocultamos")
    document.getElementById('demo').style.display = 'none';

});

const collection = document.getElementById("prueba4");
for (let i = 0; i < collection.lenght; i++) {
  collection[i].style.backgroundColor = "blue";
}