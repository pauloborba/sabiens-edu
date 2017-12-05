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
let loginAs = function (user, senha) {
};
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^estou logado como um administrador$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal('SabiensEdu');
        yield loginAs('admin', 'senhaAdmin');
    }));
    Given(/^estou na página de cadastro de formulários do sistema "([^\"]*)"$/, (sistema) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("a[routerLink='/cadastroDeFormulario']").click();
    }));
    Given(/^eu dei ao formulário a cadastrar o título "([^\"]*)"$/, (titulo) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[id='titulo']").sendKeys(titulo);
    }));
    Given(/^eu defini que o formulário terá "(\d*)" questão$/, (questoes) => __awaiter(this, void 0, void 0, function* () {
        var counter = 0;
        while (counter < Number(questoes)) {
            yield protractor_1.$("button[id='addQ']").click();
            yield counter++;
        }
    }));
    Given(/^eu preenchi o texto da questão "(\d*)" com "([^\"]*)"$/, (questao, texto) => __awaiter(this, void 0, void 0, function* () {
        var idEnunciado = 'enunciado' + questao;
        yield protractor_1.element(protractor_1.by.id(idEnunciado)).sendKeys(texto);
    }));
    Given(/^dei como alternativas de resposta "([^\"]*)" e "([^\"]*)"$/, (alt1, alt2) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("button[id='addA1']").click();
        yield protractor_1.$("button[id='addA1']").click();
        yield protractor_1.$("input[id='alternativa1,1']").sendKeys(alt1);
        yield protractor_1.$("input[id='alternativa1,2']").sendKeys(alt2);
    }));
    When(/^eu submeto o formulário$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("button[id='submit']").click();
    }));
    Then(/^eu posso ver uma mensagem de erro$/, () => __awaiter(this, void 0, void 0, function* () {
        var counter = 0;
        while (counter < 8000000) {
            counter++;
            //essa maneira de esperar parece ser a única que funciona...
        }
        var alertDialog = protractor_1.browser.switchTo().alert();
        yield alertDialog;
        expect(alertDialog.getText()).not.to.be.null;
    }));
    Then(/^a mensagem informa que a questão "(\d*)" não possui resposta.$/, (questao) => __awaiter(this, void 0, void 0, function* () {
        var alertText = yield protractor_1.browser.switchTo().alert().getText();
        var questaoString = questao;
        expect(alertText).to.contain(questaoString);
        yield protractor_1.browser.switchTo().alert().accept();
    }));
});
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^existe no sistema "([^\"]*)" um formulário com título "([^\"]*)", com "([^\"]*)" questões$/, (sistema, titulo, questoes) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal('SabiensEdu');
        yield protractor_1.$("a[routerLink='/cadastroDeFormulario']").click();
        var counter = 1;
        while (counter <= Number(questoes)) {
            yield protractor_1.$("button[id='addQ']").click();
            yield protractor_1.element(protractor_1.by.id('addA' + counter.toString())).click();
            yield protractor_1.element(protractor_1.by.id('enunciado' + counter.toString())).sendKeys('blalbalblablalbalbla');
            yield protractor_1.element(protractor_1.by.xpath("//label[@for='check" + counter.toString() + ",1']")).click();
            yield counter++;
        }
        yield protractor_1.$("input[id='titulo']").sendKeys(titulo);
        yield protractor_1.$("button[id='submit']").click();
    }));
    When(/^eu tento cadastrar no sistema "([^\"]*)" um novo formulário com título "([^\"]*)", com "([^\"]*)" questão$/, (sistema, titulo, questoes) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal('SabiensEdu');
        yield protractor_1.$("a[routerLink='/cadastroDeFormulario']").click();
        var counter = 1;
        while (counter <= Number(questoes)) {
            yield protractor_1.$("button[id='addQ']").click();
            yield protractor_1.element(protractor_1.by.id('addA' + counter.toString())).click();
            yield protractor_1.element(protractor_1.by.id('enunciado' + counter.toString())).sendKeys('blalbalblablalbalbla');
            yield protractor_1.element(protractor_1.by.xpath("//label[@for='check" + counter.toString() + ",1']")).click();
            yield counter++;
        }
        yield protractor_1.$("input[id='titulo']").sendKeys(titulo);
        yield protractor_1.$("button[id='submit']").click();
        while (counter < 8000000) {
            counter++;
            //essa maneira de esperar parece ser a única que funciona...
        }
        yield protractor_1.browser.switchTo().alert().accept();
    }));
    Then(/^o sistema "([^\"]*)" não armazena o novo formulário$/, (sistema) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:3000/sistemas");
        var sistemas;
        yield protractor_1.element(protractor_1.by.xpath("//body")).getText()
            .then(source => sistemas = source);
        yield sistemas;
        sistemas = JSON.parse(sistemas)._sistemas;
        sistemas = sistemas.find(sys => sys._nome.toUpperCase() === sistema.toUpperCase());
        yield expect(sistemas._formularios.length).to.equal(1);
    }));
    Then(/^o formulário mantido no sistema "([^\"]*)" possui "([^\"]*)" questões.$/, (sistema, questoes) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:3000/sistemas");
        var sistemas;
        yield protractor_1.element(protractor_1.by.xpath("//body")).getText()
            .then(source => sistemas = source);
        yield sistemas;
        sistemas = JSON.parse(sistemas)._sistemas;
        sistemas = sistemas.find(sys => sys._nome.toUpperCase() === sistema.toUpperCase());
        yield expect(sistemas._formularios[0]._questoes.length).to.equal(Number(questoes));
    }));
});
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^estou na página de formulários do sistema "([^\"]*)"$/, (sistema) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal('SabiensEdu');
        yield protractor_1.$("a[routerLink='/listaFormularios']").click();
    }));
    Given(/^eu vejo um formulário "([^\"]*)"$/, (titulo) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("a[routerLink='/cadastroDeFormulario']").click();
        yield protractor_1.$("input[id='titulo']").sendKeys(titulo);
        yield protractor_1.$("button[id='submit']").click();
        yield protractor_1.browser.get("http://localhost:4200/");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal('SabiensEdu');
        yield protractor_1.$("a[routerLink='/listaFormularios']").click();
        yield expect(!!(protractor_1.element(protractor_1.by.id(titulo)))).to.be.true;
    }));
    Given(/^o aluno "([^\"]*)" já respondeu ao formulário "([^\"]*)"$/, (aluno, titulo) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.id(titulo)).click();
        yield protractor_1.element(protractor_1.by.id('fingir')).click();
    }));
    When(/^eu tento alterar o formulário "([^\"]*)"$/, (titulo) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("button[id='submit']").click();
    }));
    Then(/^eu vejo uma mensagem pedindo confirmação e me avisando que as estatísticas relativas ao formulário serão resetadas$/, () => __awaiter(this, void 0, void 0, function* () {
        var counter = 0;
        while (counter < 8000000) {
            counter++;
            //essa maneira de esperar parece ser a única que funciona...
            //colocar dentro de uma função pra não duplicar o código também não funcionou
        }
        yield protractor_1.browser.switchTo().alert().accept();
    }));
});
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    When(/^eu tento remover o formulário "([^\"]*)"$/, (titulo) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal('SabiensEdu');
        yield protractor_1.$("a[routerLink='/listaFormularios']").click();
        yield protractor_1.element(protractor_1.by.id(titulo)).click();
    }));
    Then(/^eu vejo uma mensagem pedindo confirmação e me informando que alguns alunos já responderam ao formulário$/, () => __awaiter(this, void 0, void 0, function* () {
        var counter = 0;
        while (counter < 8000000) {
            counter++;
            //essa maneira de esperar parece ser a única que funciona...
            //colocar dentro de uma função pra não duplicar o código também não funcionou
        }
        yield protractor_1.browser.switchTo().alert().accept();
    }));
});
