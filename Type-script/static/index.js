var Duckys = /** @class */ (function () {
    function Duckys() {
        this.test = "Đoán xem nào";
    }
    Duckys.average = function (num) {
        return this.pi * num * num;
    };
    Duckys.pi = 3.14;
    return Duckys;
}());
console.log(Duckys.pi);
var tests = new Duckys;
console.log(tests.test);
console.log(Duckys.average(10));
