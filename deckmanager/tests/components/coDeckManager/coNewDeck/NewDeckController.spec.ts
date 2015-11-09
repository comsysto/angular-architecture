import NewDeckController from '../../../../components/coDeckManager/coNewDeck/NewDeckController';
import {IFacadeService} from '../../../../services/FacadeService/IFacadeService';
import {IDeck} from '../../../../../common/models/IDeck';
import Deck from '../../../../../common/models/Deck';
import {facadeServiceMock} from '../../../mocks';

describe('deckmanager.NewDeckController', () => {
    let newDeckController:NewDeckController,
        facadeServiceSpy:jasmine.Spy;

    beforeEach(() => {
        newDeckController = new NewDeckController(facadeServiceMock);
    });

    it('should get if form is shown', () => {
        facadeServiceSpy = spyOn(facadeServiceMock, 'getShowNewDeckForm');
        newDeckController.isFormShown();

        expect(facadeServiceMock.getShowNewDeckForm).toHaveBeenCalled();
    });

    it('should create new deck', () => {
        facadeServiceSpy = spyOn(facadeServiceMock, 'createNewDeck');
        newDeckController.createNewDeck();

        expect(facadeServiceMock.createNewDeck).toHaveBeenCalled();
    });

    it('should hide deck form', () => {
        facadeServiceSpy = spyOn(facadeServiceMock, 'setShowNewDeckForm');
        newDeckController.hideNewDeckForm();

        expect(facadeServiceMock.setShowNewDeckForm).toHaveBeenCalledWith(false);
    });
});
