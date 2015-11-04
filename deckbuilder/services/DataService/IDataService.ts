import {ICard} from '../../../common/models/ICard';

export interface IDataService {
    getFilteredCardList(): ICard[];
    getChosenCards(): ICard[];
    toggleCard(card:ICard): void;
    setFilter(filter:string): void;
}
