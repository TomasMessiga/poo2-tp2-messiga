const Empleado = require("./Empleado");
const Ventas = require("./Ventas");
const Pieza = require("./Pieza");

function Factura (vendedor,id) {
    if (!(vendedor instanceof Ventas)){
        throw new Error("No hay un vendedor disponible");
    } else if (typeof id!='number'){
        throw new Error("Id debe ser un numero");
    } else if (id<=0){
        throw new Error("Id debe ser un numero mayor que cero");
    } else if (!(this instanceof Factura)){
        return new Factura(vendedor,id);
    }
    var productos = [];
    var id = id;
    var vendedor = vendedor;
    var montoTotal = 0;
    
    const actualizarMonto=()=>{
      var aux=0;
      for(var i=0;i<productos.length;i++){
        aux+=productos[i].precio*productos[i].cantidad;
      }
      montoTotal=aux;
    };   
    const precioReal=()=>{
      return montoTotal-montoTotal*(vendedor.comision/100);
    };
    
    return {
      informacion:function () {
        console.log("id: " +id +" | vendedor: " +vendedor.nombreCompleto() +" | monto total: " +montoTotal+" | monto total (comision del vendedor aplicada): " +precioReal(montoTotal) +"\n");
      },
      agregarProducto:function (pieza, cantidad) {
        if (!(pieza instanceof Pieza) || typeof cantidad!='number'){
          throw new Error(typeof cantidad=='number')
        } else if (cantidad<=0){
          throw new Error("Cantidad solicitada invalida")
        }pieza.cantidad=cantidad;
        productos.push(pieza); 
        actualizarMonto();
      },
      obtenerProductos:function(){
        return productos;
      },
      resetProductos:function(){
        while(productos.length>0){
          productos.pop();
        }
        actualizarMonto();
      },
      actualizarMonto:function(){
        actualizarMonto();
        console.log("\nActualizacion exitosa\n");
      },
      cambiarDatosPrimordiales:function(nuevoVendedor,nuevoID){
        if (nuevoVendedor instanceof Ventas){
          vendedor=nuevoVendedor;
          actualizarMonto();
        } if (typeof nuevoID=="number"){
          if (nuevoID>0){
            id=nuevoID;
          }
        }
      },
      montoFinal:function(){
        return montoTotal;
      },
      montoFinalConComision:function(){
        return precioReal(montoTotal);
      }


  }
}

module.exports=Factura;