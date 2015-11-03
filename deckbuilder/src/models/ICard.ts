import { CardRarityEnum } from './CardRarityEnum';

export interface ICard {
    name: string;
    cost: number;
    attack: number;
    hp: number;
    rarity: CardRarityEnum;
    image: string;
    selected: boolean;
}
