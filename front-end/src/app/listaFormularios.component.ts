import { Component, OnInit } from '@angular/core';
import { MaterializeDirective } from "angular2-materialize";

import { CadastroDeFormularioComponent } from './cadastroDeFormulario.component';
import { CadastroDeSistema } from './cadastro de sistema';
import { Sistema } from './sistemas';
import { Formulario } from './formulario';
import { Questao } from './questao';
import { FormularioService } from './formulario.service';

@Component({
  selector: 'listaFormularios',
  templateUrl: './listaFormularios.component.html'
})

export class ListaFormulariosComponent extends CadastroDeFormularioComponent implements OnInit {

	confirmado: boolean;
	confirmadoRemocao: boolean[][] = [];
	formularioOld: Formulario;
	cadastro: any = new CadastroDeSistema([]);
	modoLista: boolean = true;
	
	ngOnInit(): void {
		this.formularioService.getSistemas()
		.then(s => {
			this.cadastro = s;
			for(let sistema in s._sistemas) {
				this.confirmadoRemocao.push([]);
				for(let form of s._sistemas[sistema]._formularios) {
					this.confirmadoRemocao[sistema].push(false);
				}
			}
			console.log(this.confirmadoRemocao);
		})
		.catch(erro => alert(erro));
	}
	
	modoFormulario(formularioQueNaoFunciona, sistema) {
		let form: Formulario = new Formulario(formularioQueNaoFunciona._nome,
		                                      formularioQueNaoFunciona._id,
		                                      formularioQueNaoFunciona._descricao);
		for(let q of formularioQueNaoFunciona._questoes) {
			form.questoes.push(new Questao(q._titulo, q._enunciado, q._alternativas, q._correta));
		}
		this.formulario = form;
		this.formularioOld = form;
		this.sistema = sistema;
		
		this.modoLista = false;
		this.confirmado = false;
	}
	
	fingir(): void {
		this.formularioService.simularResposta(this.formularioOld, this.sistema);
	}
	
	submeter(): void {
		this.formularioService.alteraFormulario(this.formularioOld, this.formulario, this.sistema, this.confirmado)
		.then(erro => {
			if(erro) {
				if(erro === 'respondido') {
					alert('Alguns alunos já responderam ao formulário!\nAo alterar o formulário, as estatísticas associadas serão resetadas.\nSe deseja proceder, clique "SUBMETER" novamente.')
					this.confirmado = true;
				} else {
					alert(erro);
				}
			} else {
				this.success = true;
			}
		})
		.catch(erro => alert(erro));
	}
	
	remove(indexSistema, indexFormulario): void {
		var sys = this.cadastro._sistemas[indexSistema];
		var form = sys._formularios[indexFormulario];
		var confirmado = this.confirmadoRemocao[indexSistema][indexFormulario];
		
		this.formularioService.removeFormulario(sys, form, confirmado)
		.then(erro => {
			if(erro) {
				if(erro === 'respondido') {
					alert('Alguns alunos já responderam ao formulário!\nSe deseja proceder, clique para remover o formulario ' + form._nome + ' novamente')
					this.confirmadoRemocao[indexSistema][indexFormulario] = true;
				} else {
					alert(erro);
				}
			} else {
				this.retiraFormulario(indexSistema, indexFormulario);
			}
		})
		.catch(erro => alert(erro));
	}
	
	retiraFormulario(indexSistema, indexFormulario): void {
		this.cadastro._sistemas[indexSistema]._formularios.splice(indexFormulario, 1);
		this.confirmadoRemocao[indexSistema].splice(indexFormulario, 1);
	}
	
	return(): void {
		this.confirmado = false;
		this.success = false;
		this.modoLista = true;
	}
}
