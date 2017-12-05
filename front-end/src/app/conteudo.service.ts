import { Conteudo } from './conteudo';

export class ConteudoService {
  conteudos: Conteudo[] = [];
  minimocaracteres: Number = 60;  
  gravarConteudo(conteudo: Conteudo): String {
    var result = null;
    var copyConclusao: String = conteudo.conclusao;
    var copyDesTopico: String = conteudo.desenvolvimento[0].descricao;

    if( (conteudo.conclusao !== undefined) &&  ( conteudo.desenvolvimento[0].descricao !== undefined )){
      copyConclusao = copyConclusao.split(" ").join("");
      copyDesTopico = copyDesTopico.split(" ").join("");
      var quantidadeConc:Number = copyConclusao.length;  
      var quantidadeDes:Number = copyDesTopico.length;  
    }

    if (this.conteudoEstaInvalido(conteudo)){
      result = "emptyField";
    } else if(this.conteudoExistente(conteudo.nome)==false) {
        console.log("deu certo, ele identificou um conteudo preexistente");
        result = "sameTitle";
    } else if(this.quantidadeMinima(quantidadeConc, quantidadeDes)) {
      console.log("não foi atingido o minimo de caracteres na conclusao");
      result = "minCaracterConc";
    } else{
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
  quantidadeMinima(q1:Number,q2:Number): boolean{
    if(q1 < this.minimocaracteres || q2 < this.minimocaracteres) {
      return true;
    }else{
      return false;
    }
  }
  removerConteudo(id:number): String{
    console.log("id no back é",id);
    this.conteudos.splice(id,id);
    console.log("deletando array do service ", this.conteudos);
    var result = "ok";
    return result;
  }
}