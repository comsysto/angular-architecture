// Import directives
import coHome from './coHome/coHome';
import coHeader from './coHome/coHeader/coHeader';

// Register directives
export default function registerDirectives(homeAppName:string):void {
    angular.module(homeAppName)
        .directive('coHome', coHome)
        .directive('coHeader', coHeader);
}
