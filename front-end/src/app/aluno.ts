import { Usuario } from './usuario';
import { Turma } from './turma';
import {Resposta} from './resposta';

export class Aluno extends Usuario {
  private _turma: Turma;
  private _respostas: Resposta[];
  /*
  .
   */

  constructor(nome: string, senha: string, email: string, turma: Turma, respostas: Resposta[]) {
    super(nome, senha, email);
    this._turma = turma;
    this._respostas = respostas;
  }

  get respostas(): Resposta[] {
    return this._respostas;
  }

  set respostas(value: Resposta[]) {
    this._respostas = value;
  }

  public get turma(): Turma {
    return this._turma;
  }

  public set turma(value: Turma) {
    this._turma = value;
  }
}
