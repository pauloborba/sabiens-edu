"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("./material");
class Conteudo extends material_1.Material {
    constructor(nome, id, descricao, introducao, desenvolvimento, conclusao) {
        super(nome, id, descricao);
        this._introducao = introducao;
        this._desenvolvimento = desenvolvimento;
        this._conclusao = conclusao;
    }
    get introducao() {
        return this._introducao;
    }
    set introducao(value) {
        this._introducao = value;
    }
    get desenvolvimento() {
        return this._desenvolvimento;
    }
    set desenvolvimento(value) {
        this._desenvolvimento = value;
    }
    get conclusao() {
        return this._conclusao;
    }
    set conclusao(value) {
        this._conclusao = value;
    }
}
exports.Conteudo = Conteudo;
//# sourceMappingURL=conteudo.js.map