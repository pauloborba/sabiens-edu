Feature: As an Administrador,
         I want to cadastrar, alterar e remover formulários sobre o corpo humano,
         So that eu possa avaliar os alunos.
	
Scenario: Questão sem resposta
Given estou logado como um administrador
Given estou na página de cadastro de formulários do sistema "nervoso"
Given eu dei ao formulário a cadastrar o título "teste123"
Given eu defini que o formulário terá "1" questão
Given eu preenchi o texto da questão "1" com "Tudo bem?"
Given dei como alternativas de resposta "Tudo" e "Não"
When eu submeto o formulário
Then eu posso ver uma mensagem de erro
Then a mensagem informa que a questão "1" não possui resposta.

Scenario: Cadastro de formulário com nome duplicado
Given existe no sistema "nervoso" um formulário com título "teste123", com "2" questões
When eu tento cadastrar no sistema "nervoso" um novo formulário com título "teste123", com "1" questão
Then o sistema "nervoso" não armazena o novo formulário
Then o formulário antigo é mantido
Then o formulário mantido no sistema possui "2" questões.

Scenario: Remoção de formulário já respondido
Given estou logado como um administrador
Given estou na página de formulários do sistema "nervoso"
Given eu vejo um formulário "def"
Given o aluno "test" já respondeu ao formulário "def"
When eu tento remover o formulário "def"
Then eu vejo uma mensagem pedindo confirmação e me informando que alguns alunos já responderam ao formulário

Scenario: Alteração de formulário já respondido
Given estou logado como um administrador
Given estou na página de formulários do sistema "nervoso"
Given eu vejo um formulário "abc"
Given o aluno "test" já respondeu ao formulário "abc"
When eu tento alterar o formulário "abc"
Then eu vejo uma mensagem pedindo confirmação e me avisando que as estatísticas relativas ao formulário serão resetadas
