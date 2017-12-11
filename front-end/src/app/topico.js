"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Topico {
    constructor(nome, descricao) {
        this._nome = nome;
        this._descricao = descricao;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get descricao() {
        return this._descricao;
    }
    set descricao(value) {
        this._descricao = value;
    }
}
exports.Topico = Topico;
//# sourceMappingURL=topico.js.map