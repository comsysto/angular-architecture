import {html} from './coNewDeckTemplate.html';
import NewDeckController from './NewDeckController';

function coNewDeck():angular.IDirective {
    'use strict';

    return {
        controller: NewDeckController,
        controllerAs: 'newDeckController',
        replace: true,
        scope: {},
        template: html
    };
}

export default coNewDeck;
