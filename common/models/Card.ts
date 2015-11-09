import {ICard} from './ICard';
import {CardRarityEnum} from './CardRarityEnum';

export default class Card implements ICard {
    public name:string;
    public cost:number;
    public attack:number;
    public hp:number;
    public rarity:CardRarityEnum;
    public image:string;
    public selected:boolean;

    /**
     * Create a Card model.
     * TODO: All of these attributes could be used as a way to filter or sort cards.
     */
    constructor(name:string, cost:number, rarity:CardRarityEnum, image:string, attack?:number, hp?:number, selected?:boolean) {
        this.name = name;
        this.cost = cost;
        this.rarity = rarity;
        this.image = image;
        this.attack = attack ? attack : 0;
        this.hp = hp ? hp : 0;
        this.selected = selected ? selected : false;
    }
}
