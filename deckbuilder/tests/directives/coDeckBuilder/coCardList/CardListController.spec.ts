import CardListController from '../../../../components/coDeckBuilder/coCardList/CardListController';
import {facadeServiceMock} from '../../../mocks';
import {IDeck} from '../../../../../common/models/IDeck';
import Deck from '../../../../../common/models/Deck';
import {IFacadeService} from '../../../../services/FacadeService/IFacadeService';
import {ICard} from '../../../../../common/models/ICard';

describe('deckbuilder.CardListController', () => {
    let cardListController:CardListController,
        facadeServiceSpy:jasmine.Spy;

    beforeEach(() => {
        cardListController = new CardListController(facadeServiceMock);
    });

    it('should get card list', () => {
        facadeServiceSpy = spyOn(facadeServiceMock, 'getFilteredCardList');
        cardListController.getCardList();

        expect(facadeServiceMock.getFilteredCardList).toHaveBeenCalled();
    });

    it('should toggle a card', () => {
        facadeServiceSpy = spyOn(facadeServiceMock, 'toggleCard');
        let card:ICard = {} as ICard;
        cardListController.toggleCard(card);

        expect(facadeServiceMock.toggleCard).toHaveBeenCalledWith(card);
    });
});
