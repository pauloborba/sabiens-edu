import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { ControleDeFormularioComponent } from './controleDeFormulario.component';
import { FormularioService } from './formulario.service';


@NgModule({
  declarations: [
    AppComponent,
	ControleDeFormularioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
      {
        path: 'controleDeFormulario',
        component: ControleDeFormularioComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
