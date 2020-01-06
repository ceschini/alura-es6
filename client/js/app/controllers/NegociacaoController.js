class NegociacaoController {

  // obs: evitar percorrer o DOM muitas vezes
  constructor() {
    let $ = document.querySelector.bind(document);
    // "_" -> Convencao: só a classe pode chamar e utilizar
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($('#negociacoesView')),
      'adiciona', 'esvazia');

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($('#mensagemView')),
      'texto');
  }

  adiciona(event) {
    event.preventDefault();
    // adiciona na ListaNegociacoes
    this._listaNegociacoes.adiciona(this._criaNegociacao());

    this._mensagem.texto = "Negociação adicionada com sucesso";
    this._limpaFormulario();
  }

  apaga() {
    this._listaNegociacoes.esvazia();

    this._mensagem.texto = "Negociações apagadas com sucesso";
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
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }
}