import {ICard} from './ICard';

export interface IDeck {
    id: string;
    name: string;
    cards: ICard[];
}
