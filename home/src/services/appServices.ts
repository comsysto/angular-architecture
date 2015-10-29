// Import directives
import HomeService from './HomeService/HomeService';

// Register directives
export default function registerServices(homeAppName:string):void {
    angular.module(homeAppName)
        .service('HomeService', HomeService);
}
