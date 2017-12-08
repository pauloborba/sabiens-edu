Feature: Aluno possui feedback, calculado pelo sistema, dos questionários e pode compará-lo com o da turma.
	As a Aluno cadastrado
	I want to ver o feedback dos formulários respondidos por mim e compará-los com minha turma
	So that eu possa avaliar meu desempenho.

	Scenario: Aluno responde questionário com sucesso, para ter feedback calculado.
		Given Eu esteja logado como o aluno "Daniel Filgueira Bezerra"
		Given Eu esteja na pagina "Questionário do Cérebro"
		Given Eu tenha preenchido todos os campos pedidos pelo questionário "Questionário do Cérebro"
		When Eu envio minhas respostas
		Then Eu posso ver uma mensagem de confirmação


	Scenario: Visualização do feedback de um questionário.
		Given Estou lgoado como o aluno "Daniel Filgueira Bezerra"
		Given Estou na página "Meus Questionários"
		Given Eu tenha respondido o questionário "O Cérebro"
		Given Eu tenha respondido "a" para a pergunta de número "1"
		Given Eu tenha respondido "c" para a pergunta de número "2"
		Given Eu tenha respondido "c" para a pergunta de número "3"
		When Eu tento ver o feedback do questionário "O Cérebro"
		Then Eu posso ver o feedback referente ao questinário "O Cérebro", para o aluno "Daniel Filgueira Bezerra"
		Then O feedback do aluno "Daniel Filgueira Bezerra" conterá "67%".
	
	
	Scenario: Comparar feedback de um questionário com o da turma.
		Given Estou logado como o aluno "Daniel Filgueira Bezerra"
		Given Estou na página "feedback do quesitonário sobre o Cérebro"
		Given A escola Cadastrada "São Luis" esteja cadastrada.
		Given O aluno "Daniel Filgueira Bezerra" seja um aluno da turma "A" da escola "São Luís"
		Given A turma "A" tem média "72%" no questionário "O Cérebro"
		When Eu solicitar a comparação do meu resultado com o da minha turma
		Then Eu consigo visualizar os feedbacks referentes aquele questionário para minha turma e para mim.
		Then minha nota aparecerá "67%"
		Then a nota da minha turma aparecerá "72%"
