"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sistema {
    constructor(nome, descricao, formularios, conteudos) {
        this._nome = nome;
        this._descricao = descricao;
        this._formularios = formularios;
        this._conteudos = conteudos;
        this.respondido = [];
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
    get formularios() {
        return this._formularios;
    }
    set formularios(value) {
        this._formularios = value;
    }
    get conteudos() {
        return this._conteudos;
    }
    set conteudos(value) {
        this._conteudos = value;
    }
    alteraFormulario(oldNome, novoFormulario, confirmado) {
        var index = this.buscaNomeFormulario(oldNome);
        var erro = this.erroAlteracao(novoFormulario, index, confirmado);
        if (!erro) {
            this.formularios[index] = novoFormulario;
            this.respondido[index] = false;
        }
        return erro;
    }
    cadastraFormulario(formulario) {
        var index = this.buscaNomeFormulario(formulario.nome);
        var erro = this.erroCadastro(formulario, index);
        if (!erro) {
            this.formularios.push(formulario);
            this.respondido.push(false);
        }
        return erro;
    }
    buscaNomeFormulario(nome) {
        return this.formularios.findIndex(form => form.nome === nome);
    }
    erroAlteracao(formulario, index, confirmado) {
        var erroResposta = formulario.check();
        var erroInexistente = this.checkInexistente(index);
        var erroRespondido = confirmado ? null : this.checkRespondido(index);
        return erroResposta || erroInexistente || erroRespondido;
    }
    erroCadastro(formulario, index) {
        var erroResposta = formulario.check();
        var erroDuplicado = this.checkDuplicado(formulario, index);
        return erroResposta || erroDuplicado;
    }
    checkInexistente(index) {
        if (index === -1) {
            return 'ERRO:\nFormulário inexistente.\nTente cadastrar como um novo formulário!';
        }
        return null;
    }
    checkDuplicado(formulario, index) {
        if (index != -1) {
            return 'ERRO:\nJá existe um formulário com título "' + formulario.nome + '"\n';
        }
        return null;
    }
    simularResposta(formulario) {
        var index = this.formularios.findIndex(form => form.nome === formulario.nome);
        if (index != -1) {
            this.respondido[index] = true;
        }
    }
    checkRespondido(index) {
        if (this.respondido[index]) {
            return 'respondido';
        }
    }
}
exports.Sistema = Sistema;
//# sourceMappingURL=sistemas.js.map