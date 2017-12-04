import { Conteudo } from './conteudo';

export class ConteudoService {
  conteudos: Conteudo[] = [];
  gravarConteudo(conteudo: Conteudo): String {
    var result = null;
    if(this.conteudoExistente(conteudo.nome)){
      console.log("nome visto ", conteudo.nome);
      
      this.conteudos.push(conteudo);
      result = conteudo;
      console.log("array do service ", this.conteudos);
    } else {
      console.log("deu certo, ele identificou um conteudo preexistente");
    }
    return result;
  }
  quantidadeConteudos(): number {
    return this.conteudos.length;
  }
  conteudoExistente(titulo:string): boolean {
    return !this.conteudos.find(conteudoX => conteudoX.nome == titulo);
  }
}