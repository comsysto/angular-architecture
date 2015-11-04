import {IDataService} from './IDataService';
import {ILocalStorageService} from '../../../common/services/LocalStorageService/ILocalStorageService';
import {IDeck} from '../../../common/models/IDeck';
import Deck from '../../../common/models/Deck';

export default class DataService implements IDataService {
    private localStorageService:ILocalStorageService;
    private dataModel:DataModel;

    constructor(localStorageService:ILocalStorageService) {
        this.localStorageService = localStorageService;
        this.dataModel = new DataModel();

        // init data model
        let decks:IDeck[] = this.localStorageService.loadSettings<IDeck[]>('decks');
        if (decks) {
            let typedDecks:IDeck[] = decks.map((deck:IDeck) => {
                return new Deck(deck.id, deck.name, deck.cards);
            });
            this.dataModel.setDecks(typedDecks);
        }
        else {
            this.dataModel.setDecks([]);
        }
    }

    public getDecks():IDeck[] {
        let decks:IDeck[] = this.dataModel.getDecks();

        if (!decks) {
            return [];
        }

        return decks;
    }

    public createNewDeck(name:string):void {
        let decks:IDeck[] = this.dataModel.getDecks();
        let id:string = new Date().getTime().toString();
        let newDeck:IDeck = new Deck(id, name, []);
        // check if there are any decks
        decks = decks ? decks.concat(newDeck) : [newDeck];

        this.setDecks(decks);
    }

    public deleteDeck(deck:IDeck):void {
        let decks:IDeck[] = this.dataModel.getDecks();
        let deckId:number = decks.indexOf(deck, 0);

        if (deckId !== undefined) {
            decks.splice(deckId, 1);
        }

        this.setDecks(decks);
    }

    private setDecks(decks:IDeck[]):void {
        this.localStorageService.saveSettings<IDeck[]>('decks', decks);
        this.dataModel.setDecks(decks);
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
