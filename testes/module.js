//Export: Possibilita ao elemento ser acessível externamente, ou seja, exportá-lo
var Class;
(function (Class) {
    var Car = (function () {
        function Car() {
        }
        return Car;
    }());
    Class.Car = Car;
})(Class || (Class = {}));
var car = new Class.Car();
//# sourceMappingURL=module.js.map