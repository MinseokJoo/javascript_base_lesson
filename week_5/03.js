class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello, ${this.name}`);
  }

  myAge() {
    console.log(`내 나이는 ${this.age}살이에용`);
  }
}

const person1 = new Person("satang", 9);
person1.sayHello();
person1.myAge();
