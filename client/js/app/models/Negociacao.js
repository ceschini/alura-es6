class Negociacao {

  constructor(data, quantidade, valor) {
    // '_' convencao de que os atributos não podem ser modificados
    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;
    // shallow freeze para tornar o objeto 'imutavel'
    Object.freeze(this);
  }

  get volume() {
    return this._quantidade * this._valor;
  }

  get data() {
    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}