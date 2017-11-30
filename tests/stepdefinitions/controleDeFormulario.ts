import { defineSupportCode } from 'cucumber';
import { protractor, browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let loginAs = function(user, senha) {
	
};

let getAlertText = function(instance) {
	return instance.switchTo().alert().getText();
};

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^estou logado como um administrador$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('SabiensEdu');
		await loginAs('admin','senhaAdmin');
    });

    Given(/^estou na página de cadastro de formulários do sistema "([^\"]*)"$/, async (sistema) => {
		await $("a[routerLink='/controleDeFormulario']").click();
    });

    Given(/^eu dei ao formulário a cadastrar o título "([^\"]*)"$/, async (titulo) => {
        await $("input[id='titulo']").sendKeys(<string> titulo);
    });

    Given(/^eu defini que o formulário terá "(\d*)" questão$/, async (questoes) => {
		var counter = 0;
		while(counter < Number(<string> questoes)) {
			await $("button[id='addQ']").click();
			await counter++;
		}
    });

    Given(/^eu preenchi o texto da questão "(\d*)" com "([^\"]*)"$/, async (questao, texto) => {
		var idEnunciado : string = 'enunciado' + <string> questao;
        await element(by.id(idEnunciado)).sendKeys(<string> texto);
    });
	
    Given(/^dei como alternativas de resposta "([^\"]*)" e "([^\"]*)"$/, async (alt1, alt2) => {
		await $("button[id='addA1']").click();
		await $("button[id='addA1']").click();
		
        await $("input[id='alternativa1,1']").sendKeys(<string> alt1);
        await $("input[id='alternativa1,2']").sendKeys(<string> alt2);
    });

    When(/^eu submeto o formulário$/, async () => {
		await $("button[id='submit']").click();
    });
	
    Then(/^eu posso ver uma mensagem de erro$/, async () => {
		var counter = 0;
		while(counter < 8000000) {
			counter++;
			//essa maneira de esperar parece ser a única que funciona...
		}
		var alertDialog = browser.switchTo().alert();
		await alertDialog;
		expect(alertDialog.getText()).not.to.be.null;
    });
	
    Then(/^a mensagem informa que a questão "(\d*)" não possui resposta.$/, async (questao) => {
		
		var alertText = await browser.switchTo().alert().getText();
		var questaoString = <string> questao;
		expect(alertText).to.contain(questaoString);
    });
});