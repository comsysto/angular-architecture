import {ICard} from './ICard';
import {CardRarityEnum} from './CardRarityEnum';

export default class Card implements ICard {
    private _name:string;
    private _cost:number;
    private _attack:number;
    private _hp:number;
    private _rarity:CardRarityEnum;
    private _image:string;
    private _selected:boolean;

    constructor(name:string, cost:number, rarity:CardRarityEnum, image:string, attack?:number, hp?:number, selected?:boolean) {
        this._name = name;
        this._cost = cost;
        this._rarity = rarity;
        this._image = image;
        this._attack = attack ? attack : 0;
        this._hp = hp ? hp : 0;
        this._selected = selected ? selected : false;
    }

    get selected():boolean {
        return this._selected;
    }

    set selected(value:boolean) {
        this._selected = value;
    }

    get image():string {
        return this._image;
    }

    set image(value:string) {
        this._image = value;
    }

    get rarity():CardRarityEnum {
        return this._rarity;
    }

    set rarity(value:CardRarityEnum) {
        this._rarity = value;
    }

    get hp():number {
        return this._hp;
    }

    set hp(value:number) {
        this._hp = value;
    }

    get attack():number {
        return this._attack;
    }

    set attack(value:number) {
        this._attack = value;
    }

    get cost():number {
        return this._cost;
    }

    set cost(value:number) {
        this._cost = value;
    }

    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }
}
