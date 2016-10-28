// ---------------------------- CLASE ARTICULO --------------------
function Articulo(id,nombre,descripcion,precio){
    this.id=id;
    this.nombre=nombre;
    this.descripcion=descripcion;
    this.precio=precio;
}
// ---------------------------- CLASE CARRITO --------------------
function Carrito(fecha,cliente){
    this.fecha=fecha;
    this.cliente=cliente;
    this.articulos=[];
    this.total=0;
}

Carrito.prototype.anyadirArticulo=function(articulo){
    this.articulos.push(articulo);
};
Carrito.prototype.totalCarrito = function(){
    tot=0;
    for(i=0;i<this.articulos.length;i++){
        tot+=parseInt(this.articulos[i].precio);
    }
    this.total=tot;
    return tot;
};
Carrito.prototype.mostrar = function (){
    ticket = "Fecha: " + this.fecha + '\n';
    ticket += "Cliente: " + this.cliente + '\n';
    ticket += "Articulos en carrito" + '\n';

    for(i = 0; i < this.articulos.length; i++){
        ticket += this.articulos[i].nombre + '\n';
    }
    ticket += "Total carrito: " + this.totalCarrito() + "€";
    alert(ticket);
};



