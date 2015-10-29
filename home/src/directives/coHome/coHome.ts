import * as angular from 'angular';
import { html } from './coHomeTemplate.html';
import {IHomeService} from '../../services/HomeService/IHomeService';

coHome.$inject = ['HomeService'];

function coHome(HomeService:IHomeService):angular.IDirective {
    'use strict';

    return {
        link: ($scope:any):void => {
            $scope.$watch(
                () => {
                    return $scope.testing;
                },
                () => {
                    $scope.firstLetter = HomeService.returnFirstLetter($scope.testing);
                }
            );
        },
        replace: true,
        scope: {
            testing: '='
        },
        template: html
    };
}


export default coHome;
