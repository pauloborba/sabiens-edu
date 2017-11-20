import { Formulario } from './formulario';
import { Conteudo } from './conteudo';

export class Sistemas {
  private _nome: string;
  private _descricao: string;
  private _formularios: Formulario[];
  private _conteudos: Conteudo[];

  constructor(nome: string, descricao: string, formularios: Formulario[], conteudos: Conteudo[]) {
    this._nome = nome;
    this._descricao = descricao;
    this._formularios = formularios;
    this._conteudos = conteudos;
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
}
