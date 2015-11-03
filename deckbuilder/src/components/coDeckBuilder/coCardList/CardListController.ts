import {IFacadeService} from '../../../services/FacadeService/IFacadeService';
import {ICard} from '../../../../../common/src/models/ICard';

export default class CardListController {
    private facadeService:IFacadeService;

    constructor(deckBuilderService:IFacadeService) {
        this.facadeService = deckBuilderService;
    }

    public getCardList():ICard[] {
        return this.facadeService.getFilteredCardList();
    }

    public toggleCard(card:ICard):void {
        this.facadeService.toggleCard(card);
    }
}

CardListController.$inject = ['FacadeService'];
