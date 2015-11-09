import {html} from './coCardListTemplate.html';
import CardListController from './CardListController';

function coCardList():angular.IDirective {
    'use strict';

    // TODO: It would be great to implement other ways of filtering and sorting this card list
    return {
        controller: CardListController,
        controllerAs: 'cardListController',
        replace: true,
        scope: {},
        template: html
    };
}

export default coCardList;
