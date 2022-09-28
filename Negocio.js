const Empleado=require('./Empleado');
const Administrativo=require('./Administrativo');
const Reserva=require('./Reserva');
const Ventas=require('./Ventas');

const Negocio=function(){


    if (!(this instanceof Negocio)){
        return new Negocio();
    }
    var empleados=new Array();

    const dniNoRepetido=(dni)=>{
        for (var i=0;empleados.length>i;i++){
            if (empleados[i].dni==dni){
                return false;
            }
        }
        return true;
    };
    return {
        contratarAdministrativo:function(nombre,apellido,dni,sueldo) {
            if (Administrativo(nombre,apellido,dni,sueldo)!=undefined && dniNoRepetido(dni)){
                empleados.push(Administrativo(nombre,apellido,dni,sueldo));
            } else {
                throw new Error("Error durante la contratacion")
            }
        },
        contratarReserva:function(nombre,apellido,dni,sueldo){ 

            if (Reserva(nombre,apellido,dni,sueldo)!=undefined && dniNoRepetido(dni)){
                empleados.push(Reserva(nombre,apellido,dni,sueldo));
            } else {
                throw new Error("Error durante la contratacion")
            }
        },
        contratarVentas:function(nombre,apellido,dni,comision,antiguedad){ 

            if (Ventas(nombre,apellido,dni,comision,antiguedad)!=undefined && dniNoRepetido(dni)){
                empleados.push(Ventas(nombre,apellido,dni,comision,antiguedad));
            } else {
                throw new Error("Error durante la contratacion")
            }
        },
        faltaPersonalAdministrativo:function(){
            for (var i=0;empleados.length>i;i++){
                if (empleados[i] instanceof Administrativo){
                    return true;
                }
            } 
            return false;
        },
        obtenerPersonal:function(){
            return empleados;
        },
        actualizarPersonal:function(nuevosEmpleados){
            aux=empleados.length;
            for (i=aux;empleados.length!=0;i--){
                empleados.pop();
            }
            for (j=0;j<nuevosEmpleados.length;j++){
                if (nuevosEmpleados[i] instanceof Empleado){
                    empleados.push(nuevosEmpleados[i]);
                }
            }
        },
        reset:function(){
            var aux=empleados.length;
            for (i=aux;empleados.length!=0;i--){
                empleados.pop();
            }
            console.log("\nSe elimino al personal sin problemas\n")
        },
        conocerPersonal:function(){
            var aux=true;
            for (var i=0;empleados.length>i;i++){
                aux=false;
                console.log(empleados[i].nombreCompleto())
            }
            if (aux){
                console.log("No hay personal disponible")
            }
        },

    };
    
}

module.exports=Negocio;
