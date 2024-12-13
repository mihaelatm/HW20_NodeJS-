// Task 1
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
var Animal = /** @class */ (function () {
    function Animal(name, species) {
        this.name = name;
        this.species = species;
    }
    Animal.prototype.sound = function () {
        console.log("The animal makes a sound!");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, species, breed) {
        var _this = _super.call(this, name, species) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.sound = function () {
        console.log("The dog barks!");
    };
    return Dog;
}(Animal));
var animal = new Animal("Leo", "Lion");
animal.sound();
var dog = new Dog("Rex", "Dog", "German Shepherd");
dog.sound();
// Task 2
var Library = /** @class */ (function () {
    function Library() {
        Library.totalBooks++;
        console.log("Book added. Total books in the library: ".concat(Library.totalBooks));
    }
    Library.totalBooks = 0;
    return Library;
}());
var book1 = new Library();
var book2 = new Library();
var book3 = new Library();
console.log(Library.totalBooks);
// Task 4
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model) {
        this.make = make;
        this.model = model;
    }
    return Vehicle;
}());
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, type) {
        var _this = _super.call(this, make, model) || this;
        _this.type = type;
        return _this;
    }
    return Motorcycle;
}(Vehicle));
var motorcycle = new Motorcycle("Yamaha", "MT-07", "Sport");
console.log("Motorcycle - Make: ".concat(motorcycle.make, ", Model: ").concat(motorcycle.model, ", Type: ").concat(motorcycle.type));
