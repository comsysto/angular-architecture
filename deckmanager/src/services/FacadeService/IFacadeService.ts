import {IDeck} from '../../../../common/src/models/IDeck';

export interface IFacadeService {
    getDecks(): IDeck[];
    setShowNewDeckForm(isShown:boolean): void;
    getShowNewDeckForm(): boolean;
}
