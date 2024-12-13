// Task 1

class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  sound() {
    console.log("The animal makes a sound!");
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, species: string, breed: string) {
    super(name, species);
    this.breed = breed;
  }
  sound() {
    console.log("The dog barks!");
  }
}

const animal = new Animal("Leo", "Lion");
animal.sound();

const dog = new Dog("Rex", "Dog", "German Shepherd");
dog.sound();

// Task 2

class Library {
  static totalBooks: number = 0;

  constructor() {
    Library.totalBooks++;
    console.log(
      `Book added. Total books in the library: ${Library.totalBooks}`
    );
  }
}

const book1 = new Library();
const book2 = new Library();
const book3 = new Library();

console.log(Library.totalBooks);

// Task 3

class Vehicle {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

class Motorcycle extends Vehicle {
  type: string;

  constructor(make: string, model: string, type: string) {
    super(make, model);
    this.type = type;
  }
}

const motorcycle = new Motorcycle("Yamaha", "MT-07", "Sport");
console.log(
  `Motorcycle - Make: ${motorcycle.make}, Model: ${motorcycle.model}, Type: ${motorcycle.type}`
);
