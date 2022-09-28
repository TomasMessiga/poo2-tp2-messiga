const Empleado=require('./Empleado');

function Ventas(nombre,apellido,dni,comision,antiguedadEnAnios){
    var antiguedadRequerida=20;
    var sueldoPorAntiguedad=200;

    this.base=Empleado;
    this.base(nombre,apellido,dni);  
    if (typeof comision!='number' || typeof antiguedadEnAnios!='number'){
        return undefined;
    } else if (comision<=0 || antiguedadEnAnios<=0){
        return undefined;
    } else if (!(this instanceof Ventas)){
        return new Ventas(nombre,apellido,dni,comision,antiguedadEnAnios);
    }

    this.comision=comision; /** porcentaje */
    this.antiguedadEnAnios=antiguedadEnAnios;

    Ventas.prototype.antiguedadRequerida=function(nuevaAntiguedad){
        if (typeof nuevaAntiguedad=='number'){
            if (nuevaAntiguedad>=0){
                antiguedadRequerida=nuevaAntiguedad;                
            }
        }
    }

    Ventas.prototype.sueldoPorAntiguedad=function(nuevaSueldo){
        if (typeof nuevaSueldo=='number'){
            if (nuevaSueldo>=0){
                sueldoPorAntiguedad=nuevaSueldo;                
            }
        }
        sueldoPorAntiguedad=nuevaSueldo;
    }

    this.pagarSueldo=function(venta){
        if (typeof venta=='number'){
            var retorno=0;
            if (venta>0){
                retorno+=venta*(comision/100);
            } 
            if (this.antiguedadEnAnios>=antiguedadRequerida){
                retorno+=sueldoPorAntiguedad;
            } 
            return retorno;
        } else {
            return 0;
        }
    }
    this.comisionDeVenta=function(venta){
        if (typeof venta=='number'){
            if (venta>0){
                return venta*(comision/100);
            } 
        } else {
            return 0;
        }
    }

}

Ventas.prototype.nombreCompleto=function(){
    return this.nombre+" | "+this.apellido+" | ("+this.dni+")";
}

Ventas.prototype=Object.create(Empleado.prototype);

module.exports=Ventas;
