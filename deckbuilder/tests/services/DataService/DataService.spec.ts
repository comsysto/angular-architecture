import {IDataService} from '../../../services/DataService/IDataService';
import DataService from '../../../services/DataService/DataService';
import {ILocalStorageService} from '../../../../common/services/LocalStorageService/ILocalStorageService';
import {IDeck} from '../../../../common/models/IDeck';
import Deck from '../../../../common/models/Deck';
import {ICard} from '../../../../common/models/ICard';
import {IPageValueExtractorService} from '../../../../common/services/PageValueExtractorService/IPageValueExtractorService';
import Card from '../../../../common/models/Card';
import {CardRarityEnum} from '../../../../common/models/CardRarityEnum';

describe('deckmanager.DataService', () => {
    let dataService:IDataService,
        $window:angular.IWindowService,
        $windowSpy:jasmine.Spy,
        pageValueExtractorMock:IPageValueExtractorService,
        pageValueExtractorSpy:jasmine.Spy,
        localStorageMock:ILocalStorageService,
        localStorageSpy:jasmine.Spy,
        deck:IDeck,
        card1:ICard,
        card2:ICard,
        card3:ICard;

    beforeEach(() => {
        $window = {
            location: {}
        } as any;

        localStorageMock = {
            loadSettings: ():void => {
            },
            saveSettings: ():void => {
            }
        } as any;

        pageValueExtractorMock = {
            getPageValue: ():void => {
            }
        } as any;

        card1 = new Card('foo', 0, CardRarityEnum.BASIC, '', 0, 0, false);
        card2 = new Card('bar', 0, CardRarityEnum.BASIC, '', 0, 0, true);
        card3 = new Card('baz', 0, CardRarityEnum.BASIC, '', 0, 0, true);

        dataService = new DataService($window, pageValueExtractorMock, localStorageMock);
        spyOn(dataService, 'getCardList').and.returnValue([card1, card2, card3]);
    });

    it('should get selected cards', () => {
        let chosenCards:ICard[] = dataService.getChosenCards();

        expect(chosenCards.length).toBe(2);
        expect(chosenCards).toEqual([card2, card3]);
    });

    it('should get filtered card list', () => {
        let filteredCards:ICard[];

        dataService.setFilter('bar');
        filteredCards = dataService.getFilteredCardList();
        expect(filteredCards.length).toBe(1);
        expect(filteredCards).toEqual([card2]);

        dataService.setFilter('');
        filteredCards = dataService.getFilteredCardList();
        expect(filteredCards.length).toBe(3);
        expect(filteredCards).toEqual([card1, card2, card3]);
    });

    describe('populating data', () => {
        let deckInStorage:IDeck[],
            selectedDeck:IDeck;

        beforeEach(() => {
            $window = {
                location: {
                    hash: '#id=test'
                }
            } as any;

            let pageValueCards:ICard[] = [
                new Card('foo', 0, CardRarityEnum.BASIC, '', 0, 0, false),
                new Card('hey', 0, CardRarityEnum.BASIC, '', 0, 0, false),
                new Card('bar', 0, CardRarityEnum.BASIC, '', 0, 0, false),
                new Card('baz', 0, CardRarityEnum.BASIC, '', 0, 0, false),
                new Card('troo', 0, CardRarityEnum.BASIC, '', 0, 0, false)
            ];

            selectedDeck = new Deck('test', 'foobar', [card1, card2, card3]);
            deckInStorage = [
                new Deck('best', 'barbaz', []),
                selectedDeck,
                new Deck('quest', 'foobaz', [])
            ];

            spyOn(localStorageMock, 'loadSettings').and.returnValue(deckInStorage);
            spyOn(pageValueExtractorMock, 'getPageValue').and.returnValue({cards: pageValueCards});

            dataService = new DataService($window, pageValueExtractorMock, localStorageMock);
        });

        it('should set initial deck', () => {
            expect(dataService.getDeck()).toBe(selectedDeck);
        });
    });


});
