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
exports.html = "\n    <div>\n        <div data-co-header data-title-text=\"Deck Manager\"></div>\n\n        <div data-co-new-deck></div>\n        <div data-co-deck-list></div>\n        <div data-co-footer></div>\n    </div>\n";


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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvc291cmNlL21vZGVscy9EZWNrLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvZGVja21hbmFnZXIvY29kZWNrbGlzdC9kZWNrbGlzdGNvbnRyb2xsZXIudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrbWFuYWdlci9jb2RlY2tsaXN0L2NvZGVja2xpc3QudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrbWFuYWdlci9jb2RlY2tsaXN0L2NvZGVja2xpc3R0ZW1wbGF0ZS5odG1sLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvZGVja21hbmFnZXIvY29kZWNrbWFuYWdlci50cyIsIi9zb3VyY2UvY29tcG9uZW50cy9jb2RlY2ttYW5hZ2VyL2NvZGVja21hbmFnZXJ0ZW1wbGF0ZS5odG1sLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvZGVja21hbmFnZXIvY29uZXdkZWNrL25ld2RlY2tjb250cm9sbGVyLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvZGVja21hbmFnZXIvY29uZXdkZWNrL2NvbmV3ZGVjay50cyIsIi9zb3VyY2UvY29tcG9uZW50cy9jb2RlY2ttYW5hZ2VyL2NvbmV3ZGVjay9jb25ld2RlY2t0ZW1wbGF0ZS5odG1sLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2RlY2ttYW5hZ2VyZGlyZWN0aXZlcy50cyIsIi9zb3VyY2UvbWFpbi50cyIsIi9zb3VyY2Uvc2VydmljZXMvZGF0YXNlcnZpY2UvZGF0YXNlcnZpY2UudHMiLCIvc291cmNlL3NlcnZpY2VzL2ZhY2FkZXNlcnZpY2UvZmFjYWRlc2VydmljZS50cyIsIi9zb3VyY2Uvc2VydmljZXMvdWlzdGF0ZXNlcnZpY2UvdWlzdGF0ZXNlcnZpY2UudHMiLCIvc291cmNlL3NlcnZpY2VzL2RlY2ttYW5hZ2Vyc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBw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MkJBQTJCLENBQUMsQ0FBQTtBQUNwRCwrQkFBMkIsaUNBQWlDLENBQUMsQ0FBQTtBQUU3RCxzQkFBc0I7QUFDdEIsMEJBQXlDLE9BQWM7SUFDbkQsWUFBWSxDQUFDO0lBRWIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDbEIsT0FBTyxDQUFDLGFBQWEsRUFBRSxxQkFBVyxDQUFDO1NBQ25DLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSx3QkFBYyxDQUFDO1NBQ3pDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsdUJBQWEsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFQRDtrQ0FPQyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7SURlY2t9IGZyb20gJy4vSURlY2snO1xuaW1wb3J0IHtJQ2FyZH0gZnJvbSAnLi9JQ2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2sgaW1wbGVtZW50cyBJRGVjayB7XG4gICAgcHVibGljIGlkOnN0cmluZztcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XG4gICAgcHVibGljIGNhcmRzOklDYXJkW107XG5cbiAgICBjb25zdHJ1Y3RvcihpZDpzdHJpbmcsIG5hbWU6c3RyaW5nLCBjYXJkczpJQ2FyZFtdKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jYXJkcyA9IGNhcmRzO1xuICAgIH1cbn1cbiIsImltcG9ydCB7SUZhY2FkZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0ZhY2FkZVNlcnZpY2UvSUZhY2FkZVNlcnZpY2UnO1xuaW1wb3J0IHtJRGVja30gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21vZGVscy9JRGVjayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2tDb250cm9sbGVyIHtcbiAgICBwcml2YXRlIGZhY2FkZVNlcnZpY2U6SUZhY2FkZVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihmYWNhZGVTZXJ2aWNlOklGYWNhZGVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZmFjYWRlU2VydmljZSA9IGZhY2FkZVNlcnZpY2U7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERlY2tzKCk6SURlY2tbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhY2FkZVNlcnZpY2UuZ2V0RGVja3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRGVjaygpOnZvaWQge1xuICAgICAgICB0aGlzLmZhY2FkZVNlcnZpY2Uuc2V0U2hvd05ld0RlY2tGb3JtKHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlZGl0RGVjayhkZWNrOklEZWNrKTp2b2lkIHtcbiAgICAgICAgdGhpcy5mYWNhZGVTZXJ2aWNlLmVkaXREZWNrKGRlY2spO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGVEZWNrKGRlY2s6SURlY2spOnZvaWQge1xuICAgICAgICB0aGlzLmZhY2FkZVNlcnZpY2UuZGVsZXRlRGVjayhkZWNrKTtcbiAgICB9XG59XG5cbkRlY2tDb250cm9sbGVyLiRpbmplY3QgPSBbJ0ZhY2FkZVNlcnZpY2UnXTtcbiIsImltcG9ydCB7aHRtbH0gZnJvbSAnLi9jb0RlY2tMaXN0VGVtcGxhdGUuaHRtbCc7XG5pbXBvcnQgRGVja0xpc3RDb250cm9sbGVyIGZyb20gJy4vRGVja0xpc3RDb250cm9sbGVyJztcblxuZnVuY3Rpb24gY29EZWNrTGlzdCgpOmFuZ3VsYXIuSURpcmVjdGl2ZSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udHJvbGxlcjogRGVja0xpc3RDb250cm9sbGVyLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdkZWNrTGlzdENvbnRyb2xsZXInLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZTogaHRtbFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvRGVja0xpc3Q7XG4iLCJleHBvcnQgY29uc3QgaHRtbDpzdHJpbmcgPVxuICAgIGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWNrLWxpc3QgY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5EZWNrIGxpc3Q8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtbmctY2xpY2s9XCJkZWNrTGlzdENvbnRyb2xsZXIuYWRkRGVjaygpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFkZC1kZWNrIGJ0biBidG4taW5mb1wiPisgQWRkIG5ldyBkZWNrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtbmctaWY9XCJkZWNrTGlzdENvbnRyb2xsZXIuZ2V0RGVja3MoKS5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtbmctcmVwZWF0PVwiZGVjayBpbiBkZWNrTGlzdENvbnRyb2xsZXIuZ2V0RGVja3MoKSB0cmFjayBieSBkZWNrLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRlY2sgdGV4dC1jZW50ZXIgY29sLXhzLTEyIGNvbC1zbS00IGNvbC1tZC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57eyBkZWNrLm5hbWUgfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5OdW1iZXIgb2YgY2FyZHM6IHt7IGRlY2suY2FyZHMubGVuZ3RoIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlY2stcHJldmlld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImRlY2stZnJvbnRcIiBkYXRhLW5nLWlmPVwiZGVjay5jYXJkcy5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLW5nLXNyYz1cImltZy9jYXJkcy97eyBkZWNrLmNhcmRzWzBdLmltYWdlIH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiZGVjay1iYWNrLW1vcmVcIiBkYXRhLW5nLXNyYz1cImltZy9jYXJkLWJhY2stZGVmYXVsdC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInt7IGRlY2submFtZSB9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImRlY2stYmFja1wiIGRhdGEtbmctc3JjPVwiaW1nL2NhcmQtYmFjay1kZWZhdWx0LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwie3sgZGVjay5uYW1lIH19XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtbmctY2xpY2s9XCJkZWNrTGlzdENvbnRyb2xsZXIuZWRpdERlY2soZGVjaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCI+RWRpdCBkZWNrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1uZy1jbGljaz1cImRlY2tMaXN0Q29udHJvbGxlci5kZWxldGVEZWNrKGRlY2spXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+RGVsZXRlIGRlY2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLW5nLWlmPVwiZGVja0xpc3RDb250cm9sbGVyLmdldERlY2tzKCkubGVuZ3RoID09PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbC14cy0xMlwiPkxvb2tzIGxpa2UgeW91IGRvbid0IGhhdmUgYW55IGRlY2tzIHlldC4gV2h5IG5vdCBjcmVhdGUgb25lIG5vdz88L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnLi9jb0RlY2tNYW5hZ2VyVGVtcGxhdGUuaHRtbCc7XG5cbmZ1bmN0aW9uIGNvRGVja01hbmFnZXIoKTphbmd1bGFyLklEaXJlY3RpdmUge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgdGVtcGxhdGU6IGh0bWxcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb0RlY2tNYW5hZ2VyO1xuIiwiZXhwb3J0IGNvbnN0IGh0bWw6c3RyaW5nID0gYFxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgZGF0YS1jby1oZWFkZXIgZGF0YS10aXRsZS10ZXh0PVwiRGVjayBNYW5hZ2VyXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWNvLW5ldy1kZWNrPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtY28tZGVjay1saXN0PjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEtY28tZm9vdGVyPjwvZGl2PlxuICAgIDwvZGl2PlxuYDtcbiIsImltcG9ydCB7SUZhY2FkZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0ZhY2FkZVNlcnZpY2UvSUZhY2FkZVNlcnZpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdEZWNrQ29udHJvbGxlciB7XG4gICAgcHJpdmF0ZSBmYWNhZGVTZXJ2aWNlOklGYWNhZGVTZXJ2aWNlO1xuICAgIHByaXZhdGUgZGVja05hbWU6c3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZmFjYWRlU2VydmljZTpJRmFjYWRlU2VydmljZSkge1xuICAgICAgICB0aGlzLmZhY2FkZVNlcnZpY2UgPSBmYWNhZGVTZXJ2aWNlO1xuICAgICAgICB0aGlzLmRlY2tOYW1lID0gJyc7XG4gICAgfVxuXG4gICAgcHVibGljIGlzRm9ybVNob3duKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhY2FkZVNlcnZpY2UuZ2V0U2hvd05ld0RlY2tGb3JtKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZU5ld0RlY2soKTp2b2lkIHtcbiAgICAgICAgdGhpcy5mYWNhZGVTZXJ2aWNlLmNyZWF0ZU5ld0RlY2sodGhpcy5kZWNrTmFtZSk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgaGlkZU5ld0RlY2tGb3JtKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuZmFjYWRlU2VydmljZS5zZXRTaG93TmV3RGVja0Zvcm0oZmFsc2UpO1xuICAgIH1cbn1cblxuTmV3RGVja0NvbnRyb2xsZXIuJGluamVjdCA9IFsnRmFjYWRlU2VydmljZSddO1xuIiwiaW1wb3J0IHtodG1sfSBmcm9tICcuL2NvTmV3RGVja1RlbXBsYXRlLmh0bWwnO1xuaW1wb3J0IE5ld0RlY2tDb250cm9sbGVyIGZyb20gJy4vTmV3RGVja0NvbnRyb2xsZXInO1xuXG5mdW5jdGlvbiBjb05ld0RlY2soKTphbmd1bGFyLklEaXJlY3RpdmUge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRyb2xsZXI6IE5ld0RlY2tDb250cm9sbGVyLFxuICAgICAgICBjb250cm9sbGVyQXM6ICduZXdEZWNrQ29udHJvbGxlcicsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHRlbXBsYXRlOiBodG1sXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29OZXdEZWNrO1xuIiwiZXhwb3J0IGNvbnN0IGh0bWw6c3RyaW5nID1cbiAgICBgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgZGF0YS1uZy1zaG93PVwibmV3RGVja0NvbnRyb2xsZXIuaXNGb3JtU2hvd24oKVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkFkZCBuZXcgZGVjazwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkYXRhLW5nLW1vZGVsPVwibmV3RGVja0NvbnRyb2xsZXIuZGVja05hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZWNrIG5hbWVcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtbmctY2xpY2s9XCJuZXdEZWNrQ29udHJvbGxlci5jcmVhdGVOZXdEZWNrKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgYnRuIGJ0bi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgbmV3IGRlY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLW5nLWNsaWNrPVwibmV3RGVja0NvbnRyb2xsZXIuaGlkZU5ld0RlY2tGb3JtKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgYnRuIGJ0bi1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICBgO1xuIiwiLy8gaW1wb3J0IGRpcmVjdGl2ZXNcbmltcG9ydCBjb0RlY2tNYW5hZ2VyIGZyb20gJy4vY29EZWNrTWFuYWdlci9jb0RlY2tNYW5hZ2VyJztcbmltcG9ydCBjb0RlY2tMaXN0IGZyb20gJy4vY29EZWNrTWFuYWdlci9jb0RlY2tMaXN0L2NvRGVja0xpc3QnO1xuaW1wb3J0IGNvTmV3RGVjayBmcm9tICcuL2NvRGVja01hbmFnZXIvY29OZXdEZWNrL2NvTmV3RGVjayc7XG5cbi8vIHJlZ2lzdGVyIGRpcmVjdGl2ZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyRGlyZWN0aXZlcyhhcHBOYW1lOnN0cmluZyk6dm9pZCB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoYXBwTmFtZSlcbiAgICAgICAgLmRpcmVjdGl2ZSgnY29EZWNrTWFuYWdlcicsIGNvRGVja01hbmFnZXIpXG4gICAgICAgIC5kaXJlY3RpdmUoJ2NvRGVja0xpc3QnLCBjb0RlY2tMaXN0KVxuICAgICAgICAuZGlyZWN0aXZlKCdjb05ld0RlY2snLCBjb05ld0RlY2spO1xufVxuIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiLz5cbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgcmVnaXN0ZXJEaXJlY3RpdmVzIGZyb20gJy4vY29tcG9uZW50cy9kZWNrTWFuYWdlckRpcmVjdGl2ZXMnO1xuaW1wb3J0IHJlZ2lzdGVyU2VydmljZXMgZnJvbSAnLi9zZXJ2aWNlcy9kZWNrTWFuYWdlclNlcnZpY2VzJztcblxuLy8gYXBwIG5hbWVcbmV4cG9ydCBjb25zdCBhcHBOYW1lOnN0cmluZyA9ICdkZWNrTWFuYWdlckFwcCc7XG5cbi8vIHJlZ2lzdGVyIG1vZHVsZSwgZGlyZWN0aXZlcywgc2VydmljZXMsIGV0Yy5cbmFuZ3VsYXIubW9kdWxlKGFwcE5hbWUsIFsnY29tbW9uJ10pO1xucmVnaXN0ZXJEaXJlY3RpdmVzKGFwcE5hbWUpO1xucmVnaXN0ZXJTZXJ2aWNlcyhhcHBOYW1lKTtcblxuLy8gYm9vdHN0cmFwIEFuZ3VsYXJcbmxldCBhcHBBbmd1bGFyQ29uZmlnOmFuZ3VsYXIuSUFuZ3VsYXJCb290c3RyYXBDb25maWcgPSB7XG4gICAgZGVidWdJbmZvRW5hYmxlZDogdHJ1ZSxcbiAgICBzdHJpY3REaTogdHJ1ZVxufTtcbmFuZ3VsYXIuYm9vdHN0cmFwKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb0RlY2tNYW5hZ2VyQXBwJyksXG4gICAgW2FwcE5hbWVdLFxuICAgIGFwcEFuZ3VsYXJDb25maWdcbik7XG4iLCJpbXBvcnQge0lEYXRhU2VydmljZX0gZnJvbSAnLi9JRGF0YVNlcnZpY2UnO1xuaW1wb3J0IHtJTG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL0xvY2FsU3RvcmFnZVNlcnZpY2UvSUxvY2FsU3RvcmFnZVNlcnZpY2UnO1xuaW1wb3J0IHtJRGVja30gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9JRGVjayc7XG5pbXBvcnQgRGVjayBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL0RlY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhU2VydmljZSBpbXBsZW1lbnRzIElEYXRhU2VydmljZSB7XG4gICAgcHJpdmF0ZSAkd2luZG93OmFuZ3VsYXIuSVdpbmRvd1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOklMb2NhbFN0b3JhZ2VTZXJ2aWNlO1xuICAgIHByaXZhdGUgZGF0YU1vZGVsOkRhdGFNb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKCR3aW5kb3c6YW5ndWxhci5JV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlOklMb2NhbFN0b3JhZ2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZSA9IGxvY2FsU3RvcmFnZVNlcnZpY2U7XG4gICAgICAgIHRoaXMuZGF0YU1vZGVsID0gbmV3IERhdGFNb2RlbCgpO1xuXG4gICAgICAgIC8vIGluaXQgZGF0YSBtb2RlbFxuICAgICAgICBsZXQgZGVja3M6SURlY2tbXSA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5sb2FkU2V0dGluZ3M8SURlY2tbXT4oJ2RlY2tzJyk7XG4gICAgICAgIGlmIChkZWNrcykge1xuICAgICAgICAgICAgbGV0IHR5cGVkRGVja3M6SURlY2tbXSA9IGRlY2tzLm1hcCgoZGVjazpJRGVjaykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGVjayhkZWNrLmlkLCBkZWNrLm5hbWUsIGRlY2suY2FyZHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFNb2RlbC5zZXREZWNrcyh0eXBlZERlY2tzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YU1vZGVsLnNldERlY2tzKFtdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXREZWNrcygpOklEZWNrW10ge1xuICAgICAgICBsZXQgZGVja3M6SURlY2tbXSA9IHRoaXMuZGF0YU1vZGVsLmdldERlY2tzKCk7XG5cbiAgICAgICAgaWYgKCFkZWNrcykge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlY2tzO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVOZXdEZWNrKG5hbWU6c3RyaW5nKTp2b2lkIHtcbiAgICAgICAgbGV0IGRlY2tzOklEZWNrW10gPSB0aGlzLmRhdGFNb2RlbC5nZXREZWNrcygpO1xuICAgICAgICBsZXQgaWQ6c3RyaW5nID0gbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IG5ld0RlY2s6SURlY2sgPSBuZXcgRGVjayhpZCwgbmFtZSwgW10pO1xuICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGRlY2tzXG4gICAgICAgIGRlY2tzID0gZGVja3MgPyBkZWNrcy5jb25jYXQobmV3RGVjaykgOiBbbmV3RGVja107XG5cbiAgICAgICAgdGhpcy5zZXREZWNrcyhkZWNrcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGVkaXREZWNrKGRlY2s6SURlY2spOnZvaWQge1xuICAgICAgICB0aGlzLiR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdkZWNrYnVpbGRlci5odG1sI2lkPScgKyBkZWNrLmlkO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGVEZWNrKGRlY2s6SURlY2spOnZvaWQge1xuICAgICAgICBsZXQgc2hvdWxkRGVsZXRlOmJvb2xlYW4gPSBjb25maXJtKCdEbyB5b3UgcmVhbGx5IHdhbnQgdG8gZGVsZXRlIHRoaXMgZGVjaz8nKTtcbiAgICAgICAgaWYgKCFzaG91bGREZWxldGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZWNrczpJRGVja1tdID0gdGhpcy5kYXRhTW9kZWwuZ2V0RGVja3MoKTtcbiAgICAgICAgbGV0IGRlY2tJZDpudW1iZXIgPSBkZWNrcy5pbmRleE9mKGRlY2ssIDApO1xuXG4gICAgICAgIGlmIChkZWNrSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGVja3Muc3BsaWNlKGRlY2tJZCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldERlY2tzKGRlY2tzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldERlY2tzKGRlY2tzOklEZWNrW10pOnZvaWQge1xuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2F2ZVNldHRpbmdzPElEZWNrW10+KCdkZWNrcycsIGRlY2tzKTtcbiAgICAgICAgdGhpcy5kYXRhTW9kZWwuc2V0RGVja3MoZGVja3MpO1xuICAgIH1cbn1cblxuY2xhc3MgRGF0YU1vZGVsIHtcbiAgICBwcml2YXRlIGRlY2tzOklEZWNrW107XG5cbiAgICBwdWJsaWMgZ2V0RGVja3MoKTpJRGVja1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVja3M7XG4gICAgfVxuXG4gICAgcHVibGljIHNldERlY2tzKGRlY2tzOklEZWNrW10pOnZvaWQge1xuICAgICAgICB0aGlzLmRlY2tzID0gZGVja3M7XG4gICAgfVxufVxuXG5EYXRhU2VydmljZS4kaW5qZWN0ID0gWyckd2luZG93JywgJ0xvY2FsU3RvcmFnZVNlcnZpY2UnXTtcbiIsImltcG9ydCB7SUZhY2FkZVNlcnZpY2V9IGZyb20gJy4vSUZhY2FkZVNlcnZpY2UnO1xuaW1wb3J0IHtJRGF0YVNlcnZpY2V9IGZyb20gJy4uL0RhdGFTZXJ2aWNlL0lEYXRhU2VydmljZSc7XG5pbXBvcnQge0lVSVN0YXRlU2VydmljZX0gZnJvbSAnLi4vVUlTdGF0ZVNlcnZpY2UvSVVJU3RhdGVTZXJ2aWNlJztcbmltcG9ydCB7SURlY2t9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSURlY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNhZGVTZXJ2aWNlIGltcGxlbWVudHMgSUZhY2FkZVNlcnZpY2Uge1xuICAgIHByaXZhdGUgZGF0YVNlcnZpY2U6SURhdGFTZXJ2aWNlO1xuICAgIHByaXZhdGUgdWlTdGF0ZVNlcnZpY2U6SVVJU3RhdGVTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YVNlcnZpY2U6SURhdGFTZXJ2aWNlLCB1aVN0YXRlU2VydmljZTpJVUlTdGF0ZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5kYXRhU2VydmljZSA9IGRhdGFTZXJ2aWNlO1xuICAgICAgICB0aGlzLnVpU3RhdGVTZXJ2aWNlID0gdWlTdGF0ZVNlcnZpY2U7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERlY2tzKCk6SURlY2tbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLmdldERlY2tzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZU5ld0RlY2sobmFtZTpzdHJpbmcpOnZvaWQge1xuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmNyZWF0ZU5ld0RlY2sobmFtZSk7XG4gICAgICAgIHRoaXMudWlTdGF0ZVNlcnZpY2Uuc2V0U2hvd05ld0RlY2tGb3JtKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZWRpdERlY2soZGVjazpJRGVjayk6dm9pZCB7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2UuZWRpdERlY2soZGVjayk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZURlY2soZGVjazpJRGVjayk6dm9pZCB7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2UuZGVsZXRlRGVjayhkZWNrKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U2hvd05ld0RlY2tGb3JtKGlzU2hvd246Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIHRoaXMudWlTdGF0ZVNlcnZpY2Uuc2V0U2hvd05ld0RlY2tGb3JtKGlzU2hvd24pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTaG93TmV3RGVja0Zvcm0oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWlTdGF0ZVNlcnZpY2UuZ2V0U2hvd05ld0RlY2tGb3JtKCk7XG4gICAgfVxuXG59XG5cbkZhY2FkZVNlcnZpY2UuJGluamVjdCA9IFsnRGF0YVNlcnZpY2UnLCAnVUlTdGF0ZVNlcnZpY2UnXTtcbiIsImltcG9ydCB7SVVJU3RhdGVTZXJ2aWNlfSBmcm9tICcuL0lVSVN0YXRlU2VydmljZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJU3RhdGVTZXJ2aWNlIGltcGxlbWVudHMgSVVJU3RhdGVTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHVpU3RhdGVNb2RlbDpVSVN0YXRlTW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51aVN0YXRlTW9kZWwgPSBuZXcgVUlTdGF0ZU1vZGVsKCk7XG5cbiAgICAgICAgLy8gaW5pdCBkYXRhIG1vZGVsXG4gICAgICAgIHRoaXMudWlTdGF0ZU1vZGVsLnNldE5ld0RlY2tGb3JtU2hvd24oZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTaG93TmV3RGVja0Zvcm0oaXNTaG93bjpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgdGhpcy51aVN0YXRlTW9kZWwuc2V0TmV3RGVja0Zvcm1TaG93bihpc1Nob3duKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2hvd05ld0RlY2tGb3JtKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVpU3RhdGVNb2RlbC5nZXROZXdEZWNrRm9ybVNob3duKCk7XG4gICAgfVxufVxuXG5jbGFzcyBVSVN0YXRlTW9kZWwge1xuICAgIHByaXZhdGUgbmV3RGVja0Zvcm1TaG93bjpib29sZWFuO1xuXG4gICAgcHVibGljIGdldE5ld0RlY2tGb3JtU2hvd24oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmV3RGVja0Zvcm1TaG93bjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TmV3RGVja0Zvcm1TaG93bihpc1Nob3duOmJvb2xlYW4pOnZvaWQge1xuICAgICAgICB0aGlzLm5ld0RlY2tGb3JtU2hvd24gPSBpc1Nob3duO1xuICAgIH1cbn1cbiIsIi8vIGltcG9ydCBkaXJlY3RpdmVzXG5pbXBvcnQgRmFjYWRlU2VydmljZSBmcm9tICcuL0ZhY2FkZVNlcnZpY2UvRmFjYWRlU2VydmljZSc7XG5pbXBvcnQgRGF0YVNlcnZpY2UgZnJvbSAnLi9EYXRhU2VydmljZS9EYXRhU2VydmljZSc7XG5pbXBvcnQgVUlTdGF0ZVNlcnZpY2UgZnJvbSAnLi9VSVN0YXRlU2VydmljZS9VSVN0YXRlU2VydmljZSc7XG5cbi8vIHJlZ2lzdGVyIGRpcmVjdGl2ZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyU2VydmljZXMoYXBwTmFtZTpzdHJpbmcpOnZvaWQge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXIubW9kdWxlKGFwcE5hbWUpXG4gICAgICAgIC5zZXJ2aWNlKCdEYXRhU2VydmljZScsIERhdGFTZXJ2aWNlKVxuICAgICAgICAuc2VydmljZSgnVUlTdGF0ZVNlcnZpY2UnLCBVSVN0YXRlU2VydmljZSlcbiAgICAgICAgLnNlcnZpY2UoJ0ZhY2FkZVNlcnZpY2UnLCBGYWNhZGVTZXJ2aWNlKTtcbn1cbiJdfQ==
