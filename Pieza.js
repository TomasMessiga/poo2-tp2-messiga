function Pieza(precio,nombre){   

    if (typeof precio!='number' || typeof nombre!='string'){
        return undefined;
    } else if (precio<=0){
        return undefined;
    } else if (!(this instanceof Pieza)){
        return new Pieza(precio,nombre);
    }

    this.nombre=nombre;
    this.precio=precio;
    this.cantidad=0;

    this.mostrarInformacion=function(){
        return "Nombre: "+this.nombre+" | Precio: "+this.precio+" | Cantidad: "+this.cantidad;
    }
}

module.exports=Pieza;