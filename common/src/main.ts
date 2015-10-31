///<reference path="../../typings/tsd.d.ts"/>

import * as angular from 'angular';
import registerServices from './services/commonServices';

export const appName:string = 'common';

angular.module(appName, []);
registerServices(appName);
