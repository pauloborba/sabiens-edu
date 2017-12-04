import { Conteudo } from './conteudo';

export class ConteudoService {
  conteudos: Conteudo[] = [];
  gravarConteudo(conteudo: Conteudo): String {
    var result = null;
    if (conteudo.conclusao == "" || conteudo.conclusao == undefined || conteudo.nome == "" || conteudo.nome == undefined || conteudo.descricao == "" || conteudo.descricao == undefined
  || conteudo.introducao == "" || conteudo.introducao == undefined || conteudo.desenvolvimento[0].nome== ""  || conteudo.desenvolvimento[0].nome== undefined || conteudo.desenvolvimento[0].descricao==""  
|| conteudo.desenvolvimento[0].descricao== undefined){
      result = "emptyField";
    } else if(this.conteudoExistente(conteudo.nome)==false) {
        console.log("deu certo, ele identificou um conteudo preexistente");
        result = "sameTitle";
     }
    else{
      console.log("nome visto ", conteudo.nome);
      this.conteudos.push(conteudo);
      result = "ok";
      console.log("array do service ", this.conteudos);
    }
    console.log("resultado é", result);
    return result;
  }
  quantidadeConteudos(): number {
    return this.conteudos.length;
  }
  conteudoExistente(titulo:string): boolean {
    return !this.conteudos.find(conteudoX => conteudoX.nome == titulo);
  }
}