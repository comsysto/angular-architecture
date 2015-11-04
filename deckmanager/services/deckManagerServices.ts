// import directives
import FacadeService from './FacadeService/FacadeService';
import DataService from './DataService/DataService';
import UIStateService from './UIStateService/UIStateService';

// register directives
export default function registerServices(appName:string):void {
    'use strict';

    angular.module(appName)
        .service('DataService', DataService)
        .service('UIStateService', UIStateService)
        .service('FacadeService', FacadeService);
}
