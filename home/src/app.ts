///<reference path="../../typings/tsd.d.ts"/>
import * as angular from 'angular';
import registerDirectives from './directives/appDirectives';
import registerServices from './services/appServices';

// App name
export const homeAppName = 'homeApp';

// Register module, directives, services, etc.
angular.module(homeAppName, []);
registerDirectives();
registerServices();

// Bootstrap Angular
let appAngularConfig:angular.IAngularBootstrapConfig = {
    strictDi: true,
    debugInfoEnabled: true
};

angular.bootstrap(
    document.getElementById('coHomeApp'),
    ['homeApp'],
    appAngularConfig
);



