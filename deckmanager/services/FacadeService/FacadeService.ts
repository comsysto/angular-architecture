import {IFacadeService} from './IFacadeService';
import {IDataService} from '../DataService/IDataService';
import {IUIStateService} from '../UIStateService/IUIStateService';
import {IDeck} from '../../../common/models/IDeck';

export default class FacadeService implements IFacadeService {
    private dataService:IDataService;
    private uiStateService:IUIStateService;

    constructor(dataService:IDataService, uiStateService:IUIStateService) {
        this.dataService = dataService;
        this.uiStateService = uiStateService;
    }

    public getDecks():IDeck[] {
        return this.dataService.getDecks();
    }

    public createNewDeck(name:string):void {
        this.dataService.createNewDeck(name);
        this.uiStateService.setShowNewDeckForm(false);
    }

    public editDeck(deck:IDeck):void {
        this.dataService.editDeck(deck);
    }

    public deleteDeck(deck:IDeck):void {
        this.dataService.deleteDeck(deck);
    }

    public setShowNewDeckForm(isShown:boolean):void {
        this.uiStateService.setShowNewDeckForm(isShown);
    }

    public getShowNewDeckForm():boolean {
        return this.uiStateService.getShowNewDeckForm();
    }

}

FacadeService.$inject = ['DataService', 'UIStateService'];
