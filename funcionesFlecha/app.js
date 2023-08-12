//este es un ejemplo de funcion flecha

const sumar = (a, b) => {
    return (a + b);
}

const resultado = sumar(3,4);
console.log(resultado);

//se puede reducir código ya que estas funciones tienen un retorno implicito

const sumarDos = (a,b) => (a + b);

const resultado2 = sumarDos(5,5);
console.log(resultado2);

//si solo se utiliza un parametro se puede omitir el uso de parentesis y llaves si es solo un return

const mensaje = nombre => `Hola, soy ${nombre}`;

const cadena = mensaje('David');
console.log(cadena);

//concatenar cadenas
const mensaje2 = (nombre, apellido) => `Hola, mi nombre es ${nombre}, y mi apellido ${apellido}`;
const cadena2 = mensaje2('David', 'Cortés');
console.log(cadena2);