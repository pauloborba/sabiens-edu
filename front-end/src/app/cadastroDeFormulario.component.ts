import { Component } from '@angular/core';
import { Formulario } from './formulario';
import { Questao } from './questao';
import { FormularioService } from './formulario.service';

@Component({
  selector: 'cadastroDeFormulario',
  templateUrl: './cadastroDeFormulario.component.html'
})

export class CadastroDeFormularioComponent {
	constructor(formularioService: FormularioService) {
		this.formularioService = formularioService;
	}
	
	formularioService: FormularioService;
	formulario: Formulario = new Formulario('','','');
	sistema: string = 'Nervoso';
	success: boolean = false;
	
	setSistema(nome): void {
		this.sistema = nome;
	}
	
	criarQuestao(): void {
		let q = new Questao('','',[],-1);
		this.formulario.adicionarQuestao(q, this.formulario.questoes.length);
	}
	
	removerQuestao(i: number): void {
		this.formulario.removeQuestao(i);
	}
	
	criarAlternativa(i): void {
		this.formulario.questoes[i].alternativas.push('');
	}
	
	removerAlternativa(i,j): void {
		this.formulario.questoes[i].alternativas.splice(j,1);
		if(this.formulario.questoes[i].alternativas.length == 0) {
			this.formulario.questoes[i].correta = -1;
		}
	}
	
	tracky(i, thing): any {
		return i;
	}
	
	submeter(): any {
		this.formularioService.cadastraFormulario(this.formulario, this.sistema)
		.then(erro => {
			if(erro) {
				alert(erro);
			} else {
				this.success = true;
			}
		})
		.catch(erro => alert(erro));
	}
}
