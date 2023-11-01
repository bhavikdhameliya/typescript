// let a = 10;
// console.log(a);
// // let a= "hello";
// // console.log(a);

// Apply method
function greet(city, state) {
    return "".concat(this.name, "'s age is ").concat(this.age, " and lives in ").concat(city, ",").concat(state);
}
var person = {
    name: "Bhavik",
    age: 22
};
x = greet.apply(person, ['Surat', 'Gujarat']);
console.log(x);
