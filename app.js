// const sum = (a,b) => {
//     return a + b
// }

// console.log(sum(7,3))

// module.exports = { sum };

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar) {
        let valueInYen = valueInDollar * 145.79;
        return valueInYen;
}



const fromYenToPound = function(valueInYen) {
        let valueInPound = valueInYen * 0.00558;
        return valueInPound;
}

module.exports = {fromYenToPound, fromDollarToYen, fromEuroToDollar}
