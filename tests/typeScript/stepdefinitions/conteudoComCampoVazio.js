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
    Given(/^Estou na página de Cadastro de Conteudo no sistema$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield protractor_1.$("a[name='sistemas']").click();
        yield protractor_1.$("a[name='botaoAdd']").click();
        //await browser.get("http://localhost:4200/cadastroConteudo"); // aguarda para entrar novamente na pagina
        //await expect(browser.getTitle()).to.eventually.equal('Sistema Respiratório'); // observa se voltou para pagina do sistema
    }));
    Given(/^Preencho um novo conteudo com campo titulo de "([^\"]*)" , descricao de "([^\"]*)" , introducao de "([^\"]*)" , desenvolvimento com titulo de "([^\"]*)" e descricao "([^\"]*)", porém não preencho nada no campo de conclusao$/, (titulo, descriConteudo, intro, nomeTopico, descriTopico) => __awaiter(this, void 0, void 0, function* () {
        //await expect(browser.getTitle()).to.eventually.equal('Adicionar conteudo');//checa se está
        yield protractor_1.$("input[name='titulo']").sendKeys(titulo); //Adicionando o conteudo na lista
        yield protractor_1.$("input[name='descricao']").sendKeys(descriConteudo);
        yield protractor_1.$("textarea[name='introducao']").sendKeys(intro);
        yield protractor_1.$("textarea[name='nomeTopico']").sendKeys(nomeTopico);
        yield protractor_1.$("textarea[name='descricaoTopico']").sendKeys(descriTopico);
    }));
    When(/^Eu tento inserir o novo conteudo, com campo de conclusão vazio$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("a[name='send']").click();
    }));
    Then(/^Um alerta aparece com a mensagem "([^\"]*)" aparece, pois um campo não foi preenchido$/, (alertMes) => __awaiter(this, void 0, void 0, function* () {
        var alert = protractor_1.browser.switchTo().alert();
        yield expect(alert.getText()).to.eventually.equal(alertMes);
        yield alert.dismiss();
    }));
});
