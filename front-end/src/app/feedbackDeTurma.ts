import { Turma } from './turma';
import { Formulario } from './formulario';

export class FeedbackDeTurma {
  private _formulario: Formulario;
  private _turma: Turma;
  private _respostas: number[][];

  constructor(formulario: Formulario, turma: Turma, respostas: number[][]) {
    this._formulario = formulario;
    this._turma = turma;
    this._respostas = respostas;
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

  public get respostas(): number[][] {
    return this._respostas;
  }

  public set respostas(value: number[][]) {
    this._respostas = value;
  }
  private calcularNotaTurma(): number {
    // Esqueleto
    return 12;
  }
  private gerarEstatistica(): void {
    // Esqueleto
  }
}
