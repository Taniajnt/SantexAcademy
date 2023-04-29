//ejercicio 3 

class generarCarrito{ 
    constructor(producto = [], montoTotal = 0){ 
        this.producto = producto, 
        this.montoTotal = montoTotal, 
        this.montoTotal += precio * unidades;
         
    }    
    agregarProducto(producto, precio, unidades) { 
        let productoRepetido = this.producto.find(producto=> producto['nombre'] === nombre)
        if (productoRepetido) { 
            console.log ("Ya existe el producto" + [nombre]);
        } else let nuevoProducto = {
            nombre : nombre, 
            precio : precio,
            unidades : unidades}
        };
        this.producto.push(nuevoProducto); 
    }
     





