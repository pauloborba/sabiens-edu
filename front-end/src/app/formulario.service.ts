import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Formulario } from './formulario';
import { CadastroDeSistema } from './cadastro de sistema';

@Injectable()
export class FormularioService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private url = 'http://localhost:3000';

	constructor(private http: Http) { }
	
	simularResposta(formulario, nomeSistema): any {
		return this.http.post(this.url + '/' + nomeSistema + '/simularResposta', JSON.stringify(formulario), {headers: this.headers})
			.toPromise()
			.then(res => {
				return res.text();
			})
			.catch(this.tratarErro);
	}
	
	getSistemas(): any {
		return this.http.get(this.url + '/sistemas', {headers: this.headers})
			.toPromise()
			.then(res => {
				return res.json() as CadastroDeSistema;
			})
			.catch(this.tratarErro);
	}
	
	cadastraFormulario(formulario, nomeSistema): any {
		return this.http.post(this.url + '/' + nomeSistema + '/formulario', JSON.stringify(formulario), {headers: this.headers})
			.toPromise()
			.then(res => {
				return res.text();
			})
			.catch(this.tratarErro);
	}
	
	alteraFormulario(formularioOld, formulario, nomeSistema, confirmado): any {
		var obj: Object = { formulario: formulario, nomeOld: formularioOld.nome, confirmado: confirmado};
		return this.http.put(this.url + '/' + nomeSistema + '/altera', JSON.stringify(obj), {headers: this.headers})
			.toPromise()
			.then(res => {
				return res.text();
			})
			.catch(this.tratarErro);
	}
	
	removeFormulario(sistema, formulario, confirmado): any {
		var obj: Object = { formulario: formulario, confirmado: confirmado};
		return this.http.put(this.url + '/' + sistema._nome + '/remove', JSON.stringify(obj), {headers: this.headers})
			.toPromise()
			.then(res => {
				return res.text();
			})
			.catch(this.tratarErro);
	}

	private tratarErro(erro: any): Promise<any>{
		console.error('Acesso mal sucedido ao serviço de alunos',erro);
		return Promise.reject(erro.message || erro);
	}
}