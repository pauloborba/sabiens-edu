import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
import {async} from "q";
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

defineSupportCode(function ({ Given, When, Then, setDefaultTimeout }) {

    setDefaultTimeout(60 * 1000);

    Given(/^Eu estou na pagina de visualizacao de estatisticas para escolas$/, async () => {
        await browser.get("http://localhost:4200/estatisticas");
        //await expect(browser.getTitle()).to.eventually.equal('Feedback');
        await $("a[name='school']").click();
    });

    Given(/^A escola "([^\"]*)" ainda nao cadastrada$/, async(escola) => {
        await $("input[name='escola']").sendKeys(<string> escola);
        await element(by.buttonText('Verificar Escola')).click();
        var allSchool : ElementArrayFinder = element.all(by.name('schoolName'));
        await allSchool;
        await allSchool.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });

    When(/^Eu tentar ver estatisticas sobre a escola "([^\"]*)" para o formulario "([^\"]*)"$/, async (escola, form) => {
        await $("input[name='escola']").getText().then(text => text === escola);
        await $("input[name='sistema']").sendKeys(<string> form);
        await element(by.buttonText('Ver Estatisticas')).click();
    });

    Then(/^Eu fico vendo uma mensagem de erro$/, async () => {
        var alert = browser.switchTo().alert();
        await expect(alert.getText()).to.eventually.equal("Escola nao cadastrada.");
        await alert.dismiss();
    });

    Then(/^Permaneco na mesma pagina$/, async () => {
        await browser.get("http://localhost:4200/estSchool");
    });
})