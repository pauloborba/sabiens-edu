"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Questao {
    /*
    .
     */
    constructor(titulo, enunciado, alternativas, correta) {
        this._titulo = titulo;
        this._enunciado = enunciado;
        this._alternativas = alternativas;
        this._correta = correta;
    }
    /*
    .
     */
    get titulo() {
        return this._titulo;
    }
    set titulo(value) {
        this._titulo = value;
    }
    get enunciado() {
        return this._enunciado;
    }
    set enunciado(value) {
        this._enunciado = value;
    }
    get alternativas() {
        return this._alternativas;
    }
    set alternativas(value) {
        this._alternativas = value;
    }
    get correta() {
        return this._correta;
    }
    set correta(value) {
        this._correta = value;
    }
}
exports.Questao = Questao;
//# sourceMappingURL=questao.js.map