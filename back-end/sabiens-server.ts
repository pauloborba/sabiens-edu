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
		
		var erro = formulario.check();
		if(!erro) {
			erro |= sistema.cadastraFormulario(formulario);
		}
		res.send(erro);
	})
}

app.get('/sistemas', function (req: express.Request, res: express.Response) {
	res.send(JSON.stringify(cadastro));
})

app.listen(3000, function () {
  console.log('Sabiens app listening on port 3000!')
})

export { app }