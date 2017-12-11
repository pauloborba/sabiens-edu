"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));
cucumber_1.defineSupportCode(function ({ Given, When, Then, setDefaultTimeout }) {
    setDefaultTimeout(60 * 1000);
    Given(/^Eu estou na pagina de visualizacao de estatisticas para alunos$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/estatisticas");
        //await expect(browser.getTitle()).to.eventually.equal('Feedback');
        yield protractor_1.$("a[name='student']").click();
    }));
    Given(/^O aluno "([^\"]*)" respondeu o formulario sobre "([^\"]*)"$/, (aluno, sistema) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='aluno']").sendKeys(aluno);
        yield protractor_1.$("input[name='sistema']").sendKeys(sistema);
        yield protractor_1.element(protractor_1.by.buttonText('Ver Estatisticas')).click();
        var allRespostas = protractor_1.element.all(protractor_1.by.name('respostasList'));
        yield allRespostas;
        yield allRespostas.then(elems => !expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    }));
    Given(/^Ele acertou a questao "(\d*)" marcando "([^\"]*)"$/, (questao, resposta) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("td[id='0']").getText().then(text => text === resposta);
        //await $("label[name='quest1']").getText().then(text => text === resposta);
    }));
    Given(/^Ele errou a questao "(\d*)" marcando "([^\"]*)"$/, (questao, resposta) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("td[id='2']").getText().then(text => text !== resposta);
        //await $("label[name='quest2']").getText().then(text => text !== resposta);
    }));
    When(/^Eu tentar ver estatisticas sobre o aluno "([^\"]*)"$/, (aluno) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.buttonText('Ver Estatisticas')).click();
    }));
    Then(/^Eu vejo que ele acertou "([^\"]*)" das questoes$/, (porcentagem) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='porcent']").getText().then(text => text === porcentagem);
    }));
});
