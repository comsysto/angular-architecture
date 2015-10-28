import * as angular from 'angular';
import { homeAppName } from '../app';

// Import directives
import coHome from './coHome/coHome';
import coHeader from './coHome/coHeader/coHeader';

// Register directives
export default function registerDirectives() {
    angular.module(homeAppName)
        .directive('coHome', coHome)
        .directive('coHeader', coHeader);
}
