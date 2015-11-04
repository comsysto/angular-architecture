// import directives
import coHeader from './coHeader/coHeader';
import coFooter from './coFooter/coFooter';

// register directives
export default function registerDirectives(appName:string):void {
    'use strict';

    angular.module(appName)
        .directive('coHeader', coHeader)
        .directive('coFooter', coFooter);
}
