
alert('Bem vindo ao Hotel Vinland') ;  
hospede = [];
let usuarioNome = prompt('Informe seu nome:');

alert('Bem vindo ao Hotel Vinland, ' + usuarioNome + '. É um imenso prazer ter você por aqui!');
function login(){
let senha = parseInt(prompt(usuarioNome + ' Informe sua senha:'))


if(senha == 2678){
    alert('Senha Correta! Bem vindo ' + usuarioNome)
    inicio();
    
} else {
    alert('Senha incorreta')
    login();
}   
}
login();
function inicio() {
    
   let escolha = parseInt(prompt('Selecione uma opção \n1.) Reservar Quarto \n2.) Cadastrar Hóspedes \n3.) Cadastrar e Pesquisar Hóspedes \n4.) Agendar Eventos \n5.) Abastecer \n6.) Manutencao Ar \n7.) Sair'));


        switch (escolha){
            case 1:
                reservarQuarto();
                break;
            case 2:
                cadastroHospede();
                break;
            case 3:
                cadrastrarEPesquisar();
                break;
            case 4:
                agendarEvento(); 
                break;
            case 5:
                abastecer();
                break;
            case 6:
                manutencaoAr()
            case 7:
                sair();
                break;
            }   

        
function reservarQuarto(){

    let quartos = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    quartoLivre = true   
do {
    let confirmar = prompt('Deseja reservar um quarto? S/N')
        if (confirmar == 'N' || confirmar == 'n'){
            inicio();
        }
    let valorDia = parseFloat(prompt('Informe o valor da diaria:'))
        if (isNaN(valorDia)||valorDia <= 0) {
            alert('Valor Inválido')
            reservarQuarto()
        }
    let dias = parseInt(prompt('Informe o numero de dias que deseja se hospedar:'))
    if (isNaN(dias) || dias > 31 || dias <= 0) {
        alert('Valor Inválido')
        reservarQuarto()
    }
    let valorTotal = valorDia * dias;

    alert('O valor de ' + valorDia + ', dias de hospedagem é de R$'+ valorTotal)

        let nomeHospede = prompt('Informe o nome do hospede: ')
        let exibir = prompt('Quartos disponiveis:\n' + quartos.join(',') + '\n\nQual quarto '+ nomeHospede+ ' deseja se hospedar?')
        let index = quartos.indexOf(exibir);
        if (index !== -1) {
            quartos.splice(index, 1); // Remove o quarto escolhido do array
            let resultado = (prompt('Confirmação: Hospedagem para ' + nomeHospede + ' por ' + dias + ' dias para o quarto ' + exibir + ' por ' + valorTotal + ' S/N'));
            if(resultado == 'S' || resultado == 's'){
                alert('Reserva efetuada para ' + nomeHospede);
            } else if(resultado == 'N' || resultado == 'n'){
                let resultado2 = prompt('Para cancelar a hospedagem digite "NAO"');
                if (resultado2 == 'NAO') {
                    alert("Operação cancelada");
                    inicio();}
            } else {
            alert('Quarto selecionado não disponível.');
        }}}while(quartoLivre == true){}
    }
} 
   
function cadastroHospede(){
    hospedes = true;
    
    let valorTotal = 0;
    let gratuidade = 0;
    let meia = 0;
    
    let valorDiaria = parseFloat(prompt('Qual o valor padrão da diária?'));
    
    do{
    let nomeHospede = prompt('Qual o nome do Hóspede? (Digite PARE para cancelar)')
        if(nomeHospede == 'pare' || nomeHospede == 'PARE'){
            alert('O valor total das hospedagens é: R$'+ valorTotal +'; '+ gratuidade + ' gratuidade(s); ' + meia + ' meia(s)')
            inicio();
        }
    let idadeHospede = parseInt(prompt('Qual a idade do Hóspede?'));
        if(idadeHospede <= 6){
            alert(nomeHospede + ' cadastrada(o) com sucesso. possui gratuidade')
            gratuidade++
        } else if (idadeHospede > 60){
            alert(nomeHospede + ' cadastrada(o) com sucesso. Wesley paga meia')
            meia++
            valorTotal += valorDiaria / 2;
        } else {
            alert(nomeHospede + ' cadastrada(o) com sucesso.')
            valorTotal += valorDiaria;
        }

} while(hospedes = true){}
}

