import {IFacadeService} from '../../../services/FacadeService/IFacadeService';
import {ICard} from '../../../../common/models/ICard';

export default class DeckController {
    private facadeService:IFacadeService;

    constructor(facadeService:IFacadeService) {
        this.facadeService = facadeService  ;
    }

    public getChosenCards():ICard[] {
        return this.facadeService.getChosenCards();
    }
}

DeckController.$inject = ['FacadeService'];
