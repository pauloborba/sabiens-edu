import { Turma } from './turma';
import { Formulario } from './formulario';

export class FeedbackDeTurma {
  private _formulario: Formulario;
  private _turma: Turma;
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
  private calcularNotaTurma(): number {
    // Esqueleto
    return 12;
  }
  private gerarEstatistica(): void {
    // Esqueleto
  }
}
