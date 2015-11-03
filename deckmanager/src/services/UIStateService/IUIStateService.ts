import {ICard} from '../../../../common/src/models/ICard';
import {IDeck} from '../../../../common/src/models/IDeck';

export interface IUIStateService {
    setShowNewDeckForm(isShown:boolean):void;
    getShowNewDeckForm():boolean;
}
