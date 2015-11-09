import {html} from './coDeckListTemplate.html';
import DeckListController from './DeckListController';

function coDeckList():angular.IDirective {
    'use strict';

    return {
        controller: DeckListController,
        controllerAs: 'deckListController',
        replace: true,
        scope: {},
        template: html
    };
}

export default coDeckList;
