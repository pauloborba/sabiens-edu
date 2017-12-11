export abstract class Material {
  private _nome: string;
  private _id: string;
  private _descricao: string;
  /*
  .
   */
  
  constructor(nome: string, id: string, descricao: string){
    this._nome = nome;
    this._id = id;
    this._descricao = descricao;
  }
  /*
  .
   */
  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get descricao(): string {
    return this._descricao;
  }

  public set descricao(value: string) {
    this._descricao = value;
  }

}
