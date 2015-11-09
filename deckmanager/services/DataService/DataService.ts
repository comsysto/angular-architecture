import {IDataService} from './IDataService';
import {ILocalStorageService} from '../../../common/services/LocalStorageService/ILocalStorageService';
import {IDeck} from '../../../common/models/IDeck';
import Deck from '../../../common/models/Deck';

export default class DataService implements IDataService {
    private $window:angular.IWindowService;
    private localStorageService:ILocalStorageService;
    private dataModel:DataModel;

    constructor($window:angular.IWindowService,
                localStorageService:ILocalStorageService) {
        this.$window = $window;
        this.localStorageService = localStorageService;
        this.dataModel = new DataModel();

        // init data model
        // TODO: Putting this into a method would be a wiser idea because then it can be easily mocked away
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
        // TODO: A UUID may be better than ticks
        let id:string = new Date().getTime().toString();
        let newDeck:IDeck = new Deck(id, name, []);
        // check if there are any decks
        decks = decks ? decks.concat(newDeck) : [newDeck];

        this.setDecks(decks);
    }

    public editDeck(deck:IDeck):void {
        this.$window.location.href = 'deckbuilder.html#id=' + deck.id;
    }

    public deleteDeck(deck:IDeck):void {
        let shouldDelete:boolean = this.$window.confirm('Do you really want to delete this deck?');
        if (!shouldDelete) {
            return;
        }

        let decks:IDeck[] = this.dataModel.getDecks();
        let deckId:number = decks.map(
            (searchDeck:IDeck) => { return searchDeck.id; }
        ).indexOf(deck.id);

        if (deckId !== -1) {
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

DataService.$inject = ['$window', 'LocalStorageService'];
