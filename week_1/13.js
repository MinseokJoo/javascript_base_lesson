// 객체
// 하나의 변수에 여러개의 값을 넣을 수 있다.

// 1-1. 기본적인 객체 생성 방법
let person = {
  name: "주사탕",
  age: 9,
  gender: "남성",
};

// 1-2. 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

let person1 = new Person("주민석", 24, "남자");

// 2. 접근하는 방법
person.name;

// 3. 객체 메서드(객체가 가진 여러가진 기능~)

// 3-1. Object.keys() : key를 가져오는 메서드
let keys = Object.keys(person);

// 3-2. Object.values
let values = Object.values(person);

// 3-3. Object,entries
// key와 value를 묶어 배열로 만든 배열
let entries = Object.entries(person);

// 3-4. Object.assign
// 객체 복사
let newPerson = {};
Object.assign(newPerson, person);
// Object.assign(newPerson, person, { age: 31 });
console.log(newPerson);

// 3-5. 객체 비교
// 크기가 상당히 크다 => 메모리에 저장할 때 별도의 공간에 저장
// person1 <= 별도 공간에 대한 주소
console.log(JSON.stringify(newPerson) === JSON.stringify(person));

// 3-6. 객체 병합
let personInfo1 = {
  name: "홍길동",
  age: 30,
};

let personInfo2 = {
  gender: "남자",
};

// ... : spread operate
let perfectMan = { ...personInfo1, ...personInfo2 };

console.log(perfectMan);
