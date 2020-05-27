class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    retornaArray() {
        return [].concat(this._negociacoes);
    }
}
