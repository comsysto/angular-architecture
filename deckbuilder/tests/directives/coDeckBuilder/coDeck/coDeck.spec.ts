import {appName} from '../../../../main';
import DeckController from '../../../../components/coDeckBuilder/coDeck/DeckController';
import {facadeServiceMock} from '../../../mocks';
import Card from '../../../../../common/models/Card';
import {CardRarityEnum} from '../../../../../common/models/CardRarityEnum';
import Deck from '../../../../../common/models/Deck';

describe('deckbuilder.coDeck', () => {
    let $compile:angular.ICompileService,
        $rootScope:any,
        template:angular.IAugmentedJQuery,
        element:angular.IAugmentedJQuery,
        controller:DeckController,
        controllerSpy:jasmine.Spy;

    beforeEach(() => {
        angular.mock.module(appName, {
            FacadeService: facadeServiceMock
        });

        inject((_$compile_:ng.ICompileService, _$rootScope_:ng.IRootScopeService) => {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });

        template = angular.element('<div data-co-deck></div>');
        element = $compile(template)($rootScope);
        controller = element.controller('coDeck');

        $rootScope.$digest();
    });

    it('should render the component', () => {
        expect(element.html()).toContain('<!-- deckmanager.coDeck -->');
    });

    it('should be possible to go beck to deck manager', () => {
        controllerSpy = spyOn(controller, 'backToManager');
        controllerSpy.and.returnValue(null);
        angular.element(element[0].querySelector('.back-to-root')).triggerHandler('click');

        expect(controller.backToManager).toHaveBeenCalled();
    });

    it('should say if there are no chosen cards yet', () => {
        controllerSpy = spyOn(controller, 'getChosenCards');
        controllerSpy.and.returnValue([]);
        $rootScope.$digest();

        expect(element.html()).toContain('You haven\'t chosen any cards');
    });

    it('should show deck name', () => {
        controllerSpy = spyOn(controller, 'getDeck');
        controllerSpy.and.returnValue(new Deck('some id', 'foo deck bar name', []));
        $rootScope.$digest();

        expect(element.html()).toContain('foo deck bar name');
    });

    it('should show cards in deck', () => {
        controllerSpy = spyOn(controller, 'getChosenCards');
        controllerSpy.and.returnValue([
            new Card('foo card', 0, CardRarityEnum.BASIC, 'foo img'),
            new Card('bar card', 0, CardRarityEnum.BASIC, 'bar img'),
        ]);
        $rootScope.$digest();

        expect(element.html()).toContain('foo card');
        expect(element.html()).toContain('foo img');
        expect(element.html()).toContain('bar card');
        expect(element.html()).toContain('bar img');
    });

});
