// import directives
import coHome from './coDeckBuilder/coDeckBuilder';
import coDeck from './coDeckBuilder/coDeck/coDeck';
import coCardList from './coDeckBuilder/coCardList/coCardList';
import coCardListFilter from './coDeckBuilder/coCardList/coCardListFilter/coCardListFilter';

// register directives
export default function registerDirectives(appName:string):void {
    'use strict';

    angular.module(appName)
        .directive('coDeckBuilder', coHome)
        .directive('coDeck', coDeck)
        .directive('coCardList', coCardList)
        .directive('coCardListFilter', coCardListFilter);
}
