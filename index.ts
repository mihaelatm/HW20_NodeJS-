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
