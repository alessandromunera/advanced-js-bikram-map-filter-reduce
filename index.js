
// EJERCICIO 1 

const numbers = [4, 5, 6, 7, 8, 9, 10];

function elevados() {
    return numbers.map(function(numero) {
        return numero ** numero;
    });
}


// EJERCICIO 2 

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const frases = foodList.map(function(comida) {
    if (comida === 'Pizza') {
        return 'Como soy de Italia, amo comer Pizza';
    } else if (comida === 'Ramen') {
        return 'Como soy de Japón, amo comer Ramen';
    } else if (comida === 'Paella') {
        return 'Como soy de Valencia, amo comer Paella';
    } else {
        return 'Aunque no como carne, el Entrecot es sabroso';
    }
});


// EJERCICIO 3 

const staff = [
    { name: 'Pepe', role: 'The Boss', hobbies: ['leer', 'ver pelis'] },
    { name: 'Ana', role: 'becaria', hobbies: ['nadar', 'bailar'] },
    { name: 'Luis', role: 'programador', hobbies: ['dormir', 'comprar'] },
    { name: 'Carlos', role: 'secretario', hobbies: ['futbol', 'queso'] }
];

const aficion = staff.map(function(persona) {
    return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`;
});


// EJERCICIO 4 

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter(function(numero) {
    return numero % 2 !== 0;
});


// EJERCICIO 5 

const foodList2 = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
];

const result5 = foodList2
    .filter(function(comida) {
        return comida.isVeggie === true;
    })
    .map(function(comida) {
        if (comida.name === 'Tempeh') {
            return `Que rico ${comida.name} me voy a comer!`;
        } else {
            return `Que rica ${comida.name} me voy a comer!`;
        }
    });


// EJERCICIO 6 

const inventory = [
    { name: 'Mobile phone', price: 199 },
    { name: 'TV Samsung', price: 459 },
    { name: 'Viaje a Cancún', price: 600 },
    { name: 'Mascarilla', price: 1 }
];

const result6 = inventory
    .filter(function(producto) {
        return producto.price > 300;
    })
    .map(function(producto) {
        return producto.name;
    });


// EJERCICIO 7 

const numeros = [39, 2, 4, 25, 62];

const result7 = numeros.reduce(function(total, numero) {
    return total * numero;
}, 1);


// EJERCICIO 8 

const sentenceElements = [
    'Me', 'llamo', 'Alessandro', 'y', 'quiero',
    'sentir', 'la', 'fuerza', 'con', 'javascript'
];

const result8 = sentenceElements.reduce(function(frase, palabra) {
    return `${frase} ${palabra}`;
});


// EJERCICIO 9 
const books = [
    { name: ' JS for dummies', author: 'Emily A. Vander Veer', price: 20, category: 'code' },
    { name: 'Don Quijote de la Mancha', author: 'Cervantes', price: 14, category: 'novel' },
    { name: 'Juego de tronos', author: 'George R. Martin', price: 32, category: 'Fantasy' },
    { name: 'javascript the good parts', author: 'Douglas Crockford', price: 40, category: 'code' }
];

const result9 = books
    .filter(function(libro) {
        return libro.category === 'code';
    })
    .reduce(function(total, libro) {
        return total + libro.price;
    }, 0);