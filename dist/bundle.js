/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bridge/index.ts":
/*!*****************************!*\
  !*** ./src/bridge/index.ts ***!
  \*****************************/
/***/ (function() {

/*************** 기능 계층 ***************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(vertax) {
        this.vertax = vertax;
    }
    Shape.prototype.setVertax = function () {
        return "\uAF2D\uC9D3\uC810 \uAC1C\uC218\uAC00 ".concat(this.vertax, "\uAC1C\uC778 \uB3C4\uD615\uC774 \uC0DD\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
    };
    Shape.prototype.getVertax = function () {
        return this.vertax;
    };
    Shape.prototype.produceShape = function (color) {
        color.vertax(this);
    };
    return Shape;
}());
/* 추가 기능 */
var configShape = /** @class */ (function (_super) {
    __extends(configShape, _super);
    function configShape(vertax) {
        return _super.call(this, vertax) || this;
    }
    configShape.prototype.getConfigShape = function () {
        var result = "꼭짓점이 3개이상이므로 도형이 맞습니다.";
        var v = this.getVertax();
        if (v < 3) {
            result = "꼭짓점이 2개이하이므로 도형이 아닙니다.";
        }
        return result;
    };
    return configShape;
}(Shape));
var Red = /** @class */ (function () {
    function Red() {
    }
    Red.prototype.vertax = function (shape) {
        console.log("".concat(shape.setVertax(), " \uC774 \uB3C4\uD615\uC758 \uC0C9\uAE54\uC740 \uBE68\uAC15\uC785\uB2C8\uB2E4."));
    };
    return Red;
}());
var Blue = /** @class */ (function () {
    function Blue() {
    }
    Blue.prototype.vertax = function (shape) {
        console.log("".concat(shape.setVertax(), " \uC774 \uB3C4\uD615\uC758 \uC0C9\uAE54\uC740 \uD30C\uB791\uC785\uB2C8\uB2E4."));
    };
    return Blue;
}());
/*************** 클라이언트 ****************/
// const triangle = new Shape(3);
var triangle = new configShape(3);
var umm = new configShape(2);
var redColor = new Red();
var blueColor = new Blue();
triangle.produceShape(redColor);
console.log("\uACB0\uACFC\uC801\uC73C\uB85C ".concat(triangle.getConfigShape()));
umm.produceShape(blueColor);
console.log("\uACB0\uACFC\uC801\uC73C\uB85C ".concat(umm.getConfigShape()));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/bridge/index.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDQUF1Qzs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QztJQUNFLGVBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUN0Qyx5QkFBUyxHQUFUO1FBQ0UsT0FBTyxnREFBVyxJQUFJLENBQUMsTUFBTSxnRkFBaUIsQ0FBQztJQUNqRCxDQUFDO0lBRUQseUJBQVMsR0FBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsNEJBQVksR0FBWixVQUFhLEtBQVk7UUFDdkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0gsWUFBQztBQUFELENBQUM7QUFFRCxXQUFXO0FBQ1g7SUFBMEIsK0JBQUs7SUFDN0IscUJBQVksTUFBYztlQUN4QixrQkFBTSxNQUFNLENBQUM7SUFDZixDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUNFLElBQUksTUFBTSxHQUFHLHdCQUF3QixDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDVCxNQUFNLEdBQUcsd0JBQXdCLENBQUM7U0FDbkM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLENBZnlCLEtBQUssR0FlOUI7QUFRRDtJQUFBO0lBSUEsQ0FBQztJQUhDLG9CQUFNLEdBQU4sVUFBTyxLQUFZO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBRyxLQUFLLENBQUMsU0FBUyxFQUFFLGtGQUFtQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNILFVBQUM7QUFBRCxDQUFDO0FBRUQ7SUFBQTtJQUlBLENBQUM7SUFIQyxxQkFBTSxHQUFOLFVBQU8sS0FBWTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxrRkFBbUIsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQztBQUVELHdDQUF3QztBQUN4QyxpQ0FBaUM7QUFDakMsSUFBTSxRQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFL0IsSUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUMzQixJQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBRTdCLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBUyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUUsQ0FBQyxDQUFDO0FBRWxELEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBUyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUUsQ0FBQyxDQUFDOzs7Ozs7OztVRWpFN0M7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dvZi8uL3NyYy9icmlkZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ29mL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZ29mL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9nb2Yvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKiog6riw64qlIOqzhOy4tSAqKioqKioqKioqKioqKiovXG5cbmNsYXNzIFNoYXBlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2ZXJ0YXg6IG51bWJlcikge31cbiAgc2V0VmVydGF4KCkge1xuICAgIHJldHVybiBg6ryt7KeT7KCQIOqwnOyImOqwgCAke3RoaXMudmVydGF4feqwnOyduCDrj4TtmJXsnbQg7IOd7ISx65CY7JeI7Iq164uI64ukLmA7XG4gIH1cblxuICBnZXRWZXJ0YXgoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGF4O1xuICB9XG5cbiAgcHJvZHVjZVNoYXBlKGNvbG9yOiBDb2xvcik6IHZvaWQge1xuICAgIGNvbG9yLnZlcnRheCh0aGlzKTtcbiAgfVxufVxuXG4vKiDstpTqsIAg6riw64qlICovXG5jbGFzcyBjb25maWdTaGFwZSBleHRlbmRzIFNoYXBlIHtcbiAgY29uc3RydWN0b3IodmVydGF4OiBudW1iZXIpIHtcbiAgICBzdXBlcih2ZXJ0YXgpO1xuICB9XG5cbiAgZ2V0Q29uZmlnU2hhcGUoKTogc3RyaW5nIHtcbiAgICBsZXQgcmVzdWx0ID0gXCLqvK3sp5PsoJDsnbQgM+qwnOydtOyDgeydtOuvgOuhnCDrj4TtmJXsnbQg66ee7Iq164uI64ukLlwiO1xuICAgIGxldCB2ID0gdGhpcy5nZXRWZXJ0YXgoKTtcblxuICAgIGlmICh2IDwgMykge1xuICAgICAgcmVzdWx0ID0gXCLqvK3sp5PsoJDsnbQgMuqwnOydtO2VmOydtOuvgOuhnCDrj4TtmJXsnbQg7JWE64uZ64uI64ukLlwiO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuLyoqKioqKioqKioqKioqKiDqtaztmIQg6rOE7Li1ICoqKioqKioqKioqKioqKi9cblxuaW50ZXJmYWNlIENvbG9yIHtcbiAgdmVydGF4KHNoYXBlOiBTaGFwZSk6IHZvaWQ7XG59XG5cbmNsYXNzIFJlZCBpbXBsZW1lbnRzIENvbG9yIHtcbiAgdmVydGF4KHNoYXBlOiBTaGFwZSk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGAke3NoYXBlLnNldFZlcnRheCgpfSDsnbQg64+E7ZiV7J2YIOyDieq5lOydgCDruajqsJXsnoXri4jri6QuYCk7XG4gIH1cbn1cblxuY2xhc3MgQmx1ZSBpbXBsZW1lbnRzIENvbG9yIHtcbiAgdmVydGF4KHNoYXBlOiBTaGFwZSk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGAke3NoYXBlLnNldFZlcnRheCgpfSDsnbQg64+E7ZiV7J2YIOyDieq5lOydgCDtjIzrnpHsnoXri4jri6QuYCk7XG4gIH1cbn1cblxuLyoqKioqKioqKioqKioqKiDtgbTrnbzsnbTslrjtirggKioqKioqKioqKioqKioqKi9cbi8vIGNvbnN0IHRyaWFuZ2xlID0gbmV3IFNoYXBlKDMpO1xuY29uc3QgdHJpYW5nbGUgPSBuZXcgY29uZmlnU2hhcGUoMyk7XG5jb25zdCB1bW0gPSBuZXcgY29uZmlnU2hhcGUoMik7XG5cbmNvbnN0IHJlZENvbG9yID0gbmV3IFJlZCgpO1xuY29uc3QgYmx1ZUNvbG9yID0gbmV3IEJsdWUoKTtcblxudHJpYW5nbGUucHJvZHVjZVNoYXBlKHJlZENvbG9yKTtcbmNvbnNvbGUubG9nKGDqsrDqs7zsoIHsnLzroZwgJHt0cmlhbmdsZS5nZXRDb25maWdTaGFwZSgpfWApO1xuXG51bW0ucHJvZHVjZVNoYXBlKGJsdWVDb2xvcik7XG5jb25zb2xlLmxvZyhg6rKw6rO87KCB7Jy866GcICR7dW1tLmdldENvbmZpZ1NoYXBlKCl9YCk7XG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2JyaWRnZS9pbmRleC50c1wiXSgpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9