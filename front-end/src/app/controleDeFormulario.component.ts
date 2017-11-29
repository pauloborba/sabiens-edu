import { Component } from '@angular/core';
import { Formulario } from './formulario';
import { Questao } from './questao';

@Component({
  selector: 'controleDeFormulario',
  templateUrl: './controleDeFormulario.component.html',
  styleUrls: ['./controleDeFormulario.component.css']
})
export class ControleDeFormularioComponent {
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
