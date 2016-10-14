///<reference path="src/Product.ts"/>
import Product = App.Product;

var p = new Product("Livro 1", "Cook Book", 150);

console.log(p);

window.onload = function () {
    document.getElementById("app").innerHTML = `
    <div>
        <ul>
            <li>${p.name}</li>
            <li>${p.desc}</li>
            <li>$${p.value}</li>
        </ul>
    </div>
    `
}