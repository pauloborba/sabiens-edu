import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { EstatisticasService } from './estatisticas.service';
import { Aluno } from './aluno';
import { Escola } from './escola';
import { Turma } from './turma';
import { Sistemas } from './sistemas';
import { FeedbackDeTurma } from './feedbackDeTurma';


@Component({
    selector: 'app-root',
    templateUrl: './estClass.component.html',
    styleUrls: ['./estClass.component.css']
})

export class EstClassComponent implements OnInit {
    constructor(private estatisticasService: EstatisticasService) {}

    alunos: Aluno[] = [];
    escola: string;
    turma: string;
    sistema: string;
    qtd : number;

    getAlunos(e: string, t: string, s: string): void {
        this.alunos = [];
        this.qtd = 0;
        if(!this.invalidArgument([e, t, s])) {
            var alunos = this.estatisticasService.getAlunos(e, t, s);
            if (alunos) {
                this.alunos = alunos;
            }
        }
    }

    gerarEstatisticas() : void {
        this.getAlunos(this.escola, this.turma, this.sistema);
        if (this.alunos.length > 0) {
            this.qtd = this.alunos.length;
        } else {
            alert("Nenhum aluno respondeu a esse questionario.");
        }
    }

    invalidArgument(value : string[]) : boolean {
        for(let k in value) {
            if(!value[k]) {
                return true;
            }
        }
        return false;
    }

    ngOnInit(): void {
        this.estatisticasService.addDados();
    }
}