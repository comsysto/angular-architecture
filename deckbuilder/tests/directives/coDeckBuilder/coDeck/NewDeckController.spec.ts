import DeckController from '../../../../components/coDeckBuilder/coDeck/DeckController';
import {facadeServiceMock} from '../../../mocks';
import {IDeck} from '../../../../../common/models/IDeck';
import Deck from '../../../../../common/models/Deck';
import {IFacadeService} from '../../../../services/FacadeService/IFacadeService';

describe('deckbuilder.DeckController', () => {
    let deckController:DeckController,
        facadeServiceSpy:jasmine.Spy;

    beforeEach(() => {
        deckController = new DeckController(facadeServiceMock);
    });

    it('should get the current deck', () => {
        facadeServiceSpy = spyOn(facadeServiceMock, 'getDeck');
        deckController.getDeck();

        expect(facadeServiceMock.getDeck).toHaveBeenCalled();
    });

    it('should get chosen cards', () => {
        facadeServiceSpy = spyOn(facadeServiceMock, 'getChosenCards');
        deckController.getChosenCards();

        expect(facadeServiceMock.getChosenCards).toHaveBeenCalled();
    });

    it('should lead back to deck manager', () => {
        facadeServiceSpy = spyOn(facadeServiceMock, 'backToManager');
        deckController.backToManager();

        expect(facadeServiceMock.backToManager).toHaveBeenCalled();
    });
});
