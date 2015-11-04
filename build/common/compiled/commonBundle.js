(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var coFooterTemplate_html_1 = require('./coFooterTemplate.html');
function coFooter() {
    'use strict';
    return {
        scope: {},
        template: coFooterTemplate_html_1.html
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = coFooter;


},{"./coFooterTemplate.html":2}],2:[function(require,module,exports){
exports.html = "\n    <footer style=\"text-align: center; padding: 20px;\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <p>\n                    Heroes of Warcraft is a trademark and Hearthstone is a trademark or registered trademark of\n                    Blizzard Entertainment, Inc., in the U.S. and/or other countries.\n                    </p>\n                    <p>\n                        The cards were taken from <a href=\"http://www.hearthcards.net/gallery/\" target=\"_blank\">HearthCards</a>.\n                    </p>\n                </div>\n            </div>\n        </div>\n\n    </footer>\n";


},{}],3:[function(require,module,exports){
// import directives
var coFooter_1 = require('./coFooter/coFooter');
// register directives
function registerDirectives(appName) {
    'use strict';
    angular.module(appName)
        .directive('coFooter', coFooter_1.default);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerDirectives;


},{"./coFooter/coFooter":1}],4:[function(require,module,exports){
(function (global){
///<reference path="../typings/tsd.d.ts"/>
var angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);
var commonServices_1 = require('./services/commonServices');
var commonDirectives_1 = require('./components/commonDirectives');
exports.appName = 'common';
angular.module(exports.appName, []);
commonServices_1.default(exports.appName);
commonDirectives_1.default(exports.appName);


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./components/commonDirectives":3,"./services/commonServices":7}],5:[function(require,module,exports){
/**
 * Very naive implementation of a local storage service.
 */
var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.saveSettings = function (key, value) {
        var stringData = JSON.stringify(value);
        localStorage.setItem(key, stringData);
    };
    LocalStorageService.prototype.loadSettings = function (key) {
        var objectData = localStorage.getItem(key);
        if (objectData) {
            return JSON.parse(objectData);
        }
        return null;
    };
    LocalStorageService.prototype.clearSettings = function () {
        localStorage.clear();
    };
    return LocalStorageService;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LocalStorageService;


},{}],6:[function(require,module,exports){
var PageValueExtractorService = (function () {
    function PageValueExtractorService() {
    }
    PageValueExtractorService.prototype.getPageValue = function () {
        var pageValueElement = document.getElementById('pageValue');
        var pageValueJson = JSON.parse(pageValueElement.innerHTML);
        var pageValue = pageValueJson;
        return pageValue;
    };
    return PageValueExtractorService;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageValueExtractorService;


},{}],7:[function(require,module,exports){
// import directives
var PageValueExtractorService_1 = require('./PageValueExtractorService/PageValueExtractorService');
var LocalStorageService_1 = require('./LocalStorageService/LocalStorageService');
// register directives
function registerServices(appName) {
    'use strict';
    angular.module(appName)
        .service('PageValueExtractorService', PageValueExtractorService_1.default)
        .service('LocalStorageService', LocalStorageService_1.default);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerServices;


},{"./LocalStorageService/LocalStorageService":5,"./PageValueExtractorService/PageValueExtractorService":6}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvc291cmNlL2NvbXBvbmVudHMvY29Gb290ZXIvY29Gb290ZXIudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29Gb290ZXIvY29Gb290ZXJUZW1wbGF0ZS5odG1sLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvbW1vbkRpcmVjdGl2ZXMudHMiLCIvc291cmNlL21haW4udHMiLCIvc291cmNlL3NlcnZpY2VzL0xvY2FsU3RvcmFnZVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZS50cyIsIi9zb3VyY2Uvc2VydmljZXMvUGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZS9QYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlLnRzIiwiL3NvdXJjZS9zZXJ2aWNlcy9jb21tb25TZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLHNDQUFtQix5QkFBeUIsQ0FBQyxDQUFBO0FBRTdDO0lBQ0ksWUFBWSxDQUFDO0lBRWIsTUFBTSxDQUFDO1FBQ0gsS0FBSyxFQUFFLEVBQUU7UUFDVCxRQUFRLEVBQUUsNEJBQUk7S0FDakIsQ0FBQztBQUNOLENBQUM7QUFFRDtrQkFBZSxRQUFRLENBQUM7Ozs7QUNYWCxZQUFJLEdBQVUsK3FCQWlCMUIsQ0FBQzs7OztBQ2pCRixvQkFBb0I7QUFDcEIseUJBQXFCLHFCQUFxQixDQUFDLENBQUE7QUFFM0Msc0JBQXNCO0FBQ3RCLDRCQUEyQyxPQUFjO0lBQ3JELFlBQVksQ0FBQztJQUViLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ2xCLFNBQVMsQ0FBQyxVQUFVLEVBQUUsa0JBQVEsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFMRDtvQ0FLQyxDQUFBOzs7OztBQ1RELDBDQUEwQztBQUUxQyxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUNuQywrQkFBNkIsMkJBQTJCLENBQUMsQ0FBQTtBQUN6RCxpQ0FBK0IsK0JBQStCLENBQUMsQ0FBQTtBQUVsRCxlQUFPLEdBQVUsUUFBUSxDQUFDO0FBRXZDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzVCLHdCQUFnQixDQUFDLGVBQU8sQ0FBQyxDQUFDO0FBQzFCLDBCQUFrQixDQUFDLGVBQU8sQ0FBQyxDQUFDOzs7Ozs7QUNSNUI7O0dBRUc7QUFDSDtJQUFBO0lBa0JBLENBQUM7SUFqQlUsMENBQVksR0FBbkIsVUFBdUIsR0FBVSxFQUFFLEtBQU87UUFDdEMsSUFBSSxVQUFVLEdBQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sMENBQVksR0FBbkIsVUFBdUIsR0FBVTtRQUM3QixJQUFJLFVBQVUsR0FBVSxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQU0sQ0FBQztRQUN2QyxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sMkNBQWEsR0FBcEI7UUFDSSxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQWxCRDtxQ0FrQkMsQ0FBQTs7OztBQ3RCRDtJQUFBO0lBU0EsQ0FBQztJQVJVLGdEQUFZLEdBQW5CO1FBQ0ksSUFBSSxnQkFBZ0IsR0FBZSxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hFLElBQUksYUFBYSxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEUsSUFBSSxTQUFTLEdBQUssYUFBa0IsQ0FBQztRQUVyQyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDTCxnQ0FBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVEQ7MkNBU0MsQ0FBQTs7OztBQ1ZELG9CQUFvQjtBQUNwQiwwQ0FBc0MsdURBQXVELENBQUMsQ0FBQTtBQUM5RixvQ0FBZ0MsMkNBQTJDLENBQUMsQ0FBQTtBQUU1RSxzQkFBc0I7QUFDdEIsMEJBQXlDLE9BQWM7SUFDbkQsWUFBWSxDQUFDO0lBRWIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDbEIsT0FBTyxDQUFDLDJCQUEyQixFQUFFLG1DQUF5QixDQUFDO1NBQy9ELE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSw2QkFBbUIsQ0FBQyxDQUFDO0FBQzdELENBQUM7QUFORDtrQ0FNQyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7aHRtbH0gZnJvbSAnLi9jb0Zvb3RlclRlbXBsYXRlLmh0bWwnO1xuXG5mdW5jdGlvbiBjb0Zvb3RlcigpOmFuZ3VsYXIuSURpcmVjdGl2ZSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICB0ZW1wbGF0ZTogaHRtbFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvRm9vdGVyO1xuIiwiZXhwb3J0IGNvbnN0IGh0bWw6c3RyaW5nID0gYFxuICAgIDxmb290ZXIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDIwcHg7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBIZXJvZXMgb2YgV2FyY3JhZnQgaXMgYSB0cmFkZW1hcmsgYW5kIEhlYXJ0aHN0b25lIGlzIGEgdHJhZGVtYXJrIG9yIHJlZ2lzdGVyZWQgdHJhZGVtYXJrIG9mXG4gICAgICAgICAgICAgICAgICAgIEJsaXp6YXJkIEVudGVydGFpbm1lbnQsIEluYy4sIGluIHRoZSBVLlMuIGFuZC9vciBvdGhlciBjb3VudHJpZXMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgY2FyZHMgd2VyZSB0YWtlbiBmcm9tIDxhIGhyZWY9XCJodHRwOi8vd3d3LmhlYXJ0aGNhcmRzLm5ldC9nYWxsZXJ5L1wiIHRhcmdldD1cIl9ibGFua1wiPkhlYXJ0aENhcmRzPC9hPi5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9mb290ZXI+XG5gO1xuIiwiLy8gaW1wb3J0IGRpcmVjdGl2ZXNcbmltcG9ydCBjb0Zvb3RlciBmcm9tICcuL2NvRm9vdGVyL2NvRm9vdGVyJztcblxuLy8gcmVnaXN0ZXIgZGlyZWN0aXZlc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVnaXN0ZXJEaXJlY3RpdmVzKGFwcE5hbWU6c3RyaW5nKTp2b2lkIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhbmd1bGFyLm1vZHVsZShhcHBOYW1lKVxuICAgICAgICAuZGlyZWN0aXZlKCdjb0Zvb3RlcicsIGNvRm9vdGVyKTtcbn1cbiIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIi8+XG5cbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgcmVnaXN0ZXJTZXJ2aWNlcyBmcm9tICcuL3NlcnZpY2VzL2NvbW1vblNlcnZpY2VzJztcbmltcG9ydCByZWdpc3RlckRpcmVjdGl2ZXMgZnJvbSAnLi9jb21wb25lbnRzL2NvbW1vbkRpcmVjdGl2ZXMnO1xuXG5leHBvcnQgY29uc3QgYXBwTmFtZTpzdHJpbmcgPSAnY29tbW9uJztcblxuYW5ndWxhci5tb2R1bGUoYXBwTmFtZSwgW10pO1xucmVnaXN0ZXJTZXJ2aWNlcyhhcHBOYW1lKTtcbnJlZ2lzdGVyRGlyZWN0aXZlcyhhcHBOYW1lKTtcblxuIiwiaW1wb3J0IHtJTG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSAnLi9JTG9jYWxTdG9yYWdlU2VydmljZSc7XG5cbi8qKlxuICogVmVyeSBuYWl2ZSBpbXBsZW1lbnRhdGlvbiBvZiBhIGxvY2FsIHN0b3JhZ2Ugc2VydmljZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxTdG9yYWdlU2VydmljZSBpbXBsZW1lbnRzIElMb2NhbFN0b3JhZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgc2F2ZVNldHRpbmdzPFQ+KGtleTpzdHJpbmcsIHZhbHVlOlQpOnZvaWQge1xuICAgICAgICBsZXQgc3RyaW5nRGF0YTpzdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgc3RyaW5nRGF0YSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRTZXR0aW5nczxUPihrZXk6c3RyaW5nKTpUIHtcbiAgICAgICAgbGV0IG9iamVjdERhdGE6c3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgaWYgKG9iamVjdERhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKG9iamVjdERhdGEpIGFzIFQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJTZXR0aW5ncygpOnZvaWQge1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0lQYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlfSBmcm9tICcuL0lQYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VWYWx1ZUV4dHJhY3RvclNlcnZpY2UgaW1wbGVtZW50cyBJUGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZSB7XG4gICAgcHVibGljIGdldFBhZ2VWYWx1ZTxUPigpOlQge1xuICAgICAgICBsZXQgcGFnZVZhbHVlRWxlbWVudDpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlVmFsdWUnKTtcbiAgICAgICAgbGV0IHBhZ2VWYWx1ZUpzb246T2JqZWN0ID0gSlNPTi5wYXJzZShwYWdlVmFsdWVFbGVtZW50LmlubmVySFRNTCk7XG5cbiAgICAgICAgbGV0IHBhZ2VWYWx1ZTpUID0gcGFnZVZhbHVlSnNvbiBhcyBUO1xuXG4gICAgICAgIHJldHVybiBwYWdlVmFsdWU7XG4gICAgfVxufVxuIiwiLy8gaW1wb3J0IGRpcmVjdGl2ZXNcbmltcG9ydCBQYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlIGZyb20gJy4vUGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZS9QYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlJztcbmltcG9ydCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGZyb20gJy4vTG9jYWxTdG9yYWdlU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlJztcblxuLy8gcmVnaXN0ZXIgZGlyZWN0aXZlc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVnaXN0ZXJTZXJ2aWNlcyhhcHBOYW1lOnN0cmluZyk6dm9pZCB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoYXBwTmFtZSlcbiAgICAgICAgLnNlcnZpY2UoJ1BhZ2VWYWx1ZUV4dHJhY3RvclNlcnZpY2UnLCBQYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlKVxuICAgICAgICAuc2VydmljZSgnTG9jYWxTdG9yYWdlU2VydmljZScsIExvY2FsU3RvcmFnZVNlcnZpY2UpO1xufVxuIl19
