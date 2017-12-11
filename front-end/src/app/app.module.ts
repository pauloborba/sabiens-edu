import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

import { CadastroDeFormularioComponent } from './cadastroDeFormulario.component';
import { ListaFormulariosComponent } from './listaFormularios.component';
import { FormularioService } from './formulario.service';

import { SistemaCorpo } from './sistemasCorpo.component';
import { CadastroConteudo } from './cadastroConteudo.component';
import { ConteudoService } from './conteudo.service';
import { EstatisticasComponent } from "./estatisticas.component";
import { EstStudentComponent } from './estStudent.component';
import { EstClassComponent } from './estClass.component';
import { EstatisticasService } from './estatisticas.service';
import { EstSchoolComponent } from './estSchool.component';

@NgModule({
  declarations: [
    AppComponent,
	CadastroDeFormularioComponent,
	ListaFormulariosComponent,
    CadastroConteudo,
    SistemaCorpo,
    EstatisticasComponent,
    EstStudentComponent,
    EstClassComponent,
    EstSchoolComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
      {
        path: 'cadastroDeFormulario',
        component: CadastroDeFormularioComponent
      },
      {
        path: 'listaFormularios',
        component: ListaFormulariosComponent
      },
        path: 'sistemas',
        component: SistemaCorpo
      },
      {
        path: 'cadastroConteudo',
        component: CadastroConteudo
      },
      {
        path: 'estatisticas',
        component: EstatisticasComponent
        },
        {
        path: 'estStudent',
        component: EstStudentComponent
        },
        {
        path: 'estClass',
        component: EstClassComponent
        },
        {
        path: 'estSchool',
        component: EstSchoolComponent
        }
    ])
  ],
  providers: [ConteudoService,EstatisticasService,FormularioService],
  bootstrap: [AppComponent]
})
export class AppModule { }