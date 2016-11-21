/*-----OBJECTS-----*/

function Producto(id,nombre,descripcion,categoria,precio){
    this.id=id;
    this.nombre=nombre;
    this.descripcion=descripcion;
    this.categoria=categoria;
    this.precio=precio;
}
function Carrito(fecha){
    this.fecha=fecha;
    this.productos=[];
    this.unidades=0;
    this.total=0;
}

/*-----METHODS-----*/
Carrito.prototype.agregarProducto = function(prod){
    this.productos.push(prod);
};
Carrito.prototype.calcularUnidades = function(){
    unidades=0;
    for(i = 0; i < this.productos.length; i++){
        unidades++;
    }
    this.unidades=unidades;
};
Carrito.prototype.calcularTotal = function(){
    total=0.0;
    for(i = 0; i < this.productos.length; i++){
         total+= this.productos[i].precio;
    }
    this.total=total;
    return total;
};
Carrito.prototype.buscarProducto = function(idBuscado){
    for(i = 0; i < this.productos.length; i++){
        if(this.productos[i].id===idBuscado){
            return i;
        }
    }
};
Carrito.prototype.eliminarProducto = function(prod){
    /*posAElim = Carrito.buscarProducto(prod.id);
    this.productos.splice(posAElim,1);*/
    
    idBuscado=prod.id;
    for(i = 0; i < this.productos.length; i++){
        if(this.productos[i].id===idBuscado){
            this.productos.splice(i,1);
        }
    }
};

