// 단축 속성명: property shorthand
const name = "홍길동";
const age = 30;

// key-value => key name과 value에 해당하는 변수와 같을 때는 줄여서 쓸 수 있다.
const obj = {
  name,
  age,
};

// 전개 구문 = spread operator
// destructuring과 함께 가장 많이 사용되는 es6 문법 중 하나

// 배열
let arr = [1, 2, 3];
console.log(...arr);

let newArr = [...arr, 4];
console.log(newArr);

// 객체
let user1 = {
  name: "주사탕",
  age: 9,
};

let user2 = { ...user1 };

console.log("user1: ", user1);
console.log("user2: ", user2);

// 나머지 매개변수 (rest parameter)
function examleFunc(a, b, c, ...args) {
  console.log(a, b, c);
  console.log(args);
}
examleFunc(1, 2, 3, 4, 5, 6);

// 템플릿 리터럴 (template literal)
// 멀티 라인 지원
console.log(`hello, ${user1.name}`);
console.log(`
    hello
        123
            41

            1
`);
