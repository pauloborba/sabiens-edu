import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { EstatisticasService } from './estatisticas.service';
import { Aluno } from './aluno';
import { Escola } from './escola';
import { Turma } from './turma';
import { Sistemas } from './sistemas';
import { FeedbackDeTurma } from './feedbackDeTurma';
import {Formulario} from "./formulario";
import {Resposta} from "./resposta";


@Component({
    selector: 'app-root',
    templateUrl: './estStudent.component.html',
    styleUrls: ['./estStudent.component.css']
})

export class EstStudentComponent implements OnInit {
    constructor(private estatisticasService: EstatisticasService) {}

    aluno : string;
    sistema : string;

    respostas : number[];
    porcentagem : string;
    flag : boolean = false;

    getRespostas(aluno : string, sistema : string) : void {
        this.respostas = [];
        var respostas = this.estatisticasService.getRespostas(aluno, sistema);
        if(respostas) {
            this.respostas = respostas;
        }
    }

    gerarEstatisticas(a : string, s : string) : void {
        this.flag = false;
        var value;
        var cont = 0;
        var formulario;
        this.getRespostas(a, s);
        if(this.respostas.length > 0) {
            if (formulario = this.estatisticasService.getForms(s)) {
                var questoes = formulario.questoes;
                for (let key in questoes) {
                    if (questoes[key].correta === this.respostas[key]) {
                        cont++;
                    }
                }
                value = (cont / questoes.length) * 100;
                this.porcentagem = value + "%";
                this.flag = true;
            } else {
                this.flag = false;
                alert("Nenhum aluno respondeu a esse questionario.");
            }
        }
    }

    ngOnInit(): void {
        this.estatisticasService.addDados();
    }
}