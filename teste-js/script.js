// // TESTE JAVASCRIPT QWST
// //#1- Crie uma função que reverta qualquer string inserida.

function reverseString(str) {
    let newStr ='';
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}
alert('Questão 1')
alert(reverseString("QWST"));

// #2 – Crie uma função que retorne true quando a string inserida for um palíndromo e false quando não.

function palindromo(str) {
    if (str == str.split('').reverse().join('')) {
        return true
    }else {
        return false
    }
}
alert('Questão 2')
alert(palindromo('ana'))

// // #3 – Crie uma função que remova os itens com IDs duplicados do array de objetos

const arrs = [

{ id: 1, name: 'julia' },

{ id: 2, name: 'lua' },

{ id: 2, name: 'joana' },

{ id: 3, name: 'sonia' },

{ id: 4, name: 'gustavo' },

{ id: 5, name: 'rogerio' },

{ id: 5, name: 'vanessa' },

{ id: 6, name: 'vayne' }

];

const listaUnica = new Map();

arrs.forEach((arr) => {
    if (!listaUnica.has(arr.id)){
    listaUnica.set(arr.id, arr);
    }
});
console.log("Questão 3:")
console.log([...listaUnica.values()]);

// #4 -  Crie uma função que retorne um array que consiste no maior número de cada subarray fornecido.

const array = [
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]

function arrayMaior(x) {
    let novaArray = [];

    for(let y=0; y < x.length; y++){
        novaArray.push(Math.max.apply(null, x[y]))
    }
    return novaArray
}
console.log("Questão 4:")
console.log(arrayMaior(array))

// #5 - Crie uma função que receba um array com 2 números e retorne a soma desses dois números mais a soma de todos os números entre eles. O menor número nem sempre virá primeiro.


function somaDois(yz){
    let soma = 0
    if(yz[0] < yz[1]){                // Verifica se o primeiro valor é o menor
        let j = yz[0] + 1
        for(j; j < yz[1]; j++){
            soma += j
        }
        return (yz[0] + yz[1]) + soma   
    }else if(yz[1] < yz[0]){          // Verifica se o segundo valor é o menor
        let j = yz[1] + 1
        for(j; j < yz[0]; j++){
            soma += j
        }
        return (yz[0] + yz[1]) + soma
    }
}

const arraySoma = [
    5, 
    3
]

const arraySoma2 = [
    11,
    15
]

console.log("Questão 5:")
console.log(somaDois(arraySoma))
console.log(somaDois(arraySoma2))


//#6 - Desenvolva uma função que compare 2 arrays e retorne um novo array contendo apenas os  itens que estejam contidos em apenas 1 dos arrays.

function pegarDiferenca(){
    let farray = [2,4,6,8];
    let sarray = [3,4,5,7,9];
    let dif = farray.filter(a => !sarray.includes( a)); 
    console.log(dif)
}
console.log("Questão 6:")
pegarDiferenca();