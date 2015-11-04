import {IFacadeService} from '../../../services/FacadeService/IFacadeService';

export default class NewDeckController {
    private facadeService:IFacadeService;
    private deckName:string;

    constructor(facadeService:IFacadeService) {
        this.facadeService = facadeService;
        this.deckName = '';
    }

    public isFormShown():boolean {
        return this.facadeService.getShowNewDeckForm();
    }

    public createNewDeck():void {
        this.facadeService.createNewDeck(this.deckName);
    }


    public hideNewDeckForm():void {
        this.facadeService.setShowNewDeckForm(false);
    }
}

NewDeckController.$inject = ['FacadeService'];
