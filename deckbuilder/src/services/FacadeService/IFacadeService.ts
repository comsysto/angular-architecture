import {ICard} from '../../../../common/src/models/ICard';

export interface IFacadeService {
    getFilteredCardList(): ICard[];
    getChosenCards(): ICard[];
    toggleCard(card:ICard): void;
    setFilter(filter:string): void;
}
