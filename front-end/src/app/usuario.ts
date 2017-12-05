<<<<<<< HEAD
export class Usuario {
=======
export abstract class Usuario {
>>>>>>> 5381fda... Adição do esqueletos de classes
  private _nome: string;
  private _senha: string;
  private _email: string;
  /*
  .
   */
<<<<<<< HEAD

  constructor(nome: string, senha: string, email: string) {
=======
  constructor(nome: string, senha: string, email: string){
>>>>>>> 5381fda... Adição do esqueletos de classes
    this._nome = nome;
    this._senha = senha;
    this._email = email;
  }
<<<<<<< HEAD

  // .
=======
  /*
  .
   */

>>>>>>> 5381fda... Adição do esqueletos de classes
  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public get senha(): string {
    return this._senha;
  }

  public set senha(value: string) {
    this._senha = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }


  public verificarCadastro(): boolean {
    /*faltam coisas nesse metodo*/
    return true;
  }

}
