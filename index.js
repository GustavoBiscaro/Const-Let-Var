// 1) Escreva uma função chamada dobrar que recebe um número como
// parâmetro e retorna o dobro desse número. Use a sintaxe de função
// tradicional. 

function dobrarValor(num) {
    let dobro = num *= 2;
    console.log(dobro);
}

// 2) Reescreva a função dobrar utilizando a sintaxe de função anônima atribuída
// a uma variável.

const dobrar = function (num) {
    let dobro = num *= 2;
    console.log(dobro);
}

// 3) Transforme a função dobrar em uma função de seta (arrow function)

const dobroValor = (num) => {
    let dobro = num *= 2;
    console.log(dobro);
}

// 4) Escreva uma função chamada saudacao que recebe o nome de uma pessoa
// como parâmetro e retorna uma saudação personalizada. Use a sintaxe de
// função de seta.

const saudacao = (nome) => {
    //Poderia ser utilizado Prompt por exemplo!
    console.log(`Olá ${nome}, seja bem-vindo!`);
}

// 5) Reescreva a função saudacao utilizando a sintaxe de função tradicional.
function saudacaoTradicional(nome) {
    console.log(`Olá ${nome}, seja bem-vindo!`);
}

// 6) Crie uma função chamada somarNumeros que recebe um número
// indeterminado de argumentos e retorna a soma desses números. Utilize a
// sintaxe de função tradicional.
function somarNumeros() {
    let somatório = 0;

    for (let x = 0; x < arguments.length; x++) {
        somatório += arguments[x];
    }

    return somatório;
}

// 7) Transforme a função somarNumeros em uma função de seta.

const somarNumerosArrow = (...args) => {
    let somatório = 0;

    for (let x = 0; x < args.length; x++) {
        somatório += args[x];
    }

    return somatório;

}


//8) Escreva uma função chamada saudacao que recebe o nome de uma pessoa
// como parâmetro e retorna uma saudação personalizada. Por exemplo, se o
// nome for "João", a função deve retornar "Olá, João!".

const saudando = (nome) => {
    return `Olá, ${nome}`;
}

//let valor = saudando("Gustavo");
//console.log(valor);

// 9) Crie uma função chamada soma que recebe dois números como parâmetros
// e retorna a soma desses números. Implemente uma função chamada
// maiorNumero que recebe três números como parâmetros e retorna o maior
// número entre eles.

const soma = function (num1, num2) {
    return num1 + num2;
}

function maiorNumero(x, y, z) {
    return Math.max(x, y, z);
}

// 10) Crie uma função chamada contarVogais que recebe uma string como
// parâmetro e retorna o número de vogais presentes nessa string. Implemente
// uma função chamada calcularMedia que recebe um array de números como
// parâmetro e retorna a média desses números.
const contarVogais = (value) => {
    let vogais = value.match(/[aeiouAEIOU]/g); // Se você não usar a flag /g, a expressão regular encontrará apenas a primeira correspondência e parará. 

    //Expressões regulares

    if (vogais === null) {
        return 0;
    }

    return vogais.length;

}

// const frase = "Meu nome é Gustavo"; // Número com acento não conta
// const valor = contarVogais(frase);

// console.log(valor);

//uma função chamada calcularMedia que recebe um array de números como
// parâmetro e retorna a média desses números.

const media = function (numbers) {
    let soma = 0;
    for (let x = 0; x < numbers.length; x++) {
        soma += numbers[x];
    }
    let mediaTotal = soma / numbers.length;
    return mediaTotal;
}

const valores = [10, 10, 10, 50];
let resultado = media(valores);

console.log(resultado);