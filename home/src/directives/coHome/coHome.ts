import * as angular from 'angular';
import { html } from './coHomeTemplate.html';
import HomeService from '../../services/HomeService/HomeService';
import {IHomeService} from "../../services/HomeService/IHomeService";

coHome.$inject = ['HomeService'];

function coHome(HomeService:IHomeService):angular.IDirective {
    return {
        scope: {
            testing: '='
        },
        replace: true,
        template: html,
        link: ($scope:any) => {
            $scope.$watch(
                () => {
                    return $scope.testing;
                },
                () => {
                    $scope.firstLetter = HomeService.returnFirstLetter($scope.testing);
                }
            );
        }
    }
}


export default coHome;
