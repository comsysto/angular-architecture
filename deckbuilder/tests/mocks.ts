import {IFacadeService} from '../../deckbuilder/services/FacadeService/IFacadeService';
import {ICard} from '../../common/models/ICard';
import {IDeck} from '../../common/models/IDeck';

export const facadeServiceMock:IFacadeService = {
    backToManager: ():void => {
    },
    getChosenCards: ():ICard[] => {
        return [];
    },
    getDeck: ():IDeck => {
        return null;
    },
    getFilteredCardList: ():ICard[] => {
        return [];
    },
    setFilter: ():void => {
    },
    toggleCard: ():void => {
    }
};
