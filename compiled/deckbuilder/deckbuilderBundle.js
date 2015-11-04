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
exports.html = "\n    <div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-6\">\n                    <h2>Card gallery</h2>\n                </div>\n                <div class=\"col-xs-6\">\n                    <div class=\"pull-right\" data-co-card-list-filter></div>\n                </div>\n            </div>\n            <div class=\"card-list row\">\n                <div data-ng-repeat=\"card in cardListController.getCardList()\"\n                    data-ng-click=\"cardListController.toggleCard(card)\"\n                    class=\"card text-center col-xs-12 col-sm-4 col-md-3 col-lg-2\">\n                    <p data-ng-class=\"{ 'selected': card.selected }\">\n                        <img data-ng-src=\"img/cards/{{ card.image }}\"\n                        alt=\"{{ card.name }}\">\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n    ";


},{}],7:[function(require,module,exports){
var DeckController = (function () {
    function DeckController(facadeService) {
        this.facadeService = facadeService;
        this.deck = this.facadeService.getDeck();
    }
    DeckController.prototype.getChosenCards = function () {
        return this.facadeService.getChosenCards();
    };
    DeckController.prototype.backToManager = function () {
        return this.facadeService.backToManager();
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
exports.html = "\n    <div>\n        <div class=\"card-deck container\">\n            <div class=\"row\">\n                <span data-ng-click=\"deckController.backToManager()\"\n                    class=\"back-to-root btn btn-info pull-right\">Back to deck manager</span>\n                <h2>Editing deck: {{ deckController.deck.name }}</h2>\n                <div class=\"chosen-cards clearfix\">\n                    <ul data-ng-if=\"deckController.getChosenCards().length > 0\">\n                        <li data-ng-repeat=\"card in deckController.getChosenCards()\">\n                            <img data-ng-src=\"img/cards/{{ card.image }}\"\n                                alt=\"{{ card.name }}\">\n                        </li>\n                    </ul>\n                    <p data-ng-if=\"deckController.getChosenCards().length === 0\">\n                        You haven't chosen any cards for your deck yet.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n    ";


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
exports.html = "\n    <div>\n        <p class=\"text-center\">\n            <img class=\"img-responsive\" src=\"img/logo.png\" alt=\"Hearthstone\">\n        </p>\n        <h1 class=\"text-center\">Deck Builder</h1>\n        <p class=\"text-center\">Click the cards to choose them.</p>\n\n        <div data-co-deck></div>\n        <div data-co-card-list></div>\n        <div data-co-footer></div>\n    </div>\n";


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
    function DataService($window, pageValueExtractorService, localStorageService) {
        this.$window = $window;
        this.pageValueExtractorService = pageValueExtractorService;
        this.localStorageService = localStorageService;
        this.dataModel = new DataModel();
        // init data model
        var pageValue = this.pageValueExtractorService.getPageValue();
        if (this.$window.location.hash) {
            // very naive deck getting
            // obviously a bad implementation with multi level arrays etc., but enough for a demo
            var deckId = $window.location.hash.substr(4);
            var decks = this.localStorageService.loadSettings('decks');
            var deck = decks.filter(function (searchDeck) {
                return searchDeck.id === deckId;
            })[0];
            this.dataModel.setDeck(deck);
            pageValue.cards = pageValue.cards.map(function (card) {
                deck.cards.forEach(function (searchCard) {
                    // probably should have ids for cards and not compare by name
                    if (searchCard.name === card.name) {
                        card.selected = true;
                    }
                });
                return card;
            });
            this.dataModel.setPageValue(pageValue);
            this.dataModel.setFilter('');
        }
        else {
            this.backToManager();
        }
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
    DataService.prototype.getDeck = function () {
        return this.dataModel.getDeck();
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
        var currentDeck = this.dataModel.getDeck();
        currentDeck.cards = cards.filter(function (currentCard) {
            return currentCard.selected;
        });
        this.dataModel.setDeck(currentDeck);
        var decks = this.localStorageService.loadSettings('decks');
        decks = decks.map(function (searchDeck) {
            if (searchDeck.id === currentDeck.id) {
                return currentDeck;
            }
            return searchDeck;
        });
        this.localStorageService.saveSettings('decks', decks);
        this.dataModel.getPageValue().cards = cards;
    };
    DataService.prototype.backToManager = function () {
        this.$window.location.href = '.';
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
    DataModel.prototype.getDeck = function () {
        return this.deck;
    };
    DataModel.prototype.setDeck = function (deck) {
        this.deck = deck;
    };
    return DataModel;
})();
DataService.$inject = ['$window', 'PageValueExtractorService', 'LocalStorageService'];


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
    FacadeService.prototype.getDeck = function () {
        return this.dataService.getDeck();
    };
    FacadeService.prototype.toggleCard = function (card) {
        this.dataService.toggleCard(card);
    };
    FacadeService.prototype.setFilter = function (filter) {
        this.dataService.setFilter(filter);
    };
    FacadeService.prototype.backToManager = function () {
        this.dataService.backToManager();
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrYnVpbGRlci9jb2NhcmRsaXN0L2NhcmRsaXN0Y29udHJvbGxlci50cyIsIi9zb3VyY2UvY29tcG9uZW50cy9jb2RlY2tidWlsZGVyL2NvY2FyZGxpc3QvY29jYXJkbGlzdC50cyIsIi9zb3VyY2UvY29tcG9uZW50cy9jb2RlY2tidWlsZGVyL2NvY2FyZGxpc3QvY29jYXJkbGlzdGZpbHRlci9jYXJkbGlzdGZpbHRlcmNvbnRyb2xsZXIudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrYnVpbGRlci9jb2NhcmRsaXN0L2NvY2FyZGxpc3RmaWx0ZXIvY29jYXJkbGlzdGZpbHRlci50cyIsIi9zb3VyY2UvY29tcG9uZW50cy9jb2RlY2tidWlsZGVyL2NvY2FyZGxpc3QvY29jYXJkbGlzdGZpbHRlci9jb2NhcmRsaXN0ZmlsdGVydGVtcGxhdGUuaHRtbC50cyIsIi9zb3VyY2UvY29tcG9uZW50cy9jb2RlY2tidWlsZGVyL2NvY2FyZGxpc3QvY29jYXJkbGlzdHRlbXBsYXRlLmh0bWwudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrYnVpbGRlci9jb2RlY2svZGVja2NvbnRyb2xsZXIudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrYnVpbGRlci9jb2RlY2svY29kZWNrLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvZGVja2J1aWxkZXIvY29kZWNrL2NvZGVja3RlbXBsYXRlLmh0bWwudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrYnVpbGRlci9jb2RlY2tidWlsZGVyLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvZGVja2J1aWxkZXIvY29kZWNrYnVpbGRlcnRlbXBsYXRlLmh0bWwudHMiLCIvc291cmNlL2NvbXBvbmVudHMvZGVja2J1aWxkZXJkaXJlY3RpdmVzLnRzIiwiL3NvdXJjZS9tYWluLnRzIiwiL3NvdXJjZS9zZXJ2aWNlcy9kYXRhc2VydmljZS9kYXRhc2VydmljZS50cyIsIi9zb3VyY2Uvc2VydmljZXMvZmFjYWRlc2VydmljZS9mYWNhZGVzZXJ2aWNlLnRzIiwiL3NvdXJjZS9zZXJ2aWNlcy9kZWNrYnVpbGRlcnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDSUE7SUFHSSw0QkFBWSxrQkFBaUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQztJQUM1QyxDQUFDO0lBRU0sd0NBQVcsR0FBbEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFTSx1Q0FBVSxHQUFqQixVQUFrQixJQUFVO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDTCx5QkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZEQ7b0NBY0MsQ0FBQTtBQUVELGtCQUFrQixDQUFDLE9BQU8sR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzs7O0FDcEIvQyx3Q0FBbUIsMkJBQTJCLENBQUMsQ0FBQTtBQUMvQyxtQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUV0RDtJQUNJLFlBQVksQ0FBQztJQUViLE1BQU0sQ0FBQztRQUNILFVBQVUsRUFBRSw0QkFBa0I7UUFDOUIsWUFBWSxFQUFFLG9CQUFvQjtRQUNsQyxPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSw4QkFBSTtLQUNqQixDQUFDO0FBQ04sQ0FBQztBQUVEO2tCQUFlLFVBQVUsQ0FBQzs7OztBQ1gxQjtJQUlJLGtDQUFZLE1BQVUsRUFBRSxrQkFBaUM7UUFKN0QsaUJBcUJDO1FBaEJPLElBQUksQ0FBQyxhQUFhLEdBQUcsa0JBQWtCLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFakIsTUFBTSxDQUFDLE1BQU0sQ0FD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O1FBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxxQ0FBYSxHQUFwQjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0E5QkEsQUE4QkMsSUFBQTtBQTlCRDsrQkE4QkMsQ0FBQTtBQUVELGFBQWEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7OztBQ3JDeEMsb0JBQW9CO0FBQ3BCLDhCQUEwQiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzFELDRCQUF3QiwyQkFBMkIsQ0FBQyxDQUFBO0FBRXBELHNCQUFzQjtBQUN0QiwwQkFBeUMsT0FBYztJQUNuRCxZQUFZLENBQUM7SUFFYixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUNsQixPQUFPLENBQUMsZUFBZSxFQUFFLHVCQUFhLENBQUM7U0FDdkMsT0FBTyxDQUFDLGFBQWEsRUFBRSxxQkFBVyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQU5EO2tDQU1DLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHtJRmFjYWRlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvRmFjYWRlU2VydmljZS9JRmFjYWRlU2VydmljZSc7XG5pbXBvcnQge0lDYXJkfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbW9kZWxzL0lDYXJkJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkTGlzdENvbnRyb2xsZXIge1xuICAgIHByaXZhdGUgZmFjYWRlU2VydmljZTpJRmFjYWRlU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGRlY2tCdWlsZGVyU2VydmljZTpJRmFjYWRlU2VydmljZSkge1xuICAgICAgICB0aGlzLmZhY2FkZVNlcnZpY2UgPSBkZWNrQnVpbGRlclNlcnZpY2U7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENhcmRMaXN0KCk6SUNhcmRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhY2FkZVNlcnZpY2UuZ2V0RmlsdGVyZWRDYXJkTGlzdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVDYXJkKGNhcmQ6SUNhcmQpOnZvaWQge1xuICAgICAgICB0aGlzLmZhY2FkZVNlcnZpY2UudG9nZ2xlQ2FyZChjYXJkKTtcbiAgICB9XG59XG5cbkNhcmRMaXN0Q29udHJvbGxlci4kaW5qZWN0ID0gWydGYWNhZGVTZXJ2aWNlJ107XG4iLCJpbXBvcnQge2h0bWx9IGZyb20gJy4vY29DYXJkTGlzdFRlbXBsYXRlLmh0bWwnO1xuaW1wb3J0IENhcmRMaXN0Q29udHJvbGxlciBmcm9tICcuL0NhcmRMaXN0Q29udHJvbGxlcic7XG5cbmZ1bmN0aW9uIGNvQ2FyZExpc3QoKTphbmd1bGFyLklEaXJlY3RpdmUge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRyb2xsZXI6IENhcmRMaXN0Q29udHJvbGxlcixcbiAgICAgICAgY29udHJvbGxlckFzOiAnY2FyZExpc3RDb250cm9sbGVyJyxcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGU6IGh0bWxcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb0NhcmRMaXN0O1xuIiwiaW1wb3J0IHtJRmFjYWRlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvRmFjYWRlU2VydmljZS9JRmFjYWRlU2VydmljZSc7XG5pbXBvcnQge0lDYXJkfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vbW9kZWxzL0lDYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZExpc3RGaWx0ZXJDb250cm9sbGVyIHtcbiAgICBwdWJsaWMgZmlsdGVyOnN0cmluZztcbiAgICBwcml2YXRlIGZhY2FkZVNlcnZpY2U6SUZhY2FkZVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGU6YW55LCBkZWNrQnVpbGRlclNlcnZpY2U6SUZhY2FkZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5mYWNhZGVTZXJ2aWNlID0gZGVja0J1aWxkZXJTZXJ2aWNlO1xuICAgICAgICB0aGlzLmZpbHRlciA9ICcnO1xuXG4gICAgICAgICRzY29wZS4kd2F0Y2goXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChuZXdWYWw6c3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGaWx0ZXIobmV3VmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEZpbHRlcihmaWx0ZXI6c3RyaW5nKTp2b2lkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjYWRlU2VydmljZS5zZXRGaWx0ZXIoZmlsdGVyKTtcbiAgICB9XG59XG5cbkNhcmRMaXN0RmlsdGVyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnRmFjYWRlU2VydmljZSddO1xuIiwiaW1wb3J0IHtodG1sfSBmcm9tICcuL2NvQ2FyZExpc3RGaWx0ZXJUZW1wbGF0ZS5odG1sJztcbmltcG9ydCBDYXJkTGlzdEZpbHRlckNvbnRyb2xsZXIgZnJvbSAnLi9DYXJkTGlzdEZpbHRlckNvbnRyb2xsZXInO1xuXG5mdW5jdGlvbiBjb0NhcmRMaXN0RmlsdGVyKCk6YW5ndWxhci5JRGlyZWN0aXZlIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjb250cm9sbGVyOiBDYXJkTGlzdEZpbHRlckNvbnRyb2xsZXIsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2NhcmRMaXN0RmlsdGVyQ29udHJvbGxlcicsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHRlbXBsYXRlOiBodG1sXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29DYXJkTGlzdEZpbHRlcjtcbiIsImV4cG9ydCBjb25zdCBodG1sOnN0cmluZyA9XG4gICAgYFxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxpc3QtZmlsdGVyXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBGaWx0ZXIgY2FyZHMgYnkgbmFtZTpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBkYXRhLW5nLW1vZGVsPVwiY2FyZExpc3RGaWx0ZXJDb250cm9sbGVyLmZpbHRlclwiPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuXG4iLCJleHBvcnQgY29uc3QgaHRtbDpzdHJpbmcgPVxuICAgIGBcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5DYXJkIGdhbGxlcnk8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodFwiIGRhdGEtY28tY2FyZC1saXN0LWZpbHRlcj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGlzdCByb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtbmctcmVwZWF0PVwiY2FyZCBpbiBjYXJkTGlzdENvbnRyb2xsZXIuZ2V0Q2FyZExpc3QoKVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbmctY2xpY2s9XCJjYXJkTGlzdENvbnRyb2xsZXIudG9nZ2xlQ2FyZChjYXJkKVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZCB0ZXh0LWNlbnRlciBjb2wteHMtMTIgY29sLXNtLTQgY29sLW1kLTMgY29sLWxnLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1uZy1jbGFzcz1cInsgJ3NlbGVjdGVkJzogY2FyZC5zZWxlY3RlZCB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGRhdGEtbmctc3JjPVwiaW1nL2NhcmRzL3t7IGNhcmQuaW1hZ2UgfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwie3sgY2FyZC5uYW1lIH19XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuXG4iLCJpbXBvcnQge0lGYWNhZGVTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9GYWNhZGVTZXJ2aWNlL0lGYWNhZGVTZXJ2aWNlJztcbmltcG9ydCB7SUNhcmR9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSUNhcmQnO1xuaW1wb3J0IHtJRGVja30gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21vZGVscy9JRGVjayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2tDb250cm9sbGVyIHtcbiAgICBwdWJsaWMgZGVjazpJRGVjaztcbiAgICBwcml2YXRlIGZhY2FkZVNlcnZpY2U6SUZhY2FkZVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihmYWNhZGVTZXJ2aWNlOklGYWNhZGVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZmFjYWRlU2VydmljZSA9IGZhY2FkZVNlcnZpY2U7XG4gICAgICAgIHRoaXMuZGVjayA9IHRoaXMuZmFjYWRlU2VydmljZS5nZXREZWNrKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENob3NlbkNhcmRzKCk6SUNhcmRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhY2FkZVNlcnZpY2UuZ2V0Q2hvc2VuQ2FyZHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYmFja1RvTWFuYWdlcigpOnZvaWQge1xuICAgICAgICByZXR1cm4gdGhpcy5mYWNhZGVTZXJ2aWNlLmJhY2tUb01hbmFnZXIoKTtcbiAgICB9XG59XG5cbkRlY2tDb250cm9sbGVyLiRpbmplY3QgPSBbJ0ZhY2FkZVNlcnZpY2UnXTtcbiIsImltcG9ydCB7aHRtbH0gZnJvbSAnLi9jb0RlY2tUZW1wbGF0ZS5odG1sJztcbmltcG9ydCBEZWNrQ29udHJvbGxlciBmcm9tICcuL0RlY2tDb250cm9sbGVyJztcblxuZnVuY3Rpb24gY29EZWNrKCk6YW5ndWxhci5JRGlyZWN0aXZlIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjb250cm9sbGVyOiBEZWNrQ29udHJvbGxlcixcbiAgICAgICAgY29udHJvbGxlckFzOiAnZGVja0NvbnRyb2xsZXInLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZTogaHRtbFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvRGVjaztcbiIsImV4cG9ydCBjb25zdCBodG1sOnN0cmluZyA9XG4gICAgYFxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWRlY2sgY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1uZy1jbGljaz1cImRlY2tDb250cm9sbGVyLmJhY2tUb01hbmFnZXIoKVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmFjay10by1yb290IGJ0biBidG4taW5mbyBwdWxsLXJpZ2h0XCI+QmFjayB0byBkZWNrIG1hbmFnZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgyPkVkaXRpbmcgZGVjazoge3sgZGVja0NvbnRyb2xsZXIuZGVjay5uYW1lIH19PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hvc2VuLWNhcmRzIGNsZWFyZml4XCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBkYXRhLW5nLWlmPVwiZGVja0NvbnRyb2xsZXIuZ2V0Q2hvc2VuQ2FyZHMoKS5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS1uZy1yZXBlYXQ9XCJjYXJkIGluIGRlY2tDb250cm9sbGVyLmdldENob3NlbkNhcmRzKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGRhdGEtbmctc3JjPVwiaW1nL2NhcmRzL3t7IGNhcmQuaW1hZ2UgfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ7eyBjYXJkLm5hbWUgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtbmctaWY9XCJkZWNrQ29udHJvbGxlci5nZXRDaG9zZW5DYXJkcygpLmxlbmd0aCA9PT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgWW91IGhhdmVuJ3QgY2hvc2VuIGFueSBjYXJkcyBmb3IgeW91ciBkZWNrIHlldC5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbjtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICcuL2NvRGVja0J1aWxkZXJUZW1wbGF0ZS5odG1sJztcblxuZnVuY3Rpb24gY29EZWNrQnVpbGRlcigpOmFuZ3VsYXIuSURpcmVjdGl2ZSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICB0ZW1wbGF0ZTogaHRtbFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvRGVja0J1aWxkZXI7XG4iLCJleHBvcnQgY29uc3QgaHRtbDpzdHJpbmcgPSBgXG4gICAgPGRpdj5cbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgc3JjPVwiaW1nL2xvZ28ucG5nXCIgYWx0PVwiSGVhcnRoc3RvbmVcIj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPkRlY2sgQnVpbGRlcjwvaDE+XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5DbGljayB0aGUgY2FyZHMgdG8gY2hvb3NlIHRoZW0uPC9wPlxuXG4gICAgICAgIDxkaXYgZGF0YS1jby1kZWNrPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtY28tY2FyZC1saXN0PjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtY28tZm9vdGVyPjwvZGl2PlxuICAgIDwvZGl2PlxuYDtcbiIsIi8vIGltcG9ydCBkaXJlY3RpdmVzXG5pbXBvcnQgY29EZWNrQnVpbGRlciBmcm9tICcuL2NvRGVja0J1aWxkZXIvY29EZWNrQnVpbGRlcic7XG5pbXBvcnQgY29EZWNrIGZyb20gJy4vY29EZWNrQnVpbGRlci9jb0RlY2svY29EZWNrJztcbmltcG9ydCBjb0NhcmRMaXN0IGZyb20gJy4vY29EZWNrQnVpbGRlci9jb0NhcmRMaXN0L2NvQ2FyZExpc3QnO1xuaW1wb3J0IGNvQ2FyZExpc3RGaWx0ZXIgZnJvbSAnLi9jb0RlY2tCdWlsZGVyL2NvQ2FyZExpc3QvY29DYXJkTGlzdEZpbHRlci9jb0NhcmRMaXN0RmlsdGVyJztcblxuLy8gcmVnaXN0ZXIgZGlyZWN0aXZlc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVnaXN0ZXJEaXJlY3RpdmVzKGFwcE5hbWU6c3RyaW5nKTp2b2lkIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZShhcHBOYW1lKVxuICAgICAgICAuZGlyZWN0aXZlKCdjb0RlY2tCdWlsZGVyJywgY29EZWNrQnVpbGRlcilcbiAgICAgICAgLmRpcmVjdGl2ZSgnY29EZWNrJywgY29EZWNrKVxuICAgICAgICAuZGlyZWN0aXZlKCdjb0NhcmRMaXN0JywgY29DYXJkTGlzdClcbiAgICAgICAgLmRpcmVjdGl2ZSgnY29DYXJkTGlzdEZpbHRlcicsIGNvQ2FyZExpc3RGaWx0ZXIpO1xufVxuIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiLz5cbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgcmVnaXN0ZXJEaXJlY3RpdmVzIGZyb20gJy4vY29tcG9uZW50cy9kZWNrQnVpbGRlckRpcmVjdGl2ZXMnO1xuaW1wb3J0IHJlZ2lzdGVyU2VydmljZXMgZnJvbSAnLi9zZXJ2aWNlcy9kZWNrQnVpbGRlclNlcnZpY2VzJztcblxuLy8gYXBwIG5hbWVcbmV4cG9ydCBjb25zdCBhcHBOYW1lOnN0cmluZyA9ICdkZWNrQXBwJztcblxuLy8gcmVnaXN0ZXIgbW9kdWxlLCBkaXJlY3RpdmVzLCBzZXJ2aWNlcywgZXRjLlxuYW5ndWxhci5tb2R1bGUoYXBwTmFtZSwgWydjb21tb24nXSk7XG5yZWdpc3RlckRpcmVjdGl2ZXMoYXBwTmFtZSk7XG5yZWdpc3RlclNlcnZpY2VzKGFwcE5hbWUpO1xuXG4vLyBib290c3RyYXAgQW5ndWxhclxubGV0IGFwcEFuZ3VsYXJDb25maWc6YW5ndWxhci5JQW5ndWxhckJvb3RzdHJhcENvbmZpZyA9IHtcbiAgICBkZWJ1Z0luZm9FbmFibGVkOiB0cnVlLFxuICAgIHN0cmljdERpOiB0cnVlXG59O1xuYW5ndWxhci5ib290c3RyYXAoXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvRGVja0J1aWxkZXJBcHAnKSxcbiAgICBbYXBwTmFtZV0sXG4gICAgYXBwQW5ndWxhckNvbmZpZ1xuKTtcbiIsImltcG9ydCB7SURhdGFTZXJ2aWNlfSBmcm9tICcuL0lEYXRhU2VydmljZSc7XG5pbXBvcnQge0lEZWNrQnVpbGRlclBhZ2VWYWx1ZX0gZnJvbSAnLi4vLi4vbW9kZWxzL0lEZWNrQnVpbGRlclBhZ2VWYWx1ZSc7XG5pbXBvcnQge0lQYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvUGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZS9JUGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZSc7XG5pbXBvcnQge0lDYXJkfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL0lDYXJkJztcbmltcG9ydCB7SURlY2t9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSURlY2snO1xuaW1wb3J0IHtJTG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL0xvY2FsU3RvcmFnZVNlcnZpY2UvSUxvY2FsU3RvcmFnZVNlcnZpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhU2VydmljZSBpbXBsZW1lbnRzIElEYXRhU2VydmljZSB7XG4gICAgcHJpdmF0ZSAkd2luZG93OmFuZ3VsYXIuSVdpbmRvd1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBwYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlOklQYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlO1xuICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTpJTG9jYWxTdG9yYWdlU2VydmljZTtcbiAgICBwcml2YXRlIGRhdGFNb2RlbDpEYXRhTW9kZWw7XG5cbiAgICBjb25zdHJ1Y3Rvcigkd2luZG93OmFuZ3VsYXIuSVdpbmRvd1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZTpJUGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlOklMb2NhbFN0b3JhZ2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgICAgIHRoaXMucGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZSA9IHBhZ2VWYWx1ZUV4dHJhY3RvclNlcnZpY2U7XG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZSA9IGxvY2FsU3RvcmFnZVNlcnZpY2U7XG4gICAgICAgIHRoaXMuZGF0YU1vZGVsID0gbmV3IERhdGFNb2RlbCgpO1xuXG4gICAgICAgIC8vIGluaXQgZGF0YSBtb2RlbFxuICAgICAgICBsZXQgcGFnZVZhbHVlOklEZWNrQnVpbGRlclBhZ2VWYWx1ZSA9IHRoaXMucGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZS5nZXRQYWdlVmFsdWU8SURlY2tCdWlsZGVyUGFnZVZhbHVlPigpO1xuICAgICAgICBpZiAodGhpcy4kd2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgICAgIC8vIHZlcnkgbmFpdmUgZGVjayBnZXR0aW5nXG4gICAgICAgICAgICAvLyBvYnZpb3VzbHkgYSBiYWQgaW1wbGVtZW50YXRpb24gd2l0aCBtdWx0aSBsZXZlbCBhcnJheXMgZXRjLiwgYnV0IGVub3VnaCBmb3IgYSBkZW1vXG4gICAgICAgICAgICBsZXQgZGVja0lkOnN0cmluZyA9ICR3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoNCk7XG4gICAgICAgICAgICBsZXQgZGVja3M6SURlY2tbXSA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5sb2FkU2V0dGluZ3M8SURlY2tbXT4oJ2RlY2tzJyk7XG4gICAgICAgICAgICBsZXQgZGVjazpJRGVjayA9IGRlY2tzLmZpbHRlcigoc2VhcmNoRGVjazpJRGVjaykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2hEZWNrLmlkID09PSBkZWNrSWQ7XG4gICAgICAgICAgICB9KVswXTtcblxuICAgICAgICAgICAgdGhpcy5kYXRhTW9kZWwuc2V0RGVjayhkZWNrKTtcbiAgICAgICAgICAgIHBhZ2VWYWx1ZS5jYXJkcyA9IHBhZ2VWYWx1ZS5jYXJkcy5tYXAoKGNhcmQ6SUNhcmQpID0+IHtcbiAgICAgICAgICAgICAgICBkZWNrLmNhcmRzLmZvckVhY2goKHNlYXJjaENhcmQ6SUNhcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvYmFibHkgc2hvdWxkIGhhdmUgaWRzIGZvciBjYXJkcyBhbmQgbm90IGNvbXBhcmUgYnkgbmFtZVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoQ2FyZC5uYW1lID09PSBjYXJkLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2FyZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5kYXRhTW9kZWwuc2V0UGFnZVZhbHVlKHBhZ2VWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFNb2RlbC5zZXRGaWx0ZXIoJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5iYWNrVG9NYW5hZ2VyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmlsdGVyZWRDYXJkTGlzdCgpOklDYXJkW10ge1xuICAgICAgICBpZiAodGhpcy5kYXRhTW9kZWwuZ2V0RmlsdGVyKCkgIT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDYXJkTGlzdCgpLmZpbHRlcigoY2FyZDpJQ2FyZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYXJkLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuZGF0YU1vZGVsLmdldEZpbHRlcigpLnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldENhcmRMaXN0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENob3NlbkNhcmRzKCk6SUNhcmRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENhcmRMaXN0KCkuZmlsdGVyKChjYXJkOklDYXJkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2FyZC5zZWxlY3RlZDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERlY2soKTpJRGVjayB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFNb2RlbC5nZXREZWNrKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEZpbHRlcihmaWx0ZXI6c3RyaW5nKTp2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRhTW9kZWwuc2V0RmlsdGVyKGZpbHRlcik7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZUNhcmQoY2FyZDpJQ2FyZCk6dm9pZCB7XG4gICAgICAgIGxldCBjYXJkczpJQ2FyZFtdID0gdGhpcy5nZXRDYXJkTGlzdCgpO1xuXG4gICAgICAgIGNhcmRzLm1hcCgoY3VycmVudENhcmQ6SUNhcmQpID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q2FyZCA9PT0gY2FyZCkge1xuICAgICAgICAgICAgICAgIGNhcmQuc2VsZWN0ZWQgPSAhY2FyZC5zZWxlY3RlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnREZWNrOklEZWNrID0gdGhpcy5kYXRhTW9kZWwuZ2V0RGVjaygpO1xuICAgICAgICBjdXJyZW50RGVjay5jYXJkcyA9IGNhcmRzLmZpbHRlcigoY3VycmVudENhcmQ6SUNhcmQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50Q2FyZC5zZWxlY3RlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGF0YU1vZGVsLnNldERlY2soY3VycmVudERlY2spO1xuICAgICAgICBsZXQgZGVja3M6SURlY2tbXSA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5sb2FkU2V0dGluZ3M8SURlY2tbXT4oJ2RlY2tzJyk7XG4gICAgICAgIGRlY2tzID0gZGVja3MubWFwKChzZWFyY2hEZWNrOklEZWNrKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VhcmNoRGVjay5pZCA9PT0gY3VycmVudERlY2suaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudERlY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hEZWNrO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNhdmVTZXR0aW5nczxJRGVja1tdPignZGVja3MnLCBkZWNrcyk7XG5cbiAgICAgICAgdGhpcy5kYXRhTW9kZWwuZ2V0UGFnZVZhbHVlKCkuY2FyZHMgPSBjYXJkcztcbiAgICB9XG5cbiAgICBwdWJsaWMgYmFja1RvTWFuYWdlcigpOnZvaWQge1xuICAgICAgICB0aGlzLiR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuJztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENhcmRMaXN0KCk6SUNhcmRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFNb2RlbC5nZXRQYWdlVmFsdWUoKS5jYXJkcztcbiAgICB9XG59XG5cbmNsYXNzIERhdGFNb2RlbCB7XG4gICAgcHJpdmF0ZSBwYWdlVmFsdWU6SURlY2tCdWlsZGVyUGFnZVZhbHVlO1xuICAgIHByaXZhdGUgZmlsdGVyOnN0cmluZztcbiAgICBwcml2YXRlIGRlY2s6SURlY2s7XG5cbiAgICBwdWJsaWMgZ2V0RmlsdGVyKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRGaWx0ZXIodmFsdWU6c3RyaW5nKTp2b2lkIHtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UGFnZVZhbHVlKCk6SURlY2tCdWlsZGVyUGFnZVZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZVZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQYWdlVmFsdWUodmFsdWU6SURlY2tCdWlsZGVyUGFnZVZhbHVlKTp2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGVjaygpOklEZWNrIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVjaztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RGVjayhkZWNrOklEZWNrKTp2b2lkIHtcbiAgICAgICAgdGhpcy5kZWNrID0gZGVjaztcbiAgICB9XG59XG5cbkRhdGFTZXJ2aWNlLiRpbmplY3QgPSBbJyR3aW5kb3cnLCAnUGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZScsICdMb2NhbFN0b3JhZ2VTZXJ2aWNlJ107XG4iLCJpbXBvcnQge0lGYWNhZGVTZXJ2aWNlfSBmcm9tICcuL0lGYWNhZGVTZXJ2aWNlJztcbmltcG9ydCB7SUNhcmR9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSUNhcmQnO1xuaW1wb3J0IHtJRGF0YVNlcnZpY2V9IGZyb20gJy4uL0RhdGFTZXJ2aWNlL0lEYXRhU2VydmljZSc7XG5pbXBvcnQge0lEZWNrfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL0lEZWNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjYWRlU2VydmljZSBpbXBsZW1lbnRzIElGYWNhZGVTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOklEYXRhU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGFTZXJ2aWNlOklEYXRhU2VydmljZSkge1xuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlID0gZGF0YVNlcnZpY2U7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZpbHRlcmVkQ2FyZExpc3QoKTpJQ2FyZFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UuZ2V0RmlsdGVyZWRDYXJkTGlzdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDaG9zZW5DYXJkcygpOklDYXJkW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU2VydmljZS5nZXRDaG9zZW5DYXJkcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREZWNrKCk6SURlY2sge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU2VydmljZS5nZXREZWNrKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZUNhcmQoY2FyZDpJQ2FyZCk6dm9pZCB7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2UudG9nZ2xlQ2FyZChjYXJkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RmlsdGVyKGZpbHRlcjpzdHJpbmcpOnZvaWQge1xuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLnNldEZpbHRlcihmaWx0ZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBiYWNrVG9NYW5hZ2VyKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2UuYmFja1RvTWFuYWdlcigpO1xuICAgIH1cbn1cblxuRmFjYWRlU2VydmljZS4kaW5qZWN0ID0gWydEYXRhU2VydmljZSddO1xuIiwiLy8gaW1wb3J0IGRpcmVjdGl2ZXNcbmltcG9ydCBGYWNhZGVTZXJ2aWNlIGZyb20gJy4vRmFjYWRlU2VydmljZS9GYWNhZGVTZXJ2aWNlJztcbmltcG9ydCBEYXRhU2VydmljZSBmcm9tICcuL0RhdGFTZXJ2aWNlL0RhdGFTZXJ2aWNlJztcblxuLy8gcmVnaXN0ZXIgZGlyZWN0aXZlc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVnaXN0ZXJTZXJ2aWNlcyhhcHBOYW1lOnN0cmluZyk6dm9pZCB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoYXBwTmFtZSlcbiAgICAgICAgLnNlcnZpY2UoJ0ZhY2FkZVNlcnZpY2UnLCBGYWNhZGVTZXJ2aWNlKVxuICAgICAgICAuc2VydmljZSgnRGF0YVNlcnZpY2UnLCBEYXRhU2VydmljZSk7XG59XG4iXX0=
