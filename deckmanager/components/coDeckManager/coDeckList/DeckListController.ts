import {IFacadeService} from '../../../services/FacadeService/IFacadeService';
import {IDeck} from '../../../../common/models/IDeck';

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

    public editDeck(deck:IDeck):void {
        this.facadeService.editDeck(deck);
    }

    public deleteDeck(deck:IDeck):void {
        this.facadeService.deleteDeck(deck);
    }
}

DeckController.$inject = ['FacadeService'];
