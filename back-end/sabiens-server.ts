import express = require('express');
import bodyParser = require("body-parser");

import { Sistema } from '../front-end/src/app/sistemas';
import { CadastroDeSistema } from '../front-end/src/app/cadastro de sistema';
import { Formulario } from '../front-end/src/app/formulario';

var app = express();
var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
app.use(bodyParser.json());

var sistemaVazio = function(nome: string) {
	return new Sistema(nome, '', [],[]);
}

var cadastro: CadastroDeSistema = new CadastroDeSistema([
	sistemaVazio('Nervoso'),
	sistemaVazio('Circulatorio'),
	sistemaVazio('Locomotor')
]);

var castToFormulario = function(obj: any) {
	var form: Formulario = new Formulario('','','');
	form.nome = obj._nome;
	form.id = obj._id;
	form.descricao = obj._descricao;
	form.questoes = obj._questoes;
	return form;
}

for(let sistema of cadastro.sistemas) {
	app.post('/' + sistema.nome + '/formulario', function (req: express.Request, res: express.Response) {
		var formularioQueNaoFunciona: Formulario = <Formulario> req.body;
		var formulario = castToFormulario(formularioQueNaoFunciona);
		
		res.send(sistema.cadastraFormulario(formulario));
	})
	
	app.post('/' + sistema.nome + '/simularResposta', function (req: express.Request, res: express.Response) {
		var formularioQueNaoFunciona: Formulario = <Formulario> req.body;
		var formulario = castToFormulario(formularioQueNaoFunciona);
		
		sistema.simularResposta(formulario);
	})
	
	app.put('/' + sistema.nome + '/altera', function (req: express.Request, res: express.Response) {
		var obj: any = req.body;
		var nomeOld = obj.nomeOld;
		var novoFormulario = castToFormulario(obj.formulario);
		var confirmado = obj.confirmado;
		
		res.send(sistema.alteraFormulario(nomeOld, novoFormulario, confirmado));
	})
	
	app.put('/' + sistema.nome + '/remove', function (req: express.Request, res: express.Response) {
		var obj: any = req.body;
		var formulario = castToFormulario(obj.formulario);
		var confirmado = obj.confirmado;
		
		res.send(sistema.removeFormulario(formulario, confirmado));
	})
}

app.get('/sistemas', function (req: express.Request, res: express.Response) {
	res.send(JSON.stringify(cadastro));
})

app.listen(3000, function () {
  console.log('Sabiens app listening on port 3000!')
})

export { app }