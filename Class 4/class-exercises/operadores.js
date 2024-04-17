const suma = 2 + 2;
const resta = 2 - 2;
const multiplicacion = 2 * 2;
const division = 2 / 2;
const modulo = 3 % 2;

// console.log(suma, resta, multiplicacion, division, modulo);


let total = 0;

total = total + 2; // total += 2;
total = total - 5; // total -= 5;
total = total * 2; // total *= 2;
total = total / 4; // total /= 4;
total = total % 2; // total %= 2;

/// console.log(total)


//Logicos
const val1 = 32;
const val2 = '32';

// val1 == val2 // true;

//console.log(val1 != val2);


// if (val1 === val2 && suma === 4) {
//   console.log('Son iguales');
// } else {
//     console.log('No son iguales');
// }


// const pedidos = [
//     {
//         id: Symbol('id'),
//         nombre: "Camiseta",
//         talla: "m",
//         precio: 100,
//         unidades: 20,
//         enviado: false,
//         userId: Symbold('vinod'),
//     }
// ];


// const users = [
//     {
//         id: Symbol('vinod'),
//         nombre: "Vinod",
//         email: "vinod@elmejor.com",
//         direccion: "Calle falsa 123",
//     }
// ]

// const pedido = pedidos[0];
// const vinodUser = users[0];

// if (pedido.userId === vinodUser.id) {
//     console.log('El pedido es de Vinod');
// } else {
//     console.lpog('No se de quien es el pedido')
// }




const carritoDeCompras = [
    { // 2000
        id: 0,
        nombre: "Camiseta",
        talla: "m",
        precio: 100,
        unidades: 20,
        enviado: false,
        userId: 'vinod',
    },
    {
        id: 1,
        nombre: "Pantalon",
        talla: "m",
        precio: 120,
        unidades: 12,
        enviado: false,
        userId: 'vinod',
    }
];

const pedidoMinimoParaEnvioGratis = 500;

let carrito = 0;

for (let i = 0; i < carritoDeCompras.length; i++) {
    const temporalCarrito =carritoDeCompras[i]
    carrito += temporalCarrito.precio * temporalCarrito.unidades;
}

console.log(carrito);

if (carrito >= 500) {
    
    console.log('Envio sin costo', carrito);

} else {
    console.log('Envio con costo');
}

