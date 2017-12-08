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


    //estou na pagina meus questionarios
    Given(/^Eu estou na pagina do questionario sobre o cerebro$/, async () => {
        await browser.get("http://localhost:4200");
        //await expect(browser.getTitle()).to.eventually.equal('QuestionarioDoCerebro');
        await $("a[name='questionarios']").click();
    });

    //eu tenha respondido "a" para questao 1
    Given(/^Eu tenha respondido a na questao 1 $/, async () => {
        await $("input[name='resposta1']").val()=="a";
    });

    //eu tenha respondido "c" para questao 2
    Given(/^Eu tenha respondido c na questao 2 $/, async () => {
        await $("input[name='resposta2']").val()=="c";
    });

    //eu tenha respondido "c" para questao 3
    Given(/^Eu tenha respondi c na questao 3$/, async () => {
        await $("input[name='resposta3']").val()=="c";
        //simular preenchimento do questionario
        await element(by.buttonText('Enviar Respostas!')).click();
    });


    When(/^Eu tento ver o feedback$/, async () => {
        await element(by.buttonText('Voltar Para Questionários')).click();
        await $("a[name='verFbquestionarioCerebro']").click();
    });

    Then(/^Eu vejo uma mensagem de confirmacao$/, async () => {
        await browser.get("http://localhost:4200/Questionario/FeedbackCerebro");
    });

    Then(/^Continuo na mesma pagina$/, async () => {
        var alert = browser.switchTo().alert();
        await expect(alert.getText()).to.eventually.equal("Sua nota no questionário do cérebro foi 67%");
        alert.dismiss();
    });
});
