export class Topico {
  private _nome: string;
  private _descricao: string;

  constructor(nome: string, descricao: string) {
    this._nome = nome;
    this._descricao = descricao;
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
}
