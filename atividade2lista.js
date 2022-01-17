let listaDeParticipantes = [];
let quantidadeDeParticipantes = listaDeParticipantes.length;

//var idade = prompt("Qual é a sua idade?", "Idade");
var idade = 20;
//var nome = prompt("Qual é o seu nome?", "Nome");
var nome = "Ivisson";


if (idade < 18){
	console.log("Você não pode realizar o cadastro por não ter 18 anos.");
}else if (quantidadeDeParticipantes < 100) {
	listaDeParticipantes.push(nome);
	console.log(listaDeParticipantes);
	console.log("Cadastro feito com sucesso");
} else {
	console.log("Não é possível inserir mais alunos nessa turma");
}

