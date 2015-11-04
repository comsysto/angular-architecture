// import directives
import coDeckManager from './coDeckManager/coDeckManager';
import coDeckList from './coDeckManager/coDeckList/coDeckList';
import coNewDeck from './coDeckManager/coNewDeck/coNewDeck';

// register directives
export default function registerDirectives(appName:string):void {
    'use strict';

    angular.module(appName)
        .directive('coDeckManager', coDeckManager)
        .directive('coDeckList', coDeckList)
        .directive('coNewDeck', coNewDeck);
}
