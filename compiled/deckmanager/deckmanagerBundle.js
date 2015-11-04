(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Deck = (function () {
    function Deck(id, name, cards) {
        this.id = id;
        this.name = name;
        this.cards = cards;
    }
    return Deck;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Deck;


},{}],2:[function(require,module,exports){
var DeckController = (function () {
    function DeckController(facadeService) {
        this.facadeService = facadeService;
    }
    DeckController.prototype.getDecks = function () {
        return this.facadeService.getDecks();
    };
    DeckController.prototype.addDeck = function () {
        this.facadeService.setShowNewDeckForm(true);
    };
    DeckController.prototype.editDeck = function (deck) {
        this.facadeService.editDeck(deck);
    };
    DeckController.prototype.deleteDeck = function (deck) {
        this.facadeService.deleteDeck(deck);
    };
    return DeckController;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeckController;
DeckController.$inject = ['FacadeService'];


},{}],3:[function(require,module,exports){
var coDeckListTemplate_html_1 = require('./coDeckListTemplate.html');
var DeckListController_1 = require('./DeckListController');
function coDeckList() {
    'use strict';
    return {
        controller: DeckListController_1.default,
        controllerAs: 'deckListController',
        replace: true,
        template: coDeckListTemplate_html_1.html
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = coDeckList;


},{"./DeckListController":2,"./coDeckListTemplate.html":4}],4:[function(require,module,exports){
exports.html = "\n        <div>\n            <div class=\"deck-list container\">\n                <div class=\"row\">\n                    <div class=\"col-xs-6\">\n                        <h2>Deck list</h2>\n                    </div>\n                    <div class=\"text-right col-xs-6\">\n                        <span data-ng-click=\"deckListController.addDeck()\"\n                            class=\"add-deck btn btn-info\">+ Add new deck</span>\n                    </div>\n                </div>\n                <hr>\n                <div class=\"row\">\n                    <div data-ng-if=\"deckListController.getDecks().length > 0\">\n                        <div data-ng-repeat=\"deck in deckListController.getDecks() track by deck.id\"\n                            class=\"deck text-center col-xs-12 col-sm-4 col-md-3\">\n                            <p>\n                                <h4>{{ deck.name }}</h4>\n                                <p>Number of cards: {{ deck.cards.length }}</p>\n                                <p class=\"deck-preview\">\n                                    <img class=\"deck-front\" data-ng-if=\"deck.cards.length > 0\"\n                                        data-ng-src=\"img/cards/{{ deck.cards[0].image }}\">\n                                    <img class=\"deck-back-more\" data-ng-src=\"img/card-back-default.png\"\n                                        alt=\"{{ deck.name }}\">\n                                    <img class=\"deck-back\" data-ng-src=\"img/card-back-default.png\"\n                                        alt=\"{{ deck.name }}\">\n\n                                </p>\n                                <p>\n                                    <span data-ng-click=\"deckListController.editDeck(deck)\"\n                                        class=\"btn btn-info\">Edit deck</span>\n                                    <span data-ng-click=\"deckListController.deleteDeck(deck)\"\n                                        class=\"btn btn-danger\">Delete deck</span>\n                                </p>\n                            </p>\n                        </div>\n                    </div>\n\n                    <div data-ng-if=\"deckListController.getDecks().length === 0\">\n                        <p class=\"col-xs-12\">Looks like you don't have any decks yet. Why not create one now?</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ";


},{}],5:[function(require,module,exports){
var coDeckManagerTemplate_html_1 = require('./coDeckManagerTemplate.html');
function coDeckManager() {
    'use strict';
    return {
        scope: {},
        template: coDeckManagerTemplate_html_1.html
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = coDeckManager;


},{"./coDeckManagerTemplate.html":6}],6:[function(require,module,exports){
exports.html = "\n    <div>\n        <p class=\"text-center\">\n            <img class=\"img-responsive\" src=\"img/logo.png\" alt=\"Hearthstone\">\n        </p>\n        <h1 class=\"text-center\">Deck manager</h1>\n\n        <div data-co-new-deck></div>\n        <div data-co-deck-list></div>\n        <div data-co-footer></div>\n    </div>\n";


},{}],7:[function(require,module,exports){
var NewDeckController = (function () {
    function NewDeckController(facadeService) {
        this.facadeService = facadeService;
        this.deckName = '';
    }
    NewDeckController.prototype.isFormShown = function () {
        return this.facadeService.getShowNewDeckForm();
    };
    NewDeckController.prototype.createNewDeck = function () {
        this.facadeService.createNewDeck(this.deckName);
    };
    NewDeckController.prototype.hideNewDeckForm = function () {
        this.facadeService.setShowNewDeckForm(false);
    };
    return NewDeckController;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NewDeckController;
NewDeckController.$inject = ['FacadeService'];


},{}],8:[function(require,module,exports){
var coNewDeckTemplate_html_1 = require('./coNewDeckTemplate.html');
var NewDeckController_1 = require('./NewDeckController');
function coNewDeck() {
    'use strict';
    return {
        controller: NewDeckController_1.default,
        controllerAs: 'newDeckController',
        replace: true,
        template: coNewDeckTemplate_html_1.html
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = coNewDeck;


},{"./NewDeckController":7,"./coNewDeckTemplate.html":9}],9:[function(require,module,exports){
exports.html = "\n        <div>\n            <div class=\"container\" data-ng-show=\"newDeckController.isFormShown()\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n                        <h2>Add new deck</h2>\n                        <div class=\"well\">\n                            <div class=\"form-group\">\n                                <input data-ng-model=\"newDeckController.deckName\"\n                                    type=\"text\"\n                                    class=\"form-control\"\n                                    placeholder=\"Deck name\" >\n                            </div>\n                            <div class=\"form-inline\">\n                                <span data-ng-click=\"newDeckController.createNewDeck()\"\n                                    class=\"form-control btn btn-info\">\n                                    Create new deck\n                                </span>\n                                <span data-ng-click=\"newDeckController.hideNewDeckForm()\"\n                                    class=\"form-control btn btn-danger\">\n                                    Cancel\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    ";


},{}],10:[function(require,module,exports){
// import directives
var coDeckManager_1 = require('./coDeckManager/coDeckManager');
var coDeckList_1 = require('./coDeckManager/coDeckList/coDeckList');
var coNewDeck_1 = require('./coDeckManager/coNewDeck/coNewDeck');
// register directives
function registerDirectives(appName) {
    'use strict';
    angular.module(appName)
        .directive('coDeckManager', coDeckManager_1.default)
        .directive('coDeckList', coDeckList_1.default)
        .directive('coNewDeck', coNewDeck_1.default);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerDirectives;


},{"./coDeckManager/coDeckList/coDeckList":3,"./coDeckManager/coDeckManager":5,"./coDeckManager/coNewDeck/coNewDeck":8}],11:[function(require,module,exports){
(function (global){
///<reference path="../typings/tsd.d.ts"/>
var angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);
var deckManagerDirectives_1 = require('./components/deckManagerDirectives');
var deckManagerServices_1 = require('./services/deckManagerServices');
// app name
exports.appName = 'deckManagerApp';
// register module, directives, services, etc.
angular.module(exports.appName, ['common']);
deckManagerDirectives_1.default(exports.appName);
deckManagerServices_1.default(exports.appName);
// bootstrap Angular
var appAngularConfig = {
    debugInfoEnabled: true,
    strictDi: true
};
angular.bootstrap(document.getElementById('coDeckManagerApp'), [exports.appName], appAngularConfig);


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./components/deckManagerDirectives":10,"./services/deckManagerServices":15}],12:[function(require,module,exports){
var Deck_1 = require('../../../common/models/Deck');
var DataService = (function () {
    function DataService($window, localStorageService) {
        this.$window = $window;
        this.localStorageService = localStorageService;
        this.dataModel = new DataModel();
        // init data model
        var decks = this.localStorageService.loadSettings('decks');
        if (decks) {
            var typedDecks = decks.map(function (deck) {
                return new Deck_1.default(deck.id, deck.name, deck.cards);
            });
            this.dataModel.setDecks(typedDecks);
        }
        else {
            this.dataModel.setDecks([]);
        }
    }
    DataService.prototype.getDecks = function () {
        var decks = this.dataModel.getDecks();
        if (!decks) {
            return [];
        }
        return decks;
    };
    DataService.prototype.createNewDeck = function (name) {
        var decks = this.dataModel.getDecks();
        var id = new Date().getTime().toString();
        var newDeck = new Deck_1.default(id, name, []);
        // check if there are any decks
        decks = decks ? decks.concat(newDeck) : [newDeck];
        this.setDecks(decks);
    };
    DataService.prototype.editDeck = function (deck) {
        this.$window.location.href = 'deckbuilder.html#id=' + deck.id;
    };
    DataService.prototype.deleteDeck = function (deck) {
        var shouldDelete = confirm('Do you really want to delete this deck?');
        if (!shouldDelete) {
            return;
        }
        var decks = this.dataModel.getDecks();
        var deckId = decks.indexOf(deck, 0);
        if (deckId !== undefined) {
            decks.splice(deckId, 1);
        }
        this.setDecks(decks);
    };
    DataService.prototype.setDecks = function (decks) {
        this.localStorageService.saveSettings('decks', decks);
        this.dataModel.setDecks(decks);
    };
    return DataService;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DataService;
var DataModel = (function () {
    function DataModel() {
    }
    DataModel.prototype.getDecks = function () {
        return this.decks;
    };
    DataModel.prototype.setDecks = function (decks) {
        this.decks = decks;
    };
    return DataModel;
})();
DataService.$inject = ['$window', 'LocalStorageService'];


},{"../../../common/models/Deck":1}],13:[function(require,module,exports){
var FacadeService = (function () {
    function FacadeService(dataService, uiStateService) {
        this.dataService = dataService;
        this.uiStateService = uiStateService;
    }
    FacadeService.prototype.getDecks = function () {
        return this.dataService.getDecks();
    };
    FacadeService.prototype.createNewDeck = function (name) {
        this.dataService.createNewDeck(name);
        this.uiStateService.setShowNewDeckForm(false);
    };
    FacadeService.prototype.editDeck = function (deck) {
        this.dataService.editDeck(deck);
    };
    FacadeService.prototype.deleteDeck = function (deck) {
        this.dataService.deleteDeck(deck);
    };
    FacadeService.prototype.setShowNewDeckForm = function (isShown) {
        this.uiStateService.setShowNewDeckForm(isShown);
    };
    FacadeService.prototype.getShowNewDeckForm = function () {
        return this.uiStateService.getShowNewDeckForm();
    };
    return FacadeService;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FacadeService;
FacadeService.$inject = ['DataService', 'UIStateService'];


},{}],14:[function(require,module,exports){
var UIStateService = (function () {
    function UIStateService() {
        this.uiStateModel = new UIStateModel();
        // init data model
        this.uiStateModel.setNewDeckFormShown(false);
    }
    UIStateService.prototype.setShowNewDeckForm = function (isShown) {
        this.uiStateModel.setNewDeckFormShown(isShown);
    };
    UIStateService.prototype.getShowNewDeckForm = function () {
        return this.uiStateModel.getNewDeckFormShown();
    };
    return UIStateService;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UIStateService;
var UIStateModel = (function () {
    function UIStateModel() {
    }
    UIStateModel.prototype.getNewDeckFormShown = function () {
        return this.newDeckFormShown;
    };
    UIStateModel.prototype.setNewDeckFormShown = function (isShown) {
        this.newDeckFormShown = isShown;
    };
    return UIStateModel;
})();


},{}],15:[function(require,module,exports){
// import directives
var FacadeService_1 = require('./FacadeService/FacadeService');
var DataService_1 = require('./DataService/DataService');
var UIStateService_1 = require('./UIStateService/UIStateService');
// register directives
function registerServices(appName) {
    'use strict';
    angular.module(appName)
        .service('DataService', DataService_1.default)
        .service('UIStateService', UIStateService_1.default)
        .service('FacadeService', FacadeService_1.default);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerServices;


},{"./DataService/DataService":12,"./FacadeService/FacadeService":13,"./UIStateService/UIStateService":14}]},{},[11])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvc291cmNlL21vZGVscy9EZWNrLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvZGVja21hbmFnZXIvY29kZWNrbGlzdC9kZWNrbGlzdGNvbnRyb2xsZXIudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrbWFuYWdlci9jb2RlY2tsaXN0L2NvZGVja2xpc3QudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrbWFuYWdlci9jb2RlY2tsaXN0L2NvZGVja2xpc3R0ZW1wbGF0ZS5odG1sLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvZGVja21hbmFnZXIvY29kZWNrbWFuYWdlci50cyIsIi9zb3VyY2UvY29tcG9uZW50cy9jb2RlY2ttYW5hZ2VyL2NvZGVja21hbmFnZXJ0ZW1wbGF0ZS5odG1sLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvZGVja21hbmFnZXIvY29uZXdkZWNrL25ld2RlY2tjb250cm9sbGVyLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvZGVja21hbmFnZXIvY29uZXdkZWNrL2NvbmV3ZGVjay50cyIsIi9zb3VyY2UvY29tcG9uZW50cy9jb2RlY2ttYW5hZ2VyL2NvbmV3ZGVjay9jb25ld2RlY2t0ZW1wbGF0ZS5odG1sLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2RlY2ttYW5hZ2VyZGlyZWN0aXZlcy50cyIsIi9zb3VyY2UvbWFpbi50cyIsIi9zb3VyY2Uvc2VydmljZXMvZGF0YXNlcnZpY2UvZGF0YXNlcnZpY2UudHMiLCIvc291cmNlL3NlcnZpY2VzL2ZhY2FkZXNlcnZpY2UvZmFjYWRlc2VydmljZS50cyIsIi9zb3VyY2Uvc2VydmljZXMvdWlzdGF0ZXNlcnZpY2UvdWlzdGF0ZXNlcnZpY2UudHMiLCIvc291cmNlL3NlcnZpY2VzL2RlY2ttYW5hZ2Vyc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBw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MkJBQTJCLENBQUMsQ0FBQTtBQUNwRCwrQkFBMkIsaUNBQWlDLENBQUMsQ0FBQTtBQUU3RCxzQkFBc0I7QUFDdEIsMEJBQXlDLE9BQWM7SUFDbkQsWUFBWSxDQUFDO0lBRWIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDbEIsT0FBTyxDQUFDLGFBQWEsRUFBRSxxQkFBVyxDQUFDO1NBQ25DLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSx3QkFBYyxDQUFDO1NBQ3pDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsdUJBQWEsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFQRDtrQ0FPQyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7SURlY2t9IGZyb20gJy4vSURlY2snO1xuaW1wb3J0IHtJQ2FyZH0gZnJvbSAnLi9JQ2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2sgaW1wbGVtZW50cyBJRGVjayB7XG4gICAgcHVibGljIGlkOnN0cmluZztcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XG4gICAgcHVibGljIGNhcmRzOklDYXJkW107XG5cbiAgICBjb25zdHJ1Y3RvcihpZDpzdHJpbmcsIG5hbWU6c3RyaW5nLCBjYXJkczpJQ2FyZFtdKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jYXJkcyA9IGNhcmRzO1xuICAgIH1cbn1cbiIsImltcG9ydCB7SUZhY2FkZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0ZhY2FkZVNlcnZpY2UvSUZhY2FkZVNlcnZpY2UnO1xuaW1wb3J0IHtJRGVja30gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21vZGVscy9JRGVjayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2tDb250cm9sbGVyIHtcbiAgICBwcml2YXRlIGZhY2FkZVNlcnZpY2U6SUZhY2FkZVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihmYWNhZGVTZXJ2aWNlOklGYWNhZGVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZmFjYWRlU2VydmljZSA9IGZhY2FkZVNlcnZpY2U7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERlY2tzKCk6SURlY2tbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhY2FkZVNlcnZpY2UuZ2V0RGVja3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRGVjaygpOnZvaWQge1xuICAgICAgICB0aGlzLmZhY2FkZVNlcnZpY2Uuc2V0U2hvd05ld0RlY2tGb3JtKHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlZGl0RGVjayhkZWNrOklEZWNrKTp2b2lkIHtcbiAgICAgICAgdGhpcy5mYWNhZGVTZXJ2aWNlLmVkaXREZWNrKGRlY2spO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGVEZWNrKGRlY2s6SURlY2spOnZvaWQge1xuICAgICAgICB0aGlzLmZhY2FkZVNlcnZpY2UuZGVsZXRlRGVjayhkZWNrKTtcbiAgICB9XG59XG5cbkRlY2tDb250cm9sbGVyLiRpbmplY3QgPSBbJ0ZhY2FkZVNlcnZpY2UnXTtcbiIsImltcG9ydCB7aHRtbH0gZnJvbSAnLi9jb0RlY2tMaXN0VGVtcGxhdGUuaHRtbCc7XG5pbXBvcnQgRGVja0xpc3RDb250cm9sbGVyIGZyb20gJy4vRGVja0xpc3RDb250cm9sbGVyJztcblxuZnVuY3Rpb24gY29EZWNrTGlzdCgpOmFuZ3VsYXIuSURpcmVjdGl2ZSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udHJvbGxlcjogRGVja0xpc3RDb250cm9sbGVyLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdkZWNrTGlzdENvbnRyb2xsZXInLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZTogaHRtbFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvRGVja0xpc3Q7XG4iLCJleHBvcnQgY29uc3QgaHRtbDpzdHJpbmcgPVxuICAgIGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWNrLWxpc3QgY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5EZWNrIGxpc3Q8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtbmctY2xpY2s9XCJkZWNrTGlzdENvbnRyb2xsZXIuYWRkRGVjaygpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFkZC1kZWNrIGJ0biBidG4taW5mb1wiPisgQWRkIG5ldyBkZWNrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtbmctaWY9XCJkZWNrTGlzdENvbnRyb2xsZXIuZ2V0RGVja3MoKS5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtbmctcmVwZWF0PVwiZGVjayBpbiBkZWNrTGlzdENvbnRyb2xsZXIuZ2V0RGVja3MoKSB0cmFjayBieSBkZWNrLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRlY2sgdGV4dC1jZW50ZXIgY29sLXhzLTEyIGNvbC1zbS00IGNvbC1tZC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57eyBkZWNrLm5hbWUgfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5OdW1iZXIgb2YgY2FyZHM6IHt7IGRlY2suY2FyZHMubGVuZ3RoIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlY2stcHJldmlld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImRlY2stZnJvbnRcIiBkYXRhLW5nLWlmPVwiZGVjay5jYXJkcy5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLW5nLXNyYz1cImltZy9jYXJkcy97eyBkZWNrLmNhcmRzWzBdLmltYWdlIH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiZGVjay1iYWNrLW1vcmVcIiBkYXRhLW5nLXNyYz1cImltZy9jYXJkLWJhY2stZGVmYXVsdC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInt7IGRlY2submFtZSB9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImRlY2stYmFja1wiIGRhdGEtbmctc3JjPVwiaW1nL2NhcmQtYmFjay1kZWZhdWx0LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwie3sgZGVjay5uYW1lIH19XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtbmctY2xpY2s9XCJkZWNrTGlzdENvbnRyb2xsZXIuZWRpdERlY2soZGVjaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCI+RWRpdCBkZWNrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1uZy1jbGljaz1cImRlY2tMaXN0Q29udHJvbGxlci5kZWxldGVEZWNrKGRlY2spXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+RGVsZXRlIGRlY2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLW5nLWlmPVwiZGVja0xpc3RDb250cm9sbGVyLmdldERlY2tzKCkubGVuZ3RoID09PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbC14cy0xMlwiPkxvb2tzIGxpa2UgeW91IGRvbid0IGhhdmUgYW55IGRlY2tzIHlldC4gV2h5IG5vdCBjcmVhdGUgb25lIG5vdz88L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnLi9jb0RlY2tNYW5hZ2VyVGVtcGxhdGUuaHRtbCc7XG5cbmZ1bmN0aW9uIGNvRGVja01hbmFnZXIoKTphbmd1bGFyLklEaXJlY3RpdmUge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgdGVtcGxhdGU6IGh0bWxcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb0RlY2tNYW5hZ2VyO1xuIiwiZXhwb3J0IGNvbnN0IGh0bWw6c3RyaW5nID0gYFxuICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cImltZy9sb2dvLnBuZ1wiIGFsdD1cIkhlYXJ0aHN0b25lXCI+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5EZWNrIG1hbmFnZXI8L2gxPlxuXG4gICAgICAgIDxkaXYgZGF0YS1jby1uZXctZGVjaz48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWNvLWRlY2stbGlzdD48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWNvLWZvb3Rlcj48L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG4iLCJpbXBvcnQge0lGYWNhZGVTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9GYWNhZGVTZXJ2aWNlL0lGYWNhZGVTZXJ2aWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3RGVja0NvbnRyb2xsZXIge1xuICAgIHByaXZhdGUgZmFjYWRlU2VydmljZTpJRmFjYWRlU2VydmljZTtcbiAgICBwcml2YXRlIGRlY2tOYW1lOnN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGZhY2FkZVNlcnZpY2U6SUZhY2FkZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5mYWNhZGVTZXJ2aWNlID0gZmFjYWRlU2VydmljZTtcbiAgICAgICAgdGhpcy5kZWNrTmFtZSA9ICcnO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0Zvcm1TaG93bigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5mYWNhZGVTZXJ2aWNlLmdldFNob3dOZXdEZWNrRm9ybSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVOZXdEZWNrKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuZmFjYWRlU2VydmljZS5jcmVhdGVOZXdEZWNrKHRoaXMuZGVja05hbWUpO1xuICAgIH1cblxuXG4gICAgcHVibGljIGhpZGVOZXdEZWNrRm9ybSgpOnZvaWQge1xuICAgICAgICB0aGlzLmZhY2FkZVNlcnZpY2Uuc2V0U2hvd05ld0RlY2tGb3JtKGZhbHNlKTtcbiAgICB9XG59XG5cbk5ld0RlY2tDb250cm9sbGVyLiRpbmplY3QgPSBbJ0ZhY2FkZVNlcnZpY2UnXTtcbiIsImltcG9ydCB7aHRtbH0gZnJvbSAnLi9jb05ld0RlY2tUZW1wbGF0ZS5odG1sJztcbmltcG9ydCBOZXdEZWNrQ29udHJvbGxlciBmcm9tICcuL05ld0RlY2tDb250cm9sbGVyJztcblxuZnVuY3Rpb24gY29OZXdEZWNrKCk6YW5ndWxhci5JRGlyZWN0aXZlIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjb250cm9sbGVyOiBOZXdEZWNrQ29udHJvbGxlcixcbiAgICAgICAgY29udHJvbGxlckFzOiAnbmV3RGVja0NvbnRyb2xsZXInLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZTogaHRtbFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvTmV3RGVjaztcbiIsImV4cG9ydCBjb25zdCBodG1sOnN0cmluZyA9XG4gICAgYFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIGRhdGEtbmctc2hvdz1cIm5ld0RlY2tDb250cm9sbGVyLmlzRm9ybVNob3duKClcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5BZGQgbmV3IGRlY2s8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZGF0YS1uZy1tb2RlbD1cIm5ld0RlY2tDb250cm9sbGVyLmRlY2tOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVjayBuYW1lXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLW5nLWNsaWNrPVwibmV3RGVja0NvbnRyb2xsZXIuY3JlYXRlTmV3RGVjaygpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGJ0biBidG4taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIG5ldyBkZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1uZy1jbGljaz1cIm5ld0RlY2tDb250cm9sbGVyLmhpZGVOZXdEZWNrRm9ybSgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGJ0biBidG4tZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgYDtcbiIsIi8vIGltcG9ydCBkaXJlY3RpdmVzXG5pbXBvcnQgY29EZWNrTWFuYWdlciBmcm9tICcuL2NvRGVja01hbmFnZXIvY29EZWNrTWFuYWdlcic7XG5pbXBvcnQgY29EZWNrTGlzdCBmcm9tICcuL2NvRGVja01hbmFnZXIvY29EZWNrTGlzdC9jb0RlY2tMaXN0JztcbmltcG9ydCBjb05ld0RlY2sgZnJvbSAnLi9jb0RlY2tNYW5hZ2VyL2NvTmV3RGVjay9jb05ld0RlY2snO1xuXG4vLyByZWdpc3RlciBkaXJlY3RpdmVzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWdpc3RlckRpcmVjdGl2ZXMoYXBwTmFtZTpzdHJpbmcpOnZvaWQge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXIubW9kdWxlKGFwcE5hbWUpXG4gICAgICAgIC5kaXJlY3RpdmUoJ2NvRGVja01hbmFnZXInLCBjb0RlY2tNYW5hZ2VyKVxuICAgICAgICAuZGlyZWN0aXZlKCdjb0RlY2tMaXN0JywgY29EZWNrTGlzdClcbiAgICAgICAgLmRpcmVjdGl2ZSgnY29OZXdEZWNrJywgY29OZXdEZWNrKTtcbn1cbiIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIi8+XG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHJlZ2lzdGVyRGlyZWN0aXZlcyBmcm9tICcuL2NvbXBvbmVudHMvZGVja01hbmFnZXJEaXJlY3RpdmVzJztcbmltcG9ydCByZWdpc3RlclNlcnZpY2VzIGZyb20gJy4vc2VydmljZXMvZGVja01hbmFnZXJTZXJ2aWNlcyc7XG5cbi8vIGFwcCBuYW1lXG5leHBvcnQgY29uc3QgYXBwTmFtZTpzdHJpbmcgPSAnZGVja01hbmFnZXJBcHAnO1xuXG4vLyByZWdpc3RlciBtb2R1bGUsIGRpcmVjdGl2ZXMsIHNlcnZpY2VzLCBldGMuXG5hbmd1bGFyLm1vZHVsZShhcHBOYW1lLCBbJ2NvbW1vbiddKTtcbnJlZ2lzdGVyRGlyZWN0aXZlcyhhcHBOYW1lKTtcbnJlZ2lzdGVyU2VydmljZXMoYXBwTmFtZSk7XG5cbi8vIGJvb3RzdHJhcCBBbmd1bGFyXG5sZXQgYXBwQW5ndWxhckNvbmZpZzphbmd1bGFyLklBbmd1bGFyQm9vdHN0cmFwQ29uZmlnID0ge1xuICAgIGRlYnVnSW5mb0VuYWJsZWQ6IHRydWUsXG4gICAgc3RyaWN0RGk6IHRydWVcbn07XG5hbmd1bGFyLmJvb3RzdHJhcChcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29EZWNrTWFuYWdlckFwcCcpLFxuICAgIFthcHBOYW1lXSxcbiAgICBhcHBBbmd1bGFyQ29uZmlnXG4pO1xuIiwiaW1wb3J0IHtJRGF0YVNlcnZpY2V9IGZyb20gJy4vSURhdGFTZXJ2aWNlJztcbmltcG9ydCB7SUxvY2FsU3RvcmFnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9Mb2NhbFN0b3JhZ2VTZXJ2aWNlL0lMb2NhbFN0b3JhZ2VTZXJ2aWNlJztcbmltcG9ydCB7SURlY2t9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSURlY2snO1xuaW1wb3J0IERlY2sgZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9EZWNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVNlcnZpY2UgaW1wbGVtZW50cyBJRGF0YVNlcnZpY2Uge1xuICAgIHByaXZhdGUgJHdpbmRvdzphbmd1bGFyLklXaW5kb3dTZXJ2aWNlO1xuICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTpJTG9jYWxTdG9yYWdlU2VydmljZTtcbiAgICBwcml2YXRlIGRhdGFNb2RlbDpEYXRhTW9kZWw7XG5cbiAgICBjb25zdHJ1Y3Rvcigkd2luZG93OmFuZ3VsYXIuSVdpbmRvd1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlU2VydmljZTpJTG9jYWxTdG9yYWdlU2VydmljZSkge1xuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlO1xuICAgICAgICB0aGlzLmRhdGFNb2RlbCA9IG5ldyBEYXRhTW9kZWwoKTtcblxuICAgICAgICAvLyBpbml0IGRhdGEgbW9kZWxcbiAgICAgICAgbGV0IGRlY2tzOklEZWNrW10gPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UubG9hZFNldHRpbmdzPElEZWNrW10+KCdkZWNrcycpO1xuICAgICAgICBpZiAoZGVja3MpIHtcbiAgICAgICAgICAgIGxldCB0eXBlZERlY2tzOklEZWNrW10gPSBkZWNrcy5tYXAoKGRlY2s6SURlY2spID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERlY2soZGVjay5pZCwgZGVjay5uYW1lLCBkZWNrLmNhcmRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5kYXRhTW9kZWwuc2V0RGVja3ModHlwZWREZWNrcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFNb2RlbC5zZXREZWNrcyhbXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGVja3MoKTpJRGVja1tdIHtcbiAgICAgICAgbGV0IGRlY2tzOklEZWNrW10gPSB0aGlzLmRhdGFNb2RlbC5nZXREZWNrcygpO1xuXG4gICAgICAgIGlmICghZGVja3MpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWNrcztcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlTmV3RGVjayhuYW1lOnN0cmluZyk6dm9pZCB7XG4gICAgICAgIGxldCBkZWNrczpJRGVja1tdID0gdGhpcy5kYXRhTW9kZWwuZ2V0RGVja3MoKTtcbiAgICAgICAgbGV0IGlkOnN0cmluZyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCBuZXdEZWNrOklEZWNrID0gbmV3IERlY2soaWQsIG5hbWUsIFtdKTtcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgYXJlIGFueSBkZWNrc1xuICAgICAgICBkZWNrcyA9IGRlY2tzID8gZGVja3MuY29uY2F0KG5ld0RlY2spIDogW25ld0RlY2tdO1xuXG4gICAgICAgIHRoaXMuc2V0RGVja3MoZGVja3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlZGl0RGVjayhkZWNrOklEZWNrKTp2b2lkIHtcbiAgICAgICAgdGhpcy4kd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnZGVja2J1aWxkZXIuaHRtbCNpZD0nICsgZGVjay5pZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlRGVjayhkZWNrOklEZWNrKTp2b2lkIHtcbiAgICAgICAgbGV0IHNob3VsZERlbGV0ZTpib29sZWFuID0gY29uZmlybSgnRG8geW91IHJlYWxseSB3YW50IHRvIGRlbGV0ZSB0aGlzIGRlY2s/Jyk7XG4gICAgICAgIGlmICghc2hvdWxkRGVsZXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVja3M6SURlY2tbXSA9IHRoaXMuZGF0YU1vZGVsLmdldERlY2tzKCk7XG4gICAgICAgIGxldCBkZWNrSWQ6bnVtYmVyID0gZGVja3MuaW5kZXhPZihkZWNrLCAwKTtcblxuICAgICAgICBpZiAoZGVja0lkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlY2tzLnNwbGljZShkZWNrSWQsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXREZWNrcyhkZWNrcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXREZWNrcyhkZWNrczpJRGVja1tdKTp2b2lkIHtcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNhdmVTZXR0aW5nczxJRGVja1tdPignZGVja3MnLCBkZWNrcyk7XG4gICAgICAgIHRoaXMuZGF0YU1vZGVsLnNldERlY2tzKGRlY2tzKTtcbiAgICB9XG59XG5cbmNsYXNzIERhdGFNb2RlbCB7XG4gICAgcHJpdmF0ZSBkZWNrczpJRGVja1tdO1xuXG4gICAgcHVibGljIGdldERlY2tzKCk6SURlY2tbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlY2tzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXREZWNrcyhkZWNrczpJRGVja1tdKTp2b2lkIHtcbiAgICAgICAgdGhpcy5kZWNrcyA9IGRlY2tzO1xuICAgIH1cbn1cblxuRGF0YVNlcnZpY2UuJGluamVjdCA9IFsnJHdpbmRvdycsICdMb2NhbFN0b3JhZ2VTZXJ2aWNlJ107XG4iLCJpbXBvcnQge0lGYWNhZGVTZXJ2aWNlfSBmcm9tICcuL0lGYWNhZGVTZXJ2aWNlJztcbmltcG9ydCB7SURhdGFTZXJ2aWNlfSBmcm9tICcuLi9EYXRhU2VydmljZS9JRGF0YVNlcnZpY2UnO1xuaW1wb3J0IHtJVUlTdGF0ZVNlcnZpY2V9IGZyb20gJy4uL1VJU3RhdGVTZXJ2aWNlL0lVSVN0YXRlU2VydmljZSc7XG5pbXBvcnQge0lEZWNrfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL0lEZWNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjYWRlU2VydmljZSBpbXBsZW1lbnRzIElGYWNhZGVTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOklEYXRhU2VydmljZTtcbiAgICBwcml2YXRlIHVpU3RhdGVTZXJ2aWNlOklVSVN0YXRlU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGFTZXJ2aWNlOklEYXRhU2VydmljZSwgdWlTdGF0ZVNlcnZpY2U6SVVJU3RhdGVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2UgPSBkYXRhU2VydmljZTtcbiAgICAgICAgdGhpcy51aVN0YXRlU2VydmljZSA9IHVpU3RhdGVTZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREZWNrcygpOklEZWNrW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU2VydmljZS5nZXREZWNrcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVOZXdEZWNrKG5hbWU6c3RyaW5nKTp2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRhU2VydmljZS5jcmVhdGVOZXdEZWNrKG5hbWUpO1xuICAgICAgICB0aGlzLnVpU3RhdGVTZXJ2aWNlLnNldFNob3dOZXdEZWNrRm9ybShmYWxzZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGVkaXREZWNrKGRlY2s6SURlY2spOnZvaWQge1xuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmVkaXREZWNrKGRlY2spO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGVEZWNrKGRlY2s6SURlY2spOnZvaWQge1xuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmRlbGV0ZURlY2soZGVjayk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFNob3dOZXdEZWNrRm9ybShpc1Nob3duOmJvb2xlYW4pOnZvaWQge1xuICAgICAgICB0aGlzLnVpU3RhdGVTZXJ2aWNlLnNldFNob3dOZXdEZWNrRm9ybShpc1Nob3duKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2hvd05ld0RlY2tGb3JtKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVpU3RhdGVTZXJ2aWNlLmdldFNob3dOZXdEZWNrRm9ybSgpO1xuICAgIH1cblxufVxuXG5GYWNhZGVTZXJ2aWNlLiRpbmplY3QgPSBbJ0RhdGFTZXJ2aWNlJywgJ1VJU3RhdGVTZXJ2aWNlJ107XG4iLCJpbXBvcnQge0lVSVN0YXRlU2VydmljZX0gZnJvbSAnLi9JVUlTdGF0ZVNlcnZpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVN0YXRlU2VydmljZSBpbXBsZW1lbnRzIElVSVN0YXRlU2VydmljZSB7XG4gICAgcHJpdmF0ZSB1aVN0YXRlTW9kZWw6VUlTdGF0ZU1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudWlTdGF0ZU1vZGVsID0gbmV3IFVJU3RhdGVNb2RlbCgpO1xuXG4gICAgICAgIC8vIGluaXQgZGF0YSBtb2RlbFxuICAgICAgICB0aGlzLnVpU3RhdGVNb2RlbC5zZXROZXdEZWNrRm9ybVNob3duKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U2hvd05ld0RlY2tGb3JtKGlzU2hvd246Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIHRoaXMudWlTdGF0ZU1vZGVsLnNldE5ld0RlY2tGb3JtU2hvd24oaXNTaG93bik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNob3dOZXdEZWNrRm9ybSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy51aVN0YXRlTW9kZWwuZ2V0TmV3RGVja0Zvcm1TaG93bigpO1xuICAgIH1cbn1cblxuY2xhc3MgVUlTdGF0ZU1vZGVsIHtcbiAgICBwcml2YXRlIG5ld0RlY2tGb3JtU2hvd246Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXROZXdEZWNrRm9ybVNob3duKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLm5ld0RlY2tGb3JtU2hvd247XG4gICAgfVxuXG4gICAgcHVibGljIHNldE5ld0RlY2tGb3JtU2hvd24oaXNTaG93bjpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgdGhpcy5uZXdEZWNrRm9ybVNob3duID0gaXNTaG93bjtcbiAgICB9XG59XG4iLCIvLyBpbXBvcnQgZGlyZWN0aXZlc1xuaW1wb3J0IEZhY2FkZVNlcnZpY2UgZnJvbSAnLi9GYWNhZGVTZXJ2aWNlL0ZhY2FkZVNlcnZpY2UnO1xuaW1wb3J0IERhdGFTZXJ2aWNlIGZyb20gJy4vRGF0YVNlcnZpY2UvRGF0YVNlcnZpY2UnO1xuaW1wb3J0IFVJU3RhdGVTZXJ2aWNlIGZyb20gJy4vVUlTdGF0ZVNlcnZpY2UvVUlTdGF0ZVNlcnZpY2UnO1xuXG4vLyByZWdpc3RlciBkaXJlY3RpdmVzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWdpc3RlclNlcnZpY2VzKGFwcE5hbWU6c3RyaW5nKTp2b2lkIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZShhcHBOYW1lKVxuICAgICAgICAuc2VydmljZSgnRGF0YVNlcnZpY2UnLCBEYXRhU2VydmljZSlcbiAgICAgICAgLnNlcnZpY2UoJ1VJU3RhdGVTZXJ2aWNlJywgVUlTdGF0ZVNlcnZpY2UpXG4gICAgICAgIC5zZXJ2aWNlKCdGYWNhZGVTZXJ2aWNlJywgRmFjYWRlU2VydmljZSk7XG59XG4iXX0=
