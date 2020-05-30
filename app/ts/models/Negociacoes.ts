import { Negociacao } from './Negociacao';

export class Negociacoes {
    
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    retornaArray(): Negociacao[] {
        return [].concat(this._negociacoes);
    }
}