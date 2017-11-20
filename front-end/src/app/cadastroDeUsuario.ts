import { Usuario } from './usuario';

export class CadastroDeUsuario {
  private _usuarios: Usuario[];

  constructor(usuarios: Usuario[]) {
    this._usuarios = usuarios;
  }

  public get usuarios(): Usuario[] {
    return this._usuarios;
  }

  public set usuarios(value: Usuario[]) {
    this._usuarios = value;
  }
}
