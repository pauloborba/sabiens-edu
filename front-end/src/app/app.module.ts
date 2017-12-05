import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { SistemaCorpo } from './sistemasCorpo.component';
import { CadastroConteudo } from './cadastroConteudo.component';
import { ConteudoService } from './conteudo.service';
import { AppComponent } from './app.component';
import { EstatisticasComponent } from "./estatisticas.component";
import { EstStudentComponent } from './estStudent.component';
import { EstClassComponent } from './estClass.component';
import { EstatisticasService } from './estatisticas.service';
import { EstSchoolComponent } from './estSchool.component';

@NgModule({
  declarations: [
    AppComponent,
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
  providers: [ConteudoService,EstatisticasService],
  bootstrap: [AppComponent]
})
export class AppModule { }