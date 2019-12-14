class NegociacaoController {

  // obs: evitar percorrer o DOM muitas vezes
  constructor() {
    let $ = document.querySelector.bind(document);
    // "_" -> Convencao: só a classe pode chamar e utilizar
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._listaNegociacoes = new ListaNegociacoes();
  }

  adiciona(event) {
    event.preventDefault();
    // adiciona na ListaNegociacoes
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    console.log(this._listaNegociacoes.negociacoes);
    this._limpaFormulario();
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  _limpaFormulario() {
    this._inputData.value = '';
    this._inputQuantidade = 1;
    this._inputValor = 0.0;
    this._inputData.focus();
  }
}