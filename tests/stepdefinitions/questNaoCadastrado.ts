import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
import {async} from "q";
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

defineSupportCode(function ({ Given, When, Then, setDefaultTimeout }) {

    setDefaultTimeout(60 * 1000);

    Given(/^Eu estou na pagina de visualizacao de estatisticas para as escolas$/, async () => {
        await browser.get("http://localhost:4200/estatisticas");
        //await expect(browser.getTitle()).to.eventually.equal('Feedback');
        await $("a[name='school']").click();
    });

    Given(/^Eu quero gerar estatisticas sobre a escola "([^\"]*)"$/, async(escola) => {
        await $("input[name='escola']").sendKeys(<string> escola);
    });

    Given(/^Nenhum questionario sobre "([^\"]*)" foi cadastrado$/, async (sistema) => {
        await $("input[name='sistema']").sendKeys(<string> sistema);
        await element(by.buttonText('Listar Formularios')).click();
        var allQuests : ElementArrayFinder = element.all(by.name('questionarioList'));
        await allQuests;
        await allQuests.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });

    When(/^Eu tentar ver estatisticas sobre a escola "([^\"]*)"$/, async (escola) => {
        await $("input[name='escola']").getText().then(text => text === "");
        await element(by.buttonText('Ver Estatisticas')).click();
    });

    Then(/^Eu vejo uma mensagem de erro$/, async () => {
        var alert = browser.switchTo().alert();
        await expect(alert.getText()).to.eventually.equal("Nenhum questionario sobre esse sistema foi cadastrado.");
        alert.dismiss();
    });

    Then(/^Continuo na mesma pagina$/, async () => {
        await browser.get("http://localhost:4200/estSchool");
    });
});