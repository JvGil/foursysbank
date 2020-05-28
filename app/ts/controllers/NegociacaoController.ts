class NegociacaoController {
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new Views.NegociacoesView('#negociacoesView');
    private _mensagemView = new Views.MensagemView('#mensagemView');

    constructor(){
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {
        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, "-")),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val()));
        
            this._negociacoes.adiciona(negociacao);

            this._negociacoesView.update(this._negociacoes);

            this._mensagemView.update('Negociação adicionada com sucesso!');
            
            /* Testes utilizados durante a codificação
            //console.log(this._negociacoes.retornaArray());
            this._negociacoes.retornaArray().length = 0;

            this._negociacoes.retornaArray().forEach(negociacao => {
                console.log(negociacao.data);
                console.log(negociacao.quantidade);
                console.log(negociacao.valor);
            });
            */
    }

}