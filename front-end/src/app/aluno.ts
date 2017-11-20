import { Usuario } from './usuario';
import { Turma } from './turma';

export class Aluno extends Usuario {
  private _turma: Turma;
  /*
  .
   */
  constructor(nome: string, senha: string, email: string, turma: Turma) {
    super(nome, senha, email, 0);
    this._turma = turma;
  }

  public get turma(): Turma {
    return this._turma;
  }

  public set turma(value: Turma) {
    this._turma = value;
  }
}
