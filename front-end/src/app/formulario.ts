///<reference path="material.ts"/>
import { Material } from './material';
import { Questao } from './questao';
export class Formulario extends Material {
  private _questoes: Questao[];
  /*
  .
   */
  constructor(nome: string, id: string, descricao: string) {
    super(nome, id, descricao);
	this._questoes = [];
  }
  /*
  .
   */
  public get questoes(): Questao[] {
    return this._questoes;
  }

  public set questoes(value: Questao[]) {
    this._questoes = value;
  }
  public adicionarQuestao(questao: Questao, i: number): boolean {
    this._questoes[i] = questao;
    return true;
  }
  public removeQuestao(i: number): boolean {
    this._questoes.splice(i,1);
    return true;
  }
	
  check(): any {
    if(this.semResposta()) {
      return this.erroSemResposta();
    }
    return null;
  }
  
  semResposta(): boolean {
    let questoesSemResposta = this.questoes.filter(questao => {
      return questao.correta === -1
    });
    return questoesSemResposta.length > 0;
  }
  
  erroSemResposta(): string {
    let erroString = 'Erro na submissão!\nAs seguintes questões não possuem resposta:\n';
    
    this.questoes.forEach((questao, index) => {
      if(questao.correta === -1) {
        erroString += (Number(index)+1) + '\n';
      }
    });
    
    return erroString;
  }
}
