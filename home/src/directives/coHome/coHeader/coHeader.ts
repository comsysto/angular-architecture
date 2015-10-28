import * as angular from 'angular';
import { html } from './coHeaderTemplate.html';

export default function coHeader():angular.IDirective {
    return {
        scope: {},
        replace: true,
        template: html
    }
}