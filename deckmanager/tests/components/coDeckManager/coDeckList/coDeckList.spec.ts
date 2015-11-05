import {appName} from '../../../../main';
import DeckListController from '../../../../components/coDeckManager/coDeckList/DeckListController';
import {IDeck} from '../../../../../common/models/IDeck';
import Deck from '../../../../../common/models/Deck';

describe('deckManager.coDeckList', () => {
    let $compile:angular.ICompileService,
        $rootScope:any,
        template:angular.IAugmentedJQuery,
        element:angular.IAugmentedJQuery,
        controller:DeckListController,
        controllerSpy:jasmine.Spy;

    beforeEach(() => {
        angular.mock.module(appName);

        inject((_$compile_:ng.ICompileService, _$rootScope_:ng.IRootScopeService) => {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });

        template = angular.element('<div data-co-deck-list></div>');
        element = $compile(template)($rootScope);
        controller = element.controller('coDeckList');

        $rootScope.$digest();
    });

    it('should render the component', () => {
        expect(element.html()).toContain('<!-- deckmanager.coDeckList -->');
    });

    it('should display a message that there are no decks', () => {
        expect(element.html()).toContain('Looks like you don\'t have any decks yet.');
    });

    it('should be possible to add a deck', () => {
        controllerSpy = spyOn(controller, 'addDeck');
        controllerSpy.and.returnValue(null);
        angular.element(element[0].querySelector('.add-deck')).triggerHandler('click');

        expect(controller.addDeck).toHaveBeenCalled();
    });

    describe('deck listing tests', () => {
        let deck1:IDeck,
            deck2:IDeck;

        beforeEach(() => {
            deck1 = new Deck('test1', 'some first name', []);
            deck2 = new Deck('test2', 'whatever second name', []);
            controllerSpy = spyOn(controller, 'getDecks');
            controllerSpy.and.returnValue([deck1, deck2]);
            $rootScope.$digest();
        });

        it('should display all decks', () => {
            expect(element.html()).not.toContain('Looks like you don\'t have any decks yet.');
            expect(element.html()).toContain('some first name');
            expect(element.html()).toContain('whatever second name');
        });

        it('should be possible to edit a deck', () => {
            controllerSpy = spyOn(controller, 'editDeck');
            controllerSpy.and.returnValue(null);

            angular.element(element[0].querySelector('.edit-deck')).triggerHandler('click');

            expect(controller.editDeck).toHaveBeenCalledWith(deck1);
        });

        it('should be possible to edit a deck', () => {
            controllerSpy = spyOn(controller, 'deleteDeck');
            controllerSpy.and.returnValue(null);

            angular.element(element[0].querySelector('.delete-deck')).triggerHandler('click');

            expect(controller.deleteDeck).toHaveBeenCalledWith(deck1);
        });
    });

});
