let listaDeParticipantes = [];
let quantidadeDeParticipantes = listaDeParticipantes.length;

//var nome = prompt("Qual é o seu nome?", "Nome");
//Não sei fazer o prompt pedir para digitar o nome para inserir na lista
//var idade = prompt("Qual é a sua idade?", "Idade");
//Não sei fazer o prompt pedir para digitar o nome para inserir na lista

var idade = 20;
var nome = "Ivisson";

if (idade < 18){
    console.log("Você não pode realizar o cadastro por não ter 18 anos.")
}else if (quantidadeDeParticipantes < 100) {
	listaDeParticipantes.push(nome);
	console.log(listaDeParticipantes);
    console.log("Cadastro feito com sucesso")
} else {
	console.log("Não é possível inserir mais alunos nessa turma");
}