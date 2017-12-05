"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CadastroDeSistema {
    constructor(sistemas) {
        this._sistemas = sistemas;
    }
    get sistemas() {
        return this._sistemas;
    }
    set sistemas(value) {
        this._sistemas = value;
    }
    buscaSistema(nome) {
        return this.sistemas.find(sistema => sistema.nome === nome);
    }
}
exports.CadastroDeSistema = CadastroDeSistema;
//# sourceMappingURL=cadastro de sistema.js.map