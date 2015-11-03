(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var CardListController = (function () {
    function CardListController(deckBuilderService) {
        this.facadeService = deckBuilderService;
    }
    CardListController.prototype.getCardList = function () {
        return this.facadeService.getFilteredCardList();
    };
    CardListController.prototype.toggleCard = function (card) {
        this.facadeService.toggleCard(card);
    };
    return CardListController;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CardListController;
CardListController.$inject = ['FacadeService'];


},{}],2:[function(require,module,exports){
var coCardListTemplate_html_1 = require('./coCardListTemplate.html');
var CardListController_1 = require('./CardListController');
function coCardList() {
    'use strict';
    return {
        controller: CardListController_1.default,
        controllerAs: 'cardListController',
        replace: true,
        template: coCardListTemplate_html_1.html
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = coCardList;


},{"./CardListController":1,"./coCardListTemplate.html":6}],3:[function(require,module,exports){
var CardListFilterController = (function () {
    function CardListFilterController($scope, deckBuilderService) {
        var _this = this;
        this.facadeService = deckBuilderService;
        this.filter = '';
        $scope.$watch(function () {
            return _this.filter;
        }, function (newVal) {
            _this.setFilter(newVal);
        });
    }
    CardListFilterController.prototype.setFilter = function (filter) {
        return this.facadeService.setFilter(filter);
    };
    return CardListFilterController;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CardListFilterController;
CardListFilterController.$inject = ['$scope', 'FacadeService'];


},{}],4:[function(require,module,exports){
var coCardListFilterTemplate_html_1 = require('./coCardListFilterTemplate.html');
var CardListFilterController_1 = require('./CardListFilterController');
function coCardListFilter() {
    'use strict';
    return {
        controller: CardListFilterController_1.default,
        controllerAs: 'cardListFilterController',
        replace: true,
        template: coCardListFilterTemplate_html_1.html
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = coCardListFilter;


},{"./CardListFilterController":3,"./coCardListFilterTemplate.html":5}],5:[function(require,module,exports){
exports.html = "\n    <div>\n        <div class=\"card-list-filter\">\n            <p>\n                Filter cards by name:\n                <input type=\"text\" data-ng-model=\"cardListFilterController.filter\">\n            </p>\n        </div>\n    </div>\n    ";


},{}],6:[function(require,module,exports){
exports.html = "\n    <div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-6\">\n                    <h2>Card gallery</h2>\n                </div>\n                <div class=\"col-xs-6\">\n                    <div class=\"pull-right\" data-co-card-list-filter></div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div data-ng-repeat=\"card in cardListController.getCardList()\"\n                    data-ng-click=\"cardListController.toggleCard(card)\"\n                    class=\"card text-center col-xs-12 col-sm-6 col-md-4 col-lg-3\">\n                    <p data-ng-class=\"{ 'selected': card.selected }\">\n                        <img data-ng-src=\"img/cards/{{ card.image }}\"\n                        alt=\"{{ card.name }}\">\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n    ";


},{}],7:[function(require,module,exports){
var DeckController = (function () {
    function DeckController(deckBuilderService) {
        this.facadeService = deckBuilderService;
    }
    DeckController.prototype.getChosenCards = function () {
        return this.facadeService.getChosenCards();
    };
    return DeckController;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeckController;
DeckController.$inject = ['FacadeService'];


},{}],8:[function(require,module,exports){
var coDeckTemplate_html_1 = require('./coDeckTemplate.html');
var DeckController_1 = require('./DeckController');
function coDeck() {
    'use strict';
    return {
        controller: DeckController_1.default,
        controllerAs: 'deckController',
        replace: true,
        template: coDeckTemplate_html_1.html
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = coDeck;


},{"./DeckController":7,"./coDeckTemplate.html":9}],9:[function(require,module,exports){
exports.html = "\n    <div>\n        <div id=\"deck\" class=\"container\">\n            <div class=\"row\">\n                <h2>Your chosen deck</h2>\n                <div class=\"chosen-cards clearfix\">\n                    <ul data-ng-if=\"deckController.getChosenCards().length > 0\">\n                        <li data-ng-repeat=\"card in deckController.getChosenCards()\">\n                            <img data-ng-src=\"img/cards/{{ card.image }}\"\n                                alt=\"{{ card.name }}\">\n                        </li>\n                    </ul>\n                    <p data-ng-if=\"deckController.getChosenCards().length === 0\">\n                        You haven't chosen any cards for your deck yet.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n    ";


},{}],10:[function(require,module,exports){
var coDeckBuilderTemplate_html_1 = require('./coDeckBuilderTemplate.html');
function coDeckBuilder() {
    'use strict';
    return {
        scope: {},
        template: coDeckBuilderTemplate_html_1.html
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = coDeckBuilder;


},{"./coDeckBuilderTemplate.html":11}],11:[function(require,module,exports){
exports.html = "\n    <div>\n        <p class=\"text-center\">\n            <img src=\"img/logo.png\" alt=\"Hearthstone\">\n        </p>\n        <h1 class=\"text-center\">\n            Deck Builder\n        </h1>\n        <p class=\"text-center\">\n            Choose cards for your deck by clicking on them.\n        </p>\n        <div data-co-deck></div>\n        <div data-co-card-list></div>\n        <div data-co-footer></div>\n    </div>\n";


},{}],12:[function(require,module,exports){
// import directives
var coDeckBuilder_1 = require('./coDeckBuilder/coDeckBuilder');
var coDeck_1 = require('./coDeckBuilder/coDeck/coDeck');
var coCardList_1 = require('./coDeckBuilder/coCardList/coCardList');
var coCardListFilter_1 = require('./coDeckBuilder/coCardList/coCardListFilter/coCardListFilter');
// register directives
function registerDirectives(appName) {
    'use strict';
    angular.module(appName)
        .directive('coDeckBuilder', coDeckBuilder_1.default)
        .directive('coDeck', coDeck_1.default)
        .directive('coCardList', coCardList_1.default)
        .directive('coCardListFilter', coCardListFilter_1.default);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerDirectives;


},{"./coDeckBuilder/coCardList/coCardList":2,"./coDeckBuilder/coCardList/coCardListFilter/coCardListFilter":4,"./coDeckBuilder/coDeck/coDeck":8,"./coDeckBuilder/coDeckBuilder":10}],13:[function(require,module,exports){
(function (global){
///<reference path="../../typings/tsd.d.ts"/>
var angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);
var deckBuilderDirectives_1 = require('./components/deckBuilderDirectives');
var deckBuilderServices_1 = require('./services/deckBuilderServices');
// app name
exports.appName = 'deckApp';
// register module, directives, services, etc.
angular.module(exports.appName, ['common']);
deckBuilderDirectives_1.default(exports.appName);
deckBuilderServices_1.default(exports.appName);
// bootstrap Angular
var appAngularConfig = {
    debugInfoEnabled: true,
    strictDi: true
};
angular.bootstrap(document.getElementById('coDeckBuilderApp'), [exports.appName], appAngularConfig);


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./components/deckBuilderDirectives":12,"./services/deckBuilderServices":16}],14:[function(require,module,exports){
var DataService = (function () {
    function DataService(pageValueExtractorService) {
        this.pageValueExtractorService = pageValueExtractorService;
        this.dataModel = new DataModel();
        // init data model
        this.dataModel.setPageValue(this.pageValueExtractorService.getPageValue());
        this.dataModel.setFilter('');
    }
    DataService.prototype.getFilteredCardList = function () {
        var _this = this;
        if (this.dataModel.getFilter() !== '') {
            return this.getCardList().filter(function (card) {
                return card.name.toLowerCase().indexOf(_this.dataModel.getFilter().toLowerCase()) > -1;
            });
        }
        return this.getCardList();
    };
    DataService.prototype.getChosenCards = function () {
        return this.getCardList().filter(function (card) {
            return card.selected;
        });
    };
    DataService.prototype.setFilter = function (filter) {
        this.dataModel.setFilter(filter);
    };
    DataService.prototype.toggleCard = function (card) {
        var cards = this.getCardList();
        cards.map(function (currentCard) {
            if (currentCard === card) {
                card.selected = !card.selected;
            }
        });
        this.dataModel.getPageValue().cards = cards;
    };
    DataService.prototype.getCardList = function () {
        return this.dataModel.getPageValue().cards;
    };
    return DataService;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DataService;
var DataModel = (function () {
    function DataModel() {
    }
    DataModel.prototype.getFilter = function () {
        return this.filter;
    };
    DataModel.prototype.setFilter = function (value) {
        this.filter = value;
    };
    DataModel.prototype.getPageValue = function () {
        return this.pageValue;
    };
    DataModel.prototype.setPageValue = function (value) {
        this.pageValue = value;
    };
    return DataModel;
})();
DataService.$inject = ['PageValueExtractorService'];


},{}],15:[function(require,module,exports){
var FacadeService = (function () {
    function FacadeService(dataService) {
        this.dataService = dataService;
    }
    FacadeService.prototype.getFilteredCardList = function () {
        return this.dataService.getFilteredCardList();
    };
    FacadeService.prototype.getChosenCards = function () {
        return this.dataService.getChosenCards();
    };
    FacadeService.prototype.toggleCard = function (card) {
        this.dataService.toggleCard(card);
    };
    FacadeService.prototype.setFilter = function (filter) {
        this.dataService.setFilter(filter);
    };
    return FacadeService;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FacadeService;
FacadeService.$inject = ['DataService'];


},{}],16:[function(require,module,exports){
// import directives
var FacadeService_1 = require('./FacadeService/FacadeService');
var DataService_1 = require('./DataService/DataService');
// register directives
function registerServices(appName) {
    'use strict';
    angular.module(appName)
        .service('FacadeService', FacadeService_1.default)
        .service('DataService', DataService_1.default);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerServices;


},{"./DataService/DataService":14,"./FacadeService/FacadeService":15}]},{},[13])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrYnVpbGRlci9jb2NhcmRsaXN0L2NhcmRsaXN0Y29udHJvbGxlci50cyIsIi9zb3VyY2UvY29tcG9uZW50cy9jb2RlY2tidWlsZGVyL2NvY2FyZGxpc3QvY29jYXJkbGlzdC50cyIsIi9zb3VyY2UvY29tcG9uZW50cy9jb2RlY2tidWlsZGVyL2NvY2FyZGxpc3QvY29jYXJkbGlzdGZpbHRlci9jYXJkbGlzdGZpbHRlcmNvbnRyb2xsZXIudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrYnVpbGRlci9jb2NhcmRsaXN0L2NvY2FyZGxpc3RmaWx0ZXIvY29jYXJkbGlzdGZpbHRlci50cyIsIi9zb3VyY2UvY29tcG9uZW50cy9jb2RlY2tidWlsZGVyL2NvY2FyZGxpc3QvY29jYXJkbGlzdGZpbHRlci9jb2NhcmRsaXN0ZmlsdGVydGVtcGxhdGUuaHRtbC50cyIsIi9zb3VyY2UvY29tcG9uZW50cy9jb2RlY2tidWlsZGVyL2NvY2FyZGxpc3QvY29jYXJkbGlzdHRlbXBsYXRlLmh0bWwudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrYnVpbGRlci9jb2RlY2svZGVja2NvbnRyb2xsZXIudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrYnVpbGRlci9jb2RlY2svY29kZWNrLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvZGVja2J1aWxkZXIvY29kZWNrL2NvZGVja3RlbXBsYXRlLmh0bWwudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrYnVpbGRlci9jb2RlY2tidWlsZGVyLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvZGVja2J1aWxkZXIvY29kZWNrYnVpbGRlcnRlbXBsYXRlLmh0bWwudHMiLCIvc291cmNlL2NvbXBvbmVudHMvZGVja2J1aWxkZXJkaXJlY3RpdmVzLnRzIiwiL3NvdXJjZS9tYWluLnRzIiwiL3NvdXJjZS9zZXJ2aWNlcy9kYXRhc2VydmljZS9kYXRhc2VydmljZS50cyIsIi9zb3VyY2Uvc2VydmljZXMvZmFjYWRlc2VydmljZS9mYWNhZGVzZXJ2aWNlLnRzIiwiL3NvdXJjZS9zZXJ2aWNlcy9kZWNrYnVpbGRlcnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDR0E7SUFHSSw0QkFBWSxrQkFBaUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQztJQUM1QyxDQUFDO0lBRU0sd0NBQVcsR0FBbEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFTSx1Q0FBVSxHQUFqQixVQUFrQixJQUFVO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDTCx5QkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZEQ7b0NBY0MsQ0FBQTtBQUVELGtCQUFrQixDQUFDLE9BQU8sR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzs7O0FDbkIvQyx3Q0FBbUIsMkJBQTJCLENBQUMsQ0FBQTtBQUMvQyxtQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUV0RDtJQUNJLFlBQVksQ0FBQztJQUViLE1BQU0sQ0FBQztRQUNILFVBQVUsRUFBRSw0QkFBa0I7UUFDOUIsWUFBWSxFQUFFLG9CQUFvQjtRQUNsQyxPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSw4QkFBSTtLQUNqQixDQUFDO0FBQ04sQ0FBQztBQUVEO2tCQUFlLFVBQVUsQ0FBQzs7OztBQ1gxQjtJQUlJLGtDQUFZLE1BQVUsRUFBRSxrQkFBaUM7UUFKN0QsaUJBcUJDO1FBaEJPLElBQUksQ0FBQyxhQUFhLEdBQUcsa0JBQWtCLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFakIsTUFBTSxDQUFDLE1BQU0sQ0FD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QUE7QUFFcEQsc0JBQXNCO0FBQ3RCLDBCQUF5QyxPQUFjO0lBQ25ELFlBQVksQ0FBQztJQUViLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ2xCLE9BQU8sQ0FBQyxlQUFlLEVBQUUsdUJBQWEsQ0FBQztTQUN2QyxPQUFPLENBQUMsYUFBYSxFQUFFLHFCQUFXLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBTkQ7a0NBTUMsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQge0lGYWNhZGVTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9GYWNhZGVTZXJ2aWNlL0lGYWNhZGVTZXJ2aWNlJztcbmltcG9ydCB7SUNhcmR9IGZyb20gJy4uLy4uLy4uL21vZGVscy9JQ2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRMaXN0Q29udHJvbGxlciB7XG4gICAgcHJpdmF0ZSBmYWNhZGVTZXJ2aWNlOklGYWNhZGVTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoZGVja0J1aWxkZXJTZXJ2aWNlOklGYWNhZGVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZmFjYWRlU2VydmljZSA9IGRlY2tCdWlsZGVyU2VydmljZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2FyZExpc3QoKTpJQ2FyZFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjYWRlU2VydmljZS5nZXRGaWx0ZXJlZENhcmRMaXN0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZUNhcmQoY2FyZDpJQ2FyZCk6dm9pZCB7XG4gICAgICAgIHRoaXMuZmFjYWRlU2VydmljZS50b2dnbGVDYXJkKGNhcmQpO1xuICAgIH1cbn1cblxuQ2FyZExpc3RDb250cm9sbGVyLiRpbmplY3QgPSBbJ0ZhY2FkZVNlcnZpY2UnXTtcbiIsImltcG9ydCB7aHRtbH0gZnJvbSAnLi9jb0NhcmRMaXN0VGVtcGxhdGUuaHRtbCc7XG5pbXBvcnQgQ2FyZExpc3RDb250cm9sbGVyIGZyb20gJy4vQ2FyZExpc3RDb250cm9sbGVyJztcblxuZnVuY3Rpb24gY29DYXJkTGlzdCgpOmFuZ3VsYXIuSURpcmVjdGl2ZSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udHJvbGxlcjogQ2FyZExpc3RDb250cm9sbGVyLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdjYXJkTGlzdENvbnRyb2xsZXInLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZTogaHRtbFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvQ2FyZExpc3Q7XG4iLCJpbXBvcnQge0lGYWNhZGVTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9GYWNhZGVTZXJ2aWNlL0lGYWNhZGVTZXJ2aWNlJztcbmltcG9ydCB7SUNhcmR9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9JQ2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRMaXN0RmlsdGVyQ29udHJvbGxlciB7XG4gICAgcHVibGljIGZpbHRlcjpzdHJpbmc7XG4gICAgcHJpdmF0ZSBmYWNhZGVTZXJ2aWNlOklGYWNhZGVTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoJHNjb3BlOmFueSwgZGVja0J1aWxkZXJTZXJ2aWNlOklGYWNhZGVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZmFjYWRlU2VydmljZSA9IGRlY2tCdWlsZGVyU2VydmljZTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSAnJztcblxuICAgICAgICAkc2NvcGUuJHdhdGNoKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbHRlcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAobmV3VmFsOnN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RmlsdGVyKG5ld1ZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRGaWx0ZXIoZmlsdGVyOnN0cmluZyk6dm9pZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhY2FkZVNlcnZpY2Uuc2V0RmlsdGVyKGZpbHRlcik7XG4gICAgfVxufVxuXG5DYXJkTGlzdEZpbHRlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJ0ZhY2FkZVNlcnZpY2UnXTtcbiIsImltcG9ydCB7aHRtbH0gZnJvbSAnLi9jb0NhcmRMaXN0RmlsdGVyVGVtcGxhdGUuaHRtbCc7XG5pbXBvcnQgQ2FyZExpc3RGaWx0ZXJDb250cm9sbGVyIGZyb20gJy4vQ2FyZExpc3RGaWx0ZXJDb250cm9sbGVyJztcblxuZnVuY3Rpb24gY29DYXJkTGlzdEZpbHRlcigpOmFuZ3VsYXIuSURpcmVjdGl2ZSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udHJvbGxlcjogQ2FyZExpc3RGaWx0ZXJDb250cm9sbGVyLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdjYXJkTGlzdEZpbHRlckNvbnRyb2xsZXInLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZTogaHRtbFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvQ2FyZExpc3RGaWx0ZXI7XG4iLCJleHBvcnQgY29uc3QgaHRtbDpzdHJpbmcgPVxuICAgIGBcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1saXN0LWZpbHRlclwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgRmlsdGVyIGNhcmRzIGJ5IG5hbWU6XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGF0YS1uZy1tb2RlbD1cImNhcmRMaXN0RmlsdGVyQ29udHJvbGxlci5maWx0ZXJcIj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcblxuIiwiZXhwb3J0IGNvbnN0IGh0bWw6c3RyaW5nID1cbiAgICBgXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+Q2FyZCBnYWxsZXJ5PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHRcIiBkYXRhLWNvLWNhcmQtbGlzdC1maWx0ZXI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtbmctcmVwZWF0PVwiY2FyZCBpbiBjYXJkTGlzdENvbnRyb2xsZXIuZ2V0Q2FyZExpc3QoKVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbmctY2xpY2s9XCJjYXJkTGlzdENvbnRyb2xsZXIudG9nZ2xlQ2FyZChjYXJkKVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZCB0ZXh0LWNlbnRlciBjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTQgY29sLWxnLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1uZy1jbGFzcz1cInsgJ3NlbGVjdGVkJzogY2FyZC5zZWxlY3RlZCB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGRhdGEtbmctc3JjPVwiaW1nL2NhcmRzL3t7IGNhcmQuaW1hZ2UgfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwie3sgY2FyZC5uYW1lIH19XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuXG4iLCJpbXBvcnQge0lGYWNhZGVTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9GYWNhZGVTZXJ2aWNlL0lGYWNhZGVTZXJ2aWNlJztcbmltcG9ydCB7SUNhcmR9IGZyb20gJy4uLy4uLy4uL21vZGVscy9JQ2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2tDb250cm9sbGVyIHtcbiAgICBwcml2YXRlIGZhY2FkZVNlcnZpY2U6SUZhY2FkZVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihkZWNrQnVpbGRlclNlcnZpY2U6SUZhY2FkZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5mYWNhZGVTZXJ2aWNlID0gZGVja0J1aWxkZXJTZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDaG9zZW5DYXJkcygpOklDYXJkW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5mYWNhZGVTZXJ2aWNlLmdldENob3NlbkNhcmRzKCk7XG4gICAgfVxufVxuXG5EZWNrQ29udHJvbGxlci4kaW5qZWN0ID0gWydGYWNhZGVTZXJ2aWNlJ107XG4iLCJpbXBvcnQge2h0bWx9IGZyb20gJy4vY29EZWNrVGVtcGxhdGUuaHRtbCc7XG5pbXBvcnQgRGVja0NvbnRyb2xsZXIgZnJvbSAnLi9EZWNrQ29udHJvbGxlcic7XG5cbmZ1bmN0aW9uIGNvRGVjaygpOmFuZ3VsYXIuSURpcmVjdGl2ZSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udHJvbGxlcjogRGVja0NvbnRyb2xsZXIsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2RlY2tDb250cm9sbGVyJyxcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGU6IGh0bWxcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb0RlY2s7XG4iLCJleHBvcnQgY29uc3QgaHRtbDpzdHJpbmcgPVxuICAgIGBcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiZGVja1wiIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGgyPllvdXIgY2hvc2VuIGRlY2s8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaG9zZW4tY2FyZHMgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGRhdGEtbmctaWY9XCJkZWNrQ29udHJvbGxlci5nZXRDaG9zZW5DYXJkcygpLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLW5nLXJlcGVhdD1cImNhcmQgaW4gZGVja0NvbnRyb2xsZXIuZ2V0Q2hvc2VuQ2FyZHMoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1uZy1zcmM9XCJpbWcvY2FyZHMve3sgY2FyZC5pbWFnZSB9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInt7IGNhcmQubmFtZSB9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1uZy1pZj1cImRlY2tDb250cm9sbGVyLmdldENob3NlbkNhcmRzKCkubGVuZ3RoID09PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBZb3UgaGF2ZW4ndCBjaG9zZW4gYW55IGNhcmRzIGZvciB5b3VyIGRlY2sgeWV0LlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJy4vY29EZWNrQnVpbGRlclRlbXBsYXRlLmh0bWwnO1xuXG5mdW5jdGlvbiBjb0RlY2tCdWlsZGVyKCk6YW5ndWxhci5JRGlyZWN0aXZlIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzY29wZToge30sXG4gICAgICAgIHRlbXBsYXRlOiBodG1sXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29EZWNrQnVpbGRlcjtcbiIsImV4cG9ydCBjb25zdCBodG1sOnN0cmluZyA9IGBcbiAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltZy9sb2dvLnBuZ1wiIGFsdD1cIkhlYXJ0aHN0b25lXCI+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIERlY2sgQnVpbGRlclxuICAgICAgICA8L2gxPlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICBDaG9vc2UgY2FyZHMgZm9yIHlvdXIgZGVjayBieSBjbGlja2luZyBvbiB0aGVtLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgZGF0YS1jby1kZWNrPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtY28tY2FyZC1saXN0PjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtY28tZm9vdGVyPjwvZGl2PlxuICAgIDwvZGl2PlxuYDtcbiIsIi8vIGltcG9ydCBkaXJlY3RpdmVzXG5pbXBvcnQgY29Ib21lIGZyb20gJy4vY29EZWNrQnVpbGRlci9jb0RlY2tCdWlsZGVyJztcbmltcG9ydCBjb0RlY2sgZnJvbSAnLi9jb0RlY2tCdWlsZGVyL2NvRGVjay9jb0RlY2snO1xuaW1wb3J0IGNvQ2FyZExpc3QgZnJvbSAnLi9jb0RlY2tCdWlsZGVyL2NvQ2FyZExpc3QvY29DYXJkTGlzdCc7XG5pbXBvcnQgY29DYXJkTGlzdEZpbHRlciBmcm9tICcuL2NvRGVja0J1aWxkZXIvY29DYXJkTGlzdC9jb0NhcmRMaXN0RmlsdGVyL2NvQ2FyZExpc3RGaWx0ZXInO1xuXG4vLyByZWdpc3RlciBkaXJlY3RpdmVzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWdpc3RlckRpcmVjdGl2ZXMoYXBwTmFtZTpzdHJpbmcpOnZvaWQge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXIubW9kdWxlKGFwcE5hbWUpXG4gICAgICAgIC5kaXJlY3RpdmUoJ2NvRGVja0J1aWxkZXInLCBjb0hvbWUpXG4gICAgICAgIC5kaXJlY3RpdmUoJ2NvRGVjaycsIGNvRGVjaylcbiAgICAgICAgLmRpcmVjdGl2ZSgnY29DYXJkTGlzdCcsIGNvQ2FyZExpc3QpXG4gICAgICAgIC5kaXJlY3RpdmUoJ2NvQ2FyZExpc3RGaWx0ZXInLCBjb0NhcmRMaXN0RmlsdGVyKTtcbn1cbiIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIi8+XG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHJlZ2lzdGVyRGlyZWN0aXZlcyBmcm9tICcuL2NvbXBvbmVudHMvZGVja0J1aWxkZXJEaXJlY3RpdmVzJztcbmltcG9ydCByZWdpc3RlclNlcnZpY2VzIGZyb20gJy4vc2VydmljZXMvZGVja0J1aWxkZXJTZXJ2aWNlcyc7XG5cbi8vIGFwcCBuYW1lXG5leHBvcnQgY29uc3QgYXBwTmFtZTpzdHJpbmcgPSAnZGVja0FwcCc7XG5cbi8vIHJlZ2lzdGVyIG1vZHVsZSwgZGlyZWN0aXZlcywgc2VydmljZXMsIGV0Yy5cbmFuZ3VsYXIubW9kdWxlKGFwcE5hbWUsIFsnY29tbW9uJ10pO1xucmVnaXN0ZXJEaXJlY3RpdmVzKGFwcE5hbWUpO1xucmVnaXN0ZXJTZXJ2aWNlcyhhcHBOYW1lKTtcblxuLy8gYm9vdHN0cmFwIEFuZ3VsYXJcbmxldCBhcHBBbmd1bGFyQ29uZmlnOmFuZ3VsYXIuSUFuZ3VsYXJCb290c3RyYXBDb25maWcgPSB7XG4gICAgZGVidWdJbmZvRW5hYmxlZDogdHJ1ZSxcbiAgICBzdHJpY3REaTogdHJ1ZVxufTtcbmFuZ3VsYXIuYm9vdHN0cmFwKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb0RlY2tCdWlsZGVyQXBwJyksXG4gICAgW2FwcE5hbWVdLFxuICAgIGFwcEFuZ3VsYXJDb25maWdcbik7XG4iLCJpbXBvcnQge0lEYXRhU2VydmljZX0gZnJvbSAnLi9JRGF0YVNlcnZpY2UnO1xuaW1wb3J0IHtJUGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3NyYy9zZXJ2aWNlcy9QYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlL0lQYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlJztcbmltcG9ydCB7SURlY2tCdWlsZGVyUGFnZVZhbHVlfSBmcm9tICcuLi8uLi9tb2RlbHMvSURlY2tCdWlsZGVyUGFnZVZhbHVlJztcbmltcG9ydCB7SUNhcmR9IGZyb20gJy4uLy4uL21vZGVscy9JQ2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFTZXJ2aWNlIGltcGxlbWVudHMgSURhdGFTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHBhZ2VWYWx1ZUV4dHJhY3RvclNlcnZpY2U6SVBhZ2VWYWx1ZUV4dHJhY3RvclNlcnZpY2U7XG4gICAgcHJpdmF0ZSBkYXRhTW9kZWw6RGF0YU1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IocGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZTpJUGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZSkge1xuICAgICAgICB0aGlzLnBhZ2VWYWx1ZUV4dHJhY3RvclNlcnZpY2UgPSBwYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlO1xuICAgICAgICB0aGlzLmRhdGFNb2RlbCA9IG5ldyBEYXRhTW9kZWwoKTtcblxuICAgICAgICAvLyBpbml0IGRhdGEgbW9kZWxcbiAgICAgICAgdGhpcy5kYXRhTW9kZWwuc2V0UGFnZVZhbHVlKHRoaXMucGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZS5nZXRQYWdlVmFsdWU8SURlY2tCdWlsZGVyUGFnZVZhbHVlPigpKTtcbiAgICAgICAgdGhpcy5kYXRhTW9kZWwuc2V0RmlsdGVyKCcnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmlsdGVyZWRDYXJkTGlzdCgpOklDYXJkW10ge1xuICAgICAgICBpZiAodGhpcy5kYXRhTW9kZWwuZ2V0RmlsdGVyKCkgIT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDYXJkTGlzdCgpLmZpbHRlcigoY2FyZDpJQ2FyZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYXJkLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuZGF0YU1vZGVsLmdldEZpbHRlcigpLnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldENhcmRMaXN0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENob3NlbkNhcmRzKCk6SUNhcmRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENhcmRMaXN0KCkuZmlsdGVyKChjYXJkOklDYXJkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2FyZC5zZWxlY3RlZDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEZpbHRlcihmaWx0ZXI6c3RyaW5nKTp2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRhTW9kZWwuc2V0RmlsdGVyKGZpbHRlcik7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZUNhcmQoY2FyZDpJQ2FyZCk6dm9pZCB7XG4gICAgICAgIGxldCBjYXJkczpJQ2FyZFtdID0gdGhpcy5nZXRDYXJkTGlzdCgpO1xuXG4gICAgICAgIGNhcmRzLm1hcCgoY3VycmVudENhcmQ6SUNhcmQpID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q2FyZCA9PT0gY2FyZCkge1xuICAgICAgICAgICAgICAgIGNhcmQuc2VsZWN0ZWQgPSAhY2FyZC5zZWxlY3RlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kYXRhTW9kZWwuZ2V0UGFnZVZhbHVlKCkuY2FyZHMgPSBjYXJkcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENhcmRMaXN0KCk6SUNhcmRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFNb2RlbC5nZXRQYWdlVmFsdWUoKS5jYXJkcztcbiAgICB9XG59XG5cbmNsYXNzIERhdGFNb2RlbCB7XG4gICAgcHJpdmF0ZSBwYWdlVmFsdWU6SURlY2tCdWlsZGVyUGFnZVZhbHVlO1xuICAgIHByaXZhdGUgZmlsdGVyOnN0cmluZztcblxuICAgIHB1YmxpYyBnZXRGaWx0ZXIoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEZpbHRlcih2YWx1ZTpzdHJpbmcpOnZvaWQge1xuICAgICAgICB0aGlzLmZpbHRlciA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQYWdlVmFsdWUoKTpJRGVja0J1aWxkZXJQYWdlVmFsdWUge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlVmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBhZ2VWYWx1ZSh2YWx1ZTpJRGVja0J1aWxkZXJQYWdlVmFsdWUpOnZvaWQge1xuICAgICAgICB0aGlzLnBhZ2VWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cblxuRGF0YVNlcnZpY2UuJGluamVjdCA9IFsnUGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZSddO1xuIiwiaW1wb3J0IHtJRmFjYWRlU2VydmljZX0gZnJvbSAnLi9JRmFjYWRlU2VydmljZSc7XG5pbXBvcnQge0lDYXJkfSBmcm9tICcuLi8uLi9tb2RlbHMvSUNhcmQnO1xuaW1wb3J0IHtJRGF0YVNlcnZpY2V9IGZyb20gJy4uL0RhdGFTZXJ2aWNlL0lEYXRhU2VydmljZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2FkZVNlcnZpY2UgaW1wbGVtZW50cyBJRmFjYWRlU2VydmljZSB7XG4gICAgcHJpdmF0ZSBkYXRhU2VydmljZTpJRGF0YVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhU2VydmljZTpJRGF0YVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5kYXRhU2VydmljZSA9IGRhdGFTZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRGaWx0ZXJlZENhcmRMaXN0KCk6SUNhcmRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLmdldEZpbHRlcmVkQ2FyZExpc3QoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2hvc2VuQ2FyZHMoKTpJQ2FyZFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UuZ2V0Q2hvc2VuQ2FyZHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlQ2FyZChjYXJkOklDYXJkKTp2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRhU2VydmljZS50b2dnbGVDYXJkKGNhcmQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRGaWx0ZXIoZmlsdGVyOnN0cmluZyk6dm9pZCB7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2Uuc2V0RmlsdGVyKGZpbHRlcik7XG4gICAgfVxuXG59XG5cbkZhY2FkZVNlcnZpY2UuJGluamVjdCA9IFsnRGF0YVNlcnZpY2UnXTtcbiIsIi8vIGltcG9ydCBkaXJlY3RpdmVzXG5pbXBvcnQgRmFjYWRlU2VydmljZSBmcm9tICcuL0ZhY2FkZVNlcnZpY2UvRmFjYWRlU2VydmljZSc7XG5pbXBvcnQgRGF0YVNlcnZpY2UgZnJvbSAnLi9EYXRhU2VydmljZS9EYXRhU2VydmljZSc7XG5cbi8vIHJlZ2lzdGVyIGRpcmVjdGl2ZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyU2VydmljZXMoYXBwTmFtZTpzdHJpbmcpOnZvaWQge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXIubW9kdWxlKGFwcE5hbWUpXG4gICAgICAgIC5zZXJ2aWNlKCdGYWNhZGVTZXJ2aWNlJywgRmFjYWRlU2VydmljZSlcbiAgICAgICAgLnNlcnZpY2UoJ0RhdGFTZXJ2aWNlJywgRGF0YVNlcnZpY2UpO1xufVxuIl19
