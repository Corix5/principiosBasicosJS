// el uso de comillas invertidas ayuda a combinar codigo js con string
const numero = (num1, num2) =>  (
    `el numero es: ${num1 + num2}`
);

const resultado = numero(10, 5);
console.log(resultado);