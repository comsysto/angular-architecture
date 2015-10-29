///<reference path="../../typings/tsd.d.ts"/>
import * as angular from 'angular';
import registerDirectives from './directives/appDirectives';
import registerServices from './services/appServices';

// app name
export const homeAppName:string = 'homeApp';

// register module, directives, services, etc.
angular.module(homeAppName, []);
registerDirectives(homeAppName);
registerServices(homeAppName);

// bootstrap Angular
let appAngularConfig:angular.IAngularBootstrapConfig = {
    debugInfoEnabled: true,
    strictDi: true
};

angular.bootstrap(
    document.getElementById('coHomeApp'),
    ['homeApp'],
    appAngularConfig
);
