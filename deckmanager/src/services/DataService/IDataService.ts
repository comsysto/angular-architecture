import {ICard} from '../../../../common/src/models/ICard';
import {IDeck} from '../../../../common/src/models/IDeck';

export interface IDataService {
    getDecks(): IDeck[];
    createNewDeck(name:string): void;
}
