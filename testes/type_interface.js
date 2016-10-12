function people(value) {
    console.log(value);
}
people({ name: "Fulano", age: 19 });
function people2(name, age) {
    return { name: name, age: age };
}
console.log(people2("Sicrano", 12));
function getColor(codColor, title) {
    if (title) {
        return { title: title, codColor: codColor };
    }
    return { codColor: codColor };
}
console.log(getColor("#0000"));
console.log(getColor("#0000", "Black"));
//# sourceMappingURL=type_interface.js.map