import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
import {async} from "q";
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

defineSupportCode(function ({ Given, When, Then, setDefaultTimeout }) {

    setDefaultTimeout(60 * 1000);

    Given(/^Eu estou na pagina de visualizacao de estatisticas para alunos$/, async () => {
        await browser.get("http://localhost:4200/estatisticas");
        //await expect(browser.getTitle()).to.eventually.equal('Feedback');
        await $("a[name='student']").click();
    })

    Given(/^O aluno "([^\"]*)" respondeu o formulario sobre "([^\"]*)"$/, async (aluno, sistema) => {
        await $("input[name='aluno']").sendKeys(<string> aluno);
        await $("input[name='sistema']").sendKeys(<string> sistema);
        await element(by.buttonText('Ver Estatisticas')).click();
        var allRespostas : ElementArrayFinder = element.all(by.name('respostasList'));
        await allRespostas;
        await allRespostas.then(elems => !expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });

    Given(/^Ele acertou a questao "(\d*)" marcando "([^\"]*)"$/, async (questao, resposta) => {
        await $("td[id='0']").getText().then(text => text === resposta);
        //await $("label[name='quest1']").getText().then(text => text === resposta);
    });

    Given(/^Ele errou a questao "(\d*)" marcando "([^\"]*)"$/, async(questao, resposta) => {
        await $("td[id='2']").getText().then(text => text !== resposta);
        //await $("label[name='quest2']").getText().then(text => text !== resposta);
    });

    When(/^Eu tentar ver estatisticas sobre o aluno "([^\"]*)"$/, async (aluno) => {
        await element(by.buttonText('Ver Estatisticas')).click();
    });

    Then(/^Eu vejo que ele acertou "([^\"]*)" das questoes$/, async (porcentagem) => {
        await $("input[name='porcent']").getText().then(text => text === porcentagem);
    });
})