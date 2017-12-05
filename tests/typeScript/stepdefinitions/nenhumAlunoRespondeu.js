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
    Given(/^Eu estou na pagina de visualizacao de estatisticas para turmas$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/estatisticas");
        //await expect(browser.getTitle()).to.eventually.equal('Feedback');
        yield protractor_1.$("a[name='class']").click();
    }));
    Given(/^Nenhum aluno da turma "([^\"]*)" que pertence a escola "([^\"]*)" respondeu o formulario sobre "([^\"]*)"$/, (turma, escola, sistema) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='escola']").sendKeys(escola);
        yield protractor_1.$("input[name='turma']").sendKeys(turma);
        yield protractor_1.$("input[name='sistema']").sendKeys(sistema);
        yield protractor_1.element(protractor_1.by.buttonText('Listar Alunos')).click();
        var allStudents = protractor_1.element.all(protractor_1.by.name('namelist'));
        yield allStudents;
        yield allStudents.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    }));
    When(/^Eu tentar ver estatisticas sobre a turma "([^\"]*)"$/, (turma) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='turma']").getText().then(text => text === turma);
        //await expect($("input[name='turma']").getText()).toEqual(turma);
        yield protractor_1.element(protractor_1.by.buttonText('Ver Estatisticas')).click();
    }));
    Then(/^Eu consigo ver uma mensagem de erro$/, () => __awaiter(this, void 0, void 0, function* () {
        var alert = protractor_1.browser.switchTo().alert();
        yield expect(alert.getText()).to.eventually.equal("Nenhum aluno respondeu a esse questionario.");
        yield alert.dismiss();
    }));
    Then(/^Fico na mesma pagina$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/estClass");
    }));
});
