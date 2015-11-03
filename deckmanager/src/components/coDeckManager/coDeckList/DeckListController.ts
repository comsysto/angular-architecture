import {IFacadeService} from '../../../services/FacadeService/IFacadeService';
import {ICard} from '../../../../../common/src/models/ICard';
import {IDeck} from '../../../../../common/src/models/IDeck';

export default class DeckController {
    private facadeService:IFacadeService;

    constructor(facadeService:IFacadeService) {
        this.facadeService = facadeService;
    }

    public getDecks():IDeck[] {
        return this.facadeService.getDecks();
    }

    public addDeck():void {
        this.facadeService.setShowNewDeckForm(true);
    }
}

DeckController.$inject = ['FacadeService'];
