// 상속 (Inheritance)
// class => 유산으로 내려주는 주요 기능
// 부모 <=> 자식

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} says!`);
  }
}

class Dog extends Animal {
  // 부모에게서 내려받은 메서드를 재정의할 수 있음
  // overriding
  speak() {
    console.log(`${this.name} barks`);
  }
}

const satang = new Dog("satang");
satang.speak();
