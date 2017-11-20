import { Material } from './material';
export class Task {
  private _material: Material;
  private _data: string;
  private _descricao: string;
  private _status: boolean;

  constructor(material: Material, data: string, descricao: string, status: boolean) {
    this._material = material;
    this._data = data;
    this._descricao = descricao;
    this._status = status;
  }


  public get material(): Material {
    return this._material;
  }

  public set material(value: Material) {
    this._material = value;
  }

  public get data(): string {
    return this._data;
  }

  public set data(value: string) {
    this._data = value;
  }

  public get descricao(): string {
    return this._descricao;
  }

  public set descricao(value: string) {
    this._descricao = value;
  }

  public get status(): boolean {
    return this._status;
  }

  public set status(value: boolean) {
    this._status = value;
  }
}
