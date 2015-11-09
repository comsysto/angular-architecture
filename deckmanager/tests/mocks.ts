import {IFacadeService} from '../services/FacadeService/IFacadeService';
import {IDeck} from '../../common/models/IDeck';

export const facadeServiceMock:IFacadeService = {
    createNewDeck: ():any => {
    },
    deleteDeck: ():void => {
    },
    editDeck: ():void => {
    },
    getDecks: ():IDeck[] => {
        return null;
    },
    getShowNewDeckForm: ():boolean  => {
        return null;
    },
    setShowNewDeckForm: ():void  => {
    }
};
