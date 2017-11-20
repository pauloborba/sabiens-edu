import { Usuario } from './usuario';
import { Task } from './task';

export class Monitor extends Usuario {
  private _listaTarefas: Task[];

  constructor(nome: string, senha: string, email: string, listaTarefas: Task[]) {
    super(nome, senha, email, 1);
    this._listaTarefas = listaTarefas;
  }

  public get listaTarefas(): Task[] {
    return this._listaTarefas;
  }

  public set listaTarefas(value: Task[]) {
    this._listaTarefas = value;
  }
}
