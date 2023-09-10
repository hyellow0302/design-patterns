/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/flyweight/index.ts ***!
  \********************************/
/**************** FlyweightFactory *****************/
var BaseDoll = /** @class */ (function () {
    function BaseDoll(shape, color) {
        this.shape = shape;
        this.color = color;
    }
    return BaseDoll;
}());
var DollFactory = /** @class */ (function () {
    function DollFactory() {
    }
    DollFactory.getDoll = function (base) {
        // 캐시가 존재한다면 해당 캐시에서 폰트를 반환합니다.
        if (base in this.cache) {
            console.log("기존에 이미 존재하던 인형입니다. 제작 중 ..... ");
            return this.cache[base];
        }
        else {
            // 캐시가 존재하지 않는다면 캐시에 해당 값을 저장하고 반환합니다.
            var split = base.split(", ");
            var newBase = new BaseDoll(split[0], split[1]);
            this.cache[base] = newBase;
            console.log("새로 기획된 인형입니다. 제작 중 .....");
            console.log(this.cache);
            return newBase;
        }
    };
    // 캐시를 저장하는 곳: 자주 변하지 않는 Font 정보를 저장합니다.
    DollFactory.cache = {};
    return DollFactory;
}());
/**************** Flyweight *****************/
var Doll = /** @class */ (function () {
    function Doll(info, clothes) {
        this.info = info;
        this.clothes = clothes;
    }
    Doll.prototype.getClothe = function () {
        return console.log("".concat(this.info.color, "\uC744 \uAC00\uC9C4 ").concat(this.info.shape, "\uBAA8\uC591\uC778 \uC778\uD615\uC744 \uC81C\uC791\uD588\uC2B5\uB2C8\uB2E4. \uC774\uBC88 \uC2DC\uC98C\uC5D0\uB294 ").concat(this.clothes, " \uC637\uC744 \uC785\uB3C4\uB85D \uC81C\uC791\uD588\uC2B5\uB2C8\uB2E4. \n -----------------------------------------------------------"));
    };
    return Doll;
}());
/**************** Client *****************/
var basicDoll = new Doll(DollFactory.getDoll("곰돌이, 하얀색"), "산타");
basicDoll.getClothe();
var basicDoll2 = new Doll(DollFactory.getDoll("곰돌이, 하얀색"), "스포츠");
basicDoll2.getClothe();
var basicDoll3 = new Doll(DollFactory.getDoll("고양이, 파란색과 하얀색이 섞인색"), "타코야끼");
basicDoll3.getClothe();
var basicDoll4 = new Doll(DollFactory.getDoll("고양이, 파란색과 하얀색이 섞인색"), "빨간장갑");
basicDoll4.getClothe();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQXFEO0FBQ3JEO0lBSUUsa0JBQVksS0FBYSxFQUFFLEtBQWE7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDO0FBRUQ7SUFBQTtJQW9CQSxDQUFDO0lBaEJlLG1CQUFPLEdBQXJCLFVBQXNCLElBQVk7UUFDaEMsK0JBQStCO1FBQy9CLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjthQUFNO1lBQ0wsc0NBQXNDO1lBQ3RDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWpELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QixPQUFPLE9BQU8sQ0FBQztTQUNoQjtJQUNILENBQUM7SUFsQkQsd0NBQXdDO0lBQ3pCLGlCQUFLLEdBQWlDLEVBQUUsQ0FBQztJQWtCMUQsa0JBQUM7Q0FBQTtBQUVELDhDQUE4QztBQUU5QztJQUlFLGNBQVksSUFBYyxFQUFFLE9BQWU7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVELHdCQUFTLEdBQVQ7UUFDRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQ2hCLFVBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLGlDQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSywrSEFBMkIsSUFBSSxDQUFDLE9BQU8sMElBQWdGLENBQ2pLLENBQUM7SUFDSixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUM7QUFFRCwyQ0FBMkM7QUFDM0MsSUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNsRSxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7QUFFdEIsSUFBTSxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwRSxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7QUFFdkIsSUFBTSxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQ3pCLFdBQVcsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsRUFDekMsTUFBTSxDQUNQLENBQUM7QUFDRixVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7QUFFdkIsSUFBTSxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQ3pCLFdBQVcsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsRUFDekMsTUFBTSxDQUNQLENBQUM7QUFDRixVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb2YvLi9zcmMvZmx5d2VpZ2h0L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqIEZseXdlaWdodEZhY3RvcnkgKioqKioqKioqKioqKioqKiovXG5jbGFzcyBCYXNlRG9sbCB7XG4gIHB1YmxpYyBzaGFwZTogc3RyaW5nOyAvLyDrqqjslpEgLSDqs7Drj4TrpqzqsIAg6rGw7J2YIOqzoOyglVxuICBwdWJsaWMgY29sb3I6IHN0cmluZzsgLy8g7IOJIC0g7Z2w7IOJ7J20IOqxsOydmCDqs6DsoJVcblxuICBjb25zdHJ1Y3RvcihzaGFwZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5zaGFwZSA9IHNoYXBlO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgfVxufVxuXG5jbGFzcyBEb2xsRmFjdG9yeSB7XG4gIC8vIOy6kOyLnOulvCDsoIDsnqXtlZjripQg6rOzOiDsnpDso7wg67OA7ZWY7KeAIOyViuuKlCBGb250IOygleuztOulvCDsoIDsnqXtlanri4jri6QuXG4gIHByaXZhdGUgc3RhdGljIGNhY2hlOiB7IFtiYXNlOiBzdHJpbmddOiBCYXNlRG9sbCB9ID0ge307XG5cbiAgcHVibGljIHN0YXRpYyBnZXREb2xsKGJhc2U6IHN0cmluZyk6IEJhc2VEb2xsIHtcbiAgICAvLyDsupDsi5zqsIAg7KG07J6s7ZWc64uk66m0IO2VtOuLuSDsupDsi5zsl5DshJwg7Y+w7Yq466W8IOuwmO2ZmO2VqeuLiOuLpC5cbiAgICBpZiAoYmFzZSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIuq4sOyhtOyXkCDsnbTrr7gg7KG07J6s7ZWY642YIOyduO2YleyeheuLiOuLpC4g7KCc7J6RIOykkSAuLi4uLiBcIik7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZVtiYXNlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g7LqQ7Iuc6rCAIOyhtOyerO2VmOyngCDslYrripTri6TrqbQg7LqQ7Iuc7JeQIO2VtOuLuSDqsJLsnYQg7KCA7J6l7ZWY6rOgIOuwmO2ZmO2VqeuLiOuLpC5cbiAgICAgIGNvbnN0IHNwbGl0ID0gYmFzZS5zcGxpdChcIiwgXCIpO1xuICAgICAgY29uc3QgbmV3QmFzZSA9IG5ldyBCYXNlRG9sbChzcGxpdFswXSwgc3BsaXRbMV0pO1xuXG4gICAgICB0aGlzLmNhY2hlW2Jhc2VdID0gbmV3QmFzZTtcbiAgICAgIGNvbnNvbGUubG9nKFwi7IOI66GcIOq4sO2ajeuQnCDsnbjtmJXsnoXri4jri6QuIOygnOyekSDspJEgLi4uLi5cIik7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNhY2hlKTtcbiAgICAgIHJldHVybiBuZXdCYXNlO1xuICAgIH1cbiAgfVxufVxuXG4vKioqKioqKioqKioqKioqKiBGbHl3ZWlnaHQgKioqKioqKioqKioqKioqKiovXG5cbmNsYXNzIERvbGwge1xuICBwcml2YXRlIGluZm86IEJhc2VEb2xsO1xuICBwcml2YXRlIGNsb3RoZXM6IHN0cmluZzsgLy8g66ek67KIIOuwlOuAjOuKlCDsmLdcblxuICBjb25zdHJ1Y3RvcihpbmZvOiBCYXNlRG9sbCwgY2xvdGhlczogc3RyaW5nKSB7XG4gICAgdGhpcy5pbmZvID0gaW5mbztcbiAgICB0aGlzLmNsb3RoZXMgPSBjbG90aGVzO1xuICB9XG5cbiAgZ2V0Q2xvdGhlKCk6IHZvaWQge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICAgIGAke3RoaXMuaW5mby5jb2xvcn3snYQg6rCA7KeEICR7dGhpcy5pbmZvLnNoYXBlfeuqqOyWkeyduCDsnbjtmJXsnYQg7KCc7J6R7ZaI7Iq164uI64ukLiDsnbTrsogg7Iuc7KaM7JeQ64qUICR7dGhpcy5jbG90aGVzfSDsmLfsnYQg7J6F64+E66GdIOygnOyeke2WiOyKteuLiOuLpC4gXFxuIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYFxuICAgICk7XG4gIH1cbn1cblxuLyoqKioqKioqKioqKioqKiogQ2xpZW50ICoqKioqKioqKioqKioqKioqL1xuY29uc3QgYmFzaWNEb2xsID0gbmV3IERvbGwoRG9sbEZhY3RvcnkuZ2V0RG9sbChcIuqzsOuPjOydtCwg7ZWY7JaA7IOJXCIpLCBcIuyCsO2DgFwiKTtcbmJhc2ljRG9sbC5nZXRDbG90aGUoKTtcblxuY29uc3QgYmFzaWNEb2xsMiA9IG5ldyBEb2xsKERvbGxGYWN0b3J5LmdldERvbGwoXCLqs7Drj4zsnbQsIO2VmOyWgOyDiVwiKSwgXCLsiqTtj6zsuKBcIik7XG5iYXNpY0RvbGwyLmdldENsb3RoZSgpO1xuXG5jb25zdCBiYXNpY0RvbGwzID0gbmV3IERvbGwoXG4gIERvbGxGYWN0b3J5LmdldERvbGwoXCLqs6DslpHsnbQsIO2MjOuegOyDieqzvCDtlZjsloDsg4nsnbQg7ISe7J247IOJXCIpLFxuICBcIu2DgOy9lOyVvOuBvFwiXG4pO1xuYmFzaWNEb2xsMy5nZXRDbG90aGUoKTtcblxuY29uc3QgYmFzaWNEb2xsNCA9IG5ldyBEb2xsKFxuICBEb2xsRmFjdG9yeS5nZXREb2xsKFwi6rOg7JaR7J20LCDtjIzrnoDsg4nqs7wg7ZWY7JaA7IOJ7J20IOyEnuyduOyDiVwiKSxcbiAgXCLruajqsITsnqXqsJFcIlxuKTtcbmJhc2ljRG9sbDQuZ2V0Q2xvdGhlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=