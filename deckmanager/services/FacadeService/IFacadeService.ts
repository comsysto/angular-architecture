import {IDeck} from '../../../common/models/IDeck';

export interface IFacadeService {
    getDecks(): IDeck[];
    setShowNewDeckForm(isShown:boolean): void;
    getShowNewDeckForm(): boolean;
    createNewDeck(name:string): void;
    deleteDeck(deck:IDeck): void;
}
