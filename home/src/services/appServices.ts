import * as angular from 'angular';
import { homeAppName } from '../app';

// Import directives
import HomeService from './HomeService/HomeService';

// Register directives
export default function registerServices() {
    angular.module(homeAppName)
        .service('HomeService', HomeService);
}
