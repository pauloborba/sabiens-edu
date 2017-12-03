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


@NgModule({
  declarations: [
    AppComponent,
	CadastroDeFormularioComponent,
	ListaFormulariosComponent,
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
      }
    ])
  ],
  providers: [FormularioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
