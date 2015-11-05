import {appName} from '../../../../main';
import NewDeckController from '../../../../components/coDeckManager/coNewDeck/NewDeckController';

describe('deckManager.coNewDeck', () => {
    let $compile:angular.ICompileService,
        $rootScope:any,
        template:angular.IAugmentedJQuery,
        element:angular.IAugmentedJQuery,
        controller:NewDeckController,
        controllerSpy:jasmine.Spy;

    beforeEach(() => {
        angular.mock.module(appName);

        inject((_$compile_:ng.ICompileService, _$rootScope_:ng.IRootScopeService) => {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });

        template = angular.element('<div data-co-new-deck></div>');
        element = $compile(template)($rootScope);
        controller = element.controller('coNewDeck');

        $rootScope.$digest();
    });

    it('should render the component', () => {
        expect(element.html()).toContain('<!-- deckmanager.coNewDeck -->');
    });

    it('should hide the form if needed', () => {
        controllerSpy = spyOn(controller, 'isFormShown');

        controllerSpy.and.returnValue(false);
        $rootScope.$digest();
        expect(element[0].querySelector('.new-deck-form').classList.contains('ng-hide')).toBeTruthy();

        controllerSpy.and.returnValue(true);
        $rootScope.$digest();
        expect(element[0].querySelector('.new-deck-form').classList.contains('ng-hide')).toBeFalsy();
    });

    it('should be possible to create a deck', () => {
        controllerSpy = spyOn(controller, 'createNewDeck');
        controllerSpy.and.returnValue(null);
        angular.element(element[0].querySelector('.create-new-deck')).triggerHandler('click');

        expect(controller.createNewDeck).toHaveBeenCalled();
    });

    it('should be possible to cancel creating a deck', () => {
        controllerSpy = spyOn(controller, 'hideNewDeckForm');
        controllerSpy.and.returnValue(null);
        angular.element(element[0].querySelector('.cancel-new-deck')).triggerHandler('click');

        expect(controller.hideNewDeckForm).toHaveBeenCalled();
    });

});
