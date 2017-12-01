"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const sistemas_1 = require("../front-end/src/app/sistemas");
const cadastro_de_sistema_1 = require("../front-end/src/app/cadastro de sistema");
const formulario_1 = require("../front-end/src/app/formulario");
var app = express();
exports.app = app;
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);
app.use(bodyParser.json());
var sistemaVazio = function (nome) {
    return new sistemas_1.Sistema(nome, '', [], []);
};
var cadastro = new cadastro_de_sistema_1.CadastroDeSistema([
    sistemaVazio('Nervoso'),
    sistemaVazio('Circulatorio'),
    sistemaVazio('Locomotor')
]);
var castToFormulario = function (obj) {
    var form = new formulario_1.Formulario('', '', '');
    form.nome = obj._nome;
    form.id = obj._id;
    form.descricao = obj._descricao;
    form.questoes = obj._questoes;
    return form;
};
for (let sistema of cadastro.sistemas) {
    app.post('/' + sistema.nome + '/formulario', function (req, res) {
        var formularioQueNaoFunciona = req.body;
        var formulario = castToFormulario(formularioQueNaoFunciona);
        var erroResposta = formulario.check();
        if (!erroResposta) {
            sistema.formularios.push(formulario);
        }
        console.log(erroResposta);
        res.send(erroResposta);
    });
}
app.put('/exemplo', function () {
    console.log('Example!');
});
app.listen(3000, function () {
    console.log('Sabiens app listening on port 3000!');
});
//# sourceMappingURL=sabiens-server.js.map