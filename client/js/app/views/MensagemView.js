class MensagemView extends View {
  // Não precisa de construtor, herda do pai
  // constructor(elemento) {
  //   super(elemento);
  // }

  _template(model) {
    return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
  }

}