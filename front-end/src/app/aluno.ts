import { Usuario } from './usuario';
import { Turma } from './turma';
import {Resposta} from "./resposta";

export class Aluno extends Usuario {
    private _turma: Turma;
    private _respostas: Resposta[];
    /*
    .
     */
    constructor(nome: string, senha: string, email: string, turma: Turma) {
        super(nome, senha, email, 0);
        this._turma = turma;
        this._respostas = [];
    }

    public get turma(): Turma {
        return this._turma;
    }

    public set turma(value: Turma) {
        this._turma = value;
    }

    public get respostas() : Resposta[] {
        return this._respostas;
    }

    public set respostas(value: Resposta[]) {
        this._respostas = value;
    }

    public addResposta(resposta : Resposta) : void {
        this._respostas.push(resposta);
    }
}