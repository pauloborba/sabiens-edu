import { Escola} from './escola';
import { FeedbackDeTurma } from './feedbackDeTurma';
import { Formulario } from './formulario';

export class FeedbackDeEscola {
  private _formulario: Formulario;
  private _escola: Escola;
  private _feedBacksTurmas: FeedbackDeTurma[];

  constructor(formulario: Formulario, escola: Escola, feedBacksTurmas: FeedbackDeTurma[]) {
    this._formulario = formulario;
    this._escola = escola;
    this._feedBacksTurmas = feedBacksTurmas;
  }

  get formulario(): Formulario {
    return this._formulario;
  }

  set formulario(value: Formulario) {
    this._formulario = value;
  }

  get escola(): Escola {
    return this._escola;
  }

  set escola(value: Escola) {
    this._escola = value;
  }

  get feedBacksTurmas(): FeedbackDeTurma[] {
    return this._feedBacksTurmas;
  }

  set feedBacksTurmas(value: FeedbackDeTurma[]) {
    this._feedBacksTurmas = value;
  }
}
