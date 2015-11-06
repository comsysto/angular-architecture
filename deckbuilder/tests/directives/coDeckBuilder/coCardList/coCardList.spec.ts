import {appName} from '../../../../main';
import CardListController from '../../../../components/coDeckBuilder/coCardList/CardListController';
import {facadeServiceMock} from '../../../mocks';
import Card from '../../../../../common/models/Card';
import {CardRarityEnum} from '../../../../../common/models/CardRarityEnum';
import Deck from '../../../../../common/models/Deck';
import {ICard} from '../../../../../common/models/ICard';

describe('deckbuilder.coCardList', () => {
    let $compile:angular.ICompileService,
        $rootScope:any,
        template:angular.IAugmentedJQuery,
        element:angular.IAugmentedJQuery,
        controller:CardListController,
        card1: ICard,
        card2: ICard,
        controllerSpy:jasmine.Spy;

    beforeEach(() => {
        angular.mock.module(appName, {
            FacadeService: facadeServiceMock
        });

        inject((_$compile_:ng.ICompileService, _$rootScope_:ng.IRootScopeService) => {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });

        template = angular.element('<div data-co-card-list></div>');
        element = $compile(template)($rootScope);
        controller = element.controller('coCardList');

        card1 = new Card('foo card', 0, CardRarityEnum.BASIC, 'foo img', 0, 0, false);
        card2 = new Card('bar card', 0, CardRarityEnum.BASIC, 'bar img', 0, 0, true);

        spyOn(controller, 'getCardList').and.returnValue([card1, card2 ]);

        $rootScope.$digest();
    });

    it('should render the component', () => {
        expect(element.html()).toContain('<!-- deckbuilder.coCardList -->');
    });

    it('should show cards in deck', () => {
        expect(element.html()).toContain('foo card');
        expect(element.html()).toContain('foo img');
        expect(element.html()).toContain('bar card');
        expect(element.html()).toContain('bar img');
    });

    it('should toggle card status', () => {
        controllerSpy = spyOn(controller, 'toggleCard');
        controllerSpy.and.returnValue(null);
        angular.element(element[0].querySelector('.card')).triggerHandler('click');

        expect(controller.toggleCard).toHaveBeenCalledWith(card1);
    });

    it('should show selected cards', () => {
        expect(element[0].querySelectorAll('.card-item')[0].classList.contains('selected')).toBeFalsy();
        expect(element[0].querySelectorAll('.card-item')[1].classList.contains('selected')).toBeTruthy();
    });

});
