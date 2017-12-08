import {Sistema} from './sistemas';

export class CadastroDeSistema {
  private _sistemas: Sistema[];

  constructor(sistemas: Sistema[]) {
    this._sistemas = sistemas;
  }

  get sistemas(): Sistema[] {
    return this._sistemas;
  }

  set sistemas(value: Sistema[]) {
    this._sistemas = value;
  }
	
  buscaSistema(nome: string): Sistema {
    return this.sistemas.find(sistema => sistema.nome === nome);
  }
}
