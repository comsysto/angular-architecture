// import directives
import HomeService from './HomeService/HomeService';

// register directives
export default function registerServices(appName:string):void {
    'use strict';

    angular.module(appName)
        .service('HomeService', HomeService);
}
