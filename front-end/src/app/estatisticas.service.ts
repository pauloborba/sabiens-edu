import { Injectable } from '@angular/core';

import { Aluno } from './aluno';
import { Escola } from './escola';
import { Turma } from './turma';
import { Formulario} from './formulario';
import { Questao } from './questao';
import {Resposta} from "./resposta";

@Injectable()
export class EstatisticasService {

    escolas: Escola[] = [];
    turmas: Turma[] = [];
    alunos: Aluno[] = [];
    formularios : Formulario[] = [];

    addDados() : void {
        if(this.escolas.length === 0) {
            this.escolas.push(new Escola("CAp"));

            var form = new Formulario("Sistema Nervoso", "", "");
            form.adicionarQuestao(new Questao("Primeira Questao", "", ["A", "B", "C"], 0), 0);
            form.adicionarQuestao(new Questao("Segunda Questao", "", ["A", "B", "C"], 1), 1);
            this.formularios.push(form);

            var turma = new Turma(1, "Terceirao");
            var aluno = new Aluno("Ramom Pereira", "hehe", "rpss@cin.ufpe.br", new Turma(1, "Terceirao"));
            aluno.addResposta(new Resposta(form, [0, 2]));
            turma.addAluno(aluno);
            this.escolas[0].addTurma(turma);

            var form2 = new Formulario("Sistema Cardiovascular", "", "");
            form.adicionarQuestao(new Questao("Primeira Questao", "", ["A", "B", "C"], 0), 0);
            form.adicionarQuestao(new Questao("Segunda Questao", "", ["A", "B", "C"], 1), 1);
            this.formularios.push(form2);

            this.turmas.push(turma);
            this.alunos.push(aluno);
        }
    }

    getRespostas(aluno : string, sistema : string) : number[] {
        var student;
        var form;
        var respostas;
        if(student = this.alunos.find(a => a.nome === aluno)) {
            respostas = student.respostas;
            for(let key in respostas) {
                if((form = respostas[key].formulario).nome === sistema) {
                    return respostas[key].respostas;
                }
            }
        }
        return null;
    }

    getAlunos(e: string, t: string, s: string) : Aluno[] {
        var alunos : Aluno[] = [];
        var escola : Escola;
        var turma : Turma;

        if(escola = this.escolas.find(a => a.nome === e)) {
            if(turma = escola.turmas.find(x => x.nome === t)) {
                for(let i in turma.alunos) {
                    if(turma.alunos[i].respostas.find(f => f.formulario.nome === s)) {
                        alunos.push(turma.alunos[i]);
                    }
                }
                if(alunos.length > 0) {
                    return alunos;
                }
            }
        }
        return null;
    }

    getSchool(escola: string) : Escola {
        var school : Escola;
        if(school = this.escolas.find(a => a.nome === escola))
            return school;
        return null;
    }

    getForms(nome: string) : Formulario {
        var form = this.formularios.find(a => a.nome === nome);
        if(form)
            return form;
        return null;
    }
}