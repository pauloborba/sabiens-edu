import { Formulario } from './formulario';
<<<<<<< HEAD

export class Resposta {
  private _formulario: Formulario;
  private _respostas: number[];

  constructor(formulario: Formulario, respostas: number[]) {
    this._formulario = formulario;
=======
import { Aluno } from './aluno';

export class Resposta {
  private _formulario: Formulario;
  private _aluno: Aluno;
  private _respostas: number[];

  constructor(formulario: Formulario, aluno: Aluno, respostas: number[]) {
    this._formulario = formulario;
    this._aluno = aluno;
>>>>>>> 5381fda... Adição do esqueletos de classes
    this._respostas = respostas;
  }

  public get formulario(): Formulario {
    return this._formulario;
  }

  public set formulario(value: Formulario) {
    this._formulario = value;
  }

<<<<<<< HEAD
=======
  public get aluno(): Aluno {
    return this._aluno;
  }

  public set aluno(value: Aluno) {
    this._aluno = value;
  }

>>>>>>> 5381fda... Adição do esqueletos de classes
  public get respostas(): number[] {
    return this._respostas;
  }

  public set respostas(value: number[]) {
    this._respostas = value;
  }
  public calcularNota(): number{
    // Return de teste
    return 12;
  }
}
