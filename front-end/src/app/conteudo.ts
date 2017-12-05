import { Material } from './material';
import { Topico } from './topico';

export class Conteudo extends Material {
  private _introducao: string;
  private _desenvolvimento: Topico[];
  private _conclusao: string;

  constructor(nome: string, id: string, descricao: string, introducao: string, desenvolvimento: Topico[], conclusao: string) {
    super(nome, id, descricao);
    this.nome = nome;
    this.id = id;
    this.descricao = descricao;
    this._introducao = introducao;
    this._desenvolvimento = desenvolvimento;
    this._conclusao = conclusao;
  }

  
  
  public get introducao(): string {
    return this._introducao;
  }

  public set introducao(value: string) {
    this._introducao = value;
  }

  public get desenvolvimento(): Topico[] {
    return this._desenvolvimento;
  }

  public set desenvolvimento(value: Topico[]) {
    this._desenvolvimento = value;
  }

  public get conclusao(): string {
    return this._conclusao;
  }

  public set conclusao(value: string) {
    this._conclusao = value;
  }
  
}
