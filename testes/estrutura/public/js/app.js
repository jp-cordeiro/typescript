///<reference path="iProduct.ts"/>
var App;
(function (App) {
    var Product = (function () {
        function Product(name, desc, value) {
            this.name = name;
            this.desc = desc;
            this.value = value;
        }
        return Product;
    }());
    App.Product = Product;
})(App || (App = {}));
///<reference path="src/Product.ts"/>
var Product = App.Product;
var p = new Product("Livro 1", "Cook Book", 150);
console.log(p);
window.onload = function () {
    document.getElementById("app").innerHTML = "\n    <div>\n        <ul>\n            <li>" + p.name + "</li>\n            <li>" + p.desc + "</li>\n            <li>$" + p.value + "</li>\n        </ul>\n    </div>\n    ";
};
