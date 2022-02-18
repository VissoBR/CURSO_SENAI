class Pessoa{
    constructor(nome, endereco){
        this.Nome = nome;
        this.Endereco = endereco;
    }

    get Nome(){
        return this.nome;
    }

    set Nome(nome){
        this.nome = nome;
    }
    get Endereco(){
        return this.endereco;
    }

    set Endereco(endereco){
        this.endereco = endereco;
    }
    imprimir(){
        return "Nome: "+ this.nome + "\nEnderço: "+ this.endereco;
               
	}
}
class PessoaFisica extends Pessoa{
    constructor(nome, endereco, cpf, dataNasc){
        super(nome, endereco);
        this.Cpf = cpf;
        this.DataNasc = dataNasc
    }
    get Cpf(){
        return this.cpf;
    }

    set Cpf(cpf){
        this.cpf = cpf;
    }
    get DataNasc(){
        return this.dataNasc;
    }

    set DataNasc(dataNasc){
        this.dataNasc = dataNasc;
    }

    imprimir(){
        return super.imprimir() + "\nCPF: " + this.cpf + "\nData de Nascimento: " + this.dataNasc;
               
	} 
}
class PessoaJuridica extends Pessoa{
    constructor(nome, endereco, cnpj, razaoSocial){
        super(nome, endereco);
        this.Cnpj = cnpj;
        this.RazaoSocial = razaoSocial
    }
    get Cnpj(){
        return this.cnpj;
    }

    set Cnpj(cnpj){
        this.cnpj = cnpj;
    }
    get RazaoSocial(){
        return this.razaoSocial;
    }

    set RazaoSocial(razaoSocial){
        this.razaoSocial = razaoSocial;
    } 
    
    imprimir(){
        return super.imprimir() + "\nCNPJ: " + this.cnpj + "\nRazão Social: " + this.razaoSocial;
               
	} 
}
var pessoa = new Pessoa("Ivisson", "R. Dr. Paulo Alves, 110");
var pessoaFisica = new PessoaFisica("Audrey", "Rua Nilo Peçanha", 099447838722, "03/04/1982");
var pessoaJuridica = new PessoaJuridica("Flavio", "rua 2", "001111212121", "0001/46");
console.log("----------------------------")
console.log(pessoa.imprimir());
console.log("----------------------------")
console.log(pessoaFisica.imprimir());
console.log("----------------------------")
console.log(pessoaJuridica.imprimir());