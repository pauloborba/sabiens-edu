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
const request_promise_1 = require("request-promise");
const nock_1 = require("nock");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let page = 'http://localhost:4200';
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^estou na página "(.*)"$/, (pageName) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(page + '/login');
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal(pageName);
    }));
    Given(/^o sistema possui um usuário com email "(.*)" e senha "(.*)"$/, (email, password) => __awaiter(this, void 0, void 0, function* () {
        //SERVER MOCK
        yield nock_1.nock(page).get('/users').reply(200, [{ email: 'fatima@', senha: '1234' },
            { email: 'bernardo@', senha: '1234' }]);
        yield request_promise_1.request.get(page + '/users').then((body) => expect(body.includes({ email: 'bernardo@', senha: '1234' }).toEqual(true)));
    }));
    Given(/^preenchi o campo "(.*)" com "(.*)"$/, (fieldId, content) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$('input[id=\'' + fieldId + '\']').sendKeys(content);
    }));
    When(/^escolho entrar no sistema$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$('button[id=\'entry\'').click();
    }));
    Then(/^vejo a página "(.*)"$/, (pageName) => __awaiter(this, void 0, void 0, function* () {
        yield expect(protractor_1.browser.getTitle()).toEqual(pageName);
    }));
});
