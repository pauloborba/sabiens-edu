import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Conteudo } from './conteudo';
import { ConteudoService } from './conteudo.service';
import { Topico } from './topico';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'cadastroConteudo',
  templateUrl: './cadastroConteudo.component.html',
  styleUrls: ['./cadastroConteudo.component.css']
})
export class CadastroConteudo {
  title = 'nozes';
  //variaveis do conteudo
  cadastroServico = new ConteudoService();
  titulo:string;
  id:string;
  descricao:string;
  introducao:string;
  nomeTopico:string;
  descricaoTopico:string;
  conclusao:string;
  conteudo: Conteudo = new Conteudo("", "", "", "", [ ] ,"");
  conteudos : Conteudo[]= []; //array de conteudos
  topico: Topico[] = []; //array de topicos  ( desenvolvimento)
  novo:Topico; // novo topico

  conteudoExistente: boolean = false; //variavel para saber se existe um titulo igual ao apresentado

  //definindo inputs do html
  @ViewChild('tituloInput')
  tituloInput: any;
  @ViewChild('descricaoInput')
  descricaoInput: any;
  @ViewChild('introInput')
  introInput: any;
  @ViewChild('nomeTopicoInput')
  nomeTopicoInput: any;
  @ViewChild('descricaoTopicoInput')
  descricaoTopicoInput: any;
  @ViewChild('conclusaoInput')
  conclusaoInput: any;

  gravar(): void{
    this.conteudo.nome = this.titulo;
    this.conteudo.id = String(this.cadastroServico.quantidadeConteudos());
    this.conteudo.descricao = this.descricao ;
    this.conteudo.introducao= this.introducao;
    this.novo = new Topico(this.nomeTopico,this.descricaoTopico) ; //adicionando um topico a variavel de topico
    this.topico.push(new Topico(this.nomeTopico,this.descricaoTopico)); //adicionando a variavel de topico ao array de topico
    this.conteudo.desenvolvimento = this.topico; // desenvolviemnto será igual ao array de topico
    this.conteudo.conclusao = this.conclusao;
    var result = this.cadastroServico.gravarConteudo(this.conteudo);
    if ( result == "ok") {  // push no array de conteudos do service
      this.conteudos.push(this.conteudo); // push no array de conteudos local
    }else if(result == "emptyField"){
      alert("Você esqueceu de preencher algum campo");
    } else if(result == "minCaracterConc"){
      alert("Você escreveu pouquissimo no campo de conclusão"); 
    } else if(result == "minCaracterDes"){
      alert("Você escreveu pouquissimo no campo de descrição de desenvolvimento"); 
    } else{
      this.conteudoExistente=true;
      alert("Já existe um conteúdo com esse título"); // caso já exista um conteudo show a alert
    }
    this.conteudo = new Conteudo("", "", "", "", [ ] ,""); // reinicio todo conteudo para um proxima entrada
    this.topico = [];     //reinicio os topicos
    this.resetInputs(); // esvazio os inputs
  }
  remover(id:string): void{
    var idNumber = Number(id);
    idNumber = idNumber;
    var result = this.cadastroServico.removerConteudo(idNumber);
    console.log("id no front é",idNumber);
    if ( result == "ok"){
      this.conteudos.splice(idNumber,idNumber+1);
      console.log("deletando array no front", this.conteudos); 
      alert("Conteúdo excluido com exito");       
    }
  }
  resetInputs(): void{
      this.tituloInput.nativeElement.value = "";
      this.descricaoInput.nativeElement.value = "";
      this.introInput.nativeElement.value = "";
      this.nomeTopicoInput.nativeElement.value = "";
      this.descricaoTopicoInput.nativeElement.value = "";
      this.conclusaoInput.nativeElement.value = "";
      
    }
      
}

