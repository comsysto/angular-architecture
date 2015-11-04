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
exports.html = "\n    <div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-6\">\n                    <h2>Card gallery</h2>\n                </div>\n                <div class=\"col-xs-6\">\n                    <div class=\"pull-right\" data-co-card-list-filter></div>\n                </div>\n            </div>\n            <div class=\"card-list row\">\n                <div data-ng-repeat=\"card in cardListController.getCardList()\"\n                    data-ng-click=\"cardListController.toggleCard(card)\"\n                    class=\"card text-center col-xs-12 col-sm-6 col-md-4 col-lg-3\">\n                    <p data-ng-class=\"{ 'selected': card.selected }\">\n                        <img data-ng-src=\"img/cards/{{ card.image }}\"\n                        alt=\"{{ card.name }}\">\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n    ";


},{}],7:[function(require,module,exports){
var DeckController = (function () {
    function DeckController(facadeService) {
        this.facadeService = facadeService;
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
exports.html = "\n    <div>\n        <div class=\"card-deck container\">\n            <div class=\"row\">\n                <h2>Your chosen deck</h2>\n                <div class=\"chosen-cards clearfix\">\n                    <ul data-ng-if=\"deckController.getChosenCards().length > 0\">\n                        <li data-ng-repeat=\"card in deckController.getChosenCards()\">\n                            <img data-ng-src=\"img/cards/{{ card.image }}\"\n                                alt=\"{{ card.name }}\">\n                        </li>\n                    </ul>\n                    <p data-ng-if=\"deckController.getChosenCards().length === 0\">\n                        You haven't chosen any cards for your deck yet.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n    ";


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
exports.html = "\n    <div>\n        <p class=\"text-center\">\n            <img src=\"img/logo.png\" alt=\"Hearthstone\">\n        </p>\n        <h1 class=\"text-center\">Deck Builder</h1>\n        <p class=\"text-center\">Click the cards to choose them.</p>\n\n        <div data-co-deck></div>\n        <div data-co-card-list></div>\n        <div data-co-footer></div>\n    </div>\n";


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
///<reference path="../typings/tsd.d.ts"/>
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrYnVpbGRlci9jb2NhcmRsaXN0L2NhcmRsaXN0Y29udHJvbGxlci50cyIsIi9zb3VyY2UvY29tcG9uZW50cy9jb2RlY2tidWlsZGVyL2NvY2FyZGxpc3QvY29jYXJkbGlzdC50cyIsIi9zb3VyY2UvY29tcG9uZW50cy9jb2RlY2tidWlsZGVyL2NvY2FyZGxpc3QvY29jYXJkbGlzdGZpbHRlci9jYXJkbGlzdGZpbHRlcmNvbnRyb2xsZXIudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrYnVpbGRlci9jb2NhcmRsaXN0L2NvY2FyZGxpc3RmaWx0ZXIvY29jYXJkbGlzdGZpbHRlci50cyIsIi9zb3VyY2UvY29tcG9uZW50cy9jb2RlY2tidWlsZGVyL2NvY2FyZGxpc3QvY29jYXJkbGlzdGZpbHRlci9jb2NhcmRsaXN0ZmlsdGVydGVtcGxhdGUuaHRtbC50cyIsIi9zb3VyY2UvY29tcG9uZW50cy9jb2RlY2tidWlsZGVyL2NvY2FyZGxpc3QvY29jYXJkbGlzdHRlbXBsYXRlLmh0bWwudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrYnVpbGRlci9jb2RlY2svZGVja2NvbnRyb2xsZXIudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrYnVpbGRlci9jb2RlY2svY29kZWNrLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvZGVja2J1aWxkZXIvY29kZWNrL2NvZGVja3RlbXBsYXRlLmh0bWwudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrYnVpbGRlci9jb2RlY2tidWlsZGVyLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvZGVja2J1aWxkZXIvY29kZWNrYnVpbGRlcnRlbXBsYXRlLmh0bWwudHMiLCIvc291cmNlL2NvbXBvbmVudHMvZGVja2J1aWxkZXJkaXJlY3RpdmVzLnRzIiwiL3NvdXJjZS9tYWluLnRzIiwiL3NvdXJjZS9zZXJ2aWNlcy9kYXRhc2VydmljZS9kYXRhc2VydmljZS50cyIsIi9zb3VyY2Uvc2VydmljZXMvZmFjYWRlc2VydmljZS9mYWNhZGVzZXJ2aWNlLnRzIiwiL3NvdXJjZS9zZXJ2aWNlcy9kZWNrYnVpbGRlcnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDSUE7SUFHSSw0QkFBWSxrQkFBaUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQztJQUM1QyxDQUFDO0lBRU0sd0NBQVcsR0FBbEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFTSx1Q0FBVSxHQUFqQixVQUFrQixJQUFVO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDTCx5QkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZEQ7b0NBY0MsQ0FBQTtBQUVELGtCQUFrQixDQUFDLE9BQU8sR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzs7O0FDcEIvQyx3Q0FBbUIsMkJBQTJCLENBQUMsQ0FBQTtBQUMvQyxtQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUV0RDtJQUNJLFlBQVksQ0FBQztJQUViLE1BQU0sQ0FBQztRQUNILFVBQVUsRUFBRSw0QkFBa0I7UUFDOUIsWUFBWSxFQUFFLG9CQUFvQjtRQUNsQyxPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSw4QkFBSTtLQUNqQixDQUFDO0FBQ04sQ0FBQztBQUVEO2tCQUFlLFVBQVUsQ0FBQzs7OztBQ1gxQjtJQUlJLGtDQUFZLE1BQVUsRUFBRSxrQkFBaUM7UUFKN0QsaUJBcUJDO1FBaEJPLElBQUksQ0FBQyxhQUFhLEdBQUcsa0JBQWtCLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFakIsTUFBTSxDQUFDLE1BQU0sQ0FD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QUFFcEQsc0JBQXNCO0FBQ3RCLDBCQUF5QyxPQUFjO0lBQ25ELFlBQVksQ0FBQztJQUViLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ2xCLE9BQU8sQ0FBQyxlQUFlLEVBQUUsdUJBQWEsQ0FBQztTQUN2QyxPQUFPLENBQUMsYUFBYSxFQUFFLHFCQUFXLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBTkQ7a0NBTUMsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQge0lGYWNhZGVTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9GYWNhZGVTZXJ2aWNlL0lGYWNhZGVTZXJ2aWNlJztcbmltcG9ydCB7SUNhcmR9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSUNhcmQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRMaXN0Q29udHJvbGxlciB7XG4gICAgcHJpdmF0ZSBmYWNhZGVTZXJ2aWNlOklGYWNhZGVTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoZGVja0J1aWxkZXJTZXJ2aWNlOklGYWNhZGVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZmFjYWRlU2VydmljZSA9IGRlY2tCdWlsZGVyU2VydmljZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2FyZExpc3QoKTpJQ2FyZFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjYWRlU2VydmljZS5nZXRGaWx0ZXJlZENhcmRMaXN0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZUNhcmQoY2FyZDpJQ2FyZCk6dm9pZCB7XG4gICAgICAgIHRoaXMuZmFjYWRlU2VydmljZS50b2dnbGVDYXJkKGNhcmQpO1xuICAgIH1cbn1cblxuQ2FyZExpc3RDb250cm9sbGVyLiRpbmplY3QgPSBbJ0ZhY2FkZVNlcnZpY2UnXTtcbiIsImltcG9ydCB7aHRtbH0gZnJvbSAnLi9jb0NhcmRMaXN0VGVtcGxhdGUuaHRtbCc7XG5pbXBvcnQgQ2FyZExpc3RDb250cm9sbGVyIGZyb20gJy4vQ2FyZExpc3RDb250cm9sbGVyJztcblxuZnVuY3Rpb24gY29DYXJkTGlzdCgpOmFuZ3VsYXIuSURpcmVjdGl2ZSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udHJvbGxlcjogQ2FyZExpc3RDb250cm9sbGVyLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdjYXJkTGlzdENvbnRyb2xsZXInLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZTogaHRtbFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvQ2FyZExpc3Q7XG4iLCJpbXBvcnQge0lGYWNhZGVTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9GYWNhZGVTZXJ2aWNlL0lGYWNhZGVTZXJ2aWNlJztcbmltcG9ydCB7SUNhcmR9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSUNhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkTGlzdEZpbHRlckNvbnRyb2xsZXIge1xuICAgIHB1YmxpYyBmaWx0ZXI6c3RyaW5nO1xuICAgIHByaXZhdGUgZmFjYWRlU2VydmljZTpJRmFjYWRlU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKCRzY29wZTphbnksIGRlY2tCdWlsZGVyU2VydmljZTpJRmFjYWRlU2VydmljZSkge1xuICAgICAgICB0aGlzLmZhY2FkZVNlcnZpY2UgPSBkZWNrQnVpbGRlclNlcnZpY2U7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gJyc7XG5cbiAgICAgICAgJHNjb3BlLiR3YXRjaChcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKG5ld1ZhbDpzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEZpbHRlcihuZXdWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RmlsdGVyKGZpbHRlcjpzdHJpbmcpOnZvaWQge1xuICAgICAgICByZXR1cm4gdGhpcy5mYWNhZGVTZXJ2aWNlLnNldEZpbHRlcihmaWx0ZXIpO1xuICAgIH1cbn1cblxuQ2FyZExpc3RGaWx0ZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICdGYWNhZGVTZXJ2aWNlJ107XG4iLCJpbXBvcnQge2h0bWx9IGZyb20gJy4vY29DYXJkTGlzdEZpbHRlclRlbXBsYXRlLmh0bWwnO1xuaW1wb3J0IENhcmRMaXN0RmlsdGVyQ29udHJvbGxlciBmcm9tICcuL0NhcmRMaXN0RmlsdGVyQ29udHJvbGxlcic7XG5cbmZ1bmN0aW9uIGNvQ2FyZExpc3RGaWx0ZXIoKTphbmd1bGFyLklEaXJlY3RpdmUge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRyb2xsZXI6IENhcmRMaXN0RmlsdGVyQ29udHJvbGxlcixcbiAgICAgICAgY29udHJvbGxlckFzOiAnY2FyZExpc3RGaWx0ZXJDb250cm9sbGVyJyxcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGU6IGh0bWxcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb0NhcmRMaXN0RmlsdGVyO1xuIiwiZXhwb3J0IGNvbnN0IGh0bWw6c3RyaW5nID1cbiAgICBgXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGlzdC1maWx0ZXJcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEZpbHRlciBjYXJkcyBieSBuYW1lOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGRhdGEtbmctbW9kZWw9XCJjYXJkTGlzdEZpbHRlckNvbnRyb2xsZXIuZmlsdGVyXCI+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG5cbiIsImV4cG9ydCBjb25zdCBodG1sOnN0cmluZyA9XG4gICAgYFxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkNhcmQgZ2FsbGVyeTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLXJpZ2h0XCIgZGF0YS1jby1jYXJkLWxpc3QtZmlsdGVyPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1saXN0IHJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1uZy1yZXBlYXQ9XCJjYXJkIGluIGNhcmRMaXN0Q29udHJvbGxlci5nZXRDYXJkTGlzdCgpXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1uZy1jbGljaz1cImNhcmRMaXN0Q29udHJvbGxlci50b2dnbGVDYXJkKGNhcmQpXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkIHRleHQtY2VudGVyIGNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctM1wiPlxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLW5nLWNsYXNzPVwieyAnc2VsZWN0ZWQnOiBjYXJkLnNlbGVjdGVkIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1uZy1zcmM9XCJpbWcvY2FyZHMve3sgY2FyZC5pbWFnZSB9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ7eyBjYXJkLm5hbWUgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG5cbiIsImltcG9ydCB7SUZhY2FkZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0ZhY2FkZVNlcnZpY2UvSUZhY2FkZVNlcnZpY2UnO1xuaW1wb3J0IHtJQ2FyZH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21vZGVscy9JQ2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2tDb250cm9sbGVyIHtcbiAgICBwcml2YXRlIGZhY2FkZVNlcnZpY2U6SUZhY2FkZVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihmYWNhZGVTZXJ2aWNlOklGYWNhZGVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZmFjYWRlU2VydmljZSA9IGZhY2FkZVNlcnZpY2UgIDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2hvc2VuQ2FyZHMoKTpJQ2FyZFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjYWRlU2VydmljZS5nZXRDaG9zZW5DYXJkcygpO1xuICAgIH1cbn1cblxuRGVja0NvbnRyb2xsZXIuJGluamVjdCA9IFsnRmFjYWRlU2VydmljZSddO1xuIiwiaW1wb3J0IHtodG1sfSBmcm9tICcuL2NvRGVja1RlbXBsYXRlLmh0bWwnO1xuaW1wb3J0IERlY2tDb250cm9sbGVyIGZyb20gJy4vRGVja0NvbnRyb2xsZXInO1xuXG5mdW5jdGlvbiBjb0RlY2soKTphbmd1bGFyLklEaXJlY3RpdmUge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRyb2xsZXI6IERlY2tDb250cm9sbGVyLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdkZWNrQ29udHJvbGxlcicsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHRlbXBsYXRlOiBodG1sXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29EZWNrO1xuIiwiZXhwb3J0IGNvbnN0IGh0bWw6c3RyaW5nID1cbiAgICBgXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZGVjayBjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8aDI+WW91ciBjaG9zZW4gZGVjazwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNob3Nlbi1jYXJkcyBjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgZGF0YS1uZy1pZj1cImRlY2tDb250cm9sbGVyLmdldENob3NlbkNhcmRzKCkubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtbmctcmVwZWF0PVwiY2FyZCBpbiBkZWNrQ29udHJvbGxlci5nZXRDaG9zZW5DYXJkcygpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLW5nLXNyYz1cImltZy9jYXJkcy97eyBjYXJkLmltYWdlIH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwie3sgY2FyZC5uYW1lIH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLW5nLWlmPVwiZGVja0NvbnRyb2xsZXIuZ2V0Q2hvc2VuQ2FyZHMoKS5sZW5ndGggPT09IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBoYXZlbid0IGNob3NlbiBhbnkgY2FyZHMgZm9yIHlvdXIgZGVjayB5ZXQuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG47XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnLi9jb0RlY2tCdWlsZGVyVGVtcGxhdGUuaHRtbCc7XG5cbmZ1bmN0aW9uIGNvRGVja0J1aWxkZXIoKTphbmd1bGFyLklEaXJlY3RpdmUge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgdGVtcGxhdGU6IGh0bWxcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb0RlY2tCdWlsZGVyO1xuIiwiZXhwb3J0IGNvbnN0IGh0bWw6c3RyaW5nID0gYFxuICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2xvZ28ucG5nXCIgYWx0PVwiSGVhcnRoc3RvbmVcIj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPkRlY2sgQnVpbGRlcjwvaDE+XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5DbGljayB0aGUgY2FyZHMgdG8gY2hvb3NlIHRoZW0uPC9wPlxuXG4gICAgICAgIDxkaXYgZGF0YS1jby1kZWNrPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtY28tY2FyZC1saXN0PjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtY28tZm9vdGVyPjwvZGl2PlxuICAgIDwvZGl2PlxuYDtcbiIsIi8vIGltcG9ydCBkaXJlY3RpdmVzXG5pbXBvcnQgY29EZWNrQnVpbGRlciBmcm9tICcuL2NvRGVja0J1aWxkZXIvY29EZWNrQnVpbGRlcic7XG5pbXBvcnQgY29EZWNrIGZyb20gJy4vY29EZWNrQnVpbGRlci9jb0RlY2svY29EZWNrJztcbmltcG9ydCBjb0NhcmRMaXN0IGZyb20gJy4vY29EZWNrQnVpbGRlci9jb0NhcmRMaXN0L2NvQ2FyZExpc3QnO1xuaW1wb3J0IGNvQ2FyZExpc3RGaWx0ZXIgZnJvbSAnLi9jb0RlY2tCdWlsZGVyL2NvQ2FyZExpc3QvY29DYXJkTGlzdEZpbHRlci9jb0NhcmRMaXN0RmlsdGVyJztcblxuLy8gcmVnaXN0ZXIgZGlyZWN0aXZlc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVnaXN0ZXJEaXJlY3RpdmVzKGFwcE5hbWU6c3RyaW5nKTp2b2lkIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZShhcHBOYW1lKVxuICAgICAgICAuZGlyZWN0aXZlKCdjb0RlY2tCdWlsZGVyJywgY29EZWNrQnVpbGRlcilcbiAgICAgICAgLmRpcmVjdGl2ZSgnY29EZWNrJywgY29EZWNrKVxuICAgICAgICAuZGlyZWN0aXZlKCdjb0NhcmRMaXN0JywgY29DYXJkTGlzdClcbiAgICAgICAgLmRpcmVjdGl2ZSgnY29DYXJkTGlzdEZpbHRlcicsIGNvQ2FyZExpc3RGaWx0ZXIpO1xufVxuIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiLz5cbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgcmVnaXN0ZXJEaXJlY3RpdmVzIGZyb20gJy4vY29tcG9uZW50cy9kZWNrQnVpbGRlckRpcmVjdGl2ZXMnO1xuaW1wb3J0IHJlZ2lzdGVyU2VydmljZXMgZnJvbSAnLi9zZXJ2aWNlcy9kZWNrQnVpbGRlclNlcnZpY2VzJztcblxuLy8gYXBwIG5hbWVcbmV4cG9ydCBjb25zdCBhcHBOYW1lOnN0cmluZyA9ICdkZWNrQXBwJztcblxuLy8gcmVnaXN0ZXIgbW9kdWxlLCBkaXJlY3RpdmVzLCBzZXJ2aWNlcywgZXRjLlxuYW5ndWxhci5tb2R1bGUoYXBwTmFtZSwgWydjb21tb24nXSk7XG5yZWdpc3RlckRpcmVjdGl2ZXMoYXBwTmFtZSk7XG5yZWdpc3RlclNlcnZpY2VzKGFwcE5hbWUpO1xuXG4vLyBib290c3RyYXAgQW5ndWxhclxubGV0IGFwcEFuZ3VsYXJDb25maWc6YW5ndWxhci5JQW5ndWxhckJvb3RzdHJhcENvbmZpZyA9IHtcbiAgICBkZWJ1Z0luZm9FbmFibGVkOiB0cnVlLFxuICAgIHN0cmljdERpOiB0cnVlXG59O1xuYW5ndWxhci5ib290c3RyYXAoXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvRGVja0J1aWxkZXJBcHAnKSxcbiAgICBbYXBwTmFtZV0sXG4gICAgYXBwQW5ndWxhckNvbmZpZ1xuKTtcbiIsImltcG9ydCB7SURhdGFTZXJ2aWNlfSBmcm9tICcuL0lEYXRhU2VydmljZSc7XG5pbXBvcnQge0lEZWNrQnVpbGRlclBhZ2VWYWx1ZX0gZnJvbSAnLi4vLi4vbW9kZWxzL0lEZWNrQnVpbGRlclBhZ2VWYWx1ZSc7XG5pbXBvcnQge0lQYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvUGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZS9JUGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZSc7XG5pbXBvcnQge0lDYXJkfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL0lDYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVNlcnZpY2UgaW1wbGVtZW50cyBJRGF0YVNlcnZpY2Uge1xuICAgIHByaXZhdGUgcGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZTpJUGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZTtcbiAgICBwcml2YXRlIGRhdGFNb2RlbDpEYXRhTW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvcihwYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlOklQYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMucGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZSA9IHBhZ2VWYWx1ZUV4dHJhY3RvclNlcnZpY2U7XG4gICAgICAgIHRoaXMuZGF0YU1vZGVsID0gbmV3IERhdGFNb2RlbCgpO1xuXG4gICAgICAgIC8vIGluaXQgZGF0YSBtb2RlbFxuICAgICAgICB0aGlzLmRhdGFNb2RlbC5zZXRQYWdlVmFsdWUodGhpcy5wYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlLmdldFBhZ2VWYWx1ZTxJRGVja0J1aWxkZXJQYWdlVmFsdWU+KCkpO1xuICAgICAgICB0aGlzLmRhdGFNb2RlbC5zZXRGaWx0ZXIoJycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRGaWx0ZXJlZENhcmRMaXN0KCk6SUNhcmRbXSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGFNb2RlbC5nZXRGaWx0ZXIoKSAhPT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENhcmRMaXN0KCkuZmlsdGVyKChjYXJkOklDYXJkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhcmQubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5kYXRhTW9kZWwuZ2V0RmlsdGVyKCkudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2FyZExpc3QoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2hvc2VuQ2FyZHMoKTpJQ2FyZFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2FyZExpc3QoKS5maWx0ZXIoKGNhcmQ6SUNhcmQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjYXJkLnNlbGVjdGVkO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RmlsdGVyKGZpbHRlcjpzdHJpbmcpOnZvaWQge1xuICAgICAgICB0aGlzLmRhdGFNb2RlbC5zZXRGaWx0ZXIoZmlsdGVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlQ2FyZChjYXJkOklDYXJkKTp2b2lkIHtcbiAgICAgICAgbGV0IGNhcmRzOklDYXJkW10gPSB0aGlzLmdldENhcmRMaXN0KCk7XG5cbiAgICAgICAgY2FyZHMubWFwKChjdXJyZW50Q2FyZDpJQ2FyZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRDYXJkID09PSBjYXJkKSB7XG4gICAgICAgICAgICAgICAgY2FyZC5zZWxlY3RlZCA9ICFjYXJkLnNlbGVjdGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRhdGFNb2RlbC5nZXRQYWdlVmFsdWUoKS5jYXJkcyA9IGNhcmRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q2FyZExpc3QoKTpJQ2FyZFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YU1vZGVsLmdldFBhZ2VWYWx1ZSgpLmNhcmRzO1xuICAgIH1cbn1cblxuY2xhc3MgRGF0YU1vZGVsIHtcbiAgICBwcml2YXRlIHBhZ2VWYWx1ZTpJRGVja0J1aWxkZXJQYWdlVmFsdWU7XG4gICAgcHJpdmF0ZSBmaWx0ZXI6c3RyaW5nO1xuXG4gICAgcHVibGljIGdldEZpbHRlcigpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RmlsdGVyKHZhbHVlOnN0cmluZyk6dm9pZCB7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBhZ2VWYWx1ZSgpOklEZWNrQnVpbGRlclBhZ2VWYWx1ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2VWYWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UGFnZVZhbHVlKHZhbHVlOklEZWNrQnVpbGRlclBhZ2VWYWx1ZSk6dm9pZCB7XG4gICAgICAgIHRoaXMucGFnZVZhbHVlID0gdmFsdWU7XG4gICAgfVxufVxuXG5EYXRhU2VydmljZS4kaW5qZWN0ID0gWydQYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlJ107XG4iLCJpbXBvcnQge0lGYWNhZGVTZXJ2aWNlfSBmcm9tICcuL0lGYWNhZGVTZXJ2aWNlJztcbmltcG9ydCB7SUNhcmR9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSUNhcmQnO1xuaW1wb3J0IHtJRGF0YVNlcnZpY2V9IGZyb20gJy4uL0RhdGFTZXJ2aWNlL0lEYXRhU2VydmljZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2FkZVNlcnZpY2UgaW1wbGVtZW50cyBJRmFjYWRlU2VydmljZSB7XG4gICAgcHJpdmF0ZSBkYXRhU2VydmljZTpJRGF0YVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhU2VydmljZTpJRGF0YVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5kYXRhU2VydmljZSA9IGRhdGFTZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRGaWx0ZXJlZENhcmRMaXN0KCk6SUNhcmRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLmdldEZpbHRlcmVkQ2FyZExpc3QoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2hvc2VuQ2FyZHMoKTpJQ2FyZFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UuZ2V0Q2hvc2VuQ2FyZHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlQ2FyZChjYXJkOklDYXJkKTp2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRhU2VydmljZS50b2dnbGVDYXJkKGNhcmQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRGaWx0ZXIoZmlsdGVyOnN0cmluZyk6dm9pZCB7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2Uuc2V0RmlsdGVyKGZpbHRlcik7XG4gICAgfVxuXG59XG5cbkZhY2FkZVNlcnZpY2UuJGluamVjdCA9IFsnRGF0YVNlcnZpY2UnXTtcbiIsIi8vIGltcG9ydCBkaXJlY3RpdmVzXG5pbXBvcnQgRmFjYWRlU2VydmljZSBmcm9tICcuL0ZhY2FkZVNlcnZpY2UvRmFjYWRlU2VydmljZSc7XG5pbXBvcnQgRGF0YVNlcnZpY2UgZnJvbSAnLi9EYXRhU2VydmljZS9EYXRhU2VydmljZSc7XG5cbi8vIHJlZ2lzdGVyIGRpcmVjdGl2ZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyU2VydmljZXMoYXBwTmFtZTpzdHJpbmcpOnZvaWQge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXIubW9kdWxlKGFwcE5hbWUpXG4gICAgICAgIC5zZXJ2aWNlKCdGYWNhZGVTZXJ2aWNlJywgRmFjYWRlU2VydmljZSlcbiAgICAgICAgLnNlcnZpY2UoJ0RhdGFTZXJ2aWNlJywgRGF0YVNlcnZpY2UpO1xufVxuIl19
