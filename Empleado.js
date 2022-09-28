

function Empleado(nombre,apellido,dni){
    
    if (typeof nombre!='string' || typeof apellido!='string' || typeof dni!='number'){
        return undefined;
    } else if (dni<=0){
        return undefined;
    } else if (!(this instanceof Empleado)){
        return new Empleado(nombre,apellido,dni);
    }
    this.nombre=nombre;
    this.apellido=apellido;
    this.dni=dni;

 //   Object.defineProperty(Empleado.prototype,"nombre",{value:nombre});
 //   Object.defineProperty(Empleado.prototype,"apellido",{value:apellido});
 //   Object.defineProperty(Empleado.prototype,"dni",{value:dni});
    
    this.pagarSueldo=function(){
        return 0;
    };

}

Empleado.prototype.nombreCompleto=function(){
    return this.nombre+" | "+this.apellido+" | ("+this.dni+")";
}

Empleado.prototype.esEmpleado=function(persona){
    if (persona instanceof Empleado){
        return true;
    } else if (persona.base.name=="Empleado"){
        return true;
    } else {
        return false;
    }
}


module.exports=Empleado;