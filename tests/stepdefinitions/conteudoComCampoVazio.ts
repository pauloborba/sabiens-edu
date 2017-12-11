import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
import {async} from "q";
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));


defineSupportCode(function ({ Given, When, Then, setDefaultTimeout }) {

    setDefaultTimeout(60 * 1000);

    Given(/^Estou na página de Cadastro de Conteudo no sistema$/, async () => {
        await browser.get("http://localhost:4200/");
        await $("a[name='sistemas']").click();
        await $("a[name='botaoAdd']").click();
        //await browser.get("http://localhost:4200/cadastroConteudo"); // aguarda para entrar novamente na pagina
        //await expect(browser.getTitle()).to.eventually.equal('Sistema Respiratório'); // observa se voltou para pagina do sistema
        
    })

    Given(/^Preencho um novo conteudo com campo titulo de "([^\"]*)" , descricao de "([^\"]*)" , introducao de "([^\"]*)" , desenvolvimento com titulo de "([^\"]*)" e descricao "([^\"]*)", porém não preencho nada no campo de conclusao$/, async (titulo,descriConteudo, intro, nomeTopico, descriTopico) => {
        
        //await expect(browser.getTitle()).to.eventually.equal('Adicionar conteudo');//checa se está
        await $("input[name='titulo']").sendKeys(<string> titulo); //Adicionando o conteudo na lista
        await $("input[name='descricao']").sendKeys(<string> descriConteudo);
        await $("textarea[name='introducao']").sendKeys(<string> intro);
        await $("textarea[name='nomeTopico']").sendKeys(<string> nomeTopico);
        await $("textarea[name='descricaoTopico']").sendKeys(<string> descriTopico);
    
    })

    When(/^Eu tento inserir o novo conteudo, com campo de conclusão vazio$/, async () => {
        await $("a[name='send']").click();
    })

    Then(/^Um alerta aparece com a mensagem "([^\"]*)" aparece, pois um campo não foi preenchido$/, async (alertMes) => {
        var alert = browser.switchTo().alert()
        await expect(alert.getText()).to.eventually.equal(alertMes);
        await alert.dismiss();
        
    }) 
})