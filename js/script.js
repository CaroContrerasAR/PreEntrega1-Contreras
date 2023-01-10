let cotizacionD = 0
let cotizacionP = 0

let entrada =  prompt("SELECCIONAR COTIZACION \n 1 - Dolares (U$S) \n 2 - Euros (€)\n 3 - Uruguayos ($U)\n 4 - Reales (R$)\n 5 - Simular Compra Dolares U$S \n 6 - Simular Venta Dolares U$S");
while (entrada != 'ESC') {
    switch (entrada) {
        case "1":
            alert("Cotizacion DOLAR: Compra 179.31 / Venta 187.99");
            break;
        case "2":
            alert("Cotizacion EUROS: Compra 191.71 / Venta 200.45");
            break;
        case "3":
            alert("Cotizacion URUGUAYOS: Compra 4.210 / Venta 4.410");
            break;
        case "4":
            alert("Cotizacion REALES: Compra 33.600 / Venta 34.800");
            break;
        case "5":
            cotizacionD = 179.31
            monto=prompt("Cuantos Pesos va cambiar a U$S ")
            if(monto > 0){
            alert("Compra U$S "+cotizarD(monto)+" con $"+monto+"\n recuerde agregar los Impuestos sobre la operacion:\n 35% de Percepcion RG4815/20 son $"+percepcion(monto)+"\n 30% de Impuesto Pais son $"+impPais(monto));
            }
            break;
        case "6":
            cotizacionP = 187.99
            monto=prompt("Cuantos U$S desea Vender")
            if(monto > 0){
            alert("Recibe $"+cotizarP(monto)+" al Vender U$S "+monto);
            }
            break;
        default:
            alert("Ingrese un Codigo valido o ESC para Salir");
            break;
    }
    entrada = prompt("SELECCIONAR COTIZACION \n 1 - Dolares (U$S) \n 2 - Euros (€)\n 3 - Uruguayos ($U)\n 4 - Reales (R$)\n 5 - Simular Compra Dolares U$S \n 6 - Simular Venta Dolares U$S");
}

function cotizarD(monto) {
    return monto/=cotizacionD
}
function cotizarP(monto) {
    return monto*=cotizacionP
}
function percepcion(monto){
    return monto*=0.35    
}
function impPais(monto){
    return monto*=0.30
}
