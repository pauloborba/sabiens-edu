import { Injectable } from '@angular/core';

import { Formulario } from './formulario';
import { Questao } from './questao';
import { Sistema } from './sistemas';
import { CadastroDeSistema } from './cadastro de sistema';

@Injectable()
export class FormularioService {
	cadastro: CadastroDeSistema = new CadastroDeSistema([
		this.sistemaVazio('Nervoso'),
		this.sistemaVazio('Circulatorio'),
		this.sistemaVazio('Locomotor')
	]);
	
	sistemaVazio(nome): Sistema {
		return new Sistema(nome, '', [],[]);
	}
	
	cadastraFormulario(formulario, nomeSistema): any {
		let erroResposta = formulario.check();
		this.cadastro.buscaSistema(nomeSistema).formularios.push(formulario);
		return erroResposta;
	}
	
	buscaSistema(cadastro, nome): Sistema {
		return cadastro.sistemas.find(sistema => sistema.nome === nome);
	}
	
	checaFormulario(formulario): any {
		if(this.semResposta(formulario)) {
			return this.erroSemResposta(formulario);
		}
		return null;
	}
	
	semResposta(formulario): boolean {
		let questoesSemResposta = formulario.questoes.filter(questao => questao.correta === -1);
		return questoesSemResposta.length > 0;
	}
	
	erroSemResposta(formulario): string {
		let erroString = 'Erro na submissão!\nAs seguintes questões não possuem resposta:\n';
		
		formulario.questoes.forEach((questao, index) => {
			if(questao.correta === -1) {
				erroString += (Number(index)+1) + '\n';
			}
		});
		
		return erroString;
	}
}