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
    Given(/^Eu estou na pagina de visualizacao de estatisticas para escolas$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/estatisticas");
        //await expect(browser.getTitle()).to.eventually.equal('Feedback');
        yield protractor_1.$("a[name='school']").click();
    }));
    Given(/^A escola "([^\"]*)" ainda nao cadastrada$/, (escola) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='escola']").sendKeys(escola);
        yield protractor_1.element(protractor_1.by.buttonText('Verificar Escola')).click();
        var allSchool = protractor_1.element.all(protractor_1.by.name('schoolName'));
        yield allSchool;
        yield allSchool.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    }));
    When(/^Eu tentar ver estatisticas sobre a escola "([^\"]*)" para o formulario "([^\"]*)"$/, (escola, form) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='escola']").getText().then(text => text === escola);
        yield protractor_1.$("input[name='sistema']").sendKeys(form);
        yield protractor_1.element(protractor_1.by.buttonText('Ver Estatisticas')).click();
    }));
    Then(/^Eu fico vendo uma mensagem de erro$/, () => __awaiter(this, void 0, void 0, function* () {
        var alert = protractor_1.browser.switchTo().alert();
        yield expect(alert.getText()).to.eventually.equal("Escola nao cadastrada.");
        yield alert.dismiss();
    }));
    Then(/^Permaneco na mesma pagina$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/estSchool");
    }));
});
