(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Deck = (function () {
    function Deck(id, name, cards) {
        this._id = id;
        this._name = name;
        this._cards = cards;
    }
    Object.defineProperty(Deck.prototype, "cards", {
        get: function () {
            return this._cards;
        },
        set: function (value) {
            this._cards = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Deck.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Deck.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
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
exports.html = "\n        <div>\n            <div class=\"deck-list container\">\n                <div class=\"row\">\n                    <div class=\"col-xs-6\">\n                        <h2>Deck list</h2>\n                    </div>\n                    <div class=\"text-right col-xs-6\">\n                        <span data-ng-click=\"deckListController.addDeck()\"\n                            class=\"add-deck btn btn-info\">+ Add new deck</span>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div data-ng-if=\"deckListController.getDecks().length > 0\">\n                        <div data-ng-repeat=\"deck in deckListController.getDecks() track by deck.id\"\n                            data-ng-click=\"deckListController.editDeck(deck)\"\n                            class=\"deck text-center col-xs-12 col-sm-6 col-md-4 col-lg-3\">\n                            <p>\n                                <h3>{{ deck.name }}</h3>\n                                <p>\n                                    <img data-ng-src=\"/img/card-back-default.png\"\n                                        alt=\"{{ deck.name }}\">\n                                </p>\n                                <p>\n                                    <span data-ng-click=\"deckListController.deleteDeck(deck)\"\n                                        class=\"btn btn-danger\">Delete deck</span>\n                                </p>\n                            </p>\n                        </div>\n                    </div>\n\n                    <div data-ng-if=\"deckListController.getDecks().length === 0\">\n                        <p class=\"col-xs-12\">Looks like you don't have any decks yet. Why not create one now?</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ";


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
exports.html = "\n    <div>\n        <p class=\"text-center\">\n            <img src=\"img/logo.png\" alt=\"Hearthstone\">\n        </p>\n        <h1 class=\"text-center\">Deck manager</h1>\n\n        <div data-co-new-deck></div>\n        <div data-co-deck-list></div>\n        <div data-co-footer></div>\n    </div>\n";


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
exports.html = "\n        <div>\n            <div class=\"container\" data-ng-show=\"newDeckController.isFormShown()\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12\">\n                        <h2>Add new deck</h2>\n                        <div class=\"well\">\n                            <input type=\"text\" data-ng-model=\"newDeckController.deckName\">\n                            <span class=\"btn btn-info\" data-ng-click=\"newDeckController.createNewDeck()\">Create new deck</span>\n                            <span class=\"btn btn-danger\" data-ng-click=\"newDeckController.hideNewDeckForm()\">Cancel</span>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    ";


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
    function DataService(localStorageService) {
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
    DataService.prototype.deleteDeck = function (deck) {
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
DataService.$inject = ['LocalStorageService'];


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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvc291cmNlL21vZGVscy9EZWNrLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvZGVja21hbmFnZXIvY29kZWNrbGlzdC9kZWNrbGlzdGNvbnRyb2xsZXIudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrbWFuYWdlci9jb2RlY2tsaXN0L2NvZGVja2xpc3QudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29kZWNrbWFuYWdlci9jb2RlY2tsaXN0L2NvZGVja2xpc3R0ZW1wbGF0ZS5odG1sLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvZGVja21hbmFnZXIvY29kZWNrbWFuYWdlci50cyIsIi9zb3VyY2UvY29tcG9uZW50cy9jb2RlY2ttYW5hZ2VyL2NvZGVja21hbmFnZXJ0ZW1wbGF0ZS5odG1sLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvZGVja21hbmFnZXIvY29uZXdkZWNrL25ld2RlY2tjb250cm9sbGVyLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvZGVja21hbmFnZXIvY29uZXdkZWNrL2NvbmV3ZGVjay50cyIsIi9zb3VyY2UvY29tcG9uZW50cy9jb2RlY2ttYW5hZ2VyL2NvbmV3ZGVjay9jb25ld2RlY2t0ZW1wbGF0ZS5odG1sLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2RlY2ttYW5hZ2VyZGlyZWN0aXZlcy50cyIsIi9zb3VyY2UvbWFpbi50cyIsIi9zb3VyY2Uvc2VydmljZXMvZGF0YXNlcnZpY2UvZGF0YXNlcnZpY2UudHMiLCIvc291cmNlL3NlcnZpY2VzL2ZhY2FkZXNlcnZpY2UvZmFjYWRlc2VydmljZS50cyIsIi9zb3VyY2Uvc2VydmljZXMvdWlzdGF0ZXNlcnZpY2UvdWlzdGF0ZXNlcnZpY2UudHMiLCIvc291cmNlL3NlcnZpY2VzL2RlY2ttYW5hZ2Vyc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBw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TUFBTSxDQUFDLE9BQU8sQ0FBQztTQUNsQixPQUFPLENBQUMsYUFBYSxFQUFFLHFCQUFXLENBQUM7U0FDbkMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLHdCQUFjLENBQUM7U0FDekMsT0FBTyxDQUFDLGVBQWUsRUFBRSx1QkFBYSxDQUFDLENBQUM7QUFDakQsQ0FBQztBQVBEO2tDQU9DLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHtJRGVja30gZnJvbSAnLi9JRGVjayc7XG5pbXBvcnQge0lDYXJkfSBmcm9tICcuL0lDYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjayBpbXBsZW1lbnRzIElEZWNrIHtcbiAgICBwcml2YXRlIF9pZDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbmFtZTpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfY2FyZHM6SUNhcmRbXTtcblxuICAgIGNvbnN0cnVjdG9yKGlkOnN0cmluZywgbmFtZTpzdHJpbmcsIGNhcmRzOklDYXJkW10pIHtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX2NhcmRzID0gY2FyZHM7XG4gICAgfVxuXG4gICAgZ2V0IGNhcmRzKCk6SUNhcmRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJkcztcbiAgICB9XG5cbiAgICBzZXQgY2FyZHModmFsdWU6SUNhcmRbXSkge1xuICAgICAgICB0aGlzLl9jYXJkcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgc2V0IG5hbWUodmFsdWU6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgaWQoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgc2V0IGlkKHZhbHVlOnN0cmluZykge1xuICAgICAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7SUZhY2FkZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0ZhY2FkZVNlcnZpY2UvSUZhY2FkZVNlcnZpY2UnO1xuaW1wb3J0IHtJRGVja30gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL21vZGVscy9JRGVjayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2tDb250cm9sbGVyIHtcbiAgICBwcml2YXRlIGZhY2FkZVNlcnZpY2U6SUZhY2FkZVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihmYWNhZGVTZXJ2aWNlOklGYWNhZGVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZmFjYWRlU2VydmljZSA9IGZhY2FkZVNlcnZpY2U7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERlY2tzKCk6SURlY2tbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhY2FkZVNlcnZpY2UuZ2V0RGVja3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRGVjaygpOnZvaWQge1xuICAgICAgICB0aGlzLmZhY2FkZVNlcnZpY2Uuc2V0U2hvd05ld0RlY2tGb3JtKHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGVEZWNrKGRlY2s6SURlY2spOnZvaWQge1xuICAgICAgICB0aGlzLmZhY2FkZVNlcnZpY2UuZGVsZXRlRGVjayhkZWNrKTtcbiAgICB9XG59XG5cbkRlY2tDb250cm9sbGVyLiRpbmplY3QgPSBbJ0ZhY2FkZVNlcnZpY2UnXTtcbiIsImltcG9ydCB7aHRtbH0gZnJvbSAnLi9jb0RlY2tMaXN0VGVtcGxhdGUuaHRtbCc7XG5pbXBvcnQgRGVja0xpc3RDb250cm9sbGVyIGZyb20gJy4vRGVja0xpc3RDb250cm9sbGVyJztcblxuZnVuY3Rpb24gY29EZWNrTGlzdCgpOmFuZ3VsYXIuSURpcmVjdGl2ZSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udHJvbGxlcjogRGVja0xpc3RDb250cm9sbGVyLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdkZWNrTGlzdENvbnRyb2xsZXInLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZTogaHRtbFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvRGVja0xpc3Q7XG4iLCJleHBvcnQgY29uc3QgaHRtbDpzdHJpbmcgPVxuICAgIGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWNrLWxpc3QgY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5EZWNrIGxpc3Q8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtbmctY2xpY2s9XCJkZWNrTGlzdENvbnRyb2xsZXIuYWRkRGVjaygpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFkZC1kZWNrIGJ0biBidG4taW5mb1wiPisgQWRkIG5ldyBkZWNrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1uZy1pZj1cImRlY2tMaXN0Q29udHJvbGxlci5nZXREZWNrcygpLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1uZy1yZXBlYXQ9XCJkZWNrIGluIGRlY2tMaXN0Q29udHJvbGxlci5nZXREZWNrcygpIHRyYWNrIGJ5IGRlY2suaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbmctY2xpY2s9XCJkZWNrTGlzdENvbnRyb2xsZXIuZWRpdERlY2soZGVjaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZGVjayB0ZXh0LWNlbnRlciBjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTQgY29sLWxnLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt7IGRlY2submFtZSB9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLW5nLXNyYz1cIi9pbWcvY2FyZC1iYWNrLWRlZmF1bHQucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ7eyBkZWNrLm5hbWUgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtbmctY2xpY2s9XCJkZWNrTGlzdENvbnRyb2xsZXIuZGVsZXRlRGVjayhkZWNrKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiPkRlbGV0ZSBkZWNrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1uZy1pZj1cImRlY2tMaXN0Q29udHJvbGxlci5nZXREZWNrcygpLmxlbmd0aCA9PT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb2wteHMtMTJcIj5Mb29rcyBsaWtlIHlvdSBkb24ndCBoYXZlIGFueSBkZWNrcyB5ZXQuIFdoeSBub3QgY3JlYXRlIG9uZSBub3c/PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJy4vY29EZWNrTWFuYWdlclRlbXBsYXRlLmh0bWwnO1xuXG5mdW5jdGlvbiBjb0RlY2tNYW5hZ2VyKCk6YW5ndWxhci5JRGlyZWN0aXZlIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzY29wZToge30sXG4gICAgICAgIHRlbXBsYXRlOiBodG1sXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29EZWNrTWFuYWdlcjtcbiIsImV4cG9ydCBjb25zdCBodG1sOnN0cmluZyA9IGBcbiAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltZy9sb2dvLnBuZ1wiIGFsdD1cIkhlYXJ0aHN0b25lXCI+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5EZWNrIG1hbmFnZXI8L2gxPlxuXG4gICAgICAgIDxkaXYgZGF0YS1jby1uZXctZGVjaz48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWNvLWRlY2stbGlzdD48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWNvLWZvb3Rlcj48L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG4iLCJpbXBvcnQge0lGYWNhZGVTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9GYWNhZGVTZXJ2aWNlL0lGYWNhZGVTZXJ2aWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3RGVja0NvbnRyb2xsZXIge1xuICAgIHByaXZhdGUgZmFjYWRlU2VydmljZTpJRmFjYWRlU2VydmljZTtcbiAgICBwcml2YXRlIGRlY2tOYW1lOnN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGZhY2FkZVNlcnZpY2U6SUZhY2FkZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5mYWNhZGVTZXJ2aWNlID0gZmFjYWRlU2VydmljZTtcbiAgICAgICAgdGhpcy5kZWNrTmFtZSA9ICcnO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0Zvcm1TaG93bigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5mYWNhZGVTZXJ2aWNlLmdldFNob3dOZXdEZWNrRm9ybSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVOZXdEZWNrKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuZmFjYWRlU2VydmljZS5jcmVhdGVOZXdEZWNrKHRoaXMuZGVja05hbWUpO1xuICAgIH1cblxuXG4gICAgcHVibGljIGhpZGVOZXdEZWNrRm9ybSgpOnZvaWQge1xuICAgICAgICB0aGlzLmZhY2FkZVNlcnZpY2Uuc2V0U2hvd05ld0RlY2tGb3JtKGZhbHNlKTtcbiAgICB9XG59XG5cbk5ld0RlY2tDb250cm9sbGVyLiRpbmplY3QgPSBbJ0ZhY2FkZVNlcnZpY2UnXTtcbiIsImltcG9ydCB7aHRtbH0gZnJvbSAnLi9jb05ld0RlY2tUZW1wbGF0ZS5odG1sJztcbmltcG9ydCBOZXdEZWNrQ29udHJvbGxlciBmcm9tICcuL05ld0RlY2tDb250cm9sbGVyJztcblxuZnVuY3Rpb24gY29OZXdEZWNrKCk6YW5ndWxhci5JRGlyZWN0aXZlIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjb250cm9sbGVyOiBOZXdEZWNrQ29udHJvbGxlcixcbiAgICAgICAgY29udHJvbGxlckFzOiAnbmV3RGVja0NvbnRyb2xsZXInLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZTogaHRtbFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvTmV3RGVjaztcbiIsImV4cG9ydCBjb25zdCBodG1sOnN0cmluZyA9XG4gICAgYFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIGRhdGEtbmctc2hvdz1cIm5ld0RlY2tDb250cm9sbGVyLmlzRm9ybVNob3duKClcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5BZGQgbmV3IGRlY2s8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBkYXRhLW5nLW1vZGVsPVwibmV3RGVja0NvbnRyb2xsZXIuZGVja05hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0biBidG4taW5mb1wiIGRhdGEtbmctY2xpY2s9XCJuZXdEZWNrQ29udHJvbGxlci5jcmVhdGVOZXdEZWNrKClcIj5DcmVhdGUgbmV3IGRlY2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIGRhdGEtbmctY2xpY2s9XCJuZXdEZWNrQ29udHJvbGxlci5oaWRlTmV3RGVja0Zvcm0oKVwiPkNhbmNlbDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgYDtcbiIsIi8vIGltcG9ydCBkaXJlY3RpdmVzXG5pbXBvcnQgY29EZWNrTWFuYWdlciBmcm9tICcuL2NvRGVja01hbmFnZXIvY29EZWNrTWFuYWdlcic7XG5pbXBvcnQgY29EZWNrTGlzdCBmcm9tICcuL2NvRGVja01hbmFnZXIvY29EZWNrTGlzdC9jb0RlY2tMaXN0JztcbmltcG9ydCBjb05ld0RlY2sgZnJvbSAnLi9jb0RlY2tNYW5hZ2VyL2NvTmV3RGVjay9jb05ld0RlY2snO1xuXG4vLyByZWdpc3RlciBkaXJlY3RpdmVzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWdpc3RlckRpcmVjdGl2ZXMoYXBwTmFtZTpzdHJpbmcpOnZvaWQge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXIubW9kdWxlKGFwcE5hbWUpXG4gICAgICAgIC5kaXJlY3RpdmUoJ2NvRGVja01hbmFnZXInLCBjb0RlY2tNYW5hZ2VyKVxuICAgICAgICAuZGlyZWN0aXZlKCdjb0RlY2tMaXN0JywgY29EZWNrTGlzdClcbiAgICAgICAgLmRpcmVjdGl2ZSgnY29OZXdEZWNrJywgY29OZXdEZWNrKTtcbn1cbiIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIi8+XG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHJlZ2lzdGVyRGlyZWN0aXZlcyBmcm9tICcuL2NvbXBvbmVudHMvZGVja01hbmFnZXJEaXJlY3RpdmVzJztcbmltcG9ydCByZWdpc3RlclNlcnZpY2VzIGZyb20gJy4vc2VydmljZXMvZGVja01hbmFnZXJTZXJ2aWNlcyc7XG5cbi8vIGFwcCBuYW1lXG5leHBvcnQgY29uc3QgYXBwTmFtZTpzdHJpbmcgPSAnZGVja01hbmFnZXJBcHAnO1xuXG4vLyByZWdpc3RlciBtb2R1bGUsIGRpcmVjdGl2ZXMsIHNlcnZpY2VzLCBldGMuXG5hbmd1bGFyLm1vZHVsZShhcHBOYW1lLCBbJ2NvbW1vbiddKTtcbnJlZ2lzdGVyRGlyZWN0aXZlcyhhcHBOYW1lKTtcbnJlZ2lzdGVyU2VydmljZXMoYXBwTmFtZSk7XG5cbi8vIGJvb3RzdHJhcCBBbmd1bGFyXG5sZXQgYXBwQW5ndWxhckNvbmZpZzphbmd1bGFyLklBbmd1bGFyQm9vdHN0cmFwQ29uZmlnID0ge1xuICAgIGRlYnVnSW5mb0VuYWJsZWQ6IHRydWUsXG4gICAgc3RyaWN0RGk6IHRydWVcbn07XG5hbmd1bGFyLmJvb3RzdHJhcChcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29EZWNrTWFuYWdlckFwcCcpLFxuICAgIFthcHBOYW1lXSxcbiAgICBhcHBBbmd1bGFyQ29uZmlnXG4pO1xuIiwiaW1wb3J0IHtJRGF0YVNlcnZpY2V9IGZyb20gJy4vSURhdGFTZXJ2aWNlJztcbmltcG9ydCB7SUxvY2FsU3RvcmFnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9Mb2NhbFN0b3JhZ2VTZXJ2aWNlL0lMb2NhbFN0b3JhZ2VTZXJ2aWNlJztcbmltcG9ydCB7SURlY2t9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvSURlY2snO1xuaW1wb3J0IERlY2sgZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9EZWNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVNlcnZpY2UgaW1wbGVtZW50cyBJRGF0YVNlcnZpY2Uge1xuICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTpJTG9jYWxTdG9yYWdlU2VydmljZTtcbiAgICBwcml2YXRlIGRhdGFNb2RlbDpEYXRhTW9kZWw7XG5cbiAgICBjb25zdHJ1Y3Rvcihsb2NhbFN0b3JhZ2VTZXJ2aWNlOklMb2NhbFN0b3JhZ2VTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZSA9IGxvY2FsU3RvcmFnZVNlcnZpY2U7XG4gICAgICAgIHRoaXMuZGF0YU1vZGVsID0gbmV3IERhdGFNb2RlbCgpO1xuXG4gICAgICAgIC8vIGluaXQgZGF0YSBtb2RlbFxuICAgICAgICBsZXQgZGVja3M6SURlY2tbXSA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5sb2FkU2V0dGluZ3M8SURlY2tbXT4oJ2RlY2tzJyk7XG4gICAgICAgIGlmIChkZWNrcykge1xuICAgICAgICAgICAgbGV0IHR5cGVkRGVja3M6SURlY2tbXSA9IGRlY2tzLm1hcCgoZGVjazpJRGVjaykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGVjayhkZWNrLmlkLCBkZWNrLm5hbWUsIGRlY2suY2FyZHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFNb2RlbC5zZXREZWNrcyh0eXBlZERlY2tzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YU1vZGVsLnNldERlY2tzKFtdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXREZWNrcygpOklEZWNrW10ge1xuICAgICAgICBsZXQgZGVja3M6SURlY2tbXSA9IHRoaXMuZGF0YU1vZGVsLmdldERlY2tzKCk7XG5cbiAgICAgICAgaWYgKCFkZWNrcykge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlY2tzO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVOZXdEZWNrKG5hbWU6c3RyaW5nKTp2b2lkIHtcbiAgICAgICAgbGV0IGRlY2tzOklEZWNrW10gPSB0aGlzLmRhdGFNb2RlbC5nZXREZWNrcygpO1xuICAgICAgICBsZXQgaWQ6c3RyaW5nID0gbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IG5ld0RlY2s6SURlY2sgPSBuZXcgRGVjayhpZCwgbmFtZSwgW10pO1xuICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGRlY2tzXG4gICAgICAgIGRlY2tzID0gZGVja3MgPyBkZWNrcy5jb25jYXQobmV3RGVjaykgOiBbbmV3RGVja107XG5cbiAgICAgICAgdGhpcy5zZXREZWNrcyhkZWNrcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZURlY2soZGVjazpJRGVjayk6dm9pZCB7XG4gICAgICAgIGxldCBkZWNrczpJRGVja1tdID0gdGhpcy5kYXRhTW9kZWwuZ2V0RGVja3MoKTtcbiAgICAgICAgbGV0IGRlY2tJZDpudW1iZXIgPSBkZWNrcy5pbmRleE9mKGRlY2ssIDApO1xuXG4gICAgICAgIGlmIChkZWNrSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGVja3Muc3BsaWNlKGRlY2tJZCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldERlY2tzKGRlY2tzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldERlY2tzKGRlY2tzOklEZWNrW10pOnZvaWQge1xuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2F2ZVNldHRpbmdzPElEZWNrW10+KCdkZWNrcycsIGRlY2tzKTtcbiAgICAgICAgdGhpcy5kYXRhTW9kZWwuc2V0RGVja3MoZGVja3MpO1xuICAgIH1cbn1cblxuY2xhc3MgRGF0YU1vZGVsIHtcbiAgICBwcml2YXRlIGRlY2tzOklEZWNrW107XG5cbiAgICBwdWJsaWMgZ2V0RGVja3MoKTpJRGVja1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVja3M7XG4gICAgfVxuXG4gICAgcHVibGljIHNldERlY2tzKGRlY2tzOklEZWNrW10pOnZvaWQge1xuICAgICAgICB0aGlzLmRlY2tzID0gZGVja3M7XG4gICAgfVxufVxuXG5EYXRhU2VydmljZS4kaW5qZWN0ID0gWydMb2NhbFN0b3JhZ2VTZXJ2aWNlJ107XG4iLCJpbXBvcnQge0lGYWNhZGVTZXJ2aWNlfSBmcm9tICcuL0lGYWNhZGVTZXJ2aWNlJztcbmltcG9ydCB7SURhdGFTZXJ2aWNlfSBmcm9tICcuLi9EYXRhU2VydmljZS9JRGF0YVNlcnZpY2UnO1xuaW1wb3J0IHtJVUlTdGF0ZVNlcnZpY2V9IGZyb20gJy4uL1VJU3RhdGVTZXJ2aWNlL0lVSVN0YXRlU2VydmljZSc7XG5pbXBvcnQge0lEZWNrfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbW9kZWxzL0lEZWNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjYWRlU2VydmljZSBpbXBsZW1lbnRzIElGYWNhZGVTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOklEYXRhU2VydmljZTtcbiAgICBwcml2YXRlIHVpU3RhdGVTZXJ2aWNlOklVSVN0YXRlU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGFTZXJ2aWNlOklEYXRhU2VydmljZSwgdWlTdGF0ZVNlcnZpY2U6SVVJU3RhdGVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2UgPSBkYXRhU2VydmljZTtcbiAgICAgICAgdGhpcy51aVN0YXRlU2VydmljZSA9IHVpU3RhdGVTZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREZWNrcygpOklEZWNrW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU2VydmljZS5nZXREZWNrcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVOZXdEZWNrKG5hbWU6c3RyaW5nKTp2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRhU2VydmljZS5jcmVhdGVOZXdEZWNrKG5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGVEZWNrKGRlY2s6SURlY2spOnZvaWQge1xuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmRlbGV0ZURlY2soZGVjayk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFNob3dOZXdEZWNrRm9ybShpc1Nob3duOmJvb2xlYW4pOnZvaWQge1xuICAgICAgICB0aGlzLnVpU3RhdGVTZXJ2aWNlLnNldFNob3dOZXdEZWNrRm9ybShpc1Nob3duKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2hvd05ld0RlY2tGb3JtKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVpU3RhdGVTZXJ2aWNlLmdldFNob3dOZXdEZWNrRm9ybSgpO1xuICAgIH1cblxufVxuXG5GYWNhZGVTZXJ2aWNlLiRpbmplY3QgPSBbJ0RhdGFTZXJ2aWNlJywgJ1VJU3RhdGVTZXJ2aWNlJ107XG4iLCJpbXBvcnQge0lVSVN0YXRlU2VydmljZX0gZnJvbSAnLi9JVUlTdGF0ZVNlcnZpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVN0YXRlU2VydmljZSBpbXBsZW1lbnRzIElVSVN0YXRlU2VydmljZSB7XG4gICAgcHJpdmF0ZSB1aVN0YXRlTW9kZWw6VUlTdGF0ZU1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudWlTdGF0ZU1vZGVsID0gbmV3IFVJU3RhdGVNb2RlbCgpO1xuXG4gICAgICAgIC8vIGluaXQgZGF0YSBtb2RlbFxuICAgICAgICB0aGlzLnVpU3RhdGVNb2RlbC5zZXROZXdEZWNrRm9ybVNob3duKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U2hvd05ld0RlY2tGb3JtKGlzU2hvd246Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIHRoaXMudWlTdGF0ZU1vZGVsLnNldE5ld0RlY2tGb3JtU2hvd24oaXNTaG93bik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNob3dOZXdEZWNrRm9ybSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy51aVN0YXRlTW9kZWwuZ2V0TmV3RGVja0Zvcm1TaG93bigpO1xuICAgIH1cbn1cblxuY2xhc3MgVUlTdGF0ZU1vZGVsIHtcbiAgICBwcml2YXRlIG5ld0RlY2tGb3JtU2hvd246Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXROZXdEZWNrRm9ybVNob3duKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLm5ld0RlY2tGb3JtU2hvd247XG4gICAgfVxuXG4gICAgcHVibGljIHNldE5ld0RlY2tGb3JtU2hvd24oaXNTaG93bjpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgdGhpcy5uZXdEZWNrRm9ybVNob3duID0gaXNTaG93bjtcbiAgICB9XG59XG4iLCIvLyBpbXBvcnQgZGlyZWN0aXZlc1xuaW1wb3J0IEZhY2FkZVNlcnZpY2UgZnJvbSAnLi9GYWNhZGVTZXJ2aWNlL0ZhY2FkZVNlcnZpY2UnO1xuaW1wb3J0IERhdGFTZXJ2aWNlIGZyb20gJy4vRGF0YVNlcnZpY2UvRGF0YVNlcnZpY2UnO1xuaW1wb3J0IFVJU3RhdGVTZXJ2aWNlIGZyb20gJy4vVUlTdGF0ZVNlcnZpY2UvVUlTdGF0ZVNlcnZpY2UnO1xuXG4vLyByZWdpc3RlciBkaXJlY3RpdmVzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWdpc3RlclNlcnZpY2VzKGFwcE5hbWU6c3RyaW5nKTp2b2lkIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZShhcHBOYW1lKVxuICAgICAgICAuc2VydmljZSgnRGF0YVNlcnZpY2UnLCBEYXRhU2VydmljZSlcbiAgICAgICAgLnNlcnZpY2UoJ1VJU3RhdGVTZXJ2aWNlJywgVUlTdGF0ZVNlcnZpY2UpXG4gICAgICAgIC5zZXJ2aWNlKCdGYWNhZGVTZXJ2aWNlJywgRmFjYWRlU2VydmljZSk7XG59XG4iXX0=
