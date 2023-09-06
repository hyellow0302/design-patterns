/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/decorator/index.ts":
/*!********************************!*\
  !*** ./src/decorator/index.ts ***!
  \********************************/
/***/ (function() {

/***** Component *******/
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
/***** ConcreteComponent *******/
var ConcreteComponent = /** @class */ (function () {
    function ConcreteComponent() {
    }
    ConcreteComponent.prototype.deco = function () {
        return "검은콩으로 눈코입을 붙여줍니다.";
    };
    return ConcreteComponent;
}());
/****** Decorator ********/
var Decorator = /** @class */ (function () {
    function Decorator(snowmanComponent) {
        this.snowmanComponent = snowmanComponent;
    }
    Decorator.prototype.deco = function () {
        return this.snowmanComponent.deco();
    };
    return Decorator;
}());
/* 꾸며줄 재료들 */
var Muffler = /** @class */ (function (_super) {
    __extends(Muffler, _super);
    function Muffler(snowmanComponent) {
        return _super.call(this, snowmanComponent) || this;
    }
    Muffler.prototype.deco = function () {
        return _super.prototype.deco.call(this) + "목도리도 해줍니다.";
    };
    return Muffler;
}(Decorator));
var Cap = /** @class */ (function (_super) {
    __extends(Cap, _super);
    function Cap(snowmanComponent) {
        return _super.call(this, snowmanComponent) || this;
    }
    Cap.prototype.deco = function () {
        return _super.prototype.deco.call(this) + "모자도 해줍니다.";
    };
    return Cap;
}(Decorator));
/************* 클라이언트 ************/
var onlyBeen = new ConcreteComponent();
console.log("\uB208\uB9CC \uC788\uB294 \uB208\uC0AC\uB78C: ".concat(onlyBeen.deco()));
var allDeco = new Cap(new Muffler(new ConcreteComponent()));
console.log("\uB2E4 \uAC16\uCD98 \uB208\uC0AC\uB78C: ".concat(allDeco.deco()));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/decorator/index.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHlCQUF5Qjs7Ozs7Ozs7Ozs7Ozs7OztBQU16QixpQ0FBaUM7QUFFakM7SUFBQTtJQUlBLENBQUM7SUFIQyxnQ0FBSSxHQUFKO1FBQ0UsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDO0FBRUQsMkJBQTJCO0FBQzNCO0lBR0UsbUJBQVksZ0JBQW9DO1FBQzlDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsd0JBQUksR0FBSjtRQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUM7QUFFRCxhQUFhO0FBQ2I7SUFBc0IsMkJBQVM7SUFDN0IsaUJBQVksZ0JBQW9DO2VBQzlDLGtCQUFNLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7SUFFRCxzQkFBSSxHQUFKO1FBQ0UsT0FBTyxpQkFBTSxJQUFJLFdBQUUsR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLENBUnFCLFNBQVMsR0FROUI7QUFFRDtJQUFrQix1QkFBUztJQUN6QixhQUFZLGdCQUFvQztlQUM5QyxrQkFBTSxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDO0lBRUQsa0JBQUksR0FBSjtRQUNFLE9BQU8saUJBQU0sSUFBSSxXQUFFLEdBQUcsV0FBVyxDQUFDO0lBQ3BDLENBQUM7SUFDSCxVQUFDO0FBQUQsQ0FBQyxDQVJpQixTQUFTLEdBUTFCO0FBRUQsa0NBQWtDO0FBRWxDLElBQU0sUUFBUSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztBQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdEQUFjLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBRSxDQUFDLENBQUM7QUFFN0MsSUFBTSxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLGtEQUFhLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBRSxDQUFDLENBQUM7Ozs7Ozs7O1VFckQzQztVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29mLy4vc3JjL2RlY29yYXRvci9pbmRleC50cyIsIndlYnBhY2s6Ly9nb2Yvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9nb2Yvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2dvZi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqIENvbXBvbmVudCAqKioqKioqL1xuXG5pbnRlcmZhY2UgRGVjb3JhdG9yQ29tcG9uZW50IHtcbiAgZGVjbygpOiBzdHJpbmc7IC8vIOyYt+ydhCDsnoXtmIDso7zsnpBcbn1cblxuLyoqKioqIENvbmNyZXRlQ29tcG9uZW50ICoqKioqKiovXG5cbmNsYXNzIENvbmNyZXRlQ29tcG9uZW50IGltcGxlbWVudHMgRGVjb3JhdG9yQ29tcG9uZW50IHtcbiAgZGVjbygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIuqygOydgOy9qeycvOuhnCDriIjsvZTsnoXsnYQg67aZ7Jes7KSN64uI64ukLlwiO1xuICB9XG59XG5cbi8qKioqKiogRGVjb3JhdG9yICoqKioqKioqL1xuYWJzdHJhY3QgY2xhc3MgRGVjb3JhdG9yIGltcGxlbWVudHMgRGVjb3JhdG9yQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBzbm93bWFuQ29tcG9uZW50OiBEZWNvcmF0b3JDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3Ioc25vd21hbkNvbXBvbmVudDogRGVjb3JhdG9yQ29tcG9uZW50KSB7XG4gICAgdGhpcy5zbm93bWFuQ29tcG9uZW50ID0gc25vd21hbkNvbXBvbmVudDtcbiAgfVxuICBkZWNvKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc25vd21hbkNvbXBvbmVudC5kZWNvKCk7XG4gIH1cbn1cblxuLyog6r6466mw7KSEIOyerOujjOuTpCAqL1xuY2xhc3MgTXVmZmxlciBleHRlbmRzIERlY29yYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNub3dtYW5Db21wb25lbnQ6IERlY29yYXRvckNvbXBvbmVudCkge1xuICAgIHN1cGVyKHNub3dtYW5Db21wb25lbnQpO1xuICB9XG5cbiAgZGVjbygpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdXBlci5kZWNvKCkgKyBcIuuqqeuPhOumrOuPhCDtlbTspI3ri4jri6QuXCI7XG4gIH1cbn1cblxuY2xhc3MgQ2FwIGV4dGVuZHMgRGVjb3JhdG9yIHtcbiAgY29uc3RydWN0b3Ioc25vd21hbkNvbXBvbmVudDogRGVjb3JhdG9yQ29tcG9uZW50KSB7XG4gICAgc3VwZXIoc25vd21hbkNvbXBvbmVudCk7XG4gIH1cblxuICBkZWNvKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN1cGVyLmRlY28oKSArIFwi66qo7J6Q64+EIO2VtOykjeuLiOuLpC5cIjtcbiAgfVxufVxuXG4vKioqKioqKioqKioqKiDtgbTrnbzsnbTslrjtirggKioqKioqKioqKioqL1xuXG5jb25zdCBvbmx5QmVlbiA9IG5ldyBDb25jcmV0ZUNvbXBvbmVudCgpO1xuY29uc29sZS5sb2coYOuIiOunjCDsnojripQg64iI7IKs656MOiAke29ubHlCZWVuLmRlY28oKX1gKTtcblxuY29uc3QgYWxsRGVjbyA9IG5ldyBDYXAobmV3IE11ZmZsZXIobmV3IENvbmNyZXRlQ29tcG9uZW50KCkpKTtcbmNvbnNvbGUubG9nKGDri6Qg6rCW7LaYIOuIiOyCrOuejDogJHthbGxEZWNvLmRlY28oKX1gKTtcbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvZGVjb3JhdG9yL2luZGV4LnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=