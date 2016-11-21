/* global prod, carrito, divCarrito */

window.onload=function(){
    alert("hola");
    carrito = opener.miCarrito;
    divCarrito = document.getElementById("divCarrito");
    alert(carrito.calcularTotal());
    for(i=0;i<carrito.productos.length;i++){
        pProducto = document.createElement("p");
        texto = document.createTextNode(carrito.productos[i].nombre+" "+carrito.productos[i].precio+"€");
        pProducto.appendChild(texto);
        divCarrito.appendChild(pProducto);
    }
    btnTotal=document.createElement("input");
    btnTotal.type="button";
    btnTotal.value="Calcular Total";
    btnTotal.onclick=calcularTotal;
    divCarrito.appendChild(btnTotal);
};

function calcularTotal(){
    carrito.calcularTotal();
    pTotal = document.createElement("p");
    textoTotal = document.createTextNode("Total carrito: "+carrito.total+"€");
    pTotal.appendChild(textoTotal);
    divCarrito.appendChild(pTotal);
    
    pTotalOpener = document.createElement("p");
    textoTotalOpener = document.createTextNode("Total carrito: "+carrito.total+"€");
    pTotalOpener.appendChild(textoTotalOpener);
    divTotalOpener = opener.document.getElementById("total");
    divTotalOpener.appendChild(pTotalOpener);
}



