///<reference path="../../typings/tsd.d.ts"/>
import * as angular from 'angular';
import registerDirectives from './directives/homeDirectives';
import registerServices from './services/homeServices';

// app name
export const homeAppName:string = 'homeApp';

// register module, directives, services, etc.
angular.module(homeAppName, ['common']);
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
