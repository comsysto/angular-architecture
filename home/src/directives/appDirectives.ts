// import directives
import coHome from './coHome/coHome';
import coHeader from './coHome/coHeader/coHeader';

// register directives
export default function registerDirectives(homeAppName:string):void {
    'use strict';

    angular.module(homeAppName)
        .directive('coHome', coHome)
        .directive('coHeader', coHeader);
}
