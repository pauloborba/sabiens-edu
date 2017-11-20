import { Aluno } from './aluno';

export class Turma {
  private _id: number;
  private _nome: string;
  private _alunos: Aluno[];

  constructor(id: number, nome: string, alunos: Aluno[]) {
    this._id = id;
    this._nome = nome;
    this._alunos = alunos;
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public get alunos(): Aluno[] {
    return this._alunos;
  }

  public set alunos(value: Aluno[]) {
    this._alunos = value;
  }
}
