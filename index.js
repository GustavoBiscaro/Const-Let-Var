// 1) Escreva uma função chamada dobrar que recebe um número como
// parâmetro e retorna o dobro desse número. Use a sintaxe de função
// tradicional. 

function dobrarValor(num) {
let dobro = num *= 2;
  console.log(dobro);
 }

// 2) Reescreva a função dobrar utilizando a sintaxe de função anônima atribuída
// a uma variável.

const dobrar = function(num) {
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


