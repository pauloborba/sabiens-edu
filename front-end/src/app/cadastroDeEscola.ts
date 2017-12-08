import { Escola } from './escola';

export class CadastroDeEscola {
  private _escolas: Escola[];

  constructor(escolas: Escola[]) {
    this._escolas = escolas;
  }

  get escolas(): Escola[] {
    return this._escolas;
  }

  set escolas(value: Escola[]) {
    this._escolas = value;
  }
}
