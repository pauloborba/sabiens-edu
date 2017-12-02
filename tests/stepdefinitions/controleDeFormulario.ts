import { defineSupportCode } from 'cucumber';
import { protractor, browser, $, element, ElementArrayFinder, by, until } from 'protractor';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let loginAs = function(user, senha) {
	
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
		expect(alertDialog.getText()).to.eventually.not.be.null;
    });
	
    Then(/^a mensagem informa que a questão "(\d*)" não possui resposta.$/, async (questao) => {
		
		var alertText = await browser.switchTo().alert().getText();
		var questaoString = <string> questao;
		expect(alertText).to.contain(questaoString);
		await browser.switchTo().alert().accept();
    });
});

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^existe no sistema "([^\"]*)" um formulário com título "([^\"]*)", com "([^\"]*)" questões$/, async (sistema, titulo, questoes) => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('SabiensEdu');
		await $("a[routerLink='/controleDeFormulario']").click();
		
		var counter = 1;
		while(counter <= Number(<string> questoes)) {
			await $("button[id='addQ']").click();
			await element(by.id('addA' + counter.toString())).click()
			await element(by.id('enunciado' + counter.toString())).sendKeys('blalbalblablalbalblablalbalblablalbablalbalblablalbalblablalbalblablalba');
			await element(by.xpath("//label[@for='check" + counter.toString() + ",1']")).click();
			await counter++;
		}
		
        await $("input[id='titulo']").sendKeys(<string> titulo);
		
		await $("button[id='submit']").click();
    });

    When(/^eu tento cadastrar no sistema "([^\"]*)" um novo formulário com título "([^\"]*)", com "([^\"]*)" questão$/, async (sistema, titulo, questoes) => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('SabiensEdu');
		await $("a[routerLink='/controleDeFormulario']").click();
		
		var counter = 1;
		while(counter <= Number(<string> questoes)) {
			await $("button[id='addQ']").click();
			await element(by.id('addA' + counter.toString())).click()
			await element(by.id('enunciado' + counter.toString())).sendKeys('blalbalblablalbalblablalbalblablalbablalbalblablalbalblablalbalblablalba');
			await element(by.xpath("//label[@for='check" + counter.toString() + ",1']")).click();
			await counter++;
		}
		
        await $("input[id='titulo']").sendKeys(<string> titulo);
		
		await $("button[id='submit']").click();
		
		while(counter < 8000000) {
			counter++;
			//essa maneira de esperar parece ser a única que funciona...
		}
		await browser.switchTo().alert().accept();
    });
	
	
    Then(/^o sistema "([^\"]*)" não armazena o novo formulário$/, async (sistema) => {
        await browser.get("http://localhost:3000/sistemas");
		var sistemas;
		await element(by.xpath("//body")).getText()
			.then(source => sistemas = source);
		await sistemas;
		sistemas = JSON.parse(sistemas)._sistemas;
		sistemas = sistemas.find(sys => sys._nome.toUpperCase() === (<string> sistema).toUpperCase());
		await expect(sistemas._formularios.length).to.equal(1);
    });
	
    Then(/^o formulário mantido no sistema "([^\"]*)" possui "([^\"]*)" questões.$/, async (sistema, questoes) => {
        await browser.get("http://localhost:3000/sistemas");
		var sistemas;
		await element(by.xpath("//body")).getText()
			.then(source => sistemas = source);
		await sistemas;
		sistemas = JSON.parse(sistemas);
		sistemas = JSON.parse(sistemas)._sistemas;
		sistemas = sistemas.find(sys => sys._nome.toUpperCase() === (<string> sistema).toUpperCase());
		await expect(sistemas._formularios[0].questoes.length).to.equal(2);
    });
});