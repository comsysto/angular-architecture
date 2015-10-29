import { html } from './coHeaderTemplate.html';

export default function coHeader():angular.IDirective {
    'use strict';

    return {
        replace: true,
        scope: {},
        template: html
    };
}
