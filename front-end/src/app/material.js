"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Material {
    /*
    .
     */
    constructor(nome, id, descricao) {
        this._nome = nome;
        this._id = id;
        this._descricao = descricao;
    }
    /*
    .
     */
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get descricao() {
        return this._descricao;
    }
    set descricao(value) {
        this._descricao = value;
    }
}
exports.Material = Material;
//# sourceMappingURL=material.js.map