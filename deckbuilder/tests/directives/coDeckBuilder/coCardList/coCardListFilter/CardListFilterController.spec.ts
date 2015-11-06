import CardListFilterController from '../../../../../components/coDeckBuilder/coCardList/coCardListFilter/CardListFilterController';
import {facadeServiceMock} from '../../../../mocks';

describe('deckbuilder.CardListFilterController', () => {
    let cardListFilterController:CardListFilterController,
        $rootScope:angular.IRootScopeService,
        facadeServiceSpy:jasmine.Spy;

    beforeEach(() => {
        inject((_$rootScope_:angular.IRootScopeService) => {
            $rootScope = _$rootScope_;
        });

        cardListFilterController = new CardListFilterController($rootScope, facadeServiceMock);
    });

    it('should watch the filter', () => {
        facadeServiceSpy = spyOn(facadeServiceMock, 'setFilter');

        cardListFilterController.filter = 'foo';
        $rootScope.$digest();

        expect(facadeServiceMock.setFilter).toHaveBeenCalledWith('foo');
    });
});
