import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

defineSupportCode(function ({ Given, When, Then, setDefaultTimeout }) {

    setDefaultTimeout(60 * 1000);

    //estou logado como o aluno "Daniel Filgueira Bezerra"
    Given(/^Eu logado como o aluno "([^\"]*)"$/, async (aluno) => {
        await $("h1[name='usuario']").text(<string> aluno);
    });


    //estou na pagina questionario do cerebro
    Given(/^Eu estou na pagina do questionario sobre o cerebro$/, async () => {
        await browser.get("http://localhost:4200");
        //await expect(browser.getTitle()).to.eventually.equal('QuestionarioDoCerebro');
        await $("a[name='questionarios']").click();
        await $("a[name='questionarioDoCerebro']").click();
    });

    //preenchi todos os campos de resposta (existe apenas 3)
    Given(/^Eu tenha preenchido todos os campos pedidos pelo questionario sobre o cerebro$/, async () => {
        await $("input[name='resposta1']").val()!="";
        await $("input[name='resposta2']").val()!="";
        await $("input[name='resposta3']").val()!="";
    });

    When(/^Eu tentar enviar minhas respostas$/, async () => {
        await element(by.buttonText('Enviar Respostas!')).click();
    });

    Then(/^Eu vejo uma mensagem de confirmacao$/, async () => {
        var alert = browser.switchTo().alert();
        await expect(alert.getText()).to.eventually.equal("Respostas submetidas com sucesso!");
        alert.dismiss();
    });

    Then(/^Continuo na mesma pagina$/, async () => {
        await browser.get("http://localhost:4200/Questionario/Cerebro");
    });
});