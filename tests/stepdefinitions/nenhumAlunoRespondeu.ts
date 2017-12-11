import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

defineSupportCode(function ({ Given, When, Then, setDefaultTimeout }) {

    setDefaultTimeout(60 * 1000);

    Given(/^Eu estou na pagina de visualizacao de estatisticas para turmas$/, async () => {
        await browser.get("http://localhost:4200/estatisticas");
        //await expect(browser.getTitle()).to.eventually.equal('Feedback');
        await $("a[name='class']").click();
    })

    Given(/^Nenhum aluno da turma "([^\"]*)" que pertence a escola "([^\"]*)" respondeu o formulario sobre "([^\"]*)"$/, async (turma, escola, sistema) => {
        await $("input[name='escola']").sendKeys(<string> escola);
        await $("input[name='turma']").sendKeys(<string> turma);
        await $("input[name='sistema']").sendKeys(<string> sistema);
        await element(by.buttonText('Listar Alunos')).click();
        var allStudents : ElementArrayFinder = element.all(by.name('namelist'));
        await allStudents;
        await allStudents.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });

    When(/^Eu tentar ver estatisticas sobre a turma "([^\"]*)"$/, async (turma) => {
        await $("input[name='turma']").getText().then(text => text === turma);
        //await expect($("input[name='turma']").getText()).toEqual(turma);
        await element(by.buttonText('Ver Estatisticas')).click();
    });

    Then(/^Eu consigo ver uma mensagem de erro$/, async () => {
        var alert = browser.switchTo().alert();
        await expect(alert.getText()).to.eventually.equal("Nenhum aluno respondeu a esse questionario.");
        await alert.dismiss();
    });

    Then(/^Fico na mesma pagina$/, async () => {
        await browser.get("http://localhost:4200/estClass");
    });
});