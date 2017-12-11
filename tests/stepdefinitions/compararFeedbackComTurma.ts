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


    //estou na pagina feedback questionario sobre o cerebro
    Given(/^Eu estou na pagina do feedback do questionario sobre o cerebro$/, async () => {
        await browser.get("http://localhost:4200");
        //await expect(browser.getTitle()).to.eventually.equal('QuestionarioDoCerebro');
        await $("a[name='questionarios']").click();
        await $("a[name='verFBquestionarioCerebro']").click();

    });

    //eu esteja cadastrado na turma A da escola sao luis
    Given(/^Eu tenha respondi c na questao 3$/, async () => {
        //a escolha tem de estar cadastrada
        await $(arrayEscolas.find("Sao Luis"));
        //e o aluno tem que ser dela e da turma
        await $(aluno.Escola).val()=="Sao Luis";
        await $(aluno.Turma).val()=="A";
    });


    When(/^Eu solicito a compração do meu resultado com o da minha turma$/, async () => {
        await element(by.buttonText('Comparar resultado com minha turma!')).click();
    });

    Then(/^Eu vejo uma mensagem de confirmacao$/, async () => {
        await browser.get("http://localhost:4200/Questionario/FeedbackComparadoCerebro");
    });

    Then(/^Minha nota aparecerá 67%$/, async () => {
        var alert = browser.switchTo().alert();
        await expect(alert.getText()).to.eventually.equal("Sua nota no questionário do cérebro foi 67%");
        alert.dismiss();
    });

    Then(/^A nota da turma aparecerá 72%$/, async () => {
        var alert = browser.switchTo().alert();
        await expect(alert.getText()).to.eventually.equal("Sua turma ,nesse questionario, tem média de 72%");
        alert.dismiss();
    });
});
