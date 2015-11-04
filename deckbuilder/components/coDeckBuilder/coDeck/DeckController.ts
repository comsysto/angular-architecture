import {IFacadeService} from '../../../services/FacadeService/IFacadeService';
import {ICard} from '../../../../common/models/ICard';
import {IDeck} from '../../../../common/models/IDeck';

export default class DeckController {
    public deck:IDeck;
    private facadeService:IFacadeService;

    constructor(facadeService:IFacadeService) {
        this.facadeService = facadeService;
        this.deck = this.facadeService.getDeck();
    }

    public getChosenCards():ICard[] {
        return this.facadeService.getChosenCards();
    }

    public backToManager():void {
        return this.facadeService.backToManager();
    }
}

DeckController.$inject = ['FacadeService'];
