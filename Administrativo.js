const Empleado=require('./Empleado');

function Administrativo(nombre,apellido,dni,sueldo){
    this.base=Empleado;
    this.base(nombre,apellido,dni);  
    if (typeof sueldo!='number'){
        return undefined;
    } else if (sueldo<=0 ){
        return undefined;
    } else if (!(this instanceof Administrativo)){
        return new Administrativo(nombre,apellido,dni,sueldo);
    }
    
    

    this.sueldo=sueldo;

    this.correspondeSueldo=function(horasEnUnMes){
        //** horas aproximadas correspondientes a un mes */
        var horario=8*5*((365/7)/12);
        if (horasEnUnMes>=horario){
            return true;
        } else {
            return false;
        }
    };
    this.pagarSueldo=function(horasEnUnMes){
        if (this.correspondeSueldo(horasEnUnMes)){
            return this.sueldo;
        } else {
            return 0;
        }
    };

    
}

Administrativo.prototype=Object.create(Empleado.prototype);

Administrativo.prototype.nombreCompleto=function(){
    return this.nombre+" | "+this.apellido+" | ("+this.dni+")";
}

module.exports=Administrativo;