function cadrastrarEPesquisar(){
    
    let escolhaPesquisa = parseInt(prompt('Escolha uma opção: \n1) Cadastrar \n2 ) Pesquisar \n3 ) Sair')) 

    switch(escolhaPesquisa){
        case 1:
            cadastrar();
            break;
        case 2:
            pesquisar();
            break;
        case 3:
            inicio()
            break;
        default:
            inicio();
    }
     
        function cadastrar(){
            if(hospede.lenght >= 15){
                alert('Máximo de cadastros atingido.')
                cadrastrarEPesquisar();
                return;
            }
            const hospedeNome = prompt('Qual o nome do Hóspede?')
            hospede.push(hospedeNome);
            alert('Hóspede '+hospedeNome+' Foi cadastrado com sucesso!')
            cadrastrarEPesquisar();
        }

        function pesquisar(){
            const pesquisarNome = prompt('Qual o nome do Hóspede?')
            if(hospede.includes(pesquisarNome)){
                alert(pesquisarNome + ' Foi encontrado!')    
            } else{
                alert(pesquisarNome + ' Não foi encontrado!') 
            }
            cadrastrarEPesquisar();
        }

}
function agendarEvento(){
    alert('Parte 1: Quantidade de Convidados')
           
			let convidados = parseInt(prompt('Qual o número de convidados para o seu evento?'))
            let local;
			if (convidados > 350 || convidados < 0) {
				alert('Quantidade de convidados negativa ou superior à capacidade máxima')
			} else if (convidados > 220) {
				alert ('Total de convidados: ' + convidados)
				alert('Use o auditório Colorado')
				local = 'Auditório Colorado'
			} else if (convidados > 150){
				let cadeirasAdc = convidados - 150
				alert ('Total de convidados: ' + convidados)
				alert ('Use o auditório Laranja (inclua mais ' + cadeirasAdc +' cadeiras)')
				local = 'Auditório Laranja'
			} else {
				alert ('Total de convidados: ' + convidados)
				alert ('Use o auditório Laranja')
				local = 'Auditório Laranja'
			}
            console.log('Local do evento: ' + local);
			alert('Agora vamos ver a agenda do evento.')
			alert('Parte 2: Agenda')

			let dia = prompt('Qual o dia do seu evento?')

			let hora = 0

			if (dia == 'segunda' || dia == 'terca' || dia == 'quarta' || dia == 'quinta' || dia == 'sexta' ) {
				alert('Segunda a Sexta das 7hs às 23hs')
				let hora = parseInt(prompt('Qual a hora do seu evento?'))
				if (hora < 7 || hora > 23) {
					alert('Auditório indisponível')
				} else {
					let empresa = prompt('Qual o nome da sua empresa?')
					alert('Auditório reservado para ' + empresa+ '. ' + dia + ' às ' + hora +'hs.')
				}

			}
			if (dia == 'sabado' || dia == 'domingo') {
				alert('Sábados e Domingos apenas das 7hs às 15hs')
				let hora = parseInt(prompt('Qual a hora do seu evento?'))
				if (hora < 7 || hora > 15) {
					alert('Auditório indisponível')
				} else {
					let empresa = prompt('Qual o nome da sua empresa?')
					alert('Auditório reservado para ' + empresa + '. ' + dia + ' às ' + hora +'hs.')
				}
			}

			alert('Parte 3: Agenda')

			let duracao = parseInt(prompt('Qual a duração do evento em horas?'))

			let garconsHora = duracao / 2
			garconsHora = Math.round(garconsHora)	

			let garconsCon = convidados / 12
			garconsCon = Math.round(garconsCon)		

			let garconsTot = garconsCon + garconsHora

			alert('São necessários ' + garconsTot + ' garçons.')
			let custoGarcons = (garconsTot * 10.50) * duracao
			alert('Custo: R$ ' + custoGarcons)

			alert('Agora vamos calcular o custo do buffet do hotel para o evento.')
			alert('Parte 4: Buffet')

			let cafeL = convidados * 0.2
			let aguaL = convidados * 0.5
			let salgados = convidados * 7

			let custoCafe = cafeL * 0.8
			let custoAgua = aguaL * 0.4
			let custoSalgados = (salgados / 100) * 34

			let custoBuffet = custoAgua + custoCafe + custoSalgados

			let custoTot = custoGarcons + custoBuffet

			alert('O evento precisará de ' + cafeL + ' litros de café, ' + aguaL + ' litros de água, ' + salgados + ' salgados.')

			alert('Parte 5: Conferência')

			alert('Evento no ' + local + '\n' +
			'Nome da Empresa: Hotel Vinland'+ '\n' +
			'Data: ' + dia + ', ' + hora + 'h às ' + (hora + duracao) + 'h.' + '\n' +
			'Duração do evento: ' + duracao + '\n' +
			'Quantidade de garçons: ' + garconsTot + '\n' +
			'Quantidade de Convidados: ' + convidados + '\n' + '\n' +
			'Custo do garçons: ' + custoGarcons + '\n' +
			'Custo do Buffet: ' + custoBuffet + '\n' + '\n' +
			'Valor total do Evento: ' + custoTot + '\n'
			)

			let confirmaEvento = prompt('Gostaria de efetuar a reserva? S/N')

			if (confirmaEvento == 'S' || confirmaEvento == 's') {
				alert(usuarioNome + ', reserva efetuada com sucesso.')
			} else {
				alert('Reserva não efetuada.')
			} 
            inicio();
}
function abastecer(){
    let precoAlcoolWayneOil = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
            let precoGasolinaWayneOil = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
            let precoAlcoolStarkPetrol = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
            let precoGasolinaStarkPetrol = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"));

            let precoLitroAlcool = 4.2;
            let precoLitroGasolina = 5.82;

            let volumeTanque = 42; 

            let totalAlcoolWayneOil = precoAlcoolWayneOil * volumeTanque;
            let totalGasolinaWayneOil = precoGasolinaWayneOil * volumeTanque;
            let totalAlcoolStarkPetrol = precoAlcoolStarkPetrol * volumeTanque;
            let totalGasolinaStarkPetrol = precoGasolinaStarkPetrol * volumeTanque;

            let maisBaratoAlcool = Math.min(totalAlcoolWayneOil, totalAlcoolStarkPetrol);
            let maisBaratoGasolina = Math.min(totalGasolinaWayneOil, totalGasolinaStarkPetrol);

            let combustivelMaisAtraente = "";
            let postoMaisBarato = "";

            if ((precoLitroGasolina * 0.7) > precoLitroAlcool) {
                combustivelMaisAtraente = "álcool";
            } else {
                combustivelMaisAtraente = "gasolina";
            }

            if (maisBaratoAlcool < maisBaratoGasolina) {
                postoMaisBarato = "Wayne Oil";
            } else {
                postoMaisBarato = "Stark Petrol";
            }

            alert(`É mais barato abastecer com ${combustivelMaisAtraente} no posto ${postoMaisBarato}.`);

            inicio();
}
function manutencaoAr(){
    let menorValor = Number.MAX_VALUE;
            let empresaMenorValor = "";

            do {
                const nomeEmpresa = prompt("Qual o nome da empresa?");
                const valorPorAparelho = parseFloat(prompt("Qual o valor por aparelho?"));
                const quantidadeAparelhos = parseInt(prompt("Qual a quantidade de aparelhos?"));
                const porcentagemDesconto = parseInt(prompt("Qual a porcentagem de desconto?"));
                const quantidadeMinimaDesconto = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));

                let total = valorPorAparelho * quantidadeAparelhos;
                let desconto = 0;

                if (quantidadeAparelhos >= quantidadeMinimaDesconto) {
                    desconto = (porcentagemDesconto / 100) * total;
                    total -= desconto;
                }

                alert(`O serviço de ${nomeEmpresa} custará R$ ${total}`);

                if (total < menorValor) {
                    menorValor = total;
                    empresaMenorValor = nomeEmpresa;
                }

                var continuar = prompt("Deseja informar novos dados? (S/N)");
            } while (continuar.toUpperCase() === 'S');

            alert(`O orçamento de menor valor é o de ${empresaMenorValor} por R$ ${menorValor}`);
}
function sair(){
    window.close();
}
