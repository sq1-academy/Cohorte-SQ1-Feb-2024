var globalVariable = 'Global';
let scopedVariable = 'scoped';
const fixVariable = 'constant';

function scopeTest() {
    let localVariable = 'Local';
    console.log(localVariable); // Accesible aquí
}

console.log(globalVariable); // Accesible aquí
console.log(localVariable); // No accesible aquí
console.log(scopedVariable); // Accesible aquí
console.log(fixVariable); // Accesible aquí

scopeTest();

function changeGloblarVariable() {
    globalVariable = 'Global cambiada por la función';
}

console.log(globalVariable);
changeGloblarVariable();
console.log(globalVariable);

fixVariable = 'nuevo valor';
console.log(fixVariable)