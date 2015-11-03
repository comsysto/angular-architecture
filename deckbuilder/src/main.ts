///<reference path="../../typings/tsd.d.ts"/>
import * as angular from 'angular';
import registerDirectives from './components/deckBuilderDirectives';
import registerServices from './services/deckBuilderServices';

// app name
export const appName:string = 'deckApp';

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
    document.getElementById('coDeckBuilderApp'),
    [appName],
    appAngularConfig
);
