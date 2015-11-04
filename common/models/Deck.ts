import {IDeck} from './IDeck';
import {ICard} from './ICard';

export default class Deck implements IDeck {
    public id:string;
    public name:string;
    public cards:ICard[];

    constructor(id:string, name:string, cards:ICard[]) {
        this.id = id;
        this.name = name;
        this.cards = cards;
    }
}
