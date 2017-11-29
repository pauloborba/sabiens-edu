Feature: As an Administrador,
         I want to cadastrar, alterar e remover formulários sobre o corpo humano,
         So that eu possa avaliar os alunos.
	
Scenario: Questão sem resposta
Given estou logado como um administrador
Given estou na página de cadastro de formulários do sistema "nervoso"
Given eu dei ao formulário a cadastrar o título “teste123”
Given eu defini que o formulário terá “1” questão
Given eu preenchi o texto da questão “1” com “Tudo bem?”
Given dei como alternativas de resposta “Tudo” e “Não”
When eu submeto o formulário
Then eu posso ver uma mensagem de erro
Then a mensagem informa que a questão “1” não possui resposta.