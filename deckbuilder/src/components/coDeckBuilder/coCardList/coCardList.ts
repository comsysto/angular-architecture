import {html} from './coCardListTemplate.html';
import CardListController from './CardListController';

function coCardList():angular.IDirective {
    'use strict';

    return {
        controller: CardListController,
        controllerAs: 'cardListController',
        replace: true,
        template: html
    };
}

export default coCardList;
