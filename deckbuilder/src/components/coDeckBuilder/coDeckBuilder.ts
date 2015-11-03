import { html } from './coDeckBuilderTemplate.html';

function coDeckBuilder():angular.IDirective {
    'use strict';

    return {
        scope: {},
        template: html
    };
}

export default coDeckBuilder;
