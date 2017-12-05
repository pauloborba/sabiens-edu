import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
import {async} from "q";
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

defineSupportCode(function ({ Given, When, Then, setDefaultTimeout }) {

    setDefaultTimeout(60 * 1000);

    Given(/^Estou na página de Cadastro de Conteudo$/, async () => {
        await browser.get("http://localhost:4200/");
        await $("a[name='sistemas']").click();
        await $("a[name='botaoAdd']").click();
        //await browser.get("http://localhost:4200/cadastroConteudo"); // aguarda para entrar novamente na pagina
        //await expect(browser.getTitle()).to.eventually.equal('Sistema Respiratório'); // observa se voltou para pagina do sistema
        
    })

    Given(/^So está contidos na lista de conteúdo o conteudo com seguinte titulo "([^\"]*)" , descricao de "([^\"]*)" , introducao de "([^\"]*)" , desenvolvimento com titulo de "([^\"]*)" e descricao "([^\"]*)" e por fim, conclusao com "([^\"]*)"$/, async (titulo,descriConteudo, intro, nomeTopico, descriTopico ,concl) => {
        
        //await expect(browser.getTitle()).to.eventually.equal('Adicionar conteudo');//checa se está
        await $("input[name='titulo']").sendKeys(<string> titulo); //Adicionando o conteudo na lista
        await $("input[name='descricao']").sendKeys(<string> descriConteudo);
        await $("textarea[name='introducao']").sendKeys(<string> intro);
        await $("textarea[name='nomeTopico']").sendKeys(<string> nomeTopico);
        await $("textarea[name='descricaoTopico']").sendKeys(<string> descriTopico);
        await $("textarea[name='conclusao']").sendKeys(<string> concl);
        await $("a[name='send']").click(); //inserir
    
    })

    Given(/^Preencho os campos de titulo com "([^\"]*)" , descricao de "([^\"]*)" , introducao de "([^\"]*)" , desenvolvimento com titulo de "([^\"]*)" e descricao "([^\"]*)" e por fim, conclusao com "([^\"]*)"$/, async (titulo,descriConteudo, intro, nomeTopico, descriTopico ,concl) => {
        
        //await expect(browser.getTitle()).to.eventually.equal('Adicionar conteudo');//checa se está
        await $("input[name='titulo']").sendKeys(<string> titulo); //Adicionando o conteudo na lista
        await $("input[name='descricao']").sendKeys(<string> descriConteudo);
        await $("textarea[name='introducao']").sendKeys(<string> intro);
        await $("textarea[name='nomeTopico']").sendKeys(<string> nomeTopico);
        await $("textarea[name='descricaoTopico']").sendKeys(<string> descriTopico);
        await $("textarea[name='conclusao']").sendKeys(<string> concl);
    
    })

    When(/^Eu tento inserir o conteudo$/, async () => {
        await $("a[name='send']").click();
    })

    Then(/^Uma mensagem de erro em forma de alert com o texto "([^\"]*)" aparece na tela$/, async (alertMes) => {
        var alert = browser.switchTo().alert()
        await expect(alert.getText()).to.eventually.equal(alertMes);
        await alert.dismiss();
    }) 
})