class NegociacaoService {

  constructor() {
    this._http = new HttpService();
  }

  obterNegociacoesDaSemana() {
    // padrão projeto promise
    return new Promise((resolve, reject) => {
      this._http
        .get('negociacoes/semana')
        .then(negociacoes => {
          resolve(negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
        })
        .catch(error => {
          console.log(error);
          reject('Não foi possivel obter as negociações da semana');
        })
    });
  }

  obterNegociacoesDaSemanaAnterior() {
    return new Promise((resolve, reject) => {
      this._http
        .get('negociacoes/anterior')
        .then(negociacoes => {
          resolve(negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
        })
        .catch(error => {
          console.log(error);
          reject('Não foi possivel obter as negociações da semana anterior');
        })
    });
  }

  obterNegociacoesDaSemanaRetrasada(cb) {
    return new Promise((resolve, reject) => {
      this._http
        .get('negociacoes/retrasada')
        .then(negociacoes => {
          resolve(negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
        })
        .catch(error => {
          console.log(error);
          reject('Não foi possivel obter as negociações da semana retrasada');
        })
    });
  }
}