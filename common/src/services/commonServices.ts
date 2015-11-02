// import directives
import PageValueExtractorService from './PageValueExtractorService/PageValueExtractorService';

// register directives
export default function registerServices(appName:string):void {
    'use strict';

    angular.module(appName)
        .service('PageValueExtractorService', PageValueExtractorService);
}
