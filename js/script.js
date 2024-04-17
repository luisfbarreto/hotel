login()

function login(){ alert('Bem vindo ao Hotel Vinland') ;  

let usuarioNome = prompt('Informe seu nome:');

alert('Bem vindo ao Hotel Vinland, ' + usuarioNome + '. É um imenso prazer ter você por aqui!');

let senha = parseInt(prompt(usuarioNome + ' Informe sua senha:'))

if(senha == 2678){
    
    inicio();
    
} else {
    alert('Senha incorreta')
    login();
}   

}

function inicio() {
    
   let escolha = parseInt(prompt('Selecione uma opção \n1.) Reservar Quarto \n2.) Cadastrar Hóspedes \n3.) Cadastrar e Pesquisar Hóspedes \n4.) Agendar Eventos \n5.) Abastecer \n6.) Manutencao Ar \n7.) Sair'));


        switch (escolha){
            case 1:
                reservarQuarto();
                break;
        }
    

        
function reservarQuarto(){

    let quartos = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    quartoLivre = true
    
    let valorDia = parseFloat(prompt('Informe o valor da diaria:'))
    let dias = parseInt(prompt('Informe o numero de dias que deseja se hospedar:'))
    let valorTotal = valorDia * dias;

    alert('O valor de ' + valorDia + ', dias de hospedagem é de R$'+ valorTotal)
    


do {
        let nomeHospede = prompt('Informe o nome do hospede: ')
        let exibir = prompt('Quartos disponiveis:\n' + quartos.join(',') + '\n\nQual quarto '+ nomeHospede+ ' deseja se hospedar?')
        quartos.splice(index, 1);
        let index = quartos.indexOf(exibir)

       if (quartos.length < 1 ) {
        alert("Operação finalizada")
        quartos.push(exibir);
        quartoLivre = false;
        break;
    }  
    
        if(index > -1) {
            quartos.splice(index, 1);
            alert(exibir + ' foi reservado!')
            inicio()
        } else{
            alert('Quarto indisponivel')
        }

    } while(quartoLivre == true){}
}

    
   
function cadastroHospede(){}
function cadrastrarEPesquisar(){}
function agendarEvento(){}
function abastecer(){}
function manutencaoAr(){}
function sair(){}

function UpCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
}
inicio()