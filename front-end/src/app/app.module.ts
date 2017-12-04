import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { SistemaCorpo } from './sistemasCorpo.component';
import { CadastroConteudo } from './cadastroConteudo.component';
import { ConteudoService } from './conteudo.service';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroConteudo,
    SistemaCorpo,
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
    ])
  ],
  providers: [ConteudoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
