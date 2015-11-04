// import directives
import coFooter from './coFooter/coFooter';

// register directives
export default function registerDirectives(appName:string):void {
    'use strict';

    angular.module(appName)
        .directive('coFooter', coFooter);
}
