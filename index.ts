// interface DadosApi{
//     nome: String
//     idade: Number
// };


// function pegarDadosApi (): DadosApi {
//     return {
//         nome: "Ricardo",
//         idade: 28
//     }
// };

// let dados = pegarDadosApi();

// console.log (dados.idade);

// Criando um classe em TS

// class Pessoa{
//     nome!:String
//     idade!:Number
//     cpf!:String 

//     constructor(nome:String, idade: Number, cpf:String){
//         this.nome = nome
//         this.idade = idade
//         this.cpf = cpf
//     }

//     escreverPropriedades(){
//         console.log(this.nome)
//         console.log(this.idade)
//         console.log(this.cpf)
//     }
// }

// let pessoa = new Pessoa("Ricardo",28,"111-222-333-44")

// pessoa.escreverPropriedades

class Carro {
    marca!: String
    ano!: Number
    modelo!: String

    constructor(marca: String, ano: Number, modelo: String) {
        this.marca = marca
        this.ano = ano
        this.modelo = modelo
    }

    propriedadesCarro() {
        console.log(this.marca)
        console.log( this.ano)
        console.log( this.modelo)
    }


}

let carros = new Carro("Volks", 1990, "Passat")

carros.propriedadesCarro();
