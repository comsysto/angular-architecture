import {html} from './coCardListFilterTemplate.html';
import CardListFilterController from './CardListFilterController';

function coCardListFilter():angular.IDirective {
    'use strict';

    return {
        controller: CardListFilterController,
        controllerAs: 'cardListFilterController',
        replace: true,
        scope: {},
        template: html
    };
}

export default coCardListFilter;
