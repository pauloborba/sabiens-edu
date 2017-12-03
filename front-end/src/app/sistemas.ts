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
  
  public alteraFormulario(oldNome: string, novoFormulario: Formulario, confirmado: boolean): string {
    var index = this.buscaNomeFormulario(oldNome);
    var erro = this.erroAlteracao(novoFormulario, index, confirmado);
	
    if (!erro) {
	  this.formularios[index] = novoFormulario;
	  this.respondido[index] = false;
    }
	
    return erro;
  }
  
  public cadastraFormulario(formulario: Formulario): string {
    var index = this.buscaNomeFormulario(formulario.nome);
	var erro = this.erroCadastro(formulario, index);
	
	if (!erro) {
	  this.formularios.push(formulario);
	  this.respondido.push(false);
	}
	
    return erro;
  }
  
  private buscaNomeFormulario(nome: string): number {
    return this.formularios.findIndex(form => form.nome === nome);
  }
  
  private erroAlteracao(formulario: Formulario, index: number, confirmado: boolean): string {
    var erroResposta = formulario.check();
	var erroInexistente = this.checkInexistente(index);
	var erroRespondido = confirmado? null : this.checkRespondido(index);
	
	return erroResposta || erroInexistente || erroRespondido;
  }
  
  private erroCadastro(formulario: Formulario, index: number): string {
    var erroResposta = formulario.check();
    var erroDuplicado = this.checkDuplicado(formulario, index);
	return erroResposta || erroDuplicado;
  }
  
  private checkInexistente(index: number): string {
    if(index === -1) {
	  return 'ERRO:\nFormulário inexistente.\nTente cadastrar como um novo formulário!';
	}
	return null;
  }
  
  private checkDuplicado(formulario: Formulario, index: number): string {
    if(index != -1) {
	  return 'ERRO:\nJá existe um formulário com título "' + formulario.nome + '"\n';
	}
	return null;
  }
  
  //a implementação real de detecção de resposta depende do código de meus membros de equipe
  //o código daqui pra baixo o substitui, para propósitos de teste e desenvolvimento
  
  private respondido: boolean[];
  
  public simularResposta(formulario: Formulario): void {
    var index = this.formularios.findIndex(form => form.nome === formulario.nome);
	if(index != -1) {
	  this.respondido[index] = true;
	}
  }
  
  private checkRespondido(index: number): string {
    if(this.respondido[index]) {
	  return 'respondido';
	}
  }
}
