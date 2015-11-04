import {IDeck} from './IDeck';
import {ICard} from './ICard';

export default class Deck implements IDeck {
    private _id:string;
    private _name:string;
    private _cards:ICard[];

    constructor(id:string, name:string, cards:ICard[]) {
        this._id = id;
        this._name = name;
        this._cards = cards;
    }

    get cards():ICard[] {
        return this._cards;
    }

    set cards(value:ICard[]) {
        this._cards = value;
    }

    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }

    get id():string {
        return this._id;
    }

    set id(value:string) {
        this._id = value;
    }
}
