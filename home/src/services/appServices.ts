// import directives
import HomeService from './HomeService/HomeService';

// register directives
export default function registerServices(homeAppName:string):void {
    'use strict';

    angular.module(homeAppName)
        .service('HomeService', HomeService);
}
