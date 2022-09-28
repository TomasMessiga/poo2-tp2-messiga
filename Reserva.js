const Empleado=require('./Empleado');

function Reserva(nombre,apellido,dni,sueldo){
    this.base=Empleado;
    this.base(nombre,apellido,dni);  
    if (typeof sueldo!='number'){
        return undefined;
    } else if (sueldo<=0 ){
        return undefined;
    } else if (!(this instanceof Reserva)){
        return new Reserva(nombre,apellido,dni,sueldo);
    }

    /** sueldo correspondiente a una hora de trabajo */
    this.sueldo=sueldo;


    this.pagarSueldo=function(horasTotales){
        if (typeof horasTotales == 'number'){
            if (horasTotales>0){
                return (this.sueldo)*horasTotales;
            } 
        } else {
            return 0;
        }
    };


}

Reserva.prototype.nombreCompleto=function(){
    return this.nombre+" | "+this.apellido+" | ("+this.dni+")";
}

Reserva.prototype=Object.create(Empleado.prototype);

module.exports=Reserva;