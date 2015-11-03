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
///<reference path="../../typings/tsd.d.ts"/>
var angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);
var commonServices_1 = require('./services/commonServices');
var commonDirectives_1 = require('./components/commonDirectives');
exports.appName = 'common';
angular.module(exports.appName, []);
commonServices_1.default(exports.appName);
commonDirectives_1.default(exports.appName);


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./components/commonDirectives":3,"./services/commonServices":6}],5:[function(require,module,exports){
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


},{}],6:[function(require,module,exports){
// import directives
var PageValueExtractorService_1 = require('./PageValueExtractorService/PageValueExtractorService');
// register directives
function registerServices(appName) {
    'use strict';
    angular.module(appName)
        .service('PageValueExtractorService', PageValueExtractorService_1.default);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerServices;


},{"./PageValueExtractorService/PageValueExtractorService":5}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvc291cmNlL2NvbXBvbmVudHMvY29Gb290ZXIvY29Gb290ZXIudHMiLCIvc291cmNlL2NvbXBvbmVudHMvY29Gb290ZXIvY29Gb290ZXJUZW1wbGF0ZS5odG1sLnRzIiwiL3NvdXJjZS9jb21wb25lbnRzL2NvbW1vbkRpcmVjdGl2ZXMudHMiLCIvc291cmNlL21haW4udHMiLCIvc291cmNlL3NlcnZpY2VzL1BhZ2VWYWx1ZUV4dHJhY3RvclNlcnZpY2UvUGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZS50cyIsIi9zb3VyY2Uvc2VydmljZXMvY29tbW9uU2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxzQ0FBbUIseUJBQXlCLENBQUMsQ0FBQTtBQUU3QztJQUNJLFlBQVksQ0FBQztJQUViLE1BQU0sQ0FBQztRQUNILEtBQUssRUFBRSxFQUFFO1FBQ1QsUUFBUSxFQUFFLDRCQUFJO0tBQ2pCLENBQUM7QUFDTixDQUFDO0FBRUQ7a0JBQWUsUUFBUSxDQUFDOzs7O0FDWFgsWUFBSSxHQUFVLCtxQkFpQjFCLENBQUM7Ozs7QUNqQkYsb0JBQW9CO0FBQ3BCLHlCQUFxQixxQkFBcUIsQ0FBQyxDQUFBO0FBRTNDLHNCQUFzQjtBQUN0Qiw0QkFBMkMsT0FBYztJQUNyRCxZQUFZLENBQUM7SUFFYixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUNsQixTQUFTLENBQUMsVUFBVSxFQUFFLGtCQUFRLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBTEQ7b0NBS0MsQ0FBQTs7Ozs7QUNURCw2Q0FBNkM7QUFFN0MsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFDbkMsK0JBQTZCLDJCQUEyQixDQUFDLENBQUE7QUFDekQsaUNBQStCLCtCQUErQixDQUFDLENBQUE7QUFFbEQsZUFBTyxHQUFVLFFBQVEsQ0FBQztBQUV2QyxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM1Qix3QkFBZ0IsQ0FBQyxlQUFPLENBQUMsQ0FBQztBQUMxQiwwQkFBa0IsQ0FBQyxlQUFPLENBQUMsQ0FBQzs7Ozs7O0FDVDVCO0lBQUE7SUFTQSxDQUFDO0lBUlUsZ0RBQVksR0FBbkI7UUFDSSxJQUFJLGdCQUFnQixHQUFlLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEUsSUFBSSxhQUFhLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsRSxJQUFJLFNBQVMsR0FBSyxhQUFrQixDQUFDO1FBRXJDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUNMLGdDQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFURDsyQ0FTQyxDQUFBOzs7O0FDVkQsb0JBQW9CO0FBQ3BCLDBDQUFzQyx1REFBdUQsQ0FBQyxDQUFBO0FBRTlGLHNCQUFzQjtBQUN0QiwwQkFBeUMsT0FBYztJQUNuRCxZQUFZLENBQUM7SUFFYixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUNsQixPQUFPLENBQUMsMkJBQTJCLEVBQUUsbUNBQXlCLENBQUMsQ0FBQztBQUN6RSxDQUFDO0FBTEQ7a0NBS0MsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQge2h0bWx9IGZyb20gJy4vY29Gb290ZXJUZW1wbGF0ZS5odG1sJztcblxuZnVuY3Rpb24gY29Gb290ZXIoKTphbmd1bGFyLklEaXJlY3RpdmUge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgdGVtcGxhdGU6IGh0bWxcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb0Zvb3RlcjtcbiIsImV4cG9ydCBjb25zdCBodG1sOnN0cmluZyA9IGBcbiAgICA8Zm9vdGVyIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiAyMHB4O1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgSGVyb2VzIG9mIFdhcmNyYWZ0IGlzIGEgdHJhZGVtYXJrIGFuZCBIZWFydGhzdG9uZSBpcyBhIHRyYWRlbWFyayBvciByZWdpc3RlcmVkIHRyYWRlbWFyayBvZlxuICAgICAgICAgICAgICAgICAgICBCbGl6emFyZCBFbnRlcnRhaW5tZW50LCBJbmMuLCBpbiB0aGUgVS5TLiBhbmQvb3Igb3RoZXIgY291bnRyaWVzLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGNhcmRzIHdlcmUgdGFrZW4gZnJvbSA8YSBocmVmPVwiaHR0cDovL3d3dy5oZWFydGhjYXJkcy5uZXQvZ2FsbGVyeS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5IZWFydGhDYXJkczwvYT4uXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZm9vdGVyPlxuYDtcbiIsIi8vIGltcG9ydCBkaXJlY3RpdmVzXG5pbXBvcnQgY29Gb290ZXIgZnJvbSAnLi9jb0Zvb3Rlci9jb0Zvb3Rlcic7XG5cbi8vIHJlZ2lzdGVyIGRpcmVjdGl2ZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyRGlyZWN0aXZlcyhhcHBOYW1lOnN0cmluZyk6dm9pZCB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoYXBwTmFtZSlcbiAgICAgICAgLmRpcmVjdGl2ZSgnY29Gb290ZXInLCBjb0Zvb3Rlcik7XG59XG4iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIvPlxuXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHJlZ2lzdGVyU2VydmljZXMgZnJvbSAnLi9zZXJ2aWNlcy9jb21tb25TZXJ2aWNlcyc7XG5pbXBvcnQgcmVnaXN0ZXJEaXJlY3RpdmVzIGZyb20gJy4vY29tcG9uZW50cy9jb21tb25EaXJlY3RpdmVzJztcblxuZXhwb3J0IGNvbnN0IGFwcE5hbWU6c3RyaW5nID0gJ2NvbW1vbic7XG5cbmFuZ3VsYXIubW9kdWxlKGFwcE5hbWUsIFtdKTtcbnJlZ2lzdGVyU2VydmljZXMoYXBwTmFtZSk7XG5yZWdpc3RlckRpcmVjdGl2ZXMoYXBwTmFtZSk7XG4iLCJpbXBvcnQge0lQYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlfSBmcm9tICcuL0lQYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VWYWx1ZUV4dHJhY3RvclNlcnZpY2UgaW1wbGVtZW50cyBJUGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZSB7XG4gICAgcHVibGljIGdldFBhZ2VWYWx1ZTxUPigpOlQge1xuICAgICAgICBsZXQgcGFnZVZhbHVlRWxlbWVudDpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlVmFsdWUnKTtcbiAgICAgICAgbGV0IHBhZ2VWYWx1ZUpzb246T2JqZWN0ID0gSlNPTi5wYXJzZShwYWdlVmFsdWVFbGVtZW50LmlubmVySFRNTCk7XG5cbiAgICAgICAgbGV0IHBhZ2VWYWx1ZTpUID0gcGFnZVZhbHVlSnNvbiBhcyBUO1xuXG4gICAgICAgIHJldHVybiBwYWdlVmFsdWU7XG4gICAgfVxufVxuIiwiLy8gaW1wb3J0IGRpcmVjdGl2ZXNcbmltcG9ydCBQYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlIGZyb20gJy4vUGFnZVZhbHVlRXh0cmFjdG9yU2VydmljZS9QYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlJztcblxuLy8gcmVnaXN0ZXIgZGlyZWN0aXZlc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVnaXN0ZXJTZXJ2aWNlcyhhcHBOYW1lOnN0cmluZyk6dm9pZCB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoYXBwTmFtZSlcbiAgICAgICAgLnNlcnZpY2UoJ1BhZ2VWYWx1ZUV4dHJhY3RvclNlcnZpY2UnLCBQYWdlVmFsdWVFeHRyYWN0b3JTZXJ2aWNlKTtcbn1cbiJdfQ==
