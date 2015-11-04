import {IDeck} from '../../../common/models/IDeck';

export interface IDataService {
    getDecks(): IDeck[];
    createNewDeck(name:string): void;
    editDeck(deck:IDeck): void;
    deleteDeck(deck:IDeck): void;
}
