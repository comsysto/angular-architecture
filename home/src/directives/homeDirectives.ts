// import directives
import coHome from './coHome/coHome';
import coHeader from './coHome/coHeader/coHeader';

// register directives
export default function registerDirectives(appName:string):void {
    'use strict';

    angular.module(appName)
        .directive('coHome', coHome)
        .directive('coHeader', coHeader);
}
