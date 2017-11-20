export class Questao {
  private _titulo: string;
  private _enuncidado: string;
  private _alternativas: string[];
  private _correta: number;
  /*
  .
   */
  constructor(titulo: string, enunciado: string, alternativas: string[], correta: number){
    this._titulo = titulo;
    this._enuncidado = enunciado;
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

  public get enuncidado(): string {
    return this._enuncidado;
  }

  public set enuncidado(value: string) {
    this._enuncidado = value;
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
