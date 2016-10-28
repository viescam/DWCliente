/*global miCarrito */

miCarrito = new Carrito("28/10/2016", "John Adams");

function f1(){
    id = prompt("introduce el id");
    nombre = prompt("introduce el nombre");
    descripcion = prompt("introduce la descripcion");
    precio = prompt("introduce el precio");
    miArticulo = new Articulo(id,nombre,descripcion,precio);
    alert("Articulo creado");
    miCarrito.anyadirArticulo(miArticulo);
    alert("Articulo introducido en el carrito");
}
function f2(){
   miCarrito.mostrar(); 
}
function f3() {
    alert(miCarrito);
    alert(JSON.stringify(miCarrito));
}


