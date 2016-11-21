/* global miCarrito */

window.onload=function(){
    boton3=document.getElementById("b3");
    boton3.addEventListener("click",f3,false);
    boton4=document.getElementById("b4");
    boton4.addEventListener("click",f4,false);
    
    miCarrito = new Carrito("2016-11-21");
};
function f1(){
    miProducto = new Producto(1,"Entrada Viñarock","entrada para el proximo concierto del Viñarock","entradas",35.75);
    mostrar(miProducto);
}
function f2(){
    miProducto = new Producto(2,"Plaza coche Viñarock","plaza de coche para ir al Viñarock desde Valencia","transporte",15.15);
    mostrar(miProducto);
}
function f3(){
    miProducto = new Producto(3,"Alojamiento Viñarock","Se alquila una habitación para los días del Viñarock","alojamiento",62.37);
    mostrar(miProducto);
}
function f4(){
    miProducto = new Producto(4,"Ticket bus Viñarock-Madrid","ticket de bus para el festival","tranporte",7.99);
    mostrar(miProducto);
}
function mostrar(producto){
    divInfo=document.getElementById("info");
    
    titulo=document.createElement("h2");
    titulo.appendChild(document.createTextNode("Producto seleccionado:"));
    divInfo.appendChild(titulo);
    
    pNombre=document.createElement("p");
    nombre=document.createTextNode("Nombre: "+producto.nombre);
    pNombre.appendChild(nombre);
    divInfo.appendChild(pNombre);
    
    pDescripcion=document.createElement("p");
    descripcion=document.createTextNode("Descripcion: "+producto.descripcion);
    pDescripcion.appendChild(descripcion);
    divInfo.appendChild(pDescripcion);
    
    pPrecio=document.createElement("p");
    precio=document.createTextNode("Precio: "+producto.precio);
    pPrecio.appendChild(precio);
    divInfo.appendChild(pPrecio);
    
    btnAgregar=document.createElement("button");
    btnAgregar.className="btn";
    btnAgregar.id="btnAgregar";
    btnAgregar.onclick=function(){
        agregar(producto);
    };
    nombreBtnAgregar=document.createTextNode("Añadir al carrito");
    btnAgregar.appendChild(nombreBtnAgregar);
    divInfo.appendChild(btnAgregar);
    
    btnQuitar=document.createElement("button");
    btnQuitar.className="btn";
    btnAgregar.id="btnQuitar";
    btnQuitar.onclick=function(){
        borrar(producto);
    };
    nombrBtnQuitar=document.createTextNode("Quitar del carrito");
    btnQuitar.appendChild(nombrBtnQuitar);
    divInfo.appendChild(btnQuitar);
    
    btnBorrar=document.createElement("button");
    btnBorrar.id="btnBorrar";
    btnBorrar.onclick=borrarInfo;
    nombreBtnBorrar=document.createTextNode("Borrar");
    btnBorrar.appendChild(nombreBtnBorrar);
    divInfo.appendChild(btnBorrar);
 }
 
 function agregar(prod){
     miCarrito.agregarProducto(prod);
     alert("articulo añadido al carrito");
     borrarInfo();
 }
 
 function borrarInfo(){
     divInfo=document.getElementById("info");
     while(divInfo.childNodes.length>0){
         divInfo.removeChild(divInfo.firstChild);
     }
}
function mostrarCarrito(){
    
    var opciones = "top=50, left=50, width=500, height=500";
    var miVentana = window.open("mostrarCarrito.html", "", opciones);
}

function cambiar(){
    botones=document.getElementsByClassName("btn");
    alert(botones.length);
    for (i=0;i<botones.length;i++){
        botones[i].style="background-color:red";       
    }
}

function borrar(prod){
    alert("ey");
    miCarrito.eliminarProducto(prod);
    alert("El producto ha sido eliminado");
    borrarInfo();
}



