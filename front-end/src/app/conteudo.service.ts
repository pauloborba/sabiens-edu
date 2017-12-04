import { Conteudo } from './conteudo';

export class ConteudoService {
  conteudos: Conteudo[] = [];
  gravarConteudo(conteudo: Conteudo): String {
    var result = null;
    if (this.conteudoEstaInvalido(conteudo)){
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
  stringVaziaOuIndefinida(content:String): boolean{
    if( content == "" || content == undefined ) {
        return true;
    }else{
        return false;
    }
  }
  conteudoEstaInvalido(conteudo:Conteudo): boolean{
    if ( ( this.stringVaziaOuIndefinida(conteudo.nome)) || ( this.stringVaziaOuIndefinida(conteudo.conclusao)) || ( this.stringVaziaOuIndefinida(conteudo.introducao)) 
          || ( this.stringVaziaOuIndefinida(conteudo.descricao))  || ( this.stringVaziaOuIndefinida(conteudo.desenvolvimento[0].nome))  || ( this.stringVaziaOuIndefinida(conteudo.desenvolvimento[0].descricao)) ){
            return true;
    }else{
      return false;
    }
  }
}