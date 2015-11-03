// import directives
import PageValueExtractorService from './PageValueExtractorService/PageValueExtractorService';
import LocalStorageService from './LocalStorageService/LocalStorageService';

// register directives
export default function registerServices(appName:string):void {
    'use strict';

    angular.module(appName)
        .service('PageValueExtractorService', PageValueExtractorService)
        .service('LocalStorageService', LocalStorageService);
}
