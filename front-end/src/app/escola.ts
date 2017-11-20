import { Turma } from './turma';
export class Escola {
  private _turmas: Turma[];
  private _nome: string;

  constructor(turmas: Turma[], nome: string) {
    this._turmas = turmas;
    this._nome = nome;
  }

  public get turmas(): Turma[] {
    return this._turmas;
  }

  public set turmas(value: Turma[]) {
    this._turmas = value;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }
}
