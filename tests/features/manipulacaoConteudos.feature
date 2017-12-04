Feature: Manipulação de conteúdos 
	As an Administrador da aplicação
	I want to manipular os conteúdos em cada tópico que correspondem aos sistemas do corpo humano.
	So that eu possa disponibilizar o conteúdo na aplicação.

Scenario: Tentativa de inserção conteúdo, quando sistema já possui um conteúdo com mesmo titulo

Given Estou na página de Cadastro de Conteudo
Given So está contidos na lista de conteúdo o conteudo com seguinte titulo "Resumo rápido do Sistema Respiratorio" , descricao de "orem ipsum dolor sit" , introducao de "orem ipsum dolor sit" , desenvolvimento com titulo de "lorem ipsum dolor sit" e descricao "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp" e por fim, conclusao com "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp"
Given Preencho os campos de titulo com "Resumo rápido do Sistema Respiratorio" , descricao de "orem ipsum dolor sit" , introducao de "orem ipsum dolor sit" , desenvolvimento com titulo de "lorem ipsum dolor sit" e descricao "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp" e por fim, conclusao com "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp"
When Eu tento inserir o conteudo
Then Uma mensagem de erro em forma de alert com o texto "Já existe um conteúdo com esse título" aparece na tela

Scenario: Inserindo conteúdo, que previamente não foi inserido, sem êxito, por falta de preenchimento do campo de Conclusão.

Given Estou na página de Cadastro de Conteudo no sistema
Given Preencho um novo conteudo com campo titulo de "Sobre os orgãos" , descricao de "orem ipsum dolor sit" , introducao de "orem ipsum dolor sit" , desenvolvimento com titulo de "lorem ipsum dolor sit" e descricao "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp", porém não preencho nada no campo de conclusao
Given Eu tento inserir o novo conteudo, com campo de conclusão vazio
Then Um alerta aparece com a mensagem "Você esqueceu de preencher algum campo" aparece, pois um campo não foi preenchido

Scenario: Inserindo conteúdo, sem êxito, por não ter atingido o mínimo necessário de caracteres no campo conclusão.

Given Estou na página de Cadastro de Conteudo
Given Preencho os campos de titulo "Resumo do Sistema Urinário" , descricao de "orem ipsum dolor sit" , introducao de "orem ipsum dolor sit" , desenvolvimento com titulo de "lorem ipsum dolor sit" e descricao "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp" e por fim, conclusao com "Lorem ipsum "
When Eu tento adiconar o conteudo a lista de conteudos
Then Um alerta deve ser exibida devido com a mensagem "Você escreveu pouquissimo no campo de conclusão"

Scenario: Removendo um conteúdo, assim excluindo ele da lista

Given Estou na página de Cadastro de Conteudo ao sistema
Given So está contidos na lista de conteúdo o conteudo com titulo de "Resumo rápido do Sistema Respiratorio" , descricao de "orem ipsum dolor sit" , introducao de "orem ipsum dolor sit" , desenvolvimento com titulo de "lorem ipsum dolor sit" e descricao "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp" e por fim, conclusao com "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp"
When Seleciono para remover o unico conteúdo da lista
Then Um alerta deve ser exibida com a mensagem "Conteúdo excluido com exito"