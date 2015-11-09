import {html} from './coDeckTemplate.html';
import DeckController from './DeckController';

function coDeck():angular.IDirective {
    'use strict';

    return {
        controller: DeckController,
        controllerAs: 'deckController',
        replace: true,
        scope: {},
        template: html
    };
}

export default coDeck;
