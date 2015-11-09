import DeckListController from '../../../../components/coDeckManager/coDeckList/DeckListController';
import {IFacadeService} from '../../../../services/FacadeService/IFacadeService';
import {IDeck} from '../../../../../common/models/IDeck';
import Deck from '../../../../../common/models/Deck';
import {facadeServiceMock} from '../../../mocks';

describe('deckmanager.DeckListController', () => {
    let deckListController:DeckListController,
        facadeServiceSpy:jasmine.Spy;

    beforeEach(() => {
        deckListController = new DeckListController(facadeServiceMock);
    });

    it('should get decks', () => {
        facadeServiceSpy = spyOn(facadeServiceMock, 'getDecks');
        deckListController.getDecks();

        expect(facadeServiceMock.getDecks).toHaveBeenCalled();
    });

    it('should add a deck', () => {
        facadeServiceSpy = spyOn(facadeServiceMock, 'setShowNewDeckForm');
        deckListController.addDeck();

        expect(facadeServiceMock.setShowNewDeckForm).toHaveBeenCalledWith(true);
    });

    it('should edit decks', () => {
        let deck:any = {foo: 'bar'};
        facadeServiceSpy = spyOn(facadeServiceMock, 'editDeck');
        deckListController.editDeck(deck);

        expect(facadeServiceMock.editDeck).toHaveBeenCalledWith(deck);
    });

    it('should delete decks', () => {
        let deck:any = {foo: 'bar'};
        facadeServiceSpy = spyOn(facadeServiceMock, 'deleteDeck');
        deckListController.deleteDeck(deck);

        expect(facadeServiceMock.deleteDeck).toHaveBeenCalledWith(deck);
    });
});
