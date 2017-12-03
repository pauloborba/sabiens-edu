import { Formulario } from './formulario';
import { Conteudo } from './conteudo';

<<<<<<< HEAD
export class Sistema {
=======
export class Sistemas {
>>>>>>> 5381fda... Adição do esqueletos de classes
  private _nome: string;
  private _descricao: string;
  private _formularios: Formulario[];
  private _conteudos: Conteudo[];

  constructor(nome: string, descricao: string, formularios: Formulario[], conteudos: Conteudo[]) {
    this._nome = nome;
    this._descricao = descricao;
    this._formularios = formularios;
    this._conteudos = conteudos;
	
	this.respondido = [];
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public get descricao(): string {
    return this._descricao;
  }

  public set descricao(value: string) {
    this._descricao = value;
  }

  public get formularios(): Formulario[] {
    return this._formularios;
  }

  public set formularios(value: Formulario[]) {
    this._formularios = value;
  }

  public get conteudos(): Conteudo[] {
    return this._conteudos;
  }

  public set conteudos(value: Conteudo[]) {
    this._conteudos = value;
  }
  
  private respondido: boolean[];
  
  public simularResposta(formulario: Formulario): void {
    var index = this.formularios.findIndex(form => form.nome === formulario.nome);
	if(index != -1) {
	  this.respondido[index] = true;
	}
  }
  
  public alteraFormulario(oldNome: string, novoFormulario: Formulario, confirmado: boolean): string {
    var erroResposta = novoFormulario.check();
    var erroInexistente = this.checkInexistente(novoFormulario);
	var erroRespondido = confirmado? null : this.checkRespondido(oldNome);
	
    if (!erroResposta && !erroInexistente && !erroRespondido) {
	  this.formularios[this.formularios.findIndex(form => form.nome === oldNome)] = novoFormulario;
    }
	
    return erroResposta || erroInexistente || erroRespondido;
  }
  
  public cadastraFormulario(formulario: Formulario): string {
    var erroResposta = formulario.check();
    var erroDuplicado = this.checkDuplicado(formulario);
    if (!erroDuplicado) {
	  this.formularios.push(formulario);
	  this.respondido.push(false);
    }
    return erroResposta || erroDuplicado;
  }
  
  private checkDuplicado(formulario: Formulario): string {
    if(this.formularios.find(form => form.nome === formulario.nome)) {
	  return 'ERRO:\nJá existe um formulário com título "' + formulario.nome + '"\n';
	}
	return null;
  }
  
  private checkInexistente(formulario: Formulario): string {
    if(!this.formularios.find(form => form.nome === formulario.nome)) {
	  return 'ERRO:\nFormulário "' + formulario.nome + '" inexistente\n';
	}
	return null;
  }
  
  private checkRespondido(oldNome: string): string {
    if(this.respondido[this.formularios.findIndex(form => form.nome === oldNome)]) {
		return 'respondido';
	}
  }
}
