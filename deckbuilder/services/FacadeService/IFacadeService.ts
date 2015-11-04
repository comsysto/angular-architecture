import {ICard} from '../../../common/models/ICard';
import {IDeck} from '../../../common/models/IDeck';


export interface IFacadeService {
    getFilteredCardList(): ICard[];
    getChosenCards(): ICard[];
    getDeck(): IDeck;
    toggleCard(card:ICard): void;
    setFilter(filter:string): void;
    backToManager(): void;
}
