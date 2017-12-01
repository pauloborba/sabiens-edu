import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Formulario } from './formulario';

@Injectable()
export class FormularioService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private url = 'http://localhost:3000';

	constructor(private http: Http) { }
	
	cadastraFormulario(formulario, nomeSistema): any {
		return this.http.post(this.url + '/' + nomeSistema + '/formulario', JSON.stringify(formulario), {headers: this.headers})
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