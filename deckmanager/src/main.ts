///<reference path="../../typings/tsd.d.ts"/>
import * as angular from 'angular';
import registerDirectives from './components/deckManagerDirectives';
import registerServices from './services/deckManagerServices';

// app name
export const appName:string = 'deckManagerApp';

// register module, directives, services, etc.
angular.module(appName, ['common']);
registerDirectives(appName);
registerServices(appName);

// bootstrap Angular
let appAngularConfig:angular.IAngularBootstrapConfig = {
    debugInfoEnabled: true,
    strictDi: true
};
angular.bootstrap(
    document.getElementById('coDeckManagerApp'),
    [appName],
    appAngularConfig
);
