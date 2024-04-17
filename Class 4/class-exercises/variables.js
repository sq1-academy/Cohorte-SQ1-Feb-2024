// Datos primitivos
const string = 'Hola mundo';
const number = 0;
const boolean = false;
const bigInt1 = 123132n;
const bigInt2 = BigInt(123132);
const dni = Symbol('dni');
const hijos = null;
const undefinedValue = undefined;
//const undefinedValue2;

// Datos compuestos
const array = [1, 2, 3, 4, 5, dni, hijos, [1,2,3,4], { hola: 'mundo' }];
const vinod = { name: 'vinod', country: 'India', eyes: 2 };
const today = new Date();

console.log(today.getDay())
