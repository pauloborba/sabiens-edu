"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="material.ts"/>
const material_1 = require("./material");
class Formulario extends material_1.Material {
    /*
    .
     */
    constructor(nome, id, descricao) {
        super(nome, id, descricao);
        this._questoes = [];
    }
    /*
    .
     */
    get questoes() {
        return this._questoes;
    }
    set questoes(value) {
        this._questoes = value;
    }
    adicionarQuestao(questao, i) {
        this._questoes[i] = questao;
        return true;
    }
    removeQuestao(i) {
        this._questoes.splice(i, 1);
        return true;
    }
    check() {
        let erroString = 'ERRO:\nAs seguintes questões não possuem resposta:\n';
        let any = false;
        this.questoes.forEach((questao, index) => {
            if (questao._correta === -1) {
                erroString += (Number(index) + 1) + '\n';
                any = true;
            }
        });
        return any ? erroString : null;
    }
}
exports.Formulario = Formulario;
//# sourceMappingURL=formulario.js.map