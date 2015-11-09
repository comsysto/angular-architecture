import {IDataService} from '../../../services/DataService/IDataService';
import DataService from '../../../services/DataService/DataService';
import {ILocalStorageService} from '../../../../common/services/LocalStorageService/ILocalStorageService';
import {IDeck} from '../../../../common/models/IDeck';
import Deck from '../../../../common/models/Deck';

describe('deckmanager.DataService', () => {
    let dataService:IDataService,
        $window:angular.IWindowService,
        $windowSpy:jasmine.Spy,
        localStorageMock:any,
        localStorageLoadSpy:jasmine.Spy,
        localStorageSaveSpy:jasmine.Spy,
        deck1:IDeck,
        deck2:IDeck;

    beforeEach(() => {
        $window = {
            confirm: ():void => {
            },
            location: {
                href: 'somewhere'
            }
        } as angular.IWindowService;
        $windowSpy = spyOn($window, 'confirm');

        // TODO: If the initialisation of the service was put away into a method, this block would be easier to write.
        localStorageMock = {
            loadSettings: ():void => {
            },
            saveSettings: ():void => {
            }
        };
        localStorageSaveSpy = spyOn(localStorageMock, 'saveSettings');
        localStorageLoadSpy = spyOn(localStorageMock, 'loadSettings');
        deck1 = new Deck('id1', 'foo', []);
        deck2 = new Deck('id2', 'bar', []);
        localStorageLoadSpy.and.returnValue([deck1, deck2]);

        dataService = new DataService($window, localStorageMock);
    });

    it('should set the decks from local storage on instantation and get them', () => {
        expect(dataService.getDecks().length).toBe(2);
        expect(dataService.getDecks()[0]).toEqual(deck1);
        expect(dataService.getDecks()[1]).toEqual(deck2);
    });

    it('should allow creation of a deck', () => {
        localStorageSaveSpy.and.returnValue(null);
        dataService.createNewDeck('baz');

        expect(localStorageMock.saveSettings).toHaveBeenCalled();

        expect(dataService.getDecks().length).toBe(3);
        expect(dataService.getDecks()[2].name).toEqual('baz');
    });

    it('should allow deck editing redirect', () => {
        dataService.editDeck(deck1);

        expect($window.location.href).toBe('deckbuilder.html#id=id1');
    });

    it('should allow deletion of decks', () => {
        $windowSpy.and.returnValue(false);
        dataService.deleteDeck(deck1);

        expect(dataService.getDecks().length).toBe(2);
        expect(dataService.getDecks()[0]).toEqual(deck1);
        expect(dataService.getDecks()[1]).toEqual(deck2);

        $windowSpy.and.returnValue(true);
        dataService.deleteDeck(deck1);

        expect(dataService.getDecks().length).toBe(1);
        expect(dataService.getDecks()[0]).toEqual(deck2);
    });
});
