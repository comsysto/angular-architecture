import {html} from './coHeaderTemplate.html';

function coHeader():angular.IDirective {
    'use strict';

    return {
        scope: {
            titleText: '@'
        },
        template: html
    };
}

export default coHeader;
