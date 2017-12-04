import { Formulario } from './formulario';
import { Aluno } from './aluno';

export class Resposta {
    private _formulario: Formulario;
    private _respostas: number[];

    constructor(formulario: Formulario, respostas: number[]) {
        this._formulario = formulario;
        this._respostas = respostas;
    }

    public get formulario(): Formulario {
        return this._formulario;
    }

    public set formulario(value: Formulario) {
        this._formulario = value;
    }

    public get respostas(): number[] {
        return this._respostas;
    }

    public set respostas(value: number[]) {
        this._respostas = value;
    }
    public calcularNota(): number{
        // Return de teste
        return 12;
    }
}