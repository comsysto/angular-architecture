import {IDataService} from './IDataService';
import {ILocalStorageService} from '../../../../common/src/services/LocalStorageService/ILocalStorageService';
import {IDeck} from '../../../../common/src/models/IDeck';

export default class DataService implements IDataService {
    private localStorageService:ILocalStorageService;
    private dataModel:DataModel;

    constructor(localStorageService:ILocalStorageService) {
        this.localStorageService = localStorageService;
        this.dataModel = new DataModel();

        // init data model
        this.dataModel.setDecks(this.localStorageService.loadSettings<IDeck[]>('decks'));
    }

    public getDecks():IDeck[] {
        return this.dataModel.getDecks();
    }
}

class DataModel {
    private decks:IDeck[];

    public getDecks():IDeck[] {
        return this.decks;
    }

    public setDecks(decks:IDeck[]):void {
        this.decks = decks;
    }
}

DataService.$inject = ['LocalStorageService'];
