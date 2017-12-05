import { Turma } from './turma';
import { Formulario } from './formulario';

export class FeedbackDeTurma {
  private _formulario: Formulario;
  private _turma: Turma;
<<<<<<< HEAD
  private _ano: number;

  constructor(formulario: Formulario, turma: Turma, ano: number) {
    this._formulario = formulario;
    this._turma = turma;
    this._ano = ano;
  }

  get ano(): number {
    return this._ano;
  }

  set ano(value: number) {
    this._ano = value;
=======
  private _respostas: number[][];

  constructor(formulario: Formulario, turma: Turma, respostas: number[][]) {
    this._formulario = formulario;
    this._turma = turma;
    this._respostas = respostas;
>>>>>>> 5381fda... Adição do esqueletos de classes
  }

  public get formulario(): Formulario {
    return this._formulario;
  }

  public set formulario(value: Formulario) {
    this._formulario = value;
  }

  public get turma(): Turma {
    return this._turma;
  }

  public set turma(value: Turma) {
    this._turma = value;
  }
<<<<<<< HEAD
=======

  public get respostas(): number[][] {
    return this._respostas;
  }

  public set respostas(value: number[][]) {
    this._respostas = value;
  }
>>>>>>> 5381fda... Adição do esqueletos de classes
  private calcularNotaTurma(): number {
    // Esqueleto
    return 12;
  }
  private gerarEstatistica(): void {
    // Esqueleto
  }
}
