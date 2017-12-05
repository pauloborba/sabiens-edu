export class Questao {
  private _titulo: string;
  private _enunciado: string;
  private _alternativas: string[];
  public _correta: number;
  /*
  .
   */
  constructor(titulo: string, enunciado: string, alternativas: string[], correta: number){
    this._titulo = titulo;
    this._enunciado = enunciado;
    this._alternativas = alternativas;
    this._correta = correta;
  }
  /*
  .
   */

  public get titulo(): string {
    return this._titulo;
  }

  public set titulo(value: string) {
    this._titulo = value;
  }

  public get enunciado(): string {
    return this._enunciado;
  }

  public set enunciado(value: string) {
    this._enunciado = value;
  }

  public get alternativas(): string[] {
    return this._alternativas;
  }

  public set alternativas(value: string[]) {
    this._alternativas = value;
  }

  public get correta(): number {
    return this._correta;
  }

  public set correta(value: number) {
    this._correta = value;
  }
}
