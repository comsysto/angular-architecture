import {IFacadeService} from '../../../services/FacadeService/IFacadeService';
import {ICard} from '../../../models/ICard';

export default class DeckController {
    private facadeService:IFacadeService;

    constructor(deckBuilderService:IFacadeService) {
        this.facadeService = deckBuilderService;
    }

    public getChosenCards():ICard[] {
        return this.facadeService.getChosenCards();
    }
}

DeckController.$inject = ['FacadeService'];